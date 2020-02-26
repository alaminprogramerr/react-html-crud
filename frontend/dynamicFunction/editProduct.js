'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      liked: false,
      product:{}
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
  submitHandler=(event)=>{
    event.preventDefault()
    console.log(this.state.product)
    axios.post('http://localhost:5000/update-product/'+window.location.search.split('=')[1], {...this.state.product})
    .then(product=>{
      console.log(product)
    window.location.href=`./ShowsPage.html?id=${window.location.search.split('=')[1]}`
    })
    .catch(err=>{
      console.log(err)
    })
  }
  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return(
      <div className=" col-md-6 offset-md-3 mt-5">
          <div className="card ">
              <div className="card-body">
                <h3 className="card-title text-center">Edit  Product</h3>
              </div>
                <div>
                    <div className="card-body">
                        <form>
                            <div className="form-grup">
                                <label>Enter Product name</label>
                                <input defaultValue={this.state.product.name} onChange={(event)=>this.state.product.name=event.target.value} className="form-control" placeholder="Enter your name " />
                            </div>
                            <div className="form-grup">
                                <label>Enter Description</label>
                                <textarea rows="3" onChange={(event)=>this.state.product.description=event.target.value}  defaultValue={this.state.product.description} className="form-control" placeholder="Enter description " />
                            </div>
                            <div className="form-grup">
                                <label>Enter your image link</label>
                                <input defaultValue={this.state.product.img} onChange={(event)=>this.state.product.img=event.target.value}  className="form-control" placeholder="Enter link " />
                            </div>
                            <div className="form-grup">
                                <label>Enter Price</label>
                                <input  defaultValue={this.state.product.price} onChange={(event)=>this.state.product.price=event.target.value}  className="form-control" placeholder="Enter price " />
                            </div>
                            <div className="form-grup">
                                <label>Enter quantity</label>
                                <input  className="form-control" onChange={(event)=>this.state.product.qty=event.target.value}  defaultValue={this.state.product.qty} placeholder="Enter price " />
                            </div>
                            <button className="btn btn-info mt-3" onClick={this.submitHandler}>Update </button>
                        </form>
                    </div>
                </div>
          </div>
      </div>
    )
  }
}

const domContainer = document.querySelector('#filed');
ReactDOM.render(e(LikeButton), domContainer);
