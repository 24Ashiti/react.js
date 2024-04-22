import './App.css';
import Card from './componats/Card';
import Nested from './componats/Nested';
import TodoList from './componats/Task-1';
import TodoList2 from './Task-2';
import TodoList3 from './Task-3';

function App() {
  return (
    <>
    <Nested/>
    <Card/>
    <TodoList/>
    <TodoList2/>
    <TodoList3/>
  </>
  );
}

export default App;
