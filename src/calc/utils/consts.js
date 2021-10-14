import { Expressao, Valor } from "./classes";

export const buttonsArr = [
  { value: "c" },
  { value: "+-" },
  { value: "%" },
  new Expressao("/", (a, b) => a / b),
  new Valor("7"),
  new Valor("8"),
  new Valor("9"),
  new Expressao("X", (a, b) => a * b),
  new Valor("4"),
  new Valor("5"),
  new Valor("6"),
  new Expressao("-", (a, b) => a - b),
  new Valor("1"),
  new Valor("2"),
  new Valor("3"),
  new Expressao("+", (a, b) => a + b),
  new Valor("0"),
  { value: "." },
  { value: "=" },
];
