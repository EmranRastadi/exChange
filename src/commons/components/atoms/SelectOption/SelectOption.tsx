import {ChangeEvent, useEffect, useState} from "react";
import {MenuItem, TextField} from "@material-ui/core";
import useStyle from "../../../utils/style";

interface Props {
  values: any,
  selectCurrency: any,
  handleChange: any
}

export default function SelectOption(props: Props) {

  let currencyKeys = Object.values(props.values); // get all keys from state
  let currencyValues = Object.keys(props.values); // get all values from state
  let indexOfCurrencyKey = currencyValues.indexOf(props.selectCurrency); // get indexOf currency selected
  const classes = useStyle();

  // detail of currency selected
  const [currency, setCurrency] = useState<any>({
    value: '^__^',
    type: 0.00
  });

  useEffect(() => {

    // check and change amount type and value
    if (indexOfCurrencyKey > -1) {
      // @ts-ignore
      let typeAmount = currencyKeys[indexOfCurrencyKey] ? parseFloat(currencyKeys[indexOfCurrencyKey]).toFixed(2) : 0.00
      setCurrency({
        value: currencyValues[indexOfCurrencyKey],
        type: typeAmount
      })
    }
  }, [indexOfCurrencyKey])

  return (
    <TextField
      className={classes.selectedOption}
      id="standard-select-currency"
      select
      value={props.selectCurrency}
      onChange={(e: ChangeEvent<HTMLInputElement>) => props.handleChange(e)}
      helperText={currency.value + " " + currency.type}
    >
      {props.values && Object.entries(props.values).map(([value, key]: any, index: number) => {
        return (
          <MenuItem key={index} value={value}>
            {value}
          </MenuItem>
        )
      })}
    </TextField>
  )
}