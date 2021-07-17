import React, { useState, useEffect } from "react";
import "../index.css";
import { Bar } from "react-chartjs-2";

function Home() {
  const [chartData, setchartData] = useState({
    datasets: [
      {
        axis: "y",
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  });

  const Chart = () => {
    setchartData({
      datasets: [
        {
          axis: "y",
          label: "My First Dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          borderWidth: 1,
        },
      ],
    });
  };
  useEffect(() => {
    Chart();
  }, []);

  return (
    <div className="p-3">
      <div className="font-mono text-xl md:text-2xl">Good Evening</div>
      <div className="grid grid-cols-1 gap-y-3 lg:gap-x-6 lg:grid-cols-6">
        <div className="relative flex items-center w-full p-2 space-x-3 bg-gray-300 rounded-lg shadow-lg lg:col-span-3 ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Profil_Avatar_S.jpg/982px-Profil_Avatar_S.jpg"
            alt=""
            srcset=""
            className="w-20 h-20 rounded-full "
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 absolute bottom-0 right-0 text-primary"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>

          <div className="flex-col p-2 border-l-2 border-gray-500">
            <div className="font-bold lg:text-base sm:text-2xl">
              CHIRANJEEVI RAMAKRISHNA NAIDU SANCHANA
            </div>
            <div className="text-sm font-semibold lg:text-base">@Username</div>

            <div className="font-medium ">Emp no</div>

            <div className="font-medium ">car company owner</div>
          </div>
        </div>
        <div className="col-span-3 ">
          <div className="container p-2 bg-gray-300 rounded-lg shadow-lg lg:w-11/12">

          <Bar className=''
          type="line"
                
              
          data={{
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
              {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
          options={{ maintainAspectRatio: false,responsive:true }}
        />
          </div>
          </div>
        <div className="relative flex items-center h-24 col-span-2 p-2 space-x-3 bg-gray-300 rounded-lg shadow-lg">1</div>
        <div className="relative flex items-center h-24 col-span-2 p-2 space-x-3 bg-gray-300 rounded-lg shadow-lg">2</div>
        <div className="relative flex items-center col-span-2 row-span-2 p-2 space-x-3 bg-gray-300 rounded-lg shadow-lg ">3</div>
        <div className="relative flex items-center h-24 col-span-2 p-2 space-x-3 bg-gray-300 rounded-lg shadow-lg">4</div>
        <div className="relative flex items-center h-24 col-span-2 p-2 space-x-3 bg-gray-300 rounded-lg shadow-lg">5</div>
        <div className="relative flex items-center h-24 col-span-2 p-2 space-x-3 bg-gray-300 rounded-lg shadow-lg">6</div>
        <div className="relative flex items-center h-24 col-span-4 p-2 space-x-3 bg-gray-300 rounded-lg shadow-lg">4</div>
        <div className="div">5</div>
        <div className="div">6</div>
      </div>
    </div>
  );
}
export default Home;
