import './App.css';
import Header from './Header';
import Recommended from './Recommended';
import Sidebar from './Sidebar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SearchPage from './SearchPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/search/:searchItem' element={
            <>
              <div className='app_page'>
                  <Sidebar/>
                  <SearchPage/>
              </div>
            </>
          }/>

          <Route path='/*' element={
            <>
              <div className='app_page'>
                  <Sidebar/>
                  <Recommended/>
              </div>
            </>
          }/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
