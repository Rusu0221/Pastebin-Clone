import React, {useState} from "react";
import axios from "axios";
import { Box, Input, Textarea, Button, FormControl, FormLabel, VStack, useToast } from "@chakra-ui/react";
import Switch from "./Switch";

function Home() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [time, setTime] = useState("Never")
    const toast = useToast();
    let date = new Date()

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
    <Box paddingY="50px">
      <VStack spacing="15px" align="start">
        <FormControl isRequired>
          <FormLabel>Name of document:</FormLabel>
          <Input 
            type="text" 
            value={name} 
            onChange={(e) => {setName(e.target.value)}} 
            maxWidth="35%"
            placeholder="Enter min: 1 letter or 1 number and max: 20" 
          />
        </FormControl>

        <Textarea 
          value={description} 
          rows="10" cols="100" onChange={(e) => {setDescription(e.target.value)}} 
          placeholder="Information" 
        />
        <Switch time={time} setTime={setTime} date={date}/>

        <Button onClick={add}>Submit</Button>

      </VStack>
    </Box>
    
  );
}

export default Home;
