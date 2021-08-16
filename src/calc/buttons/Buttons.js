import { Grid, makeStyles } from "@material-ui/core";
import { buttonsArr } from "../utils/consts";
import CalcButton from "./button/CalcButton";

const Buttons = () => {
  const { buttonsWrapper } = useStyles();

  return (
    <>
      <Grid container direction="row" spacing={1} className={buttonsWrapper}>
        {geraCalcButtons()}
      </Grid>
    </>
  );
};

const geraCalcButtons = () =>
  buttonsArr.map((button, index) => (
    <CalcButton key={index} value={button.value} />
  ));

export default Buttons;

const useStyles = makeStyles({
  buttonsWrapper: {
    background: "blue",
    height: "74%",
    width: "95%",
    marginBottom: "10px",
  },
  buttonContainer: {
    background: "orange",
    height: "100%",
    width: "100%",
    color: "white",
    fontSize: "2rem",
    marginBottom: "10px",
  },
});
