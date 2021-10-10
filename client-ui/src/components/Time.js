import React from "react";
import axios from "axios";
import { Box } from "@chakra-ui/react"

export default function Time({ date, id }) {
    const message = date.substring(0, 21);

    if (Date.parse(date) <= new Date().getTime()) {
        const url = 'http://localhost:4000/delete/' + id;
        axios.delete(url);
    }
    return(
        <Box> The post expires on: {message} </Box>
    );
}