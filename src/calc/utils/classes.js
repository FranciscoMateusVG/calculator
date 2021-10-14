export class Calculus {
  constructor() {
    this.numero1 = "";
    this.expressao = "";
    this.numero2 = "";
  }

  recebe(button) {
    const etapa = this.qualEtapaEstamos(button.tipo);

    if (etapa === "numero1" || etapa === "numero2") {
      this[etapa] = this[etapa] + button.valor;
    }

    if (etapa === "expressao") {
      this[etapa] = button;
    }
  }

  qualEtapaEstamos(tipo) {
    const numero1Existe = this.numero1;
    const expressaoExiste = this.expressao;
    const numero2Existe = this.numero2;

    if (
      (!numero1Existe && tipo === "valor") ||
      (numero1Existe && tipo === "valor" && !expressaoExiste)
    ) {
      return "numero1";
    }
    if (
      (!expressaoExiste && numero1Existe) ||
      (expressaoExiste && tipo === "expressao")
    ) {
      return "expressao";
    }
    if (
      (!numero2Existe && tipo === "valor") ||
      (numero2Existe && tipo === "valor")
    ) {
      return "numero2";
    }

    return "";
  }

  clear() {
    this.numero1 = "";
    this.expressao = "";
    this.numero2 = "";
  }

  calcular() {
    const num1 = parseInt(this.numero1);
    const num2 = parseInt(this.numero2);
    return this.expressao(num1, num2);
  }
}

export class Valor {
  constructor(valor) {
    this.value = valor;
    this.tipo = "valor";
  }
}

export class Expressao extends Valor {
  constructor(valor, metodo) {
    super(valor);
    this.tipo = "expressao";
    this.metodo = metodo;
  }
}
