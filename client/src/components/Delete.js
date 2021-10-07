import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button, useToast } from "@chakra-ui/react";
import { ChangeContext } from "../App";
import axios from "axios";


function Delete() {
    const toast = useToast();
    const history = useHistory();
    const { id } = useContext(ChangeContext);

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
        });
        history.push("/");
    };
    
    return (
        <Button onClick={() => {deletePost(id)}}> Delete </Button>
    );
}

export default Delete;