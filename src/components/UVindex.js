export default function UVindex() {
  return (
    <div className="flex flex-wrap items-center justify-start gap-4">
      <div className="h-32 p-4 my-4 bg-white w-52 rounded-3xl">
        {/* Title */}
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold">UV index</p>
          <div>
            <span className="p-1 text-lg text-white rounded-lg material-icons-outlined icon">
              light_mode
            </span>
          </div>
        </div>
        {/* Text */}
        <div className="my-2 text-center">
          <p className="text-xl font-bold">
            4 <span className="text-base font-light">Medium</span>
          </p>
        </div>
        {/* Bar */}
        <div className="flex justify-around gap-1 items-cente">
          <div className="w-1/5">
            <p className="text-xs font-light text-gray-500 lowercase">0-2</p>
            <div className="w-full rounded-lg bg-[#dcdcdc]">
              <div className="w-full h-1.5  rounded-lg bg-[#5c9ce5]"></div>
            </div>
          </div>

          <div className="w-1/5">
            <p className="text-xs font-light text-gray-500 lowercase">3-5</p>
            <div className="w-full rounded-lg bg-[#dcdcdc]">
              <div className="w-3/6 h-1.5  rounded-lg bg-[#5c9ce5]"></div>
            </div>
          </div>

          <div className="w-1/5">
            <p className="text-xs font-light text-gray-500 lowercase">6-7</p>
            <div className="w-full rounded-lg bg-[#dcdcdc]">
              <div className="w-5/12 h-1.5  rounded-lg rounded-r-none"></div>
            </div>
          </div>

          <div className="w-1/5">
            <p className="text-xs font-light text-gray-500 lowercase">8-10</p>
            <div className="w-full rounded-lg bg-[#dcdcdc]">
              <div className="w-5/12 h-1.5  rounded-lg rounded-r-none"></div>
            </div>
          </div>

          <div className="w-1/5">
            <p className="text-xs font-light text-gray-500 lowercase">11+</p>
            <div className="w-full rounded-lg bg-[#dcdcdc]">
              <div className="w-5/12 h-1.5  rounded-lg rounded-r-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
