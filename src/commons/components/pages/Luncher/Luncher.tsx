import {Container, Grid} from "@material-ui/core";
import useStyle from "../../../utils/style";
import {ConverterForm} from "../../organisms";

export default function Luncher() {
  const classes = useStyle();
  return (
    <Container>
      <Grid container className={classes.grow}>
        <ConverterForm/>
      </Grid>
    </Container>
  )
}