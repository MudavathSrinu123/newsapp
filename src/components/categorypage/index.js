import React from 'react';
import {Link, useParams} from 'react-router-dom';
import News from '../homepage/News';
function CategoryPage() {
    let {name}=useParams();
    
    return (
        <div>
            <div className="flex flex-row items-center mx-4 my-2">
                <div className="flex justify-center cursor-pointer text-4xl h-12 w-12 rounded-full
                 hover:bg-gray-600 hover:text-white dark:text-gray-600
                  dark:hover:bg-white dark:hover:text-black transition-colors duration-500">
                  <Link to="/">  
                   &#8592;
                  </Link>
                    </div>
            <h1 className="capitalize text-2xl font-bold dark:text-gray-400">
            {name} - News app
            </h1></div>
            <News category={name} />
        </div>
    )
}

export default CategoryPage;
