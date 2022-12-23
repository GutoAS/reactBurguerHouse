import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import PropagateLoader from 'react-spinners/PropagateLoader'
import './App.css'

function App() {
  const[loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
    setLoading(false)
  }, 5000);
  },[])

  return (
  <div className='App'>
    {
      loading ? <PropagateLoader color="#36d7b7" />
      :
      <>
      <Navbar />
      </>
     }
  </div>
  )
}

export default App
