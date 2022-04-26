import React, { useEffect, useState } from "react";
import { GraphLine, IGraphLine } from "../../../components/Graph/GraphLine";
import { ICoinDollarTime } from "../../../services/coins.services";
import { IRegresion, Regresion } from "../../../utils/regresion";
import { Time } from "../../../utils/time";

interface IEstimationCoin {
  coinTime: ICoinDollarTime;
}

const EstimationCoin = ({ coinTime }: IEstimationCoin) => {
  const [posibleValue, setPosibleValue] = useState<IRegresion[]>([]);
  const [graphData, setGraphData] = useState<IGraphLine>();
  const nextDays = Time.getNextDays(7);

  const colors = [
    "#F272A1",
    "#6D5DA6",
    "#232B59",
    "#60BFBF",
    "#F2958D",
    "#593E25",
  ];

  const valueToday = coinTime.prices[coinTime.prices.length - 1][1];
  useEffect(() => {
    const valuesUSD = coinTime.prices.map((c, index) => [index, c[1]]);
    const regresion = Regresion.getRegresions(valuesUSD).filter(
      (r) => !isNaN(r.reliability)
    );
    setPosibleValue(regresion);
    setGraphData({
      name: "Posibles pronósticos",
      labels: nextDays,
      datasets: regresion.map((r, i) => ({
        name: `${50 + r.reliability / 2}%`,
        backgroundColor: colors[i],
        borderColor: colors[i],
        values: r.values,
      })),
    });
  }, [coinTime]);

  return (
    <div className="estimation_coin">
      <h2 className="estimation_coin__title">Pronóstico</h2>
      <div className="estimation_coin__text">
      A continuación, te presentamos posibles valores para los próximos 7 días,
      con distintos métodos, cada método tiene un margen de confiabilidad:
      </div>
      <div className="estimation_coin__text">
      <span className="estimation_coin__badge">
        Valor hoy ${valueToday.toFixed(2)} USD
      </span>
      </div>
      <div className="card">
        {graphData && <GraphLine {...graphData} />}
      </div>
      <div className="estimation_coin__container">
        <table className="estimation_coin__table">
          <thead>
            <tr>
              <th>Método</th>
              <th>Confiabilidad</th>
              {nextDays.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {posibleValue.map((p) => (
              <tr key={p.name}>
                <td>{p.name}</td>
                <td>{50 + p.reliability / 2}%</td>
                {p.values.map((v, i) => (
                  <td key={`${p.name}${v}${i}`}>{v}</td>
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
