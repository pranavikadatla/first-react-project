import React from "react";
import ReactDOM from "react-dom";
const Hello=()=>{
    let h1Style={color:"pink"}
    return(
    <h1 style={h1Style}>Hello World </h1>
    )


}


ReactDOM.render(<Hello/>,document.getElementById("root"));
