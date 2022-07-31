import React, { useEffect, useMemo, useState } from "react";
import { HistoryPrediction } from "src/core/models";
import { Card } from "src/app/components";
import { GraphLine, IGraphLine } from "src/app/components/Graph/GraphLine";

interface IEstimationCoin {
  coinValues: number[];
  historyPrediction: HistoryPrediction;
}

const EstimationCoin = ({ coinValues, historyPrediction }: IEstimationCoin) => {
  const [graphData, setGraphData] = useState<IGraphLine>();
  
  const colors = useMemo(
    () => ["#F272A1", "#6D5DA6", "#232B59", "#60BFBF", "#F2958D", "#593E25"],
    []
  );

  const valueToday = coinValues[coinValues.length - 1];
  useEffect(() => {
    setGraphData({
      name: "Posibles pronósticos",
      labels: historyPrediction.days,
      datasets: historyPrediction.predictions.map((r, i) => ({
        name: `${50 + r.reliability / 2}%`,
        backgroundColor: colors[i],
        borderColor: colors[i],
        values: r.values,
      })),
    });
  }, [historyPrediction, colors]);

  return (
    <div className="estimation_coin">
      <h2 className="estimation_coin__title">Pronóstico</h2>
      <div className="estimation_coin__text">
        A continuación, te presentamos posibles valores para los próximos 7
        días, con distintos métodos, cada método tiene un margen de
        confiabilidad:
      </div>
      <div className="estimation_coin__text">
        <span className="estimation_coin__badge">
          Valor hoy ${valueToday.toFixed(2)} USD
        </span>
      </div>
      <Card>
        <>{graphData && <GraphLine {...graphData} />}</>
      </Card>
      <div className="estimation_coin__container">
        <table className="estimation_coin__table">
          <thead>
            <tr>
              <th>Método</th>
              <th>Confiabilidad</th>
              {historyPrediction.days.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {historyPrediction.predictions.map((p) => (
              <tr key={p.nameMethod}>
                <td>{p.nameMethod}</td>
                <td>{50 + p.reliability / 2}%</td>
                {p.values.map((v, i) => (
                  <td key={`${p.nameMethod}${v}${i}`}>{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EstimationCoin;
