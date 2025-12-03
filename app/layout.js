import './globals.css'

export const metadata = {
  title: 'Jordan Daake | Engineer • Coach • Creator',
  description: 'Software Engineer, Posing Coach, and Photographer. Building software, building physiques, building things that matter.',
  keywords: ['software engineer', 'posing coach', 'bodybuilding', 'photography', 'cloud architecture'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
