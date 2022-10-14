import Button from "./components/Button";
import NavBar from "./components/NavBar";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <NavBar>dfdfd</NavBar>

      <h1>Hello CodeSandbox</h1>
      <Button CSS="red">
        <h1>helloss</h1>
      </Button>

      <Button CSS="blue">
        <h1>helloss</h1>
        <p>this is it</p>
      </Button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
