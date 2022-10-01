import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { LIST_MONEYS } from "../utils";

export const SelectMoney = ({ onClick, moneySelected }) => {
  return (
    <RadioGroup
      style={{ justifyContent: "center", marginBottom: "16px" }}
      defaultValue={moneySelected}
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
          onClick={() => onClick(money)}
        />
      ))}
    </RadioGroup>
  );
};
