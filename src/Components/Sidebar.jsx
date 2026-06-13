import React from 'react'
import { Globe,Briefcase,Cpu,Atom,Activity ,Trophy,Film,CloudSun} from 'lucide-react';

const CATEGORIES = [
  { id: 'feed', name: 'Top Feed', icon: Globe },
  { id: 'business', name: 'Business', icon: Briefcase },
  { id: 'technology', name: 'Technology', icon: Cpu },
  { id: 'science', name: 'Science', icon: Atom },
  { id: 'health', name: 'Health', icon: Activity },
  { id: 'sports', name: 'Sports', icon: Trophy },
  { id: 'entertainment', name: 'Entertainment', icon: Film }
];
 const weather = {
    temp: '74°F',
    condition: 'Partly Cloudy',
    location: 'New York, NY',
    icon: CloudSun
  };


function Sidebar({
  category,setCategory
}) {
  const handelcategory=(cat)=>{
    setCategory(cat)
  }

  return (
   <>
   <div className=' w-full h-100 ml-8'>
      {CATEGORIES.map((e)=>(
        <div key={e.id} className=' my-3'>
          <button className='border-2 bg-blue-500 text-white p-3 rounded-xl' onClick={()=>{handelcategory(e.id)}}>{e.name}</button>
        </div>
      ))}
   </div>
   </>
  )
}

export default Sidebar