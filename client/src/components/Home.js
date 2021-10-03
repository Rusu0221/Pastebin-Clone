import React, {useState} from "react";
import axios from "axios";
import Switch from "./Switch";

function Home() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [time, setTime] = useState("Never")
    let date = new Date()

    const add = () => {
      if(time === "Never") {
        date = time;
      }

      const verify = /[a-zA-Z0-9]/;
      if(verify.test(name)) {
        axios.post("http://localhost:4000/post", {
          name: name,
          description: description,
          date: date.toString()
        })
        setName("")
        setDescription("")
        setTime("")
      }
    }

  return (
    <div>
      <h1>Pastebin Clone</h1>
      <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} placeholder="Name of doc" />
      <br/><br/>
      <textarea value={description} rows="10" cols="100" onChange={(e) => {setDescription(e.target.value)}} placeholder="Information" />
      
      <Switch time={time} setTime={setTime} date={date}/>
      <br />
      <button onClick={add}>Submit</button>
      
    </div>
    
  );
}

export default Home;