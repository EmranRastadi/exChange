import {Box} from "@material-ui/core";
import useStyle from "../../../utils/style";
export default function XChangeRate(props : any){
  const classes = useStyle();
  return (
    <Box className={classes.xChangeShow}>
      <Box className={classes.XChangeContent}>
        {props.children}
      </Box>
    </Box>
  )
}