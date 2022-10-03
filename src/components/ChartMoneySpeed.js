import { Icon } from "@mui/material";
import { useContext } from "react";
import { TechnicalAnalysis } from "react-tradingview-embed";
import { getUnique, INTERVALS, isFavorite } from "../utils";
import { TradingContext } from "./TradingContext";


const widgetProps = {
    colorTheme: "light", "width": 400, "height": 400,
}

const Internal = ({ symbol, i }) => {
    
    const { state, setState } = useContext(TradingContext)
    return <>
        {
            i == 1 && <Icon fontSize="240" color={isFavorite(state.favories, symbol) ? "warning" : "info"} onClick={() => setState({ favories: getUnique(state.favories, symbol) })}        >grade</Icon>
        }

        <TechnicalAnalysis
            key={i + symbol}
            widgetProps={{ ...widgetProps, symbol: symbol, interval: `${i}m`, }} />
    </>
}

export const ChartMoneySpeed = ({ symbol }) => INTERVALS.map(i => <Internal key={i} symbol={symbol} i={i} />)

