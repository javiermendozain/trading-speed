import { TechnicalAnalysis } from "react-tradingview-embed";
import { INTERVALS } from "../utils";


const widgetProps = {
    colorTheme: "light", "width": 400, "height": 400,
}


export const ChartMoneySpeed = ({ symbol }) => 
     INTERVALS.map(i => <TechnicalAnalysis
        key={i + symbol}
        widgetProps={{ ...widgetProps, symbol: symbol, interval: `${i}m`, }} />
    )