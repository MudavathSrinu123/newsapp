import React from 'react'
import Categorycard from './Categorycard';
import {Link} from 'react-router-dom';
function Explore() {
    const categories = ["business",
                        "sports",
                        "technology" ,
                        ];
    return (
        <div className="my-3">
            <h1 className="text-2xl font-bold ml-4 mb-3 dark:text-gray-300"> Explore</h1>
            <div className="flex flex-wrap p-1">
            {categories.map((e)=>{
                return(
                    <Link key={e} to={`/${e}`}>
                <Categorycard key={e} name={e} />
                    </Link>
                )
            }
            )}
        </div>
            </div>
    )
}

export default Explore;
