import Moment from "react-moment";

function Likes({id, likes}) {
  return <div className="bg-[#15181c] flex border-b border-gray-700 p-3 cursor-pointer hover:bg-white hover:bg-opacity-[0.03] transition duration-200 ease-out">
    <img className="w-16 h-16 rounded-full mr-4" src={likes?.userImg} alt=""/>
    <div className="flex flex-row space-y-2 w-full">
      <div className="flex justify-between">
        <div className="text-[#6e767d]">
          <div className="group">
            <h4 className="font-bold text-[#d9d9d9] text-[15px] sm:text-base inline-block group-hover:underline">
            {likes?.username}
            </h4>
              </div>
              <span className=" text-sm sm:text-[15px]">
                  @{likes?.tag}{" "}
                </span>{" "}
              ·{" "}
              <span className="hover:underline text-sm sm:text-[15px]">
                <Moment fromNow>{likes?.timestamp?.toDate()}</Moment>
              </span>
          </div>
        </div>
      </div>
      <div className="py-3">
      <button className="ml-auto bg-white text-black rounded-lg font-bold text-sm py-1.5 px-3.5">Follow</button>
      </div>
    </div>
}

export default Likes;
