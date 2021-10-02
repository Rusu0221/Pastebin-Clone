import React, {useState} from "react";
import axios from "axios";

function Home() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [time, setTime] = useState("")

    const add = () => {
      const date = new Date();
      date.setMinutes(date.getMinutes() + parseInt(time))

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
      <br/>
      {/*<input type="datetime-local" onChange={(e) => {setTime(e.target.value)}} />*/}
      <br/>
      
      <select value={time} onChange={(e) => {setTime(e.target.value)}}>
        <option value={0}>Never</option>
        <option value={10} >10 Minutes</option>
        <option value={30} >30 Minutes</option>
        <option value={60} >1 hours</option>
        <option value={60 * 24} >1 Day</option>
        <option value={60 * 24 * 7} >1 Week</option>
        <option value={60 * 24 * 30} >1 Mounth</option>
        <option value={60 * 24 * 30 * 12} >1 Year</option>
      </select>
      
      <br /><br/>
      <button onClick={add}>Submit</button>
      
    </div>
    
  );
}

export default Home;