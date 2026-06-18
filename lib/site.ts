export const DEFAULT_SITE_URL = "https://eindev.ir"

export function normalizeSiteUrl(url: string) {
  return url.replace(/\/+$/, "")
}

export function getSiteUrl(envUrl = process.env.NEXT_PUBLIC_SITE_URL) {
  return normalizeSiteUrl(envUrl || DEFAULT_SITE_URL)
}

export const SITE_URL = getSiteUrl()