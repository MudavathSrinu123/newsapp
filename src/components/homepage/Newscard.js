import React,{forwardRef, useEffect} from 'react';
import img from '../../icons/logo.png'
const Newscard = forwardRef(({ title, content, des, publishedAt, source, url, urlToImage,callBack,setcardExpand,author},ref) => {
    let formattedtitle = title.length >= 100 ? title.slice(0, 100).concat("...") : title;
    let date = new Date(publishedAt).toDateString();
    const handleclick=()=>{
        setcardExpand(true,{ title, content, des, date, source, url, urlToImage,author});
    }
    useEffect(()=>{
        callBack && callBack();
    },[callBack]);
    return (
        <div onClick={handleclick} ref={ref} className="relative min-w-min w-60 sm:w-72 cursor-pointer flex 
        flex-col mx-2 flex-nowrap rounded-3xl 
        shadow-xl transition-all lg:my-4 dark:border-gray-700 border-b-2 group">
            <div className=" flex-initial  w-60 sm:w-72 ">
                <div className="w-full rounded-3xl minHeight bg-gray-300 pulseanimation">
                <img className="select-none rounded-3xl w-full max-h-56 object-cover
                 group-hover:opacity-80 transition-opacity duration-100" alt="img" src={urlToImage ? urlToImage:img}></img>
                </div>
            </div>
            <div className=" flex-1">
                <h1 className=" capitalize text-lg font-bold px-4 my-3
                 text-gray-600 leading-relaxed">{formattedtitle}</h1>
            </div>
            <div className=" flex-initial flex justify-between mx-4 py-2 text-gray-400">
                <p className="text-xs">{source.name}</p>
                <p className="text-xs">{date}</p>
            </div>
        </div>
    )
}
)
export default Newscard;

