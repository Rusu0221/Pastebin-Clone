import React, {useState, createContext} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Box} from "@chakra-ui/react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import List from './components/List';
import Edit from './components/Edit';

export const ChangeContext = createContext()

function App() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Box bg="blackAlpha.100">
      <Router>
        <Navbar />
        <Container maxWidth="85%" bg="white">
          <ChangeContext.Provider value={{name, description, id, setName, setDescription, setId}} >

            <Switch>  
              <Route exact path="/"> <Home /> </Route>
              <Route path="/list"> <List /> </Route> 
              <Route path={"/edit:" + id}> 
                <Edit />
              </Route>     
            </Switch>

          </ChangeContext.Provider>
        </Container> 
      </Router>
    </Box>
  );
}

export default App;