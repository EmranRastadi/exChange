import {Box, Grid} from '@material-ui/core'
import {RateForm, RateBox} from "../../molecules";
import useStyle from "../../../utils/style";
import {Button} from "../../atoms";
import React, {ChangeEvent, useEffect, useState} from "react";
import _ from 'lodash'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../utils/store";
import {exChangeSetDataAction, exChangeFromCurrnecy, exChangeToCurrnecy} from "../../../hooks/reducers/exChange";
import {useQuery} from 'react-query';
import {GetCurrency, GetCurrencyFilter} from "../../../hooks/hooks";

export default function ConverterForm() {

  const classes = useStyle();

  const [dataCurrency, setDataCurrency] = useState<any>([])
  const [fromCurrency, setFromCurrency] = useState<string>('')
  const [toCurrency, setToCurrency] = useState<string>('')
  const [exrateChange, setExrateChanges] = useState<any>(1)
  const [value, setValue] = useState<number>(1)

  const queryMultiple = () => {
    const withoutFilter = GetCurrency();
    const withFilter = GetCurrencyFilter({
      base: fromCurrency,
      symbol: toCurrency
    })
    return [withoutFilter, withFilter]
  }

  const [
    {isLoading: loading1, data: data1},
    {isLoading: loading2, data: data2}
  ] = queryMultiple();


  let amountTo


  useEffect(() => {
    // if (data1) {
      if (data2) {
        const toCurrencyKeys = Object.values(data2.data?.rates);
        const toCurrencyValue = Object.keys(data2.data?.rates);
        setDataCurrency(data2.data?.rates)
        if (!fromCurrency) {
          setFromCurrency(data2.data?.base)
        }
        if (!toCurrency) {
          setToCurrency(toCurrencyValue[0])
          setExrateChanges(data2.data?.rates[toCurrencyValue[0]])
        }else{
          let toFind = toCurrencyValue.indexOf(toCurrency);
          if(toFind > -1) {
            setToCurrency(toCurrencyValue[toFind])
            setExrateChanges(data2.data?.rates[toCurrencyValue[toFind]])
          }
        }
    }

  }, [data2])

  amountTo = value * exrateChange;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    let splitNumToStr = e.target.value.toString().split(".");
    if (splitNumToStr.length === 1) {
      setValue(parseFloat(e.target.value))
    } else if (splitNumToStr.length > 1) {
      if (splitNumToStr[1].length < 3) {
        setValue(parseFloat(e.target.value))
      }
    } else {
      return;
    }
  }

  const onSubmit = () => {
  }

  const handleChangeToCurrencyType = (e: ChangeEvent<HTMLInputElement>) => {
    setToCurrency(e.target.value);
    setValue(1)
  }


  const onChangeTranslate = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    let to = toCurrency;
    let from = fromCurrency;

    setToCurrency(from);
    setFromCurrency(to);
  }

  const handleChangeFromCurrencyType = (e: ChangeEvent<HTMLInputElement>) => {
    setFromCurrency(e.target.value)
    setValue(1)
  }


  return (
    <Grid item md={4} sm={10} className={classes.parentMain}>
      <Box width={'100%'} className={classes.mainRating}>
        <RateForm data={dataCurrency} handleChangeCurrencyType={handleChangeFromCurrencyType}
                  type={"from"} selectCurrency={fromCurrency} value={value}
                  currency={dataCurrency} onChangeValue={onChange}/>
        <RateForm data={dataCurrency} handleChangeCurrencyType={handleChangeToCurrencyType}
                  selectCurrency={toCurrency} loading={loading2 ? loading2 : false} type={"to"} value={amountTo}
                  currency={dataCurrency}/>
        <RateBox loading={loading2} onChangeTranslate={onChangeTranslate} rateLabelTextFrom={`150000# ${fromCurrency}`}
                 rateLabelTextTo={`150000$ ${toCurrency}`}/>
      </Box>
      <Button onClick={onSubmit}>Exchange</Button>

    </Grid>
  )
}