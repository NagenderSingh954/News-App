import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { NewsServices } from './services/NewsServices'
import './App.css'

function App() {
  const [loading,setLoading]=useState(false)
  const [activetab,setActivetab]=useState('feed')

  useEffect(()=>{
    NewsServices.getarticles()
  },[])

  return (
    <>
  <h1>hello</h1>
    </>
  )
}

export default App
