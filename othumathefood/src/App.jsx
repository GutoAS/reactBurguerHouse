import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import PropagateLoader from 'react-spinners/PropagateLoader'
import './App.css'
import Header from './components/Header';

function App() {
  const[loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
    setLoading(false)
  }, 2000);
  },[])

  return (
  <div className='App'>
    {
      loading ? <PropagateLoader color="#3d2514" loading={loading}  cssOverride ={{ display: "block", "border-color" : "red", "margin-top": "20%"}} size={40}/>
      :
      <>
      <Navbar />
      <Header />
      </>
     }
  </div>
  )
}

export default App
