import './App.css';
import Nav from './components/Nav';
import Form from './components/Form';
import Footer from './components/Footer';
import Vents from './components/Vents';

function App() {
  return (
    <div className="App">
      <Nav />
      <Form />
      <Vents />
      <Footer />
    </div>
  );
}

export default App;
