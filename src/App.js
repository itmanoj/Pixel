import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/Navbar';
import axios from "axios"
import { useEffect, useState } from 'react';
import{BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home';
import Saved from './components/Saved';


function App() {
const [images, setImages] = useState([])
const [search, setSearch] = useState("nature")

  const API_Key = "5ofRiFxAi8MVhyVHMMm2NAuEqzzMKLOPZe2cmkNFozMsY4jJcAK9slk4"


  useEffect(()=>{
    const fetchImage = async ()=>{
const res = await axios.get(
  `https://api.pexels.com/v1/search?query=${search}&per_page=80`
  ,{
  headers:{
    Authorization: API_Key,
  }
}

  )

 setImages(res.data.photos)

    }

    fetchImage()
  }, [search])


  
  return (
  <>
  <BrowserRouter> 
  <Navbar setSearch={setSearch}/>
  <Routes>
    <Route path='/' element={<Home images={images} />}/>
    <Route path='/saved' element={<Saved/>}/>
  </Routes>
  </BrowserRouter>

  </>
  );
}

export default App;
