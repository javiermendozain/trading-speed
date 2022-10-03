import { useCallback, useContext } from "react";
import { FAVORITE, LIST_SYMBOLS_OWNER } from "../utils";
import { ChartMoneySpeed } from "./";
import { TradingContext } from "./TradingContext";


export const SpeedBoard = () => {
    const {state} = useContext(TradingContext)

    const moneys = useCallback(() => {
        if (state.moneySelected == FAVORITE ) {
            return state.favories;
        }
        return LIST_SYMBOLS_OWNER.filter(sym => sym != FAVORITE).filter(sym => sym.includes(state.moneySelected))
    }
        , [state.moneySelected, state.favories])

    console.log(moneys(), { moneySelected: state.moneySelected });

    return <div style={{ display: "flex" }}>
        {moneys().map(symbol =>
            <div key={symbol} style={{ margin: "0px 8px", borderLeft: "1.8px solid black" }}  >

                <ChartMoneySpeed symbol={symbol} />
            </div>

        )}
    </div>
}