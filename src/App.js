
import './App.css';
//import Singup from   './commponents/Singup.js'
import Login from './commponents/Login';
import { Route , Routes , Navigate } from 'react-router-dom';
import Singup from './commponents/Singup';
function App() {
  return (
    <div className='App'>
   <Routes>
    <Route path={"/login"} element={<Login />}/>
    <Route path={"/singup"} element={<Singup />}/>
    <Route path='/' element={<Navigate to="/singup" />} />
    {/* <Redirect from='/' to="/singup" /> */}
   </Routes>
    </div>
    
  );
}

export default App;
