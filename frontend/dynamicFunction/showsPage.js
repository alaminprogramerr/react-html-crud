'use strict';

const e = React.createElement;

class ShowPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      liked: false,
      product:[]
    };
  }
  componentDidMount(){
    axios.get('http://localhost:5000/get-single-product/'+window.location.search.split('=')[1])
    .then(product=>{
      console.log(product.data)
      this.setState({
        product:product.data
      })
    })
    .catch(err=>{
      console.log(err)
    })
  }
  backToProducts=()=>{
    console.log('loging')
    window.location.href='./products.html'
  }
  goToEditPage(){
    window.location.href=`./EditProduct.html?id=${window.location.search.split('=')[1]}`
  }
  
  deleteProduct=()=>{
    axios.delete('http://localhost:5000/delete-product/'+window.location.search.split('=')[1])
    .then(deleted=>{
    window.location.href='./products.html'
    })
    .catch(err=>{
      console.log(err)
    })
 }
 doBuy=()=>{
   axios.get('http://localhost:5000/doBuy/'+window.location.search.split('=')[1])
   window.location.href=`./showsPage.html?id=${window.location.search.split('=')[1]}`
   
 }
  render() {

    return(
      <div className="row">
          
    <div>
        
    <div className="container tm-mt-big tm-mb-big">
        <div className="row">
          <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
            <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
              <div className="row">
                <div className="col-12">
                  <h1 className="tm-block-title d-inline-block">Product Details</h1>
                </div>
              </div>
              <div className="row tm-edit-product-row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div action="" method="post" className="tm-edit-product-form">
                    <div className="form-group mb-3 d-flex">
                        <label>Product Name : 
                        </label>
                        <h5 className="text-light" > {this.state.product.name} </h5>
                    </div>
                    <div className="form-group mb-3 ">
                      <label>Description</label>
                      <p className="text-light"> {this.state.product.description} </p>
                    </div>
                    <div className="row">
                      <div className="form-group mb-3 col-xs-12 col-sm-6">
                        <label className="form-control validate" >Product In Stock</label>
                        <p className="form-control validate"> {this.state.product.qty} </p>
                      </div>
                    </div>
                </div>
              </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mx-auto mb-4">
                    <div className="tm-product-img-edit mx-auto">
                      <img src= {this.state.product.img} className="img-fluid d-block mx-auto"/>
                      <i className="fas fa-cloud-upload-alt tm-upload-icon"></i> 
                    </div>
                    <div className="custom-file mt-3 mb-3">
                      <p className="btn btn-primary btn-block mx-auto "> {this.state.product.name} </p>
                    </div>
                  </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary mr-1 ml-1 " onClick={this.backToProducts}>Back to Product's</button>
                  <button type="submit" className="btn btn-primary mr-1 ml-1 " onClick={this.goToEditPage}>Edit Product</button>
                  
                  
                  {this.state.product.qty?
                  <button type="submit" className="btn btn-primary mr-1 ml-1 " onClick={this.doBuy}>BUY</button>:
                  <button type="submit" className="btn btn-primary mr-1 ml-1 ">Out of Stock</button>
                  }
                  <button type="submit" className="btn btn-danger mr-1 ml-1 ml-auto " onClick={this.deleteProduct}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    )
  }
}

const domContainer = document.querySelector('#shows');
ReactDOM.render(e(ShowPage), domContainer);
