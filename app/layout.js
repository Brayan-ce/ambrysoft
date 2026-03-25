import "./globals.css"
import Script from "next/script"

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://ambrysoft.com"),
  title: {
    default: "Ambrysoft — Sistema de Gestión Empresarial",
    template: "%s | Ambrysoft",
  },
  description:
    "Ambrysoft es el sistema todo-en-uno para ventas, inventario, créditos y obras. Gestiona tu negocio desde cualquier lugar.",
  keywords: [
    "sistema pos", "gestion empresarial", "ambrysoft", "ventas",
    "inventario", "creditos", "financiamiento", "obras", "saas", "tienda online",
  ],
  authors: [{ name: "Ambrysoft" }],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Ambrysoft — Sistema de Gestión Empresarial",
    description: "POS, créditos, inventario y obras en un solo sistema. Hecho para negocios que quieren crecer.",
    url: "https://ambrysoft.com",
    siteName: "Ambrysoft",
    locale: "es_DO",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ambrysoft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ambrysoft — Sistema de Gestión Empresarial",
    description: "POS, créditos, inventario y obras en un solo sistema.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060b14",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://accounts.google.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800;900&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Script
          src="https://cdn.jsdelivr.net/npm/ionicons@7.4.0/dist/ionicons/ionicons.esm.js"
          type="module"
          strategy="lazyOnload"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/ionicons@7.4.0/dist/ionicons/ionicons.js"
          noModule
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}