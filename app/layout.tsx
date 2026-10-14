import type { Metadata, Viewport } from "next"
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/data/site"
import { jsonLd } from "@/lib/json-ld"
import "@/styles/index.css"

export const metadata: Metadata = {
  metadataBase: new URL(new URL(SITE_URL).origin), // origin only: Next already prepends the basePath to file-based metadata
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: `${SITE_NAME} Portfolio`,
  keywords: [
    "Enes Ekici",
    "portfolio",
    "computer engineer",
    "data engineer",
    "software engineer",
    "EPITA",
    "IBM i",
    "AS400",
    "RPG",
    "ILE RPG",
    "CL/CLLE",
    "IBM DB2",
    "ERP",
    "analyst developer",
    "Apache Spark",
    "Apache Iceberg",
    "AWS",
    "Flutter",
    "Supabase",
    "Python",
    "Java",
    "C",
  ],
  authors: [{ name: SITE_NAME, url: `${SITE_URL}/` }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/`,
    siteName: `${SITE_NAME} Portfolio`,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: false },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
}

// Applies the saved theme before first paint (no flash). Dark is the default, defined in styles/theme.css.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          // JSON-LD is built from static data (lib/json-ld.ts), not user input
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  )
}
