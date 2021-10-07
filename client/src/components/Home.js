import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Box, Button, VStack, Heading, useToast } from "@chakra-ui/react";
import Switch from "./Switch";
import AddData from "./AddData";
import { ChangeContext } from "../App"


function Home() {
    const [time, setTime] = useState("Never")
    const toast = useToast();
    let date = new Date()

    const { name, description, setName, setDescription } = useContext(ChangeContext)

    useEffect(() => {
      setName("")
      setDescription("")
    }, [setDescription, setName])
  


    const add = () => {
      if(time === "Never") {
        date = time;
      }

      const verify = /[a-zA-Z0-9]/;
      if(verify.test(name) && name.length < 20) {
        axios.post("http://localhost:4000/post", {
          name: name,
          description: description,
          date: date.toString()
        })

        setName("")
        setDescription("")
        setTime("")

        toast({
          title: "Post created.",
          description: "Post was created successfully!",
          status: "success",
          duration: 10000,
          isClosable: true,
          position: "bottom-left"
        })

      } else {
        toast({
          title: "Post not created.",
          description: "Enter at least one letter or number and max 20 characters.",
          status: "error",
          duration: 10000,
          isClosable: true,
          position: "bottom-left"
        })
      }
    }

  return (
    <Box paddingY="30px">
      <Heading paddingY="25px">Create new post</Heading>
      <VStack spacing="15px" align="start">
        <AddData />
        <Switch time={time} setTime={setTime} date={date}/>
        <Button onClick={add}>Submit</Button>
      </VStack>
    </Box>
    
  );
}

export default Home;
