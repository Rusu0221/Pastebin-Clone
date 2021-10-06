import React, { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Box, Input, Textarea, Stack, Button, useToast } from "@chakra-ui/react"

import { ChangeContext } from "../App"


function Edit() {
    const [disabled ,setDisabled] = useState(true);
    const [update, setUpdate] = useState("Update");
    const toast = useToast();

    const { name, description, id, setName, setDescription } = useContext(ChangeContext)

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

            toast({
                title: "Post updated.",
                description: "Post is updated.",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom-left"
              })


        } else {
            toast({
                title: "Post not updated.",
                description: "Enter at least one letter or number and max 20 characters.",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom-left"
              })
        }
    }

    const deletePost = (id) => {
        const url = 'http://localhost:4000/delete/' + id;
        axios.delete(url);

        toast({
            title: "Post deleted.",
            description: "Post was deleted successfully!",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "bottom-left"
          })
    };
    
    return(
        <Box paddingY="50px">
            <Stack spacing="15px" align="start" direction="column" >
            <Input 
                type="text" 
                value={name} 
                onChange={(e) => {setName(e.target.value)}} 
                maxWidth="35%"
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
                <Button onClick={() => {updatePost(id)}}>{update}</Button>
                <Button onClick={() => {deletePost(id)}}><Link to="/"> Delete </Link></Button>
            </Stack>
            </Stack>
        </Box>
    )
}

export default Edit;