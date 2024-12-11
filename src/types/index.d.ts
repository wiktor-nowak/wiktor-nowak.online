declare module "*.module.css" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.png" {
  const value: string | StaticImport;
  export = value;
}
