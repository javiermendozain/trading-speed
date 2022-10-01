import { useCallback } from "react";
import { LIST_SYMBOLS_OWNER } from "../utils";
import { ChartMoneySpeed } from "./";



export const SpeedBoard = ({ moneySelected }) => {

    const moneys = useCallback(() =>
        LIST_SYMBOLS_OWNER.filter(sym => sym.includes(moneySelected))
        , [moneySelected])

    return <div style={{ display: "flex" }}>{
        moneys().map(symbol =>
            <div key={symbol} style={{ margin: "0px 8px", borderLeft: "1.8px solid black" }}  >
                <ChartMoneySpeed symbol={symbol} />
            </div>

        )
    }</div>
}