export default function Precipitation() {
  return (
    <div className="flex justify-start items-center gap-4 flex-wrap">
      <div className="w-52 h-32 my-4 bg-white rounded-3xl p-4">
        {/* Title */}
        <div className="flex justify-between items-center">
          <p className="font-semibold text-sm">Precipitation</p>
          <div>
            <span className="material-icons-outlined icon text-white rounded-lg text-lg p-1">
              thunderstorm
            </span>
          </div>
        </div>
        {/* Text */}
        <div className="text-center my-2">
          <p className="text-xl font-bold">
            1.4cm
          </p>
        </div>
        {/* Bar */}
        <div className="flex justify-around items-cente gap-1">
          <div className="w-1/5">
            <p className="lowercase text-xs text-gray-500 font-light">0</p>
            <div
              className="w-full rounded-lg"
              style={{ backgroundColor: "#dcdcdc" }}
            >
              <div
                className="w-full h-1.5  rounded-lg"
                style={{ backgroundColor: "#5C9CE5" }}
              ></div>
            </div>
          </div>

          <div className="w-1/5">
            <p className="lowercase text-xs text-gray-500 font-light">10</p>
            <div
              className="w-full rounded-lg"
              style={{ backgroundColor: "#dcdcdc" }}
            >
              <div
                className="w-8/12 h-1.5  rounded-lg rounded-r-none"
                style={{ backgroundColor: "#5C9CE5" }}
              ></div>
            </div>
          </div>

          <div className="w-1/5">
            <p className="lowercase text-xs text-gray-500 font-light">20</p>
            <div
              className="w-full rounded-lg"
              style={{ backgroundColor: "#dcdcdc" }}
            >
              <div
                className="w-5/12 h-1.5  rounded-lg rounded-r-none"

              ></div>
            </div>
          </div>

          <div className="w-1/5">
            <p className="lowercase text-xs text-gray-500 font-light">30</p>
            <div
              className="w-full rounded-lg"
              style={{ backgroundColor: "#dcdcdc" }}
            >
              <div
                className="w-5/12 h-1.5  rounded-lg rounded-r-none"

              ></div>
            </div>
          </div>

          <div className="w-1/5">
            <p className="lowercase text-xs text-gray-500 font-light">40</p>
            <div
              className="w-full rounded-lg"
              style={{ backgroundColor: "#dcdcdc" }}
            >
              <div
                className="w-5/12 h-1.5  rounded-lg rounded-r-none"

              ></div>
            </div>
          </div>
          <div className="w-1/5">
            <p className="lowercase text-xs text-gray-500 font-light">50</p>
            <div
              className="w-full rounded-lg"
              style={{ backgroundColor: "#dcdcdc" }}
            >
              <div
                className="w-5/12 h-1.5  rounded-lg rounded-r-none"

              ></div>
            </div>
          </div>
          <div className="w-1/5">
            <p className="lowercase text-xs text-gray-500 font-light">60</p>
            <div
              className="w-full rounded-lg"
              style={{ backgroundColor: "#dcdcdc" }}
            >
              <div
                className="w-5/12 h-1.5  rounded-lg rounded-r-none"

              ></div>
            </div>
          </div>
          <div className="w-1/5">
            <p className="lowercase text-xs text-gray-500 font-light">70</p>
            <div
              className="w-full rounded-lg"
              style={{ backgroundColor: "#dcdcdc" }}
            >
              <div
                className="w-5/12 h-1.5  rounded-lg rounded-r-none"

              ></div>
            </div>
          </div>
          <div className="w-1/5">
            <p className="lowercase text-xs text-gray-500 font-light">80</p>
            <div
              className="w-full rounded-lg"
              style={{ backgroundColor: "#dcdcdc" }}
            >
              <div
                className="w-5/12 h-1.5  rounded-lg rounded-r-none"

              ></div>
            </div>
          </div>
          <div className="w-1/5">
            <p className="lowercase text-xs text-gray-500 font-light">90</p>
            <div
              className="w-full rounded-lg"
              style={{ backgroundColor: "#dcdcdc" }}
            >
              <div
                className="w-5/12 h-1.5  rounded-lg rounded-r-none"

              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
