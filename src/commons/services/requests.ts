import axiosRequest from "./requestConfig";
import {CallProps} from "../api/api";

export const Requests = {
  callCurrency: () => axiosRequest.get("latest/"),
  callFilterCurrency: (data: CallProps | undefined) => axiosRequest.get(`latest?base=${data?.base}&symbols=${data?.symbol}`),
}