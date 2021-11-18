import FreeBox from "../../atoms/FreeBox/FreeBox";
import {SelectOption, TextField, TextShow} from "../../atoms";
import {Box, CircularProgress} from "@material-ui/core";
import {ChangeEvent} from "react";
import useStyle from "../../../utils/style";

export interface RateFormProps {
  type: string, // from or to
  data: any, // rates data
  children?: any,
  value?: number, // default value and change value
  selectCurrency: any, // currency selected on selectOption
  loading?: boolean,
  lotOf ? :number, // num of fromCurrency
  onChangeValue?: (e: ChangeEvent<HTMLInputElement>) => void,
  handleChangeCurrencyType: any
}

export default function RateForm(props: RateFormProps) {
  const classes = useStyle()

  const _renderTextShow = () => {
    if (props.loading) {
      return (<CircularProgress className={classes.spinner}/>)
    } else {
      // @ts-ignore
      return (<TextShow title={props.value ? parseFloat(props.value * (props.lotOf ? props.lotOf : 1)).toFixed(2)  : 1}/>)
    }
  }

  return (
    <>
      <FreeBox {...props}>
        <Box>
          <SelectOption values={props.data} handleChange={props.handleChangeCurrencyType}
                        selectCurrency={props.selectCurrency}/>
        </Box>
        <Box flex={1} display={'flex'} justifyContent={'end'}>
          {props.type === "from" ? (
            <TextField value={props.value ? props.value : 1} type={"number"}
                       onChange={(e: ChangeEvent<HTMLInputElement>) => props.onChangeValue ? props.onChangeValue(e) : null}
                       placeholder={"0"}/>
          ) : _renderTextShow()}
        </Box>
      </FreeBox>
    </>
  )
}