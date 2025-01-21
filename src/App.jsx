import React, { useState } from 'react'
import UserProfileCard from './component/UserProfileCard';
import avatar from "/src/assets/profile icon.png"


const App = () => {
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light" ))
  }

  return (
    <div>
      <button onClick={toggleTheme}>Switch to {theme === "light" ? "dark" : "light" } theme</button>
      <UserProfileCard
      name="Brian Yiga"
      avatar={avatar}
      age={33}
      title="A Passionate Developer"
      location={{city: "Kampala", country: "Uganda"}}
      isOnline={true}
      skills={["Javascript", "HTML", "CSS"]}
      hobbies={["Football", "Scrabble", "Video games"]}
      theme={theme}
      />
     
   </div>

  )
}

export default App;