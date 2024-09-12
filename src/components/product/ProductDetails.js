import React,{useEffect,useState} from 'react'
import Navbar from '../partials/Navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from "react-redux"
function ProductDetails() {
  
  const [data, SetContent] = useState()
  var [modaldata,Setdata]=useState()
var email=useSelector(store => store.auth.token.email);
    var {id} =useParams()
    useEffect(() => 
    {
      axios.get(`http://localhost:2000/userproductdetaileview/${id}`)
      .then((response) =>{
        // console.log(response.data.data,"video")
        
        SetContent(response.data.data)
      }).catch ((error)=>
        {
          console.error("There was an error fetching the movie!", error);
        })
    }, [id])
    function Addtocart(productid)
    {
     
      axios.post(`http://localhost:2000/useraddtocart`,
      {
        email,
        productid,
      })
        .then((response) =>{
         //alert(response.data)
         if(response.data.data)
          {
            Setdata(response.data.data)
          }
          
        }).catch ((error)=>
          {
            console.error("There was an error fetching the movie!", error);
          })
    }
    function Addtowishlist(productid)
    {
     
      axios.post(`http://localhost:2000/userwishlist`,
      {
        email,
        productid,
      })
        .then((response) =>{
         //alert(response.data)
         if(response.data.data)
          {
            Setdata(response.data.data)
          }
          
        }).catch ((error)=>
          {
            console.error("There was an error fetching the movie!", error);
          })
    }
    
    
  
   
  return (
    <>
    <Navbar></Navbar>
    <div >
    {(data)?data.map((content)=>
        {
        return(
    <div className="container w-100 d-flex justify-content-center">
        <div className="card w-100 pt-5 pr-5" >
            <div className="card-body">
              <div className="card-text pr-5 mr-3">
                <a href={`http://localhost:2000${content.productphoto}`} target="_blank" rel="noreferrer"><img className="float-left" src={`http://localhost:2000${content.productphoto}`} alt="Cardimage" style={{width:'40%',height:'55vh'}}/></a>
                <p style={{position: 'relative',left:'10%'}}><strong>{content.productname}</strong></p>
                <p className="pt-2" style={{position: 'relative',left:'10%'}}><strong>Price:</strong><span className="pl-3"> <strong> ₹{content.price}</strong></span></p>
                <p className="pt-2" style={{position: 'relative',left:'10%'}}><strong>Category</strong><span className="pl-3"> <strong> {content.category}</strong></span></p>
                <p className="pt-2" style={{position: 'relative',left:'10%'}}><strong>Stock</strong><span className="pl-3"><strong> {content.stock==='0'?'Out of stock':'In stock'}</strong></span></p>
                <p className="pt-2" style={{position: 'relative',left:'10%',textDecoration: 'underline'}}><strong>Description</strong></p>
                <p  style={{position: 'relative',left:'10%',textAlign: 'justify'}}><span className="pr-3"> <strong>{content.description}</strong></span></p>
                <p className="pt-2 d-flex" style={{position: 'relative',left:'10%'}}><button type='button' onClick={() => Addtocart(content._id)} className="btn btn-info btn-block mt-0" data-toggle="modal"  data-target="#myModal">Add to Cart</button>
                  <button type='button' className="btn btn-warning btn-block mt-0"  data-toggle="modal"onClick={() => Addtowishlist(content._id)}  data-target="#myModal123">Add to wishlist</button></p>
            </div> 
            </div>
          </div>
    </div>  )}
        ):null}
    </div>
    <div id="myModal" className="modal fade">
        <div className="modal-dialog modal-sm ">
            <div className="modal-content ">
                <div className="modal-header">
                    <h6 className="modal-title pl-4"><strong>{modaldata}</strong></h6>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
            </div>
        </div>
      </div>  
      <div id="myModal123" className="modal fade">
        <div className="modal-dialog modal-sm ">
            <div className="modal-content ">
                <div className="modal-header">
                    <h6 className="modal-title pl-4"><strong>{modaldata}</strong></h6>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
            </div>
        </div>
      </div> 
    </>
  )
}

export default ProductDetails