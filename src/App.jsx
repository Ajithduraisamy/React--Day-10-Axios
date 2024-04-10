import './App.css'
import Create from './Components/Create'
import Read from './Components/Read'
import Update from './Components/Update'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>CRUD OPERATIONS</h2>
            <BrowserRouter>
              <Routes>
                <Route path='/create' element={<Create />}></Route>
                <Route path='/' element={<Read />}></Route>
                <Route path='/update' element={<Update />}></Route>
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
