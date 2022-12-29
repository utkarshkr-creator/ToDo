
import './App.css';
import Todo from './todo/Todo';
import { hot } from 'react-hot-loader';
function App() {
  return (
    <div className="App">
      <Todo/>
    </div>
  );
}

export default hot(module)(App);