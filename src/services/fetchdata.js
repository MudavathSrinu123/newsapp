
const API_KEY=process.env.REACT_APP_API_KEY || 0;
const fetchData = async(url)=>{
    let res=await fetch(url);
    let data=res.json();
    return data;
}

export const getNextPage=async(page,category)=>{
    console.log("fetch.........")
    if(API_KEY){
    let url="";
    if(page && category)
        url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&page=${page}&category=${category}&pageSize=${10}`;
    else if(page){
        url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&page=${page}&pageSize=${10}`;
    }
    else{
        url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&category=${category}&pageSize=${10}`;
    }
    return await fetchData(url);
}
else{
    return NextPage(page,category);
}
}

export const addFav=(data)=>{
   let d = localStorage.getItem("saved");
   if(!d){
       localStorage.setItem("saved",JSON.stringify([data]));
       return;
   }
if(!check(data))
   localStorage.setItem("saved",JSON.stringify([data,...JSON.parse(d)]));

   return;

}
export const getFav=()=>{
    return JSON.parse(localStorage.getItem("saved"));
}
export const check=(data)=>{
    return false;
}
export const NextPage=async(page,category)=>{
    let url=`/api/page/${page}`;
    return await fetchData(url);
}