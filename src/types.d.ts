
// This file helps TypeScript recognize JSX imports

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
