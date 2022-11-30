
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Contatti from './component/Contatti';
import Home from './component/Home';

function App() {
  return <Router>
             <Routes>
                 <Route path='/'  element={<Home />}/>
                 <Route path='/contatti'  element={<Contatti />}/>

             </Routes> 
              
         </Router>
  
}

export default App;
