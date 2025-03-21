import { calculateInvestmentResults } from "../util/investment.js";

export default function Result({ userInput }) {
  console.log(calculateInvestmentResults(userInput));
  return <table id="result"></table>;
}
