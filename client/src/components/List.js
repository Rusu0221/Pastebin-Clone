import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Time from "./Time";
import { Box, Heading, Center, VStack } from "@chakra-ui/react";
import { ChangeContext } from "../App"

function List() {
    const [post, setPost] = useState([]);
    const { setName, setDescription, setId } = useContext(ChangeContext);

    useEffect(() => {
        axios.get("http://localhost:4000/get")
          .then((respons) => setPost(respons.data))

    }, []);

  return (
    <Center>
      <VStack>
        <Heading>List of documents</Heading>
        <Box maxWidth="800px">
          {post.map((val, key) => {
            return(
            
                <Box key={key} border="solid" marginTop="20px" padding="10px" borderRadius="3xl" textAlign="center">
                  <Link to={"/edit:" + val._id}
                    onClick={() =>{
                      setName(val.name)
                      setDescription(val.description)
                      setId(val._id)
                     }}>
                    <Heading size="lg" color="blue.500">{val.name}</Heading>
                  </Link>
                  <Time date={val.date} id={val._id}/>
                </Box>
            );
          })}
        </Box>
      </VStack>
    </Center>
    
  );
}

export default List;