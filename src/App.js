import React from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id='page-title' className='title'>Wombat Coffee Roasters</h1>
        <nav>
          <ul className='nav'>
            <li><a href="/">Home</a></li>
            <li><a href="/coffees">Coffees</a></li>
            <li><a href="/brewers">Brewers</a></li>
            <li><a href="/specials" className="featured">Specials</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <body>
          We love coffee
          <p className="slogan">We love coffee</p>
        </body>
        <p>
          Be sure to check out
          <a href="/specials" className="featured"> our specials</a>.
        </p>
        <span className="box box-small">Small</span>
        <span className="box box-large">Large</span>
      </main>
      <footer className="footer">
        &copy; 2021 Wombat Coffer Roasters &mdash;
        <a href="/terms-of-use">Terms of use</a>
      </footer>
    </div>
  );
}

export default App;
