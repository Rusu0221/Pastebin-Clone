import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Box} from "@chakra-ui/react";
import React, {useState} from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import List from './components/List';
import Edit from './components/Edit';

function App() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Box bg="blackAlpha.100">
      <Router>
        <Navbar />
        <Container maxWidth="85%" bg="white">
          <Switch>  
            <Route exact path="/"> <Home /> </Route>
            <Route path="/list"> 
              <List changeProps={(id, name, description) => {
                setId(id) 
                setName(name)
                setDescription(description)
              }} /> 
            </Route> 
            <Route path={"/edit:" + id}> 
              <Edit id={id} name={name} description={description} /> 
            </Route>     
          </Switch>
        </Container> 
      </Router>
    </Box>
  );
}

export default App;
