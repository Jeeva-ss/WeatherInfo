import React from 'react'

export default function UVindex() {
  return (
    <div className="flex justify-start items-center gap-4 flex-wrap">
      <div className="w-52 h-32 my-4 bg-white rounded-3xl p-4">
        {/* Title */}
        <div className="flex justify-between items-center">
          <p className="font-semibold text-sm">UV index</p>
          <div>
            <span className="material-icons-outlined icon text-white rounded-lg text-lg p-1">
              light_mode
            </span>
          </div>
        </div>
        {/* Text */}
        <div className="text-center my-2">
          <p className="text-xl font-bold">
            4 <span className="font-light text-base">Medium</span>
          </p>
        </div>
        {/* Bar */}
        <div className="flex justify-around items-cente gap-1">
          <div className="w-1/5">
            <p className="lowercase text-xs text-gray-500 font-light">0-2</p>
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
            <p className="lowercase text-xs text-gray-500 font-light">3-5</p>
            <div
              className="w-full rounded-lg"
              style={{ backgroundColor: "#dcdcdc" }}
            >
              <div
                className="w-3/6 h-1.5  rounded-lg"
                style={{ backgroundColor: "#5C9CE5" }}
              ></div>
            </div>
          </div>

          <div className="w-1/5">
            <p className="lowercase text-xs text-gray-500 font-light">6-7</p>
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
            <p className="lowercase text-xs text-gray-500 font-light">8-10</p>
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
            <p className="lowercase text-xs text-gray-500 font-light">11+</p>
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
