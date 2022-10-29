import './App.css';
import Chanceofrain from './components/Chanceofrain';
import Feelslike from './components/Feelslike';
import Humidity from './components/Humidity';
import Precipitation from './components/Precipitation';
import { Upcominghours } from './components/Upcominghours';
import UVindex from './components/UVindex';
import Wind from './components/Wind';
import Content from './components/Content';

// import undraw from '../src/Assets/new-york-page.png'

function App() {

  return (
    <div className="flex items-center justify-center p-4 App">
      <div style={{ background: "#5C9CE5" }} className='flex flex-wrap min-h-screen mx-auto w:11/12 md:w-10/12 xl:w-[1024px] xl:min-h-[50vh] md:flex-nowrap rounded-3xl'>
        <div className='w-full p-4 md:w-64' style={{ background: "#5C9CE5", borderRadius: "inherit" }}>
          <Content />
        </div>
        <div className='w-full p-4 rounded-3xl' style={{ background: '#E4F1FF' }}>
          <div style={{ width: "95%", margin: "15px auto" }} className='flex items-center justify-between'>
            <div>
              <p className='font-bold'>Welcome back Isabella!</p>
              <p className='text-sm font-normal'>Checkout today's weather information</p>
            </div>
            <div className='flex items-center justify-between gap-4'>
              <div>
                <span className="material-icons-outlined">
                  more_horiz
                </span>
              </div>
              <div >
                <img className='rounded-xl' width={30} src="https://randomuser.me/api/portraits/women/95.jpg" alt="user" />
              </div>
            </div>
          </div>
          <div style={{ width: "95%", margin: "10px auto" }}>
            <Upcominghours />
          </div>
          <p style={{ width: "95%", margin: "20px auto" }} className='text-base font-bold text-black'>More details of today's weather</p>
          <div style={{ width: "95%", margin: "auto" }} className='flex flex-wrap items-center justify-center gap-1 md:justify-between '>
            <Humidity />
            <Wind />
            <Precipitation />
            <UVindex />
            <Feelslike />
            <Chanceofrain />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
