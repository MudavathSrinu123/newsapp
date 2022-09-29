import React, { createRef, useCallback, useEffect, useRef, useState } from 'react';
import Newscard from './Newscard';
import {getNextPage} from '../../services/fetchdata';
import NewscardLoading from './cardLoading';
import NewsPage from '../newspage';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
function News({category}) {
    const [data,setData]=useState([]);
    const [loading,setLoading] = useState(false);
    const [cardExpanded,setcardExpand] = useState(false);
    let currentcarddata = useRef({});
    let page = useRef(1);
    let total = useRef(0);
    const lastCard= createRef();
    const handlesetdata=useCallback((d)=>{
        sessionStorage.setItem(category?category:"news",JSON.stringify({
            data:d,
            page:page.current,
            total: total.current
        }))
        setData(d);
    },[category]);
    const handleclick=(b,dat)=>{
        if(dat){
            currentcarddata.current=dat;
        }
        setcardExpand(b);
    }
    const setobeserver=useCallback(async ()=>{
        let fetchMoreData=async ()=>{
            page.current+=1;
            let newdata =await getNextPage(page.current,category);
            if(newdata.articles)
            handlesetdata(data.concat(newdata.articles));
            setLoading(false);
        }
        const observer = new IntersectionObserver((entries,observer)=>{
            if(entries[0].isIntersecting && !loading && (data.length < total.current)){
                setLoading(true);
                fetchMoreData();
                observer.unobserve(entries[0].target);
            }
        },{})
        if(lastCard.current && !(data.length === total.current)){
            observer.observe(lastCard.current);
        }
        
    },[lastCard,data,loading,category,handlesetdata])
    const callBack=()=>{
        setobeserver();
    }
    useEffect(()=>{
        async function fetchdata(){
            try{
            let dat = await getNextPage(1,category);
            total.current=dat.totalResults;
            handlesetdata(dat.articles);
            }catch(err){
                console.log(err);
                return;
            }
        }
        async function getlocaldata(){
            let d=await JSON.parse(sessionStorage.getItem(category?category:"news"));
            if(d) {
                setData(d.data);
                page.current=d.page;
                total.current=d.total;
            }
            else
            return fetchdata();
        }
        getlocaldata();
    },[category,handlesetdata])
    return (
        <>
        <CSSTransition 
        in={cardExpanded}
         classNames="page" 
         timeout={350}
         unmountOnExit
         >
        <NewsPage setcardExpand={handleclick} data={currentcarddata.current}/>
        </CSSTransition>
        <TransitionGroup  className={`overflow-x-scroll flex flex-row py-3 lg:flex-wrap lg:justify-center lg:overflow-x-hidden customscrollbar ${cardExpanded && 'hidden'}`}>

          {data && data.length!==0? (
          data?.map(({title,content,description,publishedAt,source,url,urlToImage,author},idx)=>
          {
              if(idx === data.length-1){
                return(
                    <CSSTransition
                    key={url} 
                    timeout={400} 
                    classNames="page">
                    <Newscard setcardExpand={handleclick} key={url} callBack={callBack} ref={lastCard} title={title} des={description} content={content} publishedAt={publishedAt} source={source} author={author} url={url} urlToImage={urlToImage}  />
                    </CSSTransition>
                    )
              }

                return(
                    <CSSTransition
                    key={url} 
                    timeout={400} 
                    classNames="page">
                <Newscard setcardExpand={handleclick} key={url} title={title} des={description} content={content} publishedAt={publishedAt} source={source} url={url} urlToImage={urlToImage} author={author}  />
                </CSSTransition>
                )}
                )):
                (
                    <CSSTransition
                    key="loadingcards" 
                    timeout={400} 
                    classNames="page">
                        <>
                <NewscardLoading /><NewscardLoading /><NewscardLoading /><NewscardLoading /><NewscardLoading /><NewscardLoading />
                </></CSSTransition>
                )
        }
        </TransitionGroup>
        </>
    )
}

export default News;
