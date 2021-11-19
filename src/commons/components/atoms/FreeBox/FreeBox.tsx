import {Box} from "@material-ui/core";
import useStyle from "../../../utils/style";
import {RateFormProps} from "../../molecules/RateForm/RateForm";
export default function FreeBox(props : RateFormProps){
  const classes = useStyle();
  return (
    <Box className={props.type === "from" ? classes.flexBox : classes.flexBoxFrom}>
      {props.children}
    </Box>
  )
}