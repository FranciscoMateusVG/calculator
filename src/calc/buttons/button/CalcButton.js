import { Button, Grid, makeStyles } from "@material-ui/core";
import { useVisor } from "../../utils/store";

const CalcButton = ({ value }) => {
  const displayNumber = useVisor().set;
  const { buttonContainer } = useStyles();

  return (
    <>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          className={buttonContainer}
          onClick={() => displayNumber((p) => p + value)}
        >
          {value}
        </Button>
      </Grid>
    </>
  );
};

export default CalcButton;

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
