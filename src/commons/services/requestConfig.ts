import * as Api from '../utils/types';
import axios from 'axios';
import axiosRetry from "axios-retry";
import {REQUEST_HEADER} from "../utils/types";

const axiosRequest = axios.create({
  baseURL : Api.BASE_URL,
  timeout : Api.TIMEOUT,
  headers : REQUEST_HEADER
})

export default axiosRequest;