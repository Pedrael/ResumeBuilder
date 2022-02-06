import logo from './logo.svg';
import React, {useState} from 'react';
import Input from './components/input/Input.jsx';
import Teaxtarea from './components/textarea/Textarea.jsx';
import './App.css';

function App() {
  const [title, setTitle] = useState("title");
  return (
    <div className="App">
      <Input
        name = "Mihail"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <Teaxtarea
        name = "textarea"
      />
    </div>
  );
}

export default App;
