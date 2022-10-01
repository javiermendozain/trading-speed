import { useState } from "react";
import { SpeedBoard, SelectMoney } from "./components";
import { LIST_MONEYS } from "./utils";


const App = () => {
    const [moneySelected, setMoneySelected] = useState(LIST_MONEYS[0]);

    const handleOnChangeMoney = (money) => setMoneySelected(money);

    return <>
        <SelectMoney onClick={handleOnChangeMoney} moneySelected={moneySelected} />
        <SpeedBoard moneySelected={moneySelected} />
    </>

}

export default App;
