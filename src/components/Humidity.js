export default function Humidity() {
  return (
    <div className="flex flex-wrap items-center justify-start gap-4">
      <div className="h-32 p-4 my-4 bg-white w-52 rounded-3xl">
        {/* Title */}
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold">Humidity</p>
          <div>
            <span className="p-1 text-lg text-white rounded-lg material-icons-outlined icon">
              water_drop
            </span>
          </div>
        </div>
        {/* Text */}
        <div className="my-2 text-center">
          <p className="text-xl font-bold">
            82% <span className="text-base font-light">bad</span>
          </p>
        </div>
        {/* Bar */}
        <div className="flex justify-around gap-4 items-cente">
          <div className="w-2/6">
            <p className="text-sm font-light text-gray-500 lowercase">Good</p>
            <div className="w-full rounded-lg bg-[#dcdcdc]">
              <div className="w-full h-2.5  rounded-lg bg-[#5c9ce5]"></div>
            </div>
          </div>

          <div className="w-2/6">
            <p className="text-sm font-light text-gray-500 lowercase">Normal</p>
            <div className="w-full rounded-lg bg-[#dcdcdc]">
              <div className="w-full h-2.5  rounded-lg bg-[#5c9ce5]"></div>
            </div>
          </div>

          <div className="w-2/6">
            <p className="text-sm font-light text-gray-500 lowercase">Bad</p>
            <div className="w-full rounded-lg bg-[#dcdcdc]">
              <div className="w-5/12 h-2.5  rounded-lg rounded-r-none bg-[#5c9ce5]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
