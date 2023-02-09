import "./App.scss";

const title = "Our JSX Basics Lesson";
// Alle diese drei Sätzte  haben das gleiche Bedeutung!
// const userOnline = Number(true);
// const userOnline = Number(1);
const userOnline = Number("1");

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
  return (
    <div className="App">
      <h1>{title}</h1>

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
    </div>
  );
}

export default App;
