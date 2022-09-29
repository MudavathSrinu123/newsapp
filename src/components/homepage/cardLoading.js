import React from 'react'
function NewscardLoading() {
    
    return (
        <div className=" cursor-pointer w-60 sm:w-72 mx-2 flex-nowrap rounded-3xl shadow-xl transition-all dark:shadow-xl">
            <div className=" flex-initial sm:w-72 w-60 ">
                <div className="w-full rounded-3xl h-48 sm:h-56 select-none bg-gray-300 animate-pulse"></div>
            </div>
            <div className="flex-1 my-5">
                <div className=" rounded-xl  py-2 bg-gray-300 ml-3 mr-3 px-4 my-5 animate-pulse"></div>
                <div className=" rounded-xl  py-2 bg-gray-300 ml-3 mr-3 px-4 my-5 animate-pulse"></div>
                <div className=" rounded-xl  py-2 bg-gray-300 ml-3 mr-32 px-4 my-5 animate-pulse"></div>
            </div>
            <div className=" flex-initial flex justify-between mx-4 py-5 text-gray-400">
                <p className=" rounded-xl  pt-2 w-28 bg-gray-300  animate-pulse"></p>
                <p className=" rounded-xl pt-2 w-28 bg-gray-300 animate-pulse"></p>
            </div>
        </div>
    )
}

export default NewscardLoading;
