import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { useConvexAuth } from "convex/react";
import Landing from './pages/landing';
import { ProtectedRoute } from './components/ProtectedRoutes';
import { Home } from './pages/home';

function App() {
  const { isLoading, isAuthenticated } = useConvexAuth();
  
  if(isLoading){
    return(
      <div>
        I'm loading
      </div>
    )
  }

  return (
    <>
       <Router>
      <Routes>
        <Route path='/' element={<Landing isAuthenticated={isAuthenticated}/>}/>
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}/>}>
          <Route element={<Home/>} path='/home' />
        </Route>
      </Routes>
      </Router>
    </>
  )
}

export default App
