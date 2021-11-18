import {Typography} from "@material-ui/core";
import useStyle from "../../../utils/style";
interface Props {
  title: number
}

export default function TextShow(props: Props) {
  const classes = useStyle();
  return (
    <Typography className={classes.showRate}>{props.title}</Typography>
  )
}