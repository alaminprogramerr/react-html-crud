'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      liked: false,
      product:[]
    }; 
  }

  componentDidMount(){
    axios.get('http://localhost:5000/get-all-product')
    .then(data=>{
      this.setState({
        product:data.data
      })
      console.log(this.state.product)
    })
  }
   deleteProduct=(id)=>{
     axios.delete('http://localhost:5000/delete-product/'+id)
     .then(deleted=>{
       console.log(deleted)
       window.location.href='./products.html'
     })
     .catch(err=>{
       console.log(err)
     })
  }
  goToDetailsPage(id){
    window.location.href=`./showsPage.html?id=${id}`
  }
  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return(
      <div className="row">
        {this.state.product.map((single, i)=>{
          return(
            <div className="col-md-3" key={i}>
              <div className="card m-3 w-100 ">
                <div className="card-body">
                  <h5 className="card-title"> {single.name} </h5>
                </div>
                <img className="h-350" src={single.img}/>
                <div className="card-body d-flex">
                  <button className="btn btn-success  btn-sm" onClick={this.goToDetailsPage.bind(this, single._id)}>Details</button>
                  <button className="btn btn-danger btn-sm ml-auto" onClick={this.deleteProduct.bind(this, single._id)}>Delete</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(LikeButton), domContainer);
