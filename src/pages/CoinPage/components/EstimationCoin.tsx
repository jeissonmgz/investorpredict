import React, { useEffect, useState } from "react";
import { ICoinDollarTime } from "../../../services/coins.services";
import { IRegresion, Regresion } from "../../../utils/regresion";
import { Time } from "../../../utils/time";

interface IEstimationCoin {
  coinTime: ICoinDollarTime;
}

const EstimationCoin = ({ coinTime }: IEstimationCoin) => {
  const [posibleValue, setPosibleValue] = useState<IRegresion[]>([]);
  const nextDays = Time.getNextDays(7);

  useEffect(() => {
    const valuesUSD = coinTime.prices.map((c, index) => [index, c[1]]);
    setPosibleValue(
      Regresion.getRegresions(valuesUSD).filter((r) => !isNaN(r.reliability))
    );
  }, [coinTime]);

  return (
    <>
      <table>
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
    </>
  );
};

export default EstimationCoin;
