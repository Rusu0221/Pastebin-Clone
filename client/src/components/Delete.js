import React, { useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Button, useToast } from "@chakra-ui/react"

import { ChangeContext } from "../App"


function Delete() {
    const toast = useToast();
    const { id } = useContext(ChangeContext)
    const history = useHistory()

    const deletePost = (id) => {
        const url = 'http://localhost:4000/delete/' + id;
        axios.delete(url);

        history.push("/");

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
        <Button onClick={() => {deletePost(id)}}>Delete</Button>
    );
}

export default Delete;