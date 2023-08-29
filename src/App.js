import './App.css';
import Profile from './components/Profile';
import {UserProfile} from './components/UserProfile';
import TodoList from './components/test';

function App() {
  return (
    <div>
      <Profile />
      <hr />
      <hr />
      <UserProfile />
      <hr />
      <TodoList />
    </div>
  );
}

export default App;
