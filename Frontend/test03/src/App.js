import logo from './logo.svg';
import './App.css';
import { Routes , Route} from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import AddTodo from './components/AddTodo';
import DisplayTodo from './components/DisplayTodo';


function App() {
  return (
    <div className="App">
       <Routes>
       <Route path='register-form' element={<RegisterForm/>}/>
       <Route path='login-form' element={<LoginForm/>}/>
       <Route path='add-todo' element={<AddTodo/>}/>
       <Route path='display-todo' element={<DisplayTodo/>}/>
       </Routes>
    </div>
  );
}

export default App;
