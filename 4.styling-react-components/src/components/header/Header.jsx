import logo from "../../assets/logo.png";
import "./header.css";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1
        style={{
          cursor: "pointer",
        }}
      >
        ReactArt
      </h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
