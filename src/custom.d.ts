// Custom file import SVG to TS

declare module "*.svg" {
  const content: any;
  export default content;
}
