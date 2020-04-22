interface Language {
  descriptions(): string[];
}

declare module "language-tags" {
  export function language(l: string): Language;
  export function region(l: string): string;
}
