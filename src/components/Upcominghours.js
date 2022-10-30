import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
};

const labels = ["30°", "89°", "33°", "23°", "12°", "23°", "16°", "20°"];

export const data = {
  labels,
  datasets: [
    {
      label: "Upcoming hours",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#5c9ce5",
    },
  ],
};

export function Upcominghours() {
  return (
    <div className="w-full p-4 bg-white rounded-3xl">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-8 lg:gap-0 lg:flex-nowrap">
        <p className="font-semibold">Upcomimg hours</p>
        <div className="flex gap-4 cursor-pointer">
          <div className="flex items-center rounded-lg bg-[#f1f1f1]">
            <span className="px-2 py-1 text-xs text-slate-400">
              Rain precipitation
            </span>
            <span className="material-icons-outlined text-slate-400">
              expand_more
            </span>
          </div>

          <div className="flex items-center rounded-lg bg-[#f1f1f1]">
            <span className="px-2 py-1 text-xs text-black">Next days</span>
            <span className="text-black material-icons-outlined">
              chevron_right
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around xl:gap-12">
        <div className="flex flex-col justify-center items center">
          <p className="text-xs text-gray-700">Now</p>
          <div className="my-2 text-gray-700 material-icons-outlined">
            light_mode
          </div>
          <p className="text-sm text-gray-700">24°</p>
        </div>
        <div className="flex flex-col justify-center items center">
          <p className="text-xs text-slate-500">11:00</p>
          <div className="my-2 text-gray-700 material-icons-outlined">
            light_mode
          </div>
          <p className="text-sm text-gray-700">24°</p>
        </div>
        <div className="flex flex-col justify-center items center">
          <p className="text-xs text-slate-500">12:00</p>
          <div className="my-2 text-gray-700 material-icons-outlined">
            cloud
          </div>
          <p className="text-sm text-gray-700">24°</p>
        </div>
        <div className="flex flex-col justify-center items center">
          <p className="text-xs text-slate-500">13:00</p>
          <div className="my-2 text-gray-700 material-icons-outlined">
            cloud
          </div>
          <p className="text-sm text-gray-700">24°</p>
        </div>
        <div className="flex flex-col justify-center items center">
          <p className="text-xs text-slate-500">14:00</p>
          <div className="my-2 text-gray-700 material-icons-outlined">
            light_mode
          </div>
          <p className="text-sm text-gray-700">24°</p>
        </div>
        <div className="flex flex-col justify-center items center">
          <p className="text-xs text-slate-500">15:00</p>
          <div className="my-2 text-gray-700 material-icons-outlined">
            cloud
          </div>
          <p className="text-sm text-gray-700">24°</p>
        </div>
        <div className="flex flex-col justify-center items center">
          <p className="text-xs text-slate-500">16:00</p>
          <div className="my-2 text-gray-700 material-icons-outlined">
            cloud
          </div>
          <p className="text-sm text-gray-700">24°</p>
        </div>
        <div className="flex flex-col justify-center items center">
          <p className="text-xs text-slate-500">17:00</p>
          <div className="my-2 text-gray-700 material-icons-outlined">
            light_mode
          </div>
          <p className="text-sm text-gray-700">24°</p>
        </div>
      </div>
      <Bar options={options} data={data} />
    </div>
  );
}
