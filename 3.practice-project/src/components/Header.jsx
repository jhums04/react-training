import investmentLogo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={investmentLogo} alt="Header logo" />
      <h1>Investment calculator</h1>
    </header>
  );
}
