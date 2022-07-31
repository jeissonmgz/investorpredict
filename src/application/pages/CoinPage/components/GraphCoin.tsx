import React, { useEffect, useState } from "react";
import { HistoryPrice } from "../../../../core/models";
import { GraphLine, IGraphLine } from "../../../components/Graph/GraphLine";

interface IGraphCoin {
  coinTime: HistoryPrice[];
}

const GraphCoin = ({ coinTime }: IGraphCoin): JSX.Element => {
  const [graphData, setGraphData] = useState<IGraphLine>();

  const updateGraph = (coinTimeValues: HistoryPrice[]) => {
    if (coinTimeValues) {
      const labelDates = coinTimeValues.map(c =>
        c.day
      );
      setGraphData({
        name: "Variación en el mercado",
        labels: labelDates,
        datasets: [
          {
            name: "USD",
            backgroundColor: "#3DF29D",
            borderColor: "#3DF29D",
            values: coinTimeValues.map(c=> c.value),
          },
        ],
      });
    }
  };

  useEffect(() => {
    updateGraph(coinTime);
  }, [coinTime]);

  return <>{graphData && <GraphLine {...graphData} />}</>;
};

export default GraphCoin;
