"use client";

import Chart from "react-apexcharts";

export default function AboutChart() {
	const options = {
		chart: {
			toolbar: {
				show: false,
			},
			parentHeightOffset: 0,
		},
		series: [
			{
				name: "My opportunities",
				data: [100, 90, 10, 70, 70, 50],
			},
		],
		dataLabels: {
			enabled: true,
			offsetY: 3,
		},
		colors: ["#FF4560"],
		markers: {
			size: 4,
			colors: ["#fff"],
			strokeColor: "#FF4560",
			strokeWidth: 2,
		},

		tooltip: {
			enabled: false,
		},
		xaxis: {
			categories: [
				"Позитив",
				"Трудолюбие",
				"Занудство",
				"Тех. скилы",
				"Софт. скилы",
				"Теоретик",
			],
			labels: {
				style: {
					fontSize: "16px",
				},
				offsetX: 0,
				offsetY: 0,
			},
		},
		yaxis: {
			show: true,
			tickAmount: 7,
			labels: {
				formatter: function (val: any, i: any) {
					if (i % 2 === 0) {
						return val;
					} else {
						return "";
					}
				},
			},
		},
	};

	return <Chart options={options} series={options.series} type={"radar"} />;
}
