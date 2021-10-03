import React from "react";
import axios from "axios";

function Time(props) {
    const message = props.date.substring(0, 21);

    if (Date.parse(props.date) <= new Date().getTime()) {
        const url = 'http://localhost:4000/delete/' + props.id;
        axios.delete(url);
    }
    return(
        <div>
            <p><strong>The post expires on: </strong>{message}</p>
        </div>
    );
}

export default Time;