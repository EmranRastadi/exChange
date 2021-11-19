import {Box} from "@material-ui/core";
import useStyle from "../../../utils/style";

interface Props{
  children : any
}

export default function XChangeRate(props : Props){
  const classes = useStyle();
  return (
    <Box className={classes.xChangeShow}>
      <Box className={classes.XChangeContent}>
        {props.children}
      </Box>
    </Box>
  )
}