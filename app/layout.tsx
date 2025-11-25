
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
export const metadata = {
  title: 'Crestvista Properties LTD',
  description: 'Premium real estate sales and advisory across Nairobi and surrounding counties.',
  icons: {
    icon: '/Favicon.png',
    shortcut: '/Favicon.png',
    apple: '/Favicon.png'
  }
}
export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
