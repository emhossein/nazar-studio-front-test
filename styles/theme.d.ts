import { Theme, PaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends PaletteOptions {
    palette:{
        type:string
    }
    
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}