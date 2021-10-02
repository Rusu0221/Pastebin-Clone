import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Time from "./Time";

function List(props) {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/get")
          .then((respons) => setPost(respons.data))

    }, []);

  return (
    <div>
      <h3>List of documents</h3>
      <hr />
      {post.map((val, key) => {
        return(
          <div key={key}>
            <Link to={"/edit:" + val._id} onClick={() => { props.changeProps(val._id, val.name, val.description) }}><h2>{val.name}</h2></Link>     
            <Time date={val.date} id={val._id}/>
            <hr />
          </div>
          
        );
      })}
    </div>
    
  );
}

export default List;