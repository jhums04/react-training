import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1600,
    expectedReturn: 2,
    duration: 10,
  });

  return (
    <>
      <Header />
      <UserInput userInput={userInput} setUserInput={setUserInput} />
      <Result userInput={userInput} />
    </>
  );
}

export default App;
