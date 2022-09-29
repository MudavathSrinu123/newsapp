import React, { useEffect, useState } from 'react'
import Closebtn from './closebtn'
import logo from '../../icons/logo.png';
import Savebtn from '../header/Savebtn';
import { addFav,check } from '../../services/fetchdata';
function NewsPage({setcardExpand,data,disablesavebtn}) {
    const [saved,setSaved] = useState(false);
    useEffect(()=>{
        
        if(check({title:data?.title}))
        setSaved(true);
    },[data?.title])
    return (
        <div
         className=" transform -translate-x-1/2 left-1/2 py-3 top-0 fixed sm:top-auto sm:absolute w-full h-full sm:h-auto z-30 max-w-6xl
          bg-white rounded-md shadow-lg overflow-x-hidden dark:bg-black transition-colors duration-500">
              <div className="flex justify-between">
        {!disablesavebtn && <div onClick={()=>{if(!saved) {addFav(data);setSaved(true)}}} className=" cursor-pointer m-3">
        <Savebtn saved={saved} />
        </div>}
              <div className="px-4 cursor-pointer" onClick={()=>{setcardExpand(false)}}>
                  <Closebtn />
              </div></div>
            <img className="m-auto rounded-3xl max-w-3xl w-10/12 p-3" src={data?.urlToImage?data?.urlToImage:logo} alt={data?.author}></img>
            <div className="px-10 w-full">
                <div className=" flex justify-between">
                <p className="">{data?.source?.name}</p>
                <p className="">-{data?.author}</p>
                </div>
            <h1 className=" capitalize text-2xl font-bold my-6
                 text-gray-600 leading-relaxed dark:text-gray-200">{data?.title}</h1>
                 <div className=" dark:text-gray-300">
                <b className="font-bold text-lg">Description</b>
                <p className=" leading-6">{data?.des}</p>
                <b className="font-bold text-lg">Content</b>
                <p>{data?.content}</p>
                </div>
                <div className="my-2 flex justify-between items-center">
                    <p className="text-gray-600 dark:hover:text-white transition-colors duration-200">{data?.date}</p>
                    <a className="px-3 py-3 text-white rounded-md bg-black transform transition-transform duration-100 hover:-translate-y-1 hover:opacity-80 hover:shadow-xl text-right dark:bg-gray-100 dark:text-black" 
                    target="_blank" rel="noreferrer" href={data?.url}>Read More {">>"}</a>
                </div>
            </div>
        </div>
    )
}

export default NewsPage;
