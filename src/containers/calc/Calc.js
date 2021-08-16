import { Grid, makeStyles } from "@material-ui/core";
import Buttons from "./buttons/Buttons";
import Screen from "./screen/Screen";

const Calc = () => {
  const { calc } = useStyles();

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        className={calc}
      >
        <Screen />

        <Buttons />
      </Grid>
    </>
  );
};

const useStyles = makeStyles({
  calc: {
    background: "yellow",
    height: "60vh",
    width: "40vh",
  },
});

export default Calc;
