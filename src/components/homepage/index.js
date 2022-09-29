import { useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import Explore from './Explore';
import News from "./News";
function Homepage(){
    let params= useParams();
    useEffect(()=>{
        console.log("mounted")
    })
    return (
        <div className=" lg:flex">
        <div className="lg:w-2/3 flex-1 relative">
        <div className="flex flex-row items-center mx-4 my-2">
                {params.name!=="home" && <div className="flex justify-center cursor-pointer text-4xl h-12 w-12 rounded-full
                 hover:bg-gray-600 hover:text-white dark:text-gray-600
                  dark:hover:bg-white dark:hover:text-black transition-colors duration-500">
                  <Link to="/home">  
                   &#8592;
                  </Link>
                    </div>}
            <h1 className="capitalize text-2xl font-bold dark:text-gray-400">
            {params.name==="home"?"Top News":params.name} - News app
            </h1></div>
        <News category={params.name!=="home"?params.name:undefined}/>
        </div>
        <div className="lg:w-2/6">
            <Explore />
        </div>
        </div>
    )
}

export default Homepage;
