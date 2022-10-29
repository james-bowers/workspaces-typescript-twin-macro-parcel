import { DOMAttributes } from 'react';
import { TwStyle } from 'twin.macro';
import styledImport, { css as cssImport } from 'styled-components';

// import {} from 'styled-components/cssprop';
declare namespace React {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: any;
    tw?: any;
  }
}

declare module 'styled-components' {
  export interface DefaultTheme {
    // Your theme stuff here
  }
}

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport;
  const css: typeof cssImport;
}

