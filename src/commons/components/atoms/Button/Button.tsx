import {Button} from "@material-ui/core";
import useStyle from "../../../utils/style";
export default function ButtonER(props : any){
  const classes = useStyle();
  return (
    <Button onClick={() => props.onSubmit()} className={classes.submitBtn} {...props} variant="contained" color="primary">
      {props.children}
    </Button>

  )
}