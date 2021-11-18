import useStyle from "../../../utils/style";
export default function TextFieldER(props : any){
  const classes = useStyle()
  return (
    <input {...props}  className={classes.inputText} />
  )
}