declare module "*.png" { const src: string; export default src; }
declare module "*.jpg" { const src: string; export default src; }
declare module "*.webp" { const src: string; export default src; }
declare module "*.svg" { const src: string; export default src; }

interface ImportMetaEnv {
  /** Optional override for the support endpoint (a public URL, never a secret). Defaults to /api/support. */
  readonly VITE_SUPPORT_ENDPOINT?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
