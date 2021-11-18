import {Typography} from "@material-ui/core";
import useStyle from "../../../utils/style";
interface Props{
  title : string
}

export default function RateLabel(props : Props){
  const classes = useStyle();
  return (
    <Typography className={classes.typo}>{props.title}</Typography>
  )
}