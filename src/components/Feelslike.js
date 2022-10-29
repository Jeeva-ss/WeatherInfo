
export default function Feelslike() {
  return (
    <div className="flex justify-start items-center gap-4 flex-wrap">
      <div className="w-52 h-32 my-4 bg-white rounded-3xl p-4">
        {/* Title */}
        <div className="flex justify-between items-center">
          <p className="font-semibold text-sm">Feels like</p>
          <div>
            <span className="material-icons-outlined icon text-white rounded-lg text-lg p-1">
              thermostat
            </span>
          </div>
        </div>
        {/* Text */}
        <div className="text-center my-2">
          <p className="text-xl font-bold">
            30°
          </p>
        </div>
        {/* Bar */}
        <div className="flex justify-between items-center gap-4">
          <div className="w-2/6">
            <p className="lowercase text-xs text-gray-500 font-light">0°</p>
          </div>

          <div className="w-2/6 text-center">
            <p className="lowercase text-xs text-gray-500 font-light">25°</p>
          </div>

          <div className="w-2/6 text-right">
            <p className="lowercase text-xs text-gray-500 font-light">30°</p>
          </div>
        </div>
        {/* Bar */}
        <div
          className=" w-full rounded-lg"
          style={{ backgroundColor: "#dcdcdc" }}
        >
          <div
            className="w-8/12 h-2.5  rounded-lg rounded-r-none"
            style={{ backgroundColor: "#5C9CE5" }}
          ></div>
        </div>
      </div>
    </div>
  )
}
