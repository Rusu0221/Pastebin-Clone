import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
    <div className="App">
      <Router>
        <div>
          <Navbar />
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
              <Edit id={id} name={name} description={description}s /> 
            </Route>
          </Switch>
        </div>
      </Router>
    </div> 
  );
}

export default App;
