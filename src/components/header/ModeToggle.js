import React, { useEffect, useState } from 'react'
import lightbtn from '../../icons/light_mode.svg';
import darkbtn from '../../icons/dark_mode.svg'
function ModeToggle() {
    const [modeDark,setMode] = useState(false);
    function handleclick(){
        if(!modeDark)document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
        localStorage.setItem("Darkmode",!modeDark);
        setMode(!modeDark);
    }
    useEffect(()=>{
        !modeDark && localStorage.getItem("Darkmode") === 'true' && handleclick();
    })
    return (
        <div onClick={handleclick} className=" cursor-pointer relative flex overflow-hidden border-2 rounded-full py-1 px-3 space-x-1 bg-gray-100 transition-all duration-300 dark:bg-black dark:">
            <img className="transition-opacity duration-500" src={darkbtn} style={modeDark?{height:"20px"}:{height:"20px",opacity:0}} alt="moon"></img>
            <img className="transition-opacity duration-500" src={lightbtn} style={modeDark?{height:"20px",opacity:0}:{height:"20px"}}  alt="sun"></img>
            <div className={`absolute bottom-0 w-1/2 left-0 top-0 transition-all duration-700 ${modeDark? ' rounded-r-full left-1/2 bg-black':"bg-gray-100 rounded-l-full"}`}></div>
        </div>
    )
}

export default ModeToggle;
