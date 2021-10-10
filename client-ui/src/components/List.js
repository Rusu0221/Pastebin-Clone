import React, { useState, useEffect } from "react";
import { Box, Heading, VStack, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import Time from "./Time";

export default function List({ changeProps }) {
    const [ list, setList ] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/get")
            .then((respons) => setList(respons.data))
    }, [])
    return (
        <Center>
            <VStack>
                <Heading>List of documents</Heading>
                {list.map((val, key) => {
                    return (
                    <Box key={key} border="solid" marginTop="20px" padding="10px" borderRadius="3xl" textAlign="center">
                        <Link to={"/edit:" + val._id} onClick={() => changeProps(val._id, val.name, val.description)}>
                            <Heading size="lg" color="blue.500"> {val.name} </Heading>
                        </Link>
                        <Time date={val.date} id={val._id}/>
                    </Box>
                    );
                })}
            </VStack>
        </Center>
    );
}