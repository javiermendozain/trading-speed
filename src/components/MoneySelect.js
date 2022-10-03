import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { LIST_MONEYS } from "../utils";
import { useContext } from "react";
import { TradingContext } from "./TradingContext";

export const SelectMoney = () => {
  const {setState} = useContext(TradingContext);
  return (
    <RadioGroup
      style={{ justifyContent: "center", marginBottom: "16px" }}
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
    >
      {LIST_MONEYS.map((money) => (
        <FormControlLabel
            key={money}
          style={{ margin: "0 4px" }}
          value={money}
          control={<Radio />}
          label={money}
          onClick={() => setState({moneySelected: money})}
        />
      ))}
    </RadioGroup>
  );
};
