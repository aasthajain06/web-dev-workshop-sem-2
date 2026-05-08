// import React from "react";  

// function UseState() {
//     const [counter, setCounter] = React.useState(0)
    
//     const increment = () => setCounter(counter + 1);
//     const decrement = () => setCounter(counter - 1);
//     const reset = () => setCounter(0);
    
//     return(
//         <>
//         <h1>{counter}</h1>
//         <button onClick={increment} style={{width: '200px', backgroundColor:'blue'}}>+</button>
//         <button onClick={decrement} style={{width: '200px', backgroundColor:'red'}}>-</button>
//         <button onClick={reset} style={{width: '200px', backgroundColor:'green'}}>Reset</button>
//         </>
//     )
// }
// export default UseState;

import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f2f2f2"
    }}>
      
      <div style={{
        border: "1px solid #ccc",
        padding: "30px",
        borderRadius: "12px",
        textAlign: "center",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
        backgroundColor: "white",
        width: "300px"
      }}>
        
        <h2>React Counter Application</h2>

        <h1>{count}</h1>

        <div style={{ marginTop: "20px" }}>
          
          <button
            onClick={() => setCount(count + 1)}
            style={{
              padding: "8px 12px",
              margin: "5px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Increment (+)
          </button>

          <button
            onClick={() => setCount(count - 1)}
            style={{
              padding: "8px 12px",
              margin: "5px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Decrement (-)
          </button>

          <br />

          <button
            onClick={() => setCount(0)}
            style={{
              padding: "8px 12px",
              marginTop: "10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Reset
          </button>

        </div>
      </div>

    </div>
  );
}

export default App;