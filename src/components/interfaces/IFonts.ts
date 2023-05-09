export interface IFonts extends IBaseFonts {
  bold: string;
  regular: string;
  medium: string;
}

interface IBaseFonts {
  [key: string]: string;
}
