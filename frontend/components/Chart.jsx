import React, { useContext, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Web3Context from "../context/Web3Context";

const ChartUI = dynamic(() => import("react-apexcharts"), { ssr: false });

const areaChartData = {
  series: [
    {
      name: "Line 1",
      data: [100, 105, 110, 115, 110, 120, 125],
    },
    {
      name: "Line 2",
      data: [70, 75, 80, 85, 82, 90, 92],
    },
    {
      name: "Line 3",
      data: [50, 55, 60, 57, 70, 75, 72],
    },
  ],
  options: {
    dataLabels: {
      enabled: false,
    },
    colors: ["#f06292", "#e91e63", "#c2185b"],
    xaxis: {
      axisBorder: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    chart: {
      toolbar: {
        show: false,
      },
    },
    grid: {
      borderColor: "#eceff1",
    },
    stroke: {
      width: 1.5,
    },
  },
};

const radialBarChartData = {
  series: [90, 67],
  options: {
    colors: ["#f06292", "#e91e63"],
    labels: ["Total Time", "Time Left"],
    stroke: {
      lineCap: "round",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "40%",
        },
        track: {
          background: "#fce4ec",
        },
      },
    },
  },
};

export function Chart() {


  const {
    numberOfPlayers,
    lastTimeStamp,
    first,
    second,
    third,
    addrSlice,
    timeLeft,

  } = useContext(Web3Context);

  const [radialVal, setRadialVal] = useState([90, 67, 83])

  const [seriesVal, setSeriesVal] = useState([
    {
      name: "Line 1",
      data: [100, 105, 110, 115, 110, 120, 125],
    },
    {
      name: "Line 2",
      data: [70, 75, 80, 85, 82, 90, 92],
    },
    {
      name: "Line 3",
      data: [50, 55, 60, 57, 70, 75, 72],
    },
  ])

  useEffect(() => {
    // function to get a line graph of the top 3 players
    function generateRandomArray(number) {
      const min = Math.floor(number * 0.8);
      const max = number;
      const array = [];

      while (array.length < 6) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!array.includes(randomNumber)) {
          array.push(randomNumber);
        }
      }

      array.push(number)
      array.sort((a, b) => a - b);

      return array;
    }

    // setRadialVal([(first?.hasPlayed * 10), (second?.hasPlayed * 10), (third?.hasPlayed * 10)])


    if (third?.score) {
      setSeriesVal([
        {
          name: addrSlice(first?.player),
          data: generateRandomArray(first?.score),
        },
        {
          name: addrSlice(second?.player),
          data: generateRandomArray(second?.score),
        },
        {
          name: addrSlice(third?.player),
          data: generateRandomArray(third?.score),
        },
      ])
    }

  }, [third, first])

  useEffect(() => {
    if (timeLeft && timeLeft > 0) {
      setRadialVal([100, parseInt((timeLeft / 259200) * 100)])


    }
  }, [timeLeft])



  return (
    <section className="px-8 py-8 lg:py-48">
      <div className="container mx-auto -mt-28 px-4 pb-16">
        <div className="relative mx-auto max-w-screen-lg rounded-2xl bg-white pr-2.5 pt-8 shadow-2xl shadow-gray-500/40">
          <h6 className="block pl-6 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased">
            The Winners Graph
          </h6>
          <div className="h-full">
            <ChartUI
              type="area"
              series={seriesVal}
              options={areaChartData.options}
              height={400}
            />
          </div>
          <div className="absolute -bottom-[7%] -right-[5%] hidden h-[280px] w-[280px] rounded-full bg-white shadow-xl shadow-gray-500/20 lg:block xl:-right-[10%]">
            <div className="-mt-2">
              <ChartUI
                type="radialBar"
                series={radialVal}
                options={radialBarChartData.options}
                height={320}
                className="-mt-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chart;
