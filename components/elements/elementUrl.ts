/** Public path for files in `/public/elements` (handles spaces in filenames). */
export function elementUrl(filename: string) {
  return `/elements/${encodeURIComponent(filename)}`;
}

/** Public path for files in `/public/elements2` (SVGs used as-is, full opacity). */
export function element2Url(filename: string) {
  return `/elements2/${encodeURIComponent(filename)}`;
}
