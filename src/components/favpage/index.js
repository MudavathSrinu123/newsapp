import React, { useEffect, useRef, useState } from 'react'
import NewsPage from '../newspage';
import Newscard from '../homepage/Newscard';
import {Link} from 'react-router-dom';
function Favpage() {
    const [data,setData]= useState([]);
    const [cardExpanded,setcardExpand] = useState(false);
    let currentcarddata = useRef({});
    const handleclick=(b,dat)=>{
        if(dat){
            currentcarddata.current=dat;
        }
        setcardExpand(b);
    }
    useEffect(()=>{
       let articles=localStorage.getItem("saved");
       if(articles && articles.length!==0){
           setData(JSON.parse(articles));
       }
    },[]);
    return (
        <>
        <div className="flex flex-row items-center mx-4 my-4">
            <div className="flex justify-center cursor-pointer text-4xl h-12 w-12 rounded-full
             hover:bg-gray-600 hover:text-white dark:text-gray-600
              dark:hover:bg-white dark:hover:text-black transition-colors duration-500">
              <Link to="/">  
               &#8592;
              </Link>
                </div>
        <h1 className="capitalize text-4xl font-bold dark:text-gray-400">
        Favorites
        </h1></div>
        {cardExpanded && <NewsPage disablesavebtn={true} setcardExpand={handleclick} data={currentcarddata.current}/>}
        <div className={`overflow-x-scroll flex flex-row py-3 lg:flex-wrap lg:justify-center lg:overflow-x-hidden customscrollbar ${cardExpanded && 'hidden'}`}>
          {data && data.length!==0? (
          data?.map(({title,content,description,publishedAt,source,url,urlToImage,author})=>
          {
                return(<Newscard setcardExpand={handleclick} key={url} title={title} des={description} content={content} publishedAt={publishedAt} source={source} url={url} urlToImage={urlToImage} author={author}  />
                )}
                )):"no favs"
        }
        </div>
        </>
    )
}

export default Favpage
