module.exports= {
    productCreate(product){
        console.log(product)
        let err= {}
        if(!product.name){
            err.name="Name required !!"
        }
        if(!product.description){
            err.description="Description required !!"
        }
        if(!product.img){
            err.img="Image Link  required !!"
        }
        if(!product.price){
            err.price="Price required !!"
        }
        if(!product.qty){
            err.qty="Quantity required !!"
        }
        return {
            isValid:Object.keys(err).length===0,
            err:err
        }
    }
}