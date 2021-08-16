import { createState, useState } from "@hookstate/core";

const visor = createState("");

export const useVisor = () => useState(visor);
export const accessVisor = () => visor;
