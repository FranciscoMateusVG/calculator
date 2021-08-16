import { Grid, makeStyles } from "@material-ui/core";
import { useVisor } from "../utils/store";

const Screen = () => {
  const { screenWrapper } = useStyles();
  const displayNumber = useVisor().get();

  return (
    <>
      <Grid
        container
        justifyContent="flex-end"
        alignItems="center"
        className={screenWrapper}
      >
        {displayNumber}
      </Grid>
    </>
  );
};

export default Screen;

const useStyles = makeStyles({
  screenWrapper: {
    background: "blue",
    height: "20%",
    marginTop: "10px",
    width: "95%",
    color: "white",
    fontSize: "3.2rem",
    paddingRight: "10px",
  },
});
