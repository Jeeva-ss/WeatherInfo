export default function Precipitation() {
  return (
    <div className="flex flex-wrap items-center justify-start gap-4">
      <div className="h-32 p-4 my-4 bg-white w-52 rounded-3xl">
        {/* Title */}
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold">Precipitation</p>
          <div>
            <span className="p-1 text-lg text-white rounded-lg material-icons-outlined icon">
              thunderstorm
            </span>
          </div>
        </div>
        {/* Text */}
        <div className="my-2 text-center">
          <p className="text-xl font-bold">1.4cm</p>
        </div>
        {/* Bar */}
        <div className="flex justify-around gap-1 items-cente">
          <div className="w-1/5">
            <p className="text-xs font-light text-gray-500 lowercase">0</p>
            <div className="w-full rounded-lg bg-[#dcdcdc]">
              <div className="w-full h-1.5  rounded-lg bg-[#5c9ce5]"></div>
            </div>
          </div>

          <div className="w-1/5">
            <p className="text-xs font-light text-gray-500 lowercase">10</p>
            <div className="w-full rounded-lg bg-[#dcdcdc]">
              <div className="w-8/12 h-1.5  rounded-lg rounded-r-none bg-[#5c9ce5]"></div>
            </div>
          </div>

          <div className="w-1/5">
            <p className="text-xs font-light text-gray-500 lowercase">20</p>
            <div className="w-full rounded-lg bg-[#dcdcdc]">
              <div className="w-5/12 h-1.5  rounded-lg rounded-r-none"></div>
            </div>
          </div>

          <div className="w-1/5">
            <p className="text-xs font-light text-gray-500 lowercase">30</p>
            <div className="w-full rounded-lg bg-[#dcdcdc]">
              <div className="w-5/12 h-1.5  rounded-lg rounded-r-none"></div>
            </div>
          </div>

          <div className="w-1/5">
            <p className="text-xs font-light text-gray-500 lowercase">40</p>
            <div className="w-full rounded-lg bg-[#dcdcdc]">
              <div className="w-5/12 h-1.5  rounded-lg rounded-r-none"></div>
            </div>
          </div>
          <div className="w-1/5">
            <p className="text-xs font-light text-gray-500 lowercase">50</p>
            <div className="w-full rounded-lg bg-[#dcdcdc]">
              <div className="w-5/12 h-1.5  rounded-lg rounded-r-none"></div>
            </div>
          </div>
          <div className="w-1/5">
            <p className="text-xs font-light text-gray-500 lowercase">60</p>
            <div className="w-full rounded-lg bg-[#dcdcdc]">
              <div className="w-5/12 h-1.5  rounded-lg rounded-r-none"></div>
            </div>
          </div>
          <div className="w-1/5">
            <p className="text-xs font-light text-gray-500 lowercase">70</p>
            <div className="w-full rounded-lg bg-[#dcdcdc]">
              <div className="w-5/12 h-1.5  rounded-lg rounded-r-none"></div>
            </div>
          </div>
          <div className="w-1/5">
            <p className="text-xs font-light text-gray-500 lowercase">80</p>
            <div className="w-full rounded-lg  bg-[#dcdcdc]">
              <div className="w-5/12 h-1.5  rounded-lg rounded-r-none"></div>
            </div>
          </div>
          <div className="w-1/5">
            <p className="text-xs font-light text-gray-500 lowercase">90</p>
            <div className="w-full rounded-lg bg-[#dcdcdc]">
              <div className="w-5/12 h-1.5  rounded-lg rounded-r-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
