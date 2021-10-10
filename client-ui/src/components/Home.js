import React, { useState } from "react";
import { Box, Button, VStack, Heading, useToast } from "@chakra-ui/react";
import AddData from "./AddData";
import Switch from "./Switch";
import axios from "axios";

export default function Home() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [time, setTime] = useState("Never");
    const toast = useToast();
    let date = new Date()

    const add = () => {
        if (time === "Never") {
            date = time;
        }

        const verify = /[a-zA-Z0-9]/;
        if (verify.test(name) && name.length <= 20) {
            axios.post("http://localhost:4000/post", {
                name: name,
                description: description,
                date: date.toString()
            });

            setName("")
            setDescription("")
            setTime("")
            toast({
                title: "Post created.",
                description: "Post was created successfully!",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom-left"
            })
        } else {
            toast({
                title: "Post not created.",
                description: "Enter at least one letter or number and max 20 characters.",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom-left"
            })
        }
    }
    return (
        <Box paddingY="30px">
            <Heading paddingY="25px">Create new post</Heading>
            <VStack spacing="15px" align="start">
                <AddData 
                    name={name} 
                    description={description} 
                    setName={setName} 
                    setDescription={setDescription}
                />
                <Switch 
                    time={time} 
                    setTime={setTime} 
                    date={date}
                />
                <Button onClick={add}>Submit</Button>
            </VStack>
        </Box>
    );
}