import React from "react";
import { useHistory } from "react-router-dom";
import { Button, useToast } from "@chakra-ui/react";
import axios from "axios";

export default function Delete({ id }) {
    const toast = useToast();
    const history = useHistory();

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