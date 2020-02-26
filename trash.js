let product = [
    {name:"Table", description:"This is description about table product !" , image:"http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg", price:"500", qty:"56", },
    {name:"Chare", description:"This is description about chare product !" , image:"https://www.ikea.com/gb/en/images/products/ingo-table-pine__0737092_PE740877_S5.JPG?f=s", price:"500", qty:"56", },
    {name:"Mobile", description:"This is description about Mobile product !" , image:"https://www.91-img.com/pictures/133188-v4-oppo-f11-mobile-phone-large-1.jpg", price:"500", qty:"56", },
    {name:"Clock", description:"This is description about Clock product !" , image:"https://www.ikea.com/ca/en/images/products/tjalla-wall-clock__0633571_PE695905_S5.JPG?f=s", price:"500", qty:"56", }
]

const renderProducts= ()=>{
    let products = document.getElementById("#products")


    product.forEach(element => {
        
        let looper =document.createElement('div') 
            looper.className="col-md-4 col-sm-6 col-lg-4 col-xl-4"
            products.appendChild(looper)

        let card= document.createElement('div')
            card.className="card"
            card.style='width: 18rem '
            looper.appendChild(card)

        let cardBodyTop= document.createElement('div')
            cardBodyTop.className="card-body"
            card.appendChild(cardBodyTop)

        let cardTitle= document.createElement('h5') //card title
            cardTitle.innerHTML="This is card title "
            cardTitle.className="card-title"
            cardBodyTop.appendChild(cardTitle)

        let cardImage= document.createElement('img')//card image
            cardImage.src=element.image
            cardImage.className="card-img-top"
            card.appendChild(cardImage)

        let cardBodyBottom= document.createElement('div')
            cardBodyBottom.className="card-body"
            card.appendChild(cardBodyBottom)

        let cardP= document.createElement('p')
            cardP.innerHTML="This is descriptoin text  "
            cardP.className="card-text"
            cardBodyBottom.appendChild(cardP)

        let cardBtn = document.createElement('button')
            cardBtn.className="btn btn-primary"
            cardBtn.id="details"
            cardBtn.innerHTML="Details "
            card.appendChild(cardBtn)
    });
}
renderProducts()

class product {
    constructor(){
        super()
    }
    
    
}