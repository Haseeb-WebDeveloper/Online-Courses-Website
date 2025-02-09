import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import localFont from 'next/font/local'
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar"
import SplashCursor from "@/components/ui/animated-cursor";

const customFont  = localFont({
  src: [
    {
      path: '../../public/fonts/NeueMachina-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueMachina-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueMachina-Ultrabold.otf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-custom'
})

export const metadata: Metadata = {
  title: "Unlock Financial Freedom | Proven Online Business Strategies by Sho B",
  description: "Learn proven strategies to build a profitable online business with Sho B. Join 20K+ students and unlock your financial freedom through expert eCommerce and trading courses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.className} ${customFont.variable}`}>
      <body className="antialiased min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {/* <SplashCursor /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
