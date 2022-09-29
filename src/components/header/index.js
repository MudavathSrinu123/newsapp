import React from 'react'
import ModeToggle from './ModeToggle';
import Savebtn from './Savebtn';
import Nav from './Nav';
import { Link } from 'react-router-dom';
function Header() {
    const date=new Date().toDateString();
    return (
        <div className=" py-3 px-5 flex justify-between items-center dark:bg-black bg-white dark:border-black ">
            <div className=" text-gray-400">{date}</div>
            {/* <logo />  */}
            <div className="flex space-x-3 items-center">
            <Link to="/favorites">
            <div className=" cursor-pointer">
            <Savebtn saved={true} />
            </div>
            </Link>
            <ModeToggle />
            <Nav />
            </div>

        </div>
    )
}

export default Header;
