import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Edit(props) {
    const [name, setName] = useState(props.name);
    const [description, setDescription] = useState(props.description);
    const [disabled, setDisabled] = useState(true);
    const [update, setUpdate] = useState("Update");

    const updatePost = (id) => {
        if(disabled) {
            setDisabled(false);
            setUpdate("Save");
            return;
        }

        const verify = /[a-zA-Z0-9]/;
        if(verify.test(name)){
        axios.put("http://localhost:4000/put", {
            id: id,
            name: name,
            description: description
        })

        setDisabled(true);   
        setUpdate("Update")
        } else {
            alert("Enter at least one letter or number.");
        }
    }

    const deletePost = (id) => {
        const url = 'http://localhost:4000/delete/' + id;
        axios.delete(url);
    };
    

    return(
        <div>
            <input value={name} onChange={(e) => {setName(e.target.value)}} disabled={disabled} />
            <br /> <br />
            <textarea value={description} rows="10" cols="100" onChange={(e) => {setDescription(e.target.value)}} disabled={disabled} />
            <br />
            <button onClick={() => {updatePost(props.id)}}>{update}</button>
            <button onClick={() => {deletePost(props.id)}}><Link to="/"> Delete </Link></button>
        </div>
    )
}

export default Edit;