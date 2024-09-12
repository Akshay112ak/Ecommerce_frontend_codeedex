import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from "react-redux";
function Pagination(props) {
  const [current, setcurrent] = useState(1);
  const token = useSelector(store => store.auth.token.token);

  function Previous() {
    if (current > 1) {
      const prevPage = current - 1;
      setcurrent(prevPage);

      fetchPageData(prevPage);
    }
  }

  function Next() {
    const nextPage = current + 1;
    setcurrent(nextPage);

    fetchPageData(nextPage);
  }

  function fetchPageData(page) {
    axios.get(`http://localhost:2000/${props.url}?page=${page}&limit=${props.limit}`, {
      headers: {
        'Authorization': "Bearer " + token
      }
    })
      .then((response) => {
        props.onDataFrompaginateChild(response.data.data1);
      })
      .catch((error) => {
        console.error("There was an error fetching the paginated data!", error);
      });
  }

  return (
    <ul className="pagination justify-content-end mt-2 mb-0">
      {current > 1 &&
        <li className="page-item">
          <button className="page-link" onClick={Previous} style={{ border: '3px solid black' }}>Previous</button>
        </li>
      }
      <li className="page-item">
        <button className="page-link" style={{ border: '3px solid black' }}>{current}</button>
      </li>
      {(!props.searchtotalpage ? current < props.next : current < props.searchtotalpage) &&
        <li className="page-item">
          <button className="page-link" onClick={Next} style={{ border: '3px solid black' }}>Next</button>
        </li>
      }
    </ul>
  );
}
export default Pagination