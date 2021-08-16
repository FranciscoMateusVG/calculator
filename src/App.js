import { Grid, makeStyles } from "@material-ui/core";
import Calc from "./containers/calc/Calc";

const App = () => {
  const { calcWrapper } = useStyles();

  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={calcWrapper}
      >
        <Grid item>
          <Calc />
        </Grid>
      </Grid>
    </>
  );
};

const useStyles = makeStyles({
  calcWrapper: {
    height: "100vh",
  },
});

export default App;
