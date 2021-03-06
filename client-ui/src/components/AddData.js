import React from "react";
import { Input, Textarea, FormControl, FormLabel, VStack} from "@chakra-ui/react";

function AddData({ disabled, name, description, setName, setDescription }) {
    return (
        <VStack spacing="15px" align="start">
            <FormControl isRequired>
                <FormLabel> Name of document:</FormLabel>
                <Input type="text"
                    value={name}
                    onChange={(e) => {setName(e.target.value)}} 
                    maxWidth="35%"
                    disabled={disabled}
                    title ="Enter min: 1 letter or 1 number and max: 20" 
                />
            </FormControl>
            <Textarea
                value={description}
                rows="10" cols="100" onChange={(e) => {setDescription(e.target.value)}} 
                disabled={disabled}
                placeholder="Information" 
            />
        </VStack>
    );
}

export default AddData;