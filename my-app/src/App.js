import './App.css';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    {/* Passing the component with props in main app */}
    <Navbar title = "My React App" aboutText = "About"/>
    </>
  );
}

export default App;
