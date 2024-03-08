import DisplaySection from "./components/DisplaySection";
import Jumbotron from "./components/Jumbotron";
import SoundSection from "./components/SoundSection";
import WebGiViewer from "./components/WebGiViewer";
import Nav from "./components/Nav";

function App() {

  return (
    <div className="App">
      <Nav/>
      <Jumbotron/>
      <SoundSection/>
      <DisplaySection/>
      <WebGiViewer/>
    </div>
  );
}

export default App;
