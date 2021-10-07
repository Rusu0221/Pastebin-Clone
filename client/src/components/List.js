import React, { useState, useEffect, useContext } from "react";
import { Box, Heading, Center, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChangeContext } from "../App"
import Time from "./Time";
import axios from "axios";


function List() {
  const [ post, setPost] = useState([]);
  const { setName, setDescription, setId } = useContext(ChangeContext);

  const setParameters = (id, name, description) => {
    setId(id);
    setName(name);
    setDescription(description);
  }

  useEffect(() => {
      axios.get("http://localhost:4000/get")
        .then((respons) => setPost(respons.data));
  }, []);

  return (
    <Center>
      <VStack>
        <Heading>List of documents</Heading>
        <Box maxWidth="800px">
          {post.map((val, key) => {
            return (
              <Box key={key} border="solid" marginTop="20px" padding="10px" borderRadius="3xl" textAlign="center">
                <Link to={"/edit:" + val._id} onClick={() => setParameters(val._id, val.name, val.description)}>
                  <Heading size="lg" color="blue.500"> {val.name} </Heading>
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