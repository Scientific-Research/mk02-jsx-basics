import { useState } from "react";
import "./App.scss";
import Techbooks from "./data/techbooks.json";

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

const Password = "123";

function App() {
  const [userOnline, setUserOnline] = useState(false);
  const [thePassword, setThePassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    thePassword === Password ? setUserOnline(true) : setUserOnline(false);
  };

  return (
    <>
      <div className="App">
        <h1>{title}</h1>
        <form>
          password:
          <input
            type="text"
            onChange={(e) => setThePassword(e.target.value)}
            value={thePassword}
          />
          {/* {thePassword} */}
          <button onClick={handleLogin}>Login</button>
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
        {/* {userOnline && <div>secret password: 345345</div>}
        {userOnline ? (
          <div className="info-online">file Exists! </div>
        ) : (
          <div className="info-offline">file Deleted! </div>
        )} */}
        <hr />
        <h1>There are {Techbooks.length} books:</h1>
        {Techbooks.filter((tcb) => tcb.title.includes("Linux")).map((tb) => (
          <ul key={tb.id}>
            <li>{tb.title}</li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default App;
