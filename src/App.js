import './App.css';
import './styele.css';
import Navbar from './Components/Navbar';
import Myform from './FORM';

function App() {
  return (
    <div id="centreMe">
      <Navbar title="Pratiks Home" about="About Pratik" />
      <br /><Navbar title="Prachis Home" about="About Prachi" />
      <Myform></Myform>
    </div>
  );
}

export default App;
