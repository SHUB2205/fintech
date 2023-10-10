import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Personal Finance Management Software</h1>
        <h2>Don't spend your hard earned money without keeping a record.</h2>
  
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Fintech</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Dashboard</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Transactions</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" aria-disabled="true">Guide</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
      </header>
    </div>
  );
}

export default App;
