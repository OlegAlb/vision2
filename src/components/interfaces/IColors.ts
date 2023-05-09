export interface IColors extends IBaseColors {
  transparent: string;
  white: string;
  thirtyPercentWhite: string;
  fiftyPercentWhite: string;
  black: string;
  sixtyPercentBlack: string;
  dark: string;
  darkGrey: string;
  middleGrey: string;
  lightGrey: string;
}

interface IBaseColors {
  [key: string]: string;
}
