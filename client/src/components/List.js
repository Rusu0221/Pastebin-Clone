import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Time from "./Time";
import { Heading, Center, VStack } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";

function List(props) {
    const [post, setPost] = useState([]);

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
              <div key={key}>
                <Box border="solid" marginTop="20px" padding="10px" borderRadius="3xl" textAlign="center">
                  <Link to={"/edit:" + val._id} 
                    onClick={() => { props.changeProps(val._id, val.name, val.description) }} >
                      <Heading size="lg" color="blue.500" >{val.name}</Heading>
                    </Link>     
                  <Time date={val.date} id={val._id}/>
                </Box>
              </div>
              
            );
          })}
        </Box>
      </VStack>
    </Center>
    
  );
}

export default List;