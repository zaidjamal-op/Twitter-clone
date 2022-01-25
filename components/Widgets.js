import {SearchIcon} from '@heroicons/react/outline'
import Image from 'next/image';
import Trending from './Trending';
function Widgets({ trendingResults, followResults }) {
  return <div className="text-white hidden lg:inline ml-8 xl:w-[450px] py-1 space-y-5">
    <div className="sticky top-0 py-1.5 bg-black z-50 w-11/12 xl:w-full">
      <div className="flex items-center bg-[#202327] p-3 rounded-lg relative">
      <SearchIcon className="text-gray-500 h-5 z-50"/>
      <input type="text" className="bg-transparent placeholder-gray-500 outline-none text-[#d9d9d9] absolute inset-0 pl-11 border border-transparent w-full focus:border-[#1d9bf0] rounded-lg focus:bg-black focus:shadow-lg" placeholder="Search Twitter"/>
      </div>
    </div>
    <div className="text-[#d9d9d9] space-x-3 bg-[#15181c] pt-2 rounded-lg w-11/12 xl:w-10/12">
       <h4 className="font-bold text-xl px-4">What's happening</h4>
       {trendingResults.map((result, index) => (
         <Trending key={index} result={result}/>
       ))}
       <button className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-11/12 text-[#1d9bf0]">Show more</button>
    </div>

    <div className="text-[#d9d9d9] space-x-3 bg-[#15181c] pt-2 rounded-lg w-11/12 xl:w-10/12">
       <h4 className="font-bold text-xl px-4">Who to follow</h4>
       {followResults.map((result, index) => (
         <div key={index} className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center">
               <Image
          src={result.userImg}
          width={70}
          height={70}
          objectFit="cover"
          className="rounded-full"
        />
        <div className="ml-4 leading-5 group">
            <h4 className="group-hover:underline font-bold">{result.username}</h4>
            <h5 className="text-gray-500 text-[15px]">{result.tag}</h5>
        </div>
        <button className="ml-auto bg-white text-black rounded-lg font-bold text-sm py-1.5 px-3.5">Follow</button>
         </div>
       ))}
       <button className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-11/12 text-[#1d9bf0]">Show more</button>
    </div>
  </div>;
}

export default Widgets;
