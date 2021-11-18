import {makeStyles} from "@material-ui/core";

const useStyle = makeStyles({
  grow: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  spinner : {
    width : ' 25px !important',
    height : '25px !important',
  },
  parentMain : {
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'center',
    rowGap : '20px'
  },
  typo: {
    fontSize: '13px',
  },
  submitBtn: {
    borderRadius: '35px',
    fontSize : '11px'
  },
  showRate : {
    color: "#939393",
    fontSize : '25px',
    textAlign : 'right'
  },
  transferBox: {
    position: 'absolute',
    left: '10px',
    bottom: 0,
    width: '25px',
    height: '25px',
    top: 0,
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    cursor: 'pointer',
    background: '#fff',
    borderRadius: '50px',
    boxShadow: '0 0 10px 2px rgba(0 0 0 /15%)'
  },
  selectedOption: {
    width: '80px',
  },
  flexBox: {
    padding: '0 20px',
    height: '90px',
    display: "flex",
    alignItems: 'center',
  }, flexBoxFrom: {
    padding: '0 20px',
    alignItems: 'center',
    background: '#eee',
    height: '90px',
    display: "flex"
  },
  xChangeShow: {
    position: 'absolute',
    height: '40px',
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  XChangeContent: {
    display: 'flex',
    minWidth : '200px',
    flexDirection: 'row',
    fontSize: '11px',
    height : '30px',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: '7px',
    background: '#fff',
    borderRadius: '30px',
    padding: '2px 10px',
    color: '#3f51b5',
    boxShadow: '0 0 10px 2px rgba(0 0 0 / 10%)'
  },
  inputText: {
    width: '100%',
    outline: 'none',
    background: 'unset',
    padding: '0',
    height: '100% !important',
    border: 'unset',
    fontSize: '21px',
    textAlign: "right"
  },
  mainRating: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '5px',
    boxShadow: '0 0 10px 2px rgba(0 0 0 / 10%)'
  }
})

export default useStyle