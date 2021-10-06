import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Box, Input, Textarea, Stack, Button } from "@chakra-ui/react"

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
        <Box paddingY="50px">
            <Stack spacing="15px" align="start" direction="column" >
            <Input 
                type="text" 
                value={name} 
                onChange={(e) => {setName(e.target.value)}} 
                maxWidth="30%"
                placeholder="Enter min: 1 letter or 1 number and max: 20" 
                disabled={disabled} 
            />
            <Textarea 
                value={description} 
                rows="10" 
                cols="100" 
                onChange={(e) => {setDescription(e.target.value)}} 
                placeholder="Information" 
                disabled={disabled} 
            />
            <Stack spacing="20px" direction="row">
                <Button onClick={() => {updatePost(props.id)}}>{update}</Button>
                <Button onClick={() => {deletePost(props.id)}}><Link to="/"> Delete </Link></Button>
            </Stack>
            </Stack>
        </Box>
    )
}

export default Edit;