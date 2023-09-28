import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  return (
    <>
    {/* Passing the component with props in main app */}
    <Navbar title = "My React App" aboutText = "About"/>
    <div className="container">
      <Textform heading = "Enter the text to convert"/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
