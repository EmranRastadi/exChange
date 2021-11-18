import {RateLabel, TransferRates, XChangeRate} from "../../atoms";
import {BsGraphUp} from "react-icons/all";
import useStyle from "../../../utils/style";
import {CircularProgress} from "@material-ui/core";
import React from "react";
interface Props{
  rateLabelTextFrom : string,
  rateLabelTextTo : string,
  loading : boolean,
  onChangeTranslate : (e : React.MouseEvent<HTMLElement>) => void
}

export default function RateBox(props : Props) {
  const classes = useStyle();
  return (
    <XChangeRate>
      {props.loading ? (
        <CircularProgress className={classes.spinner} />
      ) : (
        <>
          <BsGraphUp />
          <RateLabel title={props.rateLabelTextFrom}/>
          <span> = </span>
          <RateLabel title={props.rateLabelTextTo}/>
          <TransferRates onChangeTranslate={props.onChangeTranslate} />
        </>
      )}
    </XChangeRate>
  )
}