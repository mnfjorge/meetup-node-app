import React from 'react';
import './App.css';
import Recipes from './components/recipes/recipes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Receitas
      </header>
      <section>
        <Recipes />
      </section>
    </div>
  );
}

export default App;
