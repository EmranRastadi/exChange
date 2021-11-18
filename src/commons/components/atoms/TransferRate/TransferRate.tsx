import React from "react";
import {Box} from "@material-ui/core";
import {BsArrowDownUp} from "react-icons/all";
import useStyle from "../../../utils/style";

interface Props{
  onChangeTranslate : (e : React.MouseEvent<HTMLElement>) =>  void
}

export default function  TransferRate(props : Props){
  const classes = useStyle();
  return (
    <Box className={classes.transferBox} onClick={props.onChangeTranslate}>
      <BsArrowDownUp />
    </Box>
  )
}