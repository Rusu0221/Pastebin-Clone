import React from "react";
import { Select, Box } from "@chakra-ui/react";

export default function Switch({ time, setTime, date }) {
    switch(time) {
        case "10 min":
          date.setMinutes(date.getMinutes() + 10)
          break
        case "30 min" : 
          date.setMinutes(date.getMinutes() + 30)
          break
        case "1 hours":
          date.setHours(date.getHours() + 1)
          break
        case "1 day":
          date.setHours(date.getHours() + 24)
          break
        case "1 week":
          date.setHours(date.getHours() + 168)
          break
        case "1 mounth":
          date.setMonth(date.getMonth() + 1)
          break
        case "1 year":
          date.setMonth(date.getMonth() + 12)
          break
        default:
          break
        }
    return (
        <Box width="20%">
            <Select value={time} onChange={(e) => {setTime(e.target.value)}}>
                <option value="never"> Never </option>
                <option value="10 min" > 10 Minutes </option>
                <option value="30 min" > 30 Minutes </option>
                <option value="1 hours" > 1 Hours </option>
                <option value="1 day" > 1 Day </option>
                <option value="1 week" > 1 Week </option>
                <option value="1 mounth" > 1 Mounth </option>
                <option value="1 year" > 1 Year </option>
            </Select>
        </Box>
    );
}