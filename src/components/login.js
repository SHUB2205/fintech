import Form from './form.js';
import {Link} from 'react-router-dom';

function Login() {
  return (
    <div className="App">
        <header>
          <div>
            <h2 class="Tit">Personal Finance Management Software</h2>
            <br></br>
            <nav class="navigation">
                <Link to="/" class="btnLogin-popup">Home</Link>
                <Link to="/dashboard" class="btnLogin-popup">Dashboard</Link>
                <Link to="/service" class="btnLogin-popup">Service</Link>
                <Link to="/login" class="btnLogin-popup">Login</Link>
            </nav>
          </div>

        </header>
        <Form/>
    </div>
  );
}

export default Login;