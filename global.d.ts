export {};

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.sass' {
  const content: Record<string, string>;
  export default content;
}

declare global {
  interface Grecaptcha {
    ready(callback: () => void): void;
    execute(siteKey: string, options: { action: string }): Promise<string>;
    render(container: string | HTMLElement, parameters: Record<string, unknown>): void;
  }

  interface Window {
    grecaptcha?: Grecaptcha;
  }
}