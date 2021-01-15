import React from "react";
import 'materialize-css/dist/css/materialize.min.css'

import './App.css';
import { Nav } from './components/nav'
import { Post } from './components/post'
function App() {
  return (
    <div className="App">
        <Nav />
        <Post />
    </div>
  );
}
export default App;
