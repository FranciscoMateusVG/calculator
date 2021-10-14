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
    height: "70vh",
    width: "40vh",
  },
});

export default Calc;

class Calculus {
  constructor() {
    this.numero1 = "";
    this.expressao = "";
    this.numero2 = "";
  }

  recebe(button) {
    const etapa = this.qualEtapaEstamos(button.tipo);
    const valido = this.confereTipo(etapa, button.tipo);

    if (!valido) return;

    if (etapa === "numero1" || etapa === "numero2") {
      this[etapa] = this[etapa] + button.valor;
    }

    if (etapa === "expressao") {
      this[etapa] = button;
    }

    if (button.tipo === "igual") {
      this.expressao.metodo(this.numero1, this.numero2);
    }
  }

  qualEtapaEstamos(tipo) {
    if (!this.numero1 || (this.numero1 && tipo === "valor")) {
      return "numero1";
    }
    if (!this.expressao || (this.expressao && tipo === "expressao")) {
      return "expressao";
    }
    if (!this.numero2 || (this.numero2 && tipo === "valor")) {
      return "numero2";
    }

    return "fim";
  }

  confereTipo(etapa, tipo) {
    if ((etapa === "numero1" || etapa === "numero2") && tipo !== "valor") {
      return false;
    }
    if (etapa === "expressao" && tipo !== "expressao") {
      return false;
    }
    if (etapa === "fim" && tipo === "igual") {
      return false;
    }

    return true;
  }

  clear() {
    this.numero1 = "";
    this.expressao = "";
    this.numero2 = "";
  }
}
