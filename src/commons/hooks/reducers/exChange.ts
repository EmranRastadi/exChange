import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface InitialInterface {
  rates: any,
  base : any,
  fromCurrency: any,
  toCurrency: any
}

const initialState: InitialInterface = {
  rates : null,
  base : null,
  fromCurrency: null,
  toCurrency: null
}

export const exChange = createSlice({
  name: 'exChange',
  initialState,
  reducers: {
    exChangeSetDataAction: (state, action: PayloadAction<any>) => {
      return {...state , rates: action.payload.rates,
        base : action.payload.base,
        fromCurrency: action.payload.fromCurrency,
        toCurrency: action.payload.toCurrency
      }
    },
    exChangeFromCurrnecy : (state , action : PayloadAction<any>) => {
      return {...state ,
        fromCurrency : action.payload
      }
    },
    exChangeToCurrnecy : (state , action : PayloadAction<any>) => {
      return {...state ,
        toCurrency : action.payload
      }
    }
  }
})

export const {exChangeSetDataAction} = exChange.actions;
export const {exChangeFromCurrnecy} = exChange.actions;
export const {exChangeToCurrnecy} = exChange.actions;

export default exChange.reducer;