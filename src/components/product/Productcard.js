import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from 'axios';
import '../../App.css'

function Productcard(props) {
 //console.log("card 25",props.paginatedata)
var [data,Setdata]=useState()
  var email=useSelector(store => store.auth.token.email);
  var data1
  data1=props.data
   if(props.paginatedata)
   {
    data1=props.paginatedata
   }
   function Addtocart(productid)
   {
    
     axios.post(`http://localhost:2000/useraddtocart`,
     {
       email,
       productid,
     })
       .then((response) =>{
        // alert(response.data)
        if(response.data.data)
        {
          Setdata(response.data.data)
        }
        
        console.log(response.data)
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
        // alert(response.data)
        if(response.data.data)
          {
            Setdata(response.data.data)
          }
        console.log(response.data)
       }).catch ((error)=>
         {
           console.error("There was an error fetching the movie!", error);
         })
   }
   
    
 // console.log("hr",data1)
  //  console.log("co",props.changer)
  return (
    <>
    
      
          {props.searchdata?
           <div className="row mt-4">
           {props.searchdata.map((content)=>
         {
         return(
            <div className="col-lg-6 col-sm-12 py-3" key={content._Id}>
            <div className="card w-100 h-100" style={{border:'3px solid black'}} id='card'>
             
             <Link to={`/userproductdetaileview/${content._id}`}> <img className="card-img-top img-fluid" src={`http://localhost:2000${content.productphoto}`} alt="Cardimage" style={{ width: '100%',height:'39vh'}} /></Link>
              <div className="card-body d-flex flex-column p-0">
                
                
                <div className='px-2 mb-0 text-justify'>{content.productname}
                  <div className='d-flex justify-content-start py-1'><b >Price :{content.price}
                  </b>
     
                 </div></div>
                <div className="mt-auto d-flex btn-group">

            
                <button type='button' className="btn btn-info btn-block mt-0" onClick={() => Addtocart(content._id)} data-toggle="modal" data-target="#myModal">Add to Cart</button>
                  <button type='button' className="btn btn-warning btn-block mt-0" onClick={() => Addtowishlist(content._id)} data-toggle="modal" data-target="#myModal">Add to wishlist</button>
                </div>
              </div>
            </div>
          </div>
          
         )}
         )}
        </div>
          :
          <div className="row mt-4">
          {(data1)?data1.map((content)=>
        {
        return(
          <div className="col-lg-6 col-sm-12  py-3" key={content._id}>
            <div className="card  border-black w-100 h-100 " style={{border:'3px solid black'}} id='card'>
             
            <Link to={`/userproductdetaileview/${content._id}`}><img className="card-img-top img-fluid" src={`http://localhost:2000${content.productphoto}`} alt="Cardimage" style={{ width: '100%',height:'39vh'}} /></Link>
              <div className="card-body d-flex flex-column p-0">
                
                
                <div className='px-2 mb-0 text-justify'>{content.productname}
                  <div className='d-flex justify-content-start py-1'><b >Price :{content.price}
                  </b>
     
                 </div></div>
                <div className="mt-auto d-flex btn-group">

                
                <button type='button' className="btn btn-info btn-block mt-0" onClick={() => Addtocart(content._id)} data-toggle="modal" data-target="#myModal">Add to Cart</button>
                  <button type='button' className="btn btn-warning btn-block mt-0" onClick={() => Addtowishlist(content._id)} data-toggle="modal" data-target="#myModal123">Add to wishlist</button>
                </div>
              </div>
            </div>
          </div>
         
        )}
        ):null}
       </div>}
       <div id="myModal" className="modal fade">
        <div className="modal-dialog modal-sm ">
            <div className="modal-content ">
                <div className="modal-header">
                    <h6 className="modal-title pl-4"><strong>{data}</strong></h6>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
            </div>
        </div>
      </div>  
      <div id="myModal123" className="modal fade">
        <div className="modal-dialog modal-sm ">
            <div className="modal-content ">
                <div className="modal-header">
                    <h6 className="modal-title pl-4"><strong>{data}</strong></h6>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
            </div>
        </div>
      </div> 
   
           
              </>
      )
    }
         
  

export default Productcard