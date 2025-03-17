export default function TabButton({ children }) {
  function handleCLick() {
    console.log("clicked");
  }
  return (
    <li>
      <button onClick={handleCLick}>{children}</button>
    </li>
  );
}
