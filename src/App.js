import './App.css';
import Form from './components/form'

function App() {
  return (
    <div className="App">
        <header>
          <div>
            <h2 class="Tit">Personal Finance Management Software</h2>
            <br></br>
            <nav class="navigation">
                <a href="#">Home</a>
                <a href="#">Dashboard</a>
                <a href="#">Service</a>
                <button class="btnLogin-popup">Login</button>
            </nav>
          </div>

        </header>
        <Form/>
    </div>
  );
}

export default App;
