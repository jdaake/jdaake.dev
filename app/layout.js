import './globals.css'

export const metadata = {
  metadataBase: new URL('https://jdaake.dev'),
  title: 'Jordan Daake — Engineer & Posing Coach',
  description:
    'Software engineer and IFBB Pro Classic Physique competitor. Building cloud systems by day, coaching stage presentation by night.',
  keywords: [
    'software engineer',
    'posing coach',
    'bodybuilding',
    'classic physique',
    'cloud architecture',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;700;800;900&family=IBM+Plex+Mono:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400..700;1,6..72,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
