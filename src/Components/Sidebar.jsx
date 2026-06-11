import React from 'react'

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


function Sidebar() {
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar