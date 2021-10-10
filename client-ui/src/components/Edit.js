import React, { useState } from "react";
import { Box, Stack, Button, useToast } from "@chakra-ui/react"
import AddData from "./AddData";
import Delete from "./Delete";
import axios from "axios";


export default function Edit({ id, name, description, setName, setDescription }) {
    const [ disabled, setDisabled ] = useState(true);
    const [ update, setUpdate ] = useState("Update");
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
                <AddData 
                    disabled={disabled} 
                    name={name} 
                    description={description} 
                    setName={setName} 
                    setDescription={setDescription} 
                />
                <Stack spacing="20px" direction="row">
                    <Button onClick={() => {updatePost(id)}}> {update} </Button>
                    <Delete id={id}/>
                </Stack>
            </Stack>
        </Box>
    );
}