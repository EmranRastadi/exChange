import {Requests} from "../services/requests";

export interface CallProps {
  base : string | null,
  symbol : string | null
}

export class Api{
  async _call(){
    const response = await Requests.callCurrency()
    return response;
  }
  async _filterCall({queryKey} : any){
    const [_ , base , symbol] = queryKey;
    const response = await Requests.callFilterCurrency({base , symbol})
    return response;
  }
}