import React, { useEffect, useState } from "react";
import { ICoinDollarTime } from "../../../services";
import { GraphLine, IGraphLine } from "../../../components/Graph/GraphLine";

interface IGraphCoin {
  coinTime: ICoinDollarTime;
}

const GraphCoin = ({ coinTime }: IGraphCoin): JSX.Element => {
  const [graphData, setGraphData] = useState<IGraphLine>();

  const updateGraph = (coinPrices: ICoinDollarTime) => {
    if (coinPrices) {
      const labelDates = coinPrices.prices.map((c) =>
        new Date(c[0]).toLocaleDateString()
      );
      setGraphData({
        name: "Variación en el mercado",
        labels: labelDates,
        datasets: [
          {
            name: "USD",
            backgroundColor: "#3DF29D",
            borderColor: "#3DF29D",
            values: coinPrices.prices.map((c) => c[1]),
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
