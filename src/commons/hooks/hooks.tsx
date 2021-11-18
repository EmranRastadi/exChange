import React from "react";
import {Api, CallProps} from '../api/api';
import {useQuery} from "react-query";

let api = new Api();
export const GetCurrency = () => {
  return useQuery("currency" , api._call)
}
export const GetCurrencyFilter = (data : CallProps) => {
  const {base , symbol} = data;
  return useQuery(["currency" , base , symbol] , api._filterCall)
}


