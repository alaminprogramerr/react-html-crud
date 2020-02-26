'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      liked: false,
      product:{},
      err:{}
    };
  }
  createProduct=(event)=>{
    event.preventDefault()


    axios.post('http://localhost:5000/create-product', {...this.state.product})
    .then(created=>{
      console.log(created)
      window.location.href="./products.html"
    })
    .catch(err=>{
      this.setState({
        err:err.response.data
      })
      console.log(err.response.data)
    })
    console.log(this.state.product)
  }
  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return(
      <div className=" col-md-6 offset-md-3 mt-5">
          <div className="card ">
              <div className="card-body">
                <h3 className="card-title text-center"> Create new Product</h3>
              </div>
                <div>
                    <div className="card-body">
                        <form>
                            <div className="form-grup">
                                <label>Enter your name</label>
                                <input onChange={(event)=>this.state.product.name=event.target.value}   className="form-control" placeholder="Enter your name " />
                                <p className="text-danger"> {this.state.err.name? this.state.err.name:""} </p>
                            </div>
                            <div className="form-grup">
                                <label>Enter Description</label>
                                <textarea rows="3" onChange={(event)=>this.state.product.description=event.target.value} className="form-control" placeholder="Enter description " />
                                <p className="text-danger"> {this.state.err.description? this.state.err.description:""} </p>

                            </div>
                            <div className="form-grup">
                                <label>Enter your image link</label>
                                <input  className="form-control" onChange={(event)=>this.state.product.img=event.target.value} placeholder="Enter link " />
                                <p className="text-danger"> {this.state.err.img? this.state.err.img:""} </p>

                            </div>
                            <div className="form-grup">
                                <label>Enter Price</label>
                                <input  className="form-control" onChange={(event)=>this.state.product.price=event.target.value} placeholder="Enter price " />
                                <p className="text-danger"> {this.state.err.price? this.state.err.price:""} </p>

                            </div>
                            <div className="form-grup">
                                <label>Enter quantity</label>
                                <input  className="form-control" onChange={(event)=>this.state.product.qty=event.target.value} placeholder="Enter price " />
                                <p className="text-danger"> {this.state.err.qty? this.state.err.qty:""} </p>

                            </div>
                            <button className="btn btn-info mt-3" onClick={this.createProduct}>Create </button>
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
