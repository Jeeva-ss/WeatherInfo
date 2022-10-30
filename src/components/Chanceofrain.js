export default function Chanceofrain() {
  return (
    <div className="flex flex-wrap items-center justify-start gap-4">
      <div className="h-32 p-4 my-4 bg-white w-52 rounded-3xl">
        {/* Title */}
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold">Chance of rain</p>
          <div>
            <span className="p-1 text-lg text-white rounded-lg material-icons-outlined icon">
              cloud_circle
            </span>
          </div>
        </div>
        {/* Text */}
        <div className="my-2 text-center">
          <p className="text-xl font-bold">42°</p>
        </div>
        {/* Bar */}
        <div className="flex items-center justify-between gap-1">
          <div className="w-2/6">
            <p className="text-xs font-light text-gray-500 lowercase">0%</p>
          </div>
          <div className="w-2/6 text-left">
            <p className="text-xs font-light text-gray-500 lowercase">25%</p>
          </div>
          <div className="w-2/6 text-center">
            <p className="text-xs font-light text-gray-500 lowercase">50%</p>
          </div>
          <div className="w-2/6 text-center">
            <p className="text-xs font-light text-gray-500 lowercase">75%</p>
          </div>
          <div className="w-2/6">
            <p className="text-xs font-light text-gray-500 lowercase">100%</p>
          </div>
        </div>
        {/* Bar */}
        <div className="w-full rounded-lg bg-[#dcdcdc]">
          <div className="bg-[#5c9ce5] w-8/12 h-2.5  rounded-lg rounded-r-none"></div>
        </div>
      </div>
    </div>
  );
}
