import React, { useState, useContext } from "react";
import { Box, Stack, Button, useToast } from "@chakra-ui/react"
import { ChangeContext } from "../App";
import AddData from "./AddData";
import Delete from "./Delete";
import axios from "axios";

function Edit() {
    const [ disabled, setDisabled ] = useState(true);
    const [ update, setUpdate ] = useState("Update");
    const { name, description, id } = useContext(ChangeContext);
    const toast = useToast();

    const updatePost = (id) => {
        if (disabled) {
            setDisabled(false);
            setUpdate("Save");
            return;
        }

        const verify = /[a-zA-Z0-9]/;
        if (verify.test(name) && name.length <= 20) {
            axios.post("http://localhost:4000/update", {
                id: id,
                name: name,
                description: description
            });

            setDisabled(true);   
            setUpdate("Update")
            toast({
                title: "Post updated.",
                description: "Post is updated.",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom-left"
            });
        } else {
            toast({
                title: "Post not updated.",
                description: "Enter at least one letter or number and max 20 characters.",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom-left"
            });
        }
    }
    
    return (
        <Box paddingY="50px">
            <Stack spacing="15px" align="start" direction="column" >
                <AddData disabled={disabled}/>
                <Stack spacing="20px" direction="row">
                    <Button onClick={() => {updatePost(id)}}> {update} </Button>
                    <Delete />
                </Stack>
            </Stack>
        </Box>
    );
}

export default Edit;