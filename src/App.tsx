import Header from './Header';
import { Outlet } from "react-router-dom";
import './styles/App.css';

const App = () => {

  return (
    <div id="app">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
