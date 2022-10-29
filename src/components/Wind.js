import React from 'react'

export default function Wind() {

  return (
    <div className="flex justify-start items-center gap-4 flex-wrap">
      <div className="w-52 h-32 my-4 bg-white rounded-3xl p-4">
        {/* Title */}
        <div className="flex justify-between items-center">
          <p className="font-semibold text-sm">Wind</p>
          <div>
            <span className="material-icons-outlined icon text-white rounded-lg text-lg p-1">
              air
            </span>
          </div>
        </div>
        <div className="gauge">
          <div className="gauge__body">
            <div className="gauge__fill"></div>
            <div className="gauge__cover"></div>
          </div>
          <p className='speedText'>8km/hr</p>
        </div>

      </div>
    </div>
  )
}
