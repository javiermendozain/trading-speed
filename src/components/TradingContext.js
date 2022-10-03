import React from "react";

const initState = {
    state: {},
    setState: ()=>{}
}
export const TradingContext = React.createContext(initState);