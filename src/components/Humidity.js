export default function Humidity() {
  return (
    <div className="flex justify-start items-center gap-4 flex-wrap">
      <div className="w-52 h-32 my-4 bg-white rounded-3xl p-4">
        {/* Title */}
        <div className="flex justify-between items-center">
          <p className="font-semibold text-sm">Humidity</p>
          <div>
            <span className="material-icons-outlined icon text-white rounded-lg text-lg p-1">
              water_drop
            </span>
          </div>
        </div>
        {/* Text */}
        <div className="text-center my-2">
          <p className="text-xl font-bold">
            82% <span className="font-light text-base">bad</span>
          </p>
        </div>
        {/* Bar */}
        <div className="flex justify-around items-cente gap-4">
          <div className="w-2/6">
            <p className="lowercase text-sm text-gray-500 font-light">Good</p>
            <div
              className="w-full rounded-lg"
              style={{ backgroundColor: "#dcdcdc" }}
            >
              <div
                className="w-full h-2.5  rounded-lg"
                style={{ backgroundColor: "#5C9CE5" }}
              ></div>
            </div>
          </div>

          <div className="w-2/6">
            <p className="lowercase text-sm text-gray-500 font-light">Normal</p>
            <div
              className="w-full rounded-lg"
              style={{ backgroundColor: "#dcdcdc" }}
            >
              <div
                className="w-full h-2.5  rounded-lg"
                style={{ backgroundColor: "#5C9CE5" }}
              ></div>
            </div>
          </div>

          <div className="w-2/6">
            <p className="lowercase text-sm text-gray-500 font-light">Bad</p>
            <div
              className="w-full rounded-lg"
              style={{ backgroundColor: "#dcdcdc" }}
            >
              <div
                className="w-5/12 h-2.5  rounded-lg rounded-r-none"
                style={{ backgroundColor: "#5C9CE5" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
