import "./App.scss";

const title = "Our JSX Basics Lesson";
const userOnline = true;

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
      {userOnline && <div>User is Online!</div>}
      <p>Test</p>
    </div>
  );
}

export default App;
