import Board from "./components/Board/Board";
import Start from "./components/Start/Start";
import './App.css';
import { Modal } from "./components/modal/modal";

function App() {
  return (
    <div className="App">
      <div className="container">

        {/* <Start /> */}
        <Board />
        </div>
      <Modal />
    </div>

  );
}

export default App;
