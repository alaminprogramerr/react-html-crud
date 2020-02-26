const productModel = require ('../model/productModel')
const {productCreate}= require('../validator')


module.exports = { 
    // for create a  product
    createProduct(req, res){
        let verify =productCreate(req.body)
        if(!verify.isValid){
            return res.status(400).json(verify.err)
        }
        new productModel({
            name: req.body.name,
            description: req.body.description,
            img: req.body.img,
            price: req.body.price,
            qty: req.body.qty
        }).save()
        .then(product=>{
            console.log(product)
            res.status(200).json({massage:"Product Created !", product})
        })
        .catch(err=>{
            console.log(err)
            return res.status(500).json({massage:"Server error !!"})
        })
    },
    // do buy
    doBuy(req, res){
        productModel.findByIdAndUpdate(req.params.id)
        .then(product=>{
            if(product.qty==0){
                console.log('lakjflkajdsf')

            }
            
            product.qty=product.qty-1
            product.save()
            .then(buyed=>{
                res.status(200).json({massage:"Product Buy complete !", buyed})
            })
            
            .catch(err=>{
                console.log(err)
                return res.status(500).json({massage:"Server error occurd "})
            })
        })
        .catch(err=>{
            console.log(err)
            return res.status(500).json({massage:"Server error occurd "})
        })
    },
    //get all product
    getAllProduct(req, res){
        productModel.find()
        .then(products=>{
            return res.status(200).json(products)
        })
        .catch(err=>{
            console.log(err)
            return res.status(500).json({massage:"Server error !!"})
        })
    },
    // for update  a single product by id 
    updateProduct(req, res){
        console.log(req.body)
        productModel.findByIdAndUpdate(req.params.id)
        .then(product=>{
            product.name=req.body.name,
            product.description=req.body.description,
            product.img=req.body.img,
            product.price=req.body.price
            product.qty= req.body.qty
            product.save()
            .then(product=>{
                console.log(product)
                res.status(200).json({massage:"Update Success !!" ,product})
            })
            .catch(err=>{
                console.log(err)
                res.status(500).json({massage:"server error !"})
            })
        })
    },
    // for delete  a single product by id 
    deleteProduct(req, res){
        productModel.findByIdAndDelete(req.params.id)
        .then(deleted=>{
            if(!deleted){
                res.status(400).json({massage:"Product not found !!"})
            }
            console.log(deleted)
            res.status(200).json({massage:"Product deleted success !!"})
        })
        .catch(err=>{
            console.log(err)
            return res.status(500).json({massage:"server error !!"})
        })
    },
    getProductInfo(req, res){
        productModel.find()
        .then(product=>{
            let count=0
            product.forEach(element=>{
                count++
            })
            res.status(200).json({massage:"All Product " , count})
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json({massage:"Server error !!"})
        })

    },
    welcome(req, res){
        res.json({massage:"welcome"})
    },
    getSingleProduct(req, res){
        productModel.findById(req.params.id)
        .then(product=>{
            return res.status(200).json(product)
        })
        .catch(err=>{
            console.log(err)
            return res.status(500).json({massage:"Sever error"})
        })
    }
}