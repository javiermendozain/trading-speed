import { useState } from "react";
import useLocalStorage from "use-local-storage";
import { SpeedBoard, SelectMoney } from "./components";
import { TradingContext } from "./components/TradingContext";
import { LIST_MONEYS } from "./utils";


const initState = {
    moneySelected: LIST_MONEYS[0],
    favories: []
}


const App = () => {
    const [state, dispatch] = useState(initState);
    

    const [db, setDb] = useLocalStorage("favories", []);

    const setState = (state)=>dispatch(prev=>({...prev, ...state }))

    console.log({state});
    return <>
        <TradingContext.Provider value={{ state, setState }} >
            <SelectMoney   />
            <SpeedBoard  />
        </TradingContext.Provider>
    </>

}

export default App;
