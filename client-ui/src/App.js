import React, { useState } from 'react';
import { ChakraProvider, Box, Container } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import List from './components/List';
import Edit from './components/Edit';

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
   
  return (
    <ChakraProvider>
      <Box bg="blackAlpha.100">
        <Router>
          <Navbar />
          <Container maxWidth="85%" bg="white">
              <Switch>  
                <Route exact path="/"> 
                  <Home /> 
                </Route>

                <Route path="/list"> 
                  <List changeProps={(id, name, description) => {
                    setId(id)
                    setName(name)
                    setDescription(description)
                  }}/> 
                </Route>

                <Route path={"/edit:" + id}> 
                  <Edit id={id} name={name} description={description} setName={setName} setDescription={setDescription} /> 
                </Route>
              </Switch>
          </Container> 
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
