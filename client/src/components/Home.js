import React, {useState} from "react";
import axios from "axios";
import { Box, Input, Textarea, Button, FormControl, FormLabel, VStack } from "@chakra-ui/react";
import Switch from "./Switch";

function Home() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [time, setTime] = useState("Never")
    let date = new Date()

    const add = () => {
      if(time === "Never") {
        date = time;
      }

      const verify = /[a-zA-Z0-9]/;
      if(verify.test(name) && name.length < 10) {
        axios.post("http://localhost:4000/post", {
          name: name,
          description: description,
          date: date.toString()
        })
        setName("")
        setDescription("")
        setTime("")
      } else {
        alert("Enter at least one letter or number.");
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
            maxWidth="30%"
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
