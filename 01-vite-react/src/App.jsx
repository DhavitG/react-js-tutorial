import Chai from "./chai";
function App() {
  const username = "dhavit gandhi";
  // within {} inside return, you write final output of some JS logic, everything else keep outside the return function. eg: can't write if-else or a for loop type things

  return (
    <>
      <Chai />
      <h1>{username}</h1>
    </>
  );
}

export default App;
