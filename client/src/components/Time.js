import React from "react";
import axios from "axios";
import { Box } from "@chakra-ui/react"

function Time(props) {
    const message = props.date.substring(0, 21);

    if (Date.parse(props.date) <= new Date().getTime()) {
        const url = 'http://localhost:4000/delete/' + props.id;
        axios.delete(url);
    }
    return(
        <Box >
            <Box as="h3">The post expires on: {message}</Box>
        </Box>
    );
}

export default Time;