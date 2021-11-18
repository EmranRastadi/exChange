import {Box, Grid} from '@material-ui/core'
import {RateForm, RateBox} from "../../molecules";
import useStyle from "../../../utils/style";
import {Button} from "../../atoms";
import React, {ChangeEvent, useEffect, useState} from "react";
import _ from 'lodash'
import {useQuery} from 'react-query';
import {GetCurrency, GetCurrencyFilter} from "../../../hooks/hooks";

export default function ConverterForm() {

  const classes = useStyle();

  const [dataCurrency, setDataCurrency] = useState<any>([])
  const [fromCurrency, setFromCurrency] = useState<string>('')
  const [toCurrency, setToCurrency] = useState<string>('')
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


  useEffect(() => {
    if (data1) {
      const toCurrencyValue = Object.keys(data1.data?.rates);
      setDataCurrency(data1.data?.rates)
      if (!fromCurrency) {
        setFromCurrency(data1.data?.base)
      }
      if (!toCurrency) {
        setToCurrency(toCurrencyValue[0])
      } else {
        let toFind = toCurrencyValue.indexOf(toCurrency);
        if (toFind > -1) {
          setToCurrency(toCurrencyValue[toFind])
        }
      }
    }
  }, [data1])

  // fromCurrency text input change and check num of decimal
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

  // reset form
  const onExChange = () => {
    setValue(1)
  }



  // get change toCurrency select option
  const handleChangeToCurrencyType = (e: ChangeEvent<HTMLInputElement>) => {
    setToCurrency(e.target.value);
    setValue(1)
  }



  // change place target from & to
  const onChangeTranslate = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    let to = toCurrency;
    let from = fromCurrency;
    setToCurrency(from);
    setFromCurrency(to);
  }

  // get change fromCurrency select option
  const handleChangeFromCurrencyType = (e: ChangeEvent<HTMLInputElement>) => {
    setFromCurrency(e.target.value)
    setValue(1)
  }


  return (
    <Grid item md={4} sm={10} className={classes.parentMain}>
      <Box width={'100%'} className={classes.mainRating}>
        <RateForm data={dataCurrency}
                  handleChangeCurrencyType={handleChangeFromCurrencyType}
                  type={"from"}
                  selectCurrency={fromCurrency}
                  value={value}
                  onChangeValue={onChange}/>
        <RateForm data={dataCurrency}
                  handleChangeCurrencyType={handleChangeToCurrencyType}
                  selectCurrency={toCurrency}
                  loading={loading2 ? loading2 : false}
                  type={"to"}
                  value={data2?.data?.rates[toCurrency]}
                  lotOf={value}/>
        <RateBox loading={loading2}
                 onChangeTranslate={onChangeTranslate}
                 rateLabelTextFrom={`1 ${fromCurrency}`}
                 rateLabelTextTo={`${data2 ? parseFloat(data2?.data?.rates[toCurrency]).toFixed(2) : 1} ${toCurrency}`}/>
      </Box>
      <Button disabled={value == 1 ? true : false} onClick={onExChange}>Exchange</Button>
    </Grid>
  )
}