import React,{useState} from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios';
function Search(props) {
  const [searchvalue, setsearchvalue] = useState(" ");
  const Searchmovie = async (e) => 
  {
    // console.log("88",searchvalue)
    e.preventDefault();
    try 
      {
        const response = await axios.post(`http://localhost:2000/userproductsearch`, {
          query:searchvalue,
        })
        props.onDataFromChild(response.data.products,response.data.totalpage);
         
      } 
      catch (error) 
      {
        console.error("There was an error fetching the user!", error);
      }
  }
  return (
    <>
    <form onSubmit={Searchmovie}>
        <div className="d-flex justify-content-end"> 
            <input type="search" name="productsearch" placeholder="enter  product name"
              className="py-2 form-control w-25"  value={searchvalue}
              onChange={(event) => setsearchvalue(event.target.value)}></input>
            <input type="submit" className="btn btn-primary" value="search"></input>  
         </div>
      </form>
    </>
  )
}

export default Search