import { useState } from "react";
import "./App.scss";

const title = "Our JSX Basics Lesson";
// Alle diese drei Sätzte  haben das gleiche Bedeutung!
// const userOnline = Number(true);
// const userOnline = Number(1);
// const userOnline = Number("0");

// Alle diese drei Sätzte  haben das gleiche Bedeutung!
// const userOnline = Number(false);
// const userOnline = Number(0);
// const userOnline = Number("0");

const a = 1;
const b = 2;

if (a === 1 && b === 2) {
  // {<div>{a === b}</div>};
  // <p>a=b</p>;
  console.log("a = b");
}

function App() {
  const [userOnline, setUserOnline] = useState(true);
  return (
    <div className="App">
      <h1>{title}</h1>

      <form action="">
        password: <input type="text" />
      </form>
      {/* Strange if Statement */}
      {userOnline && <div>User is Online!</div>}
      {/* <p>Test</p> */}
      <hr />

      {/* Ternary  strange if-else Statement: */}
      {userOnline ? (
        <div>User doesn't need to login!</div>
      ) : (
        <div>User needs to login</div>
      )}

      <hr />
      {userOnline && <div>secret password: 345345</div>}

      {userOnline? <div className="info">Information </div> : <div className="info-offline">Information </div>}
      <hr />
    </div>
  );
}

export default App;
