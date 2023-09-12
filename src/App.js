import './App.scss';
import { Button } from 'react-bootstrap';
import About from './views/About';
import Contacts from './views/Contacts';
function App() {
  var username = "Ali";

  let handleClick = () => {
    console.log("OK")
  }

  return (
    <div className="app">
      Username : {username === "Ali" && "OK Ali"}
      <Button onClick={handleClick}>Click me</Button>

      <About />
      <hr />
      <Contacts />
    </div>
  );
}

export default App;
