
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Camere from './component/Camere';
import Contatti from './component/Contatti';
import Home from './component/Home';

function App() {
  return <Router>
             <Routes>
                 <Route path='/'  element={<Home />}/>
                 <Route path='/camere'  element={<Camere />}/>
                 <Route path='/contatti'  element={<Contatti />}/>

             </Routes> 
              
         </Router>
  
}

export default App;
