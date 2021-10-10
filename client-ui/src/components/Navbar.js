import React from 'react'
import { Link } from "react-router-dom";
import { Box, Heading, Center, HStack } from '@chakra-ui/react';

export default function Navbar() {
    return (
        <Box>
            <Heading paddingLeft="20px" position="absolute" color="white"> Pastebin Clone </Heading>
            <Center height="50px" bg="blue.800">
                <HStack spacing="20px">
                    <Link  to="/"><Heading size="md" color="white"> Home </Heading></Link>
                    <Link  to="/list"><Heading size="md" color="white"> List </Heading></Link>
                </HStack>
            </Center>
        </Box>
    );
}