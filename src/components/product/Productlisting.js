import React,{useEffect,useState} from 'react';
import Productcard from './Productcard';
import Navbarlogin from '../partials/Navbar';
import Pagination from '../partials/Pagination';
import Search from '../partials/Search';
import axios from 'axios';
import checkAuth from "../Redux/checkAuth";
import { useSelector } from "react-redux"
function Productlisting() {
  const [data,setdata]=useState();
  const [current,setcurrent]=useState('')
  const [next,setnext]=useState('');
  const [limit,setlimit]=useState('');
  const token = useSelector(store => store.auth.token.token);
  var url="userproductlisting"
  useEffect(() => {
   
            // console.log("hfgh");
            if(token)
            {
              // console.log(token)
              axios.get(`http://localhost:2000/userproductlisting`,
                {
                  headers: {
                        'Authorization': "Bearer " + token
                          }
                }).then((response) =>{
                //console.log("current",response.data.subscriptionplanstaus)
                  setdata(response.data.data1)
                  setcurrent(response.data.currentPage);
                  setnext(response.data.totalPages);
                  setlimit(response.data.limit)
                 
                }).catch ((error)=>
                {
                  console.error("There was an error fetching the movie!", error);
                }
              ) 
            }
            
                     
     
     },[token])
    //  console.log(next,"24 next",current,'current limit',limit)
     const [ dataFromChild, setDataFromChild] = useState(null);
     const [ dataFrompaginateChild, setDataFrompaginateChild] = useState(null);
     const [ datatotalFromChild, setDatatotalFromChild] = useState(null);
     const handleDataFromChild = (childdata,totalchild) => {
      setDataFromChild(childdata);
      setDatatotalFromChild(totalchild);
  }
 

  const handleDataFrompaginateChild = (childpaginatedata) => {
    setDataFrompaginateChild(childpaginatedata);
    
} 
// const handleDataFromwatchlaterChild = (childwatchlaterata) => {
//   setDataFromwatchlaterChild(childwatchlaterata);
  
//} 

// console.log("data 44",dataFromwatchlaterChild)

  return (
    <>
      <Navbarlogin />
      <div>
        <div className="container w-100 pt-4">
          <Search onDataFromChild = {handleDataFromChild}></Search>
          <Productcard data={data} searchdata={dataFromChild} paginatedata={dataFrompaginateChild} ></Productcard>
         
          <Pagination limit={limit} current={current} next={next} searchtotalpage={datatotalFromChild} url={url} onDataFrompaginateChild = {handleDataFrompaginateChild}></Pagination>
          
        </div>
      </div>
      
      
    </>
  );
}

export default checkAuth(Productlisting);
