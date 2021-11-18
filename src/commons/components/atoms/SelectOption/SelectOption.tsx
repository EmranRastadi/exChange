import {ChangeEvent, useState} from "react";
import {MenuItem, TextField} from "@material-ui/core";
import useStyle from "../../../utils/style";

interface Props {
  values: any,
  selectCurrency : any,
  handleChange : any
}

export default function SelectOption(props: Props) {
  const classes = useStyle();
  const [currency, setCurrency] = useState<any>({
    value : 0.00,
    type : '^__^'
  });


  return (
    <TextField
      className={classes.selectedOption}
      id="standard-select-currency"
      select
      value={props.selectCurrency}
      onChange={(e : ChangeEvent<HTMLInputElement>) => props.handleChange(e)}
      helperText={currency.value + " " + currency.type}
    >
      {props.values && Object.entries(props.values).map(([value, key]: any, index: number) => {
        // while (index < 15){
          return (
            <MenuItem key={index} value={value}>
              {value}
            </MenuItem>
          )
        // }
      })}
    </TextField>
  )
}