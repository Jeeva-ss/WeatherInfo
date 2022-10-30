export default function Content() {
  return (
    <div>
      {/* toggle */}
      <div className="flex items-center justify-between text-white cursor-pointer">
        <span className="text-2xl material-icons-outlined">
          add_circle_outline
        </span>
        <span className="text-xl material-icons-outlined">more_horiz</span>
        <div className="flex items-center">
          <p className="text-xs">°C</p>
          <span className="text-3xl material-icons-outlined">toggle_on</span>
          <p className="text-xs">°F</p>
        </div>
      </div>
      {/* city */}
      <div className="flex items-center justify-between my-8 text-white">
        <div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-white material-icons-outlined">
              near_me
            </span>
            <p className="text-xs">New York, USA</p>
          </div>
          <div className="mt-1">
            <p className="text-xs font-light">Today 30, Oct</p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <span className="text-xs material-icons-outlined">wb_sunny</span>
            <span className="text-xs">05:17</span>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-xs material-icons-outlined">dark_mode</span>
            <span className="text-xs">17:56</span>
          </div>
        </div>
      </div>
      {/* Temperature */}
      <div className="flex items-center justify-between gap-2 my-8">
        <div className="cursor-pointer">
          <span className="text-white material-icons-outlined">
            arrow_back_ios
          </span>
        </div>
        <div>
          <p className="text-6xl font-bold text-white">27°</p>
        </div>
        <div className="cursor-pointer">
          <span className="text-white material-icons-outlined">
            arrow_forward_ios
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1 text-center">
        <span className="text-white material-icons-outlined">light_mode</span>
        <span className="text-white">Sunny</span>
      </div>
    </div>
  );
}
