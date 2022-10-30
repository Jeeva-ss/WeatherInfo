export default function Wind() {
  return (
    <div className="flex flex-wrap items-center justify-start gap-4">
      <div className="h-32 p-4 my-4 bg-white w-52 rounded-3xl">
        {/* Title */}
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold">Wind</p>
          <div>
            <span className="p-1 text-lg text-white rounded-lg material-icons-outlined icon">
              air
            </span>
          </div>
        </div>
        <div className="gauge">
          <div className="gauge__body">
            <div className="gauge__fill"></div>
            <div className="gauge__cover"></div>
          </div>
          <p className="speedText">8km/hr</p>
        </div>
      </div>
    </div>
  );
}
