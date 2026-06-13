import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { NewsServices } from './services/NewsServices'
import './App.css'
import Sidebar from './Components/Sidebar';
import Newses from './Components/Newses';

function App() {
  const [loading,setLoading]=useState(false);
  const [activetab,setActivetab]=useState('feed');
  const [articles,setArticles]=useState([]);
  const [category,setCategory]=useState('general');
  const [searchq,setsearchq]=useState('')
  const [debounce,setDebounce]=useState('')


  useEffect(()=>{
    const timetaken=setTimeout(() => {
      setDebounce(searchq)
    },500);
    return ()=>clearTimeout(timetaken)
  },[searchq])

  useEffect(()=>{
   NewsServices.getarticles(category,debounce).then((data)=>setArticles(data))
   
  },[category,debounce])


  return (
    <>
    { console.log(debounce)}
      <Sidebar category={category} setCategory={setCategory}/>
      <Newses articles={articles} searchq={searchq} setsearchq={setsearchq}/>
    </>
  )
}

export default App
