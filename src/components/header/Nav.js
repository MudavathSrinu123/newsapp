import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
function NavCard(props) {
    return (
        <div className="text-2xl m-5 px-16 py-3 cursor-pointer rounded-lg bg-gray-200 transition-colors duration-200 hover:bg-red-400">
            {props.children}
        </div>
    )
}

function NavScreen({set}) {
    const navRef=useRef(null);
    const handleclick=()=>{
            navRef.current.style.setProperty("transform","translateX(100%)");
        setTimeout(()=>{
            set(false);
        },200)
    }
    useEffect(()=>{
        navRef.current.style.setProperty("transform","translateX(0)");
    },[])
    return (
        <div>
            <div ref={navRef} className=" z-50 fixed w-96 h-screen max-w-full bg-white right-0 top-0 flex items-center justify-center
             transition-transform duration-200 dark:bg-black
             transform translate-x-full">
                <div className="absolute right-0 top-0 m-2 cursor-pointer" onClick={handleclick}>
                <svg className=" text-black fill-current hover:text-blue-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="rgb(117, 117, 117)"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
                </div>
                <div className="">
                    <NavCard>
                        <Link onClick={()=>{set(false)}} to="/">Home</Link>
                    </NavCard>
                </div>
            </div>
        </div>
    )
}

function Nav() {
    const [collapsed,setCollapsed] = useState(false);
    return (
        <>
            <div onClick={()=>setCollapsed(true)}>  
            <svg className="cursor-pointer text-gray-500 fill-current hover:text-red-500 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/></svg>
            </div>
            {collapsed && <NavScreen set={setCollapsed} />}
        </>
        
    )
}

export default Nav;
