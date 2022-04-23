import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ScatterDataPoint,
  BubbleDataPoint,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";

export interface IGraphLine {
  name: string;
  labels: string[];
  datasets: {
    name: string;
    backgroundColor: string;
    borderColor: string;
    values: number[];
  }[];
}

export const GraphLine = ({
  name,
  labels,
  datasets,
}: IGraphLine): JSX.Element => {
  const [options, setOptions] = useState<ChartOptions>();
  const [data, setData] =
    useState<
      ChartData<
        "line",
        (number | ScatterDataPoint | BubbleDataPoint | null)[],
        unknown
      >
    >();

  useEffect(() => {
    setOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top" as const,
        },
        title: {
          display: true,
          text: name,
        },
      },
    });

    setData({
      labels,
      datasets: datasets.map((dataset) => ({
        label: dataset.name,
        backgroundColor: dataset.backgroundColor,
        borderColor: dataset.borderColor,
        data: dataset.values,
      })),
    });
  }, [labels, datasets, name]);

  useEffect(() => {
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );
  }, []);

  return <>{data && <Line options={options} data={data} />}</>;
};
