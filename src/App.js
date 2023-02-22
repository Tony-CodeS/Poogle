
import { useState, useEffect } from 'react';
import './App.css';
import Landing from './pages/landing';
import Loading from './components/loading/loading';



function App() {
  const [loading, setloading] = useState(true)

  useEffect(() => {
    setTimeout(() => setloading(false), 500)
  }, [])

  return<> {loading === false?(
    <div>
  <div >
  <Landing/>
  </div>
      
    </div>
  ) : (
   <Loading/>
  )} </>
}

export default App;
