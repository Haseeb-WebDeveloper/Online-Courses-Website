import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import localFont from 'next/font/local'
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar"
import SmoothScrolling from "@/components/smooth-scrolling";
// import SplashCursor from "@/components/ui/animated-cursor";

const customFont = localFont({
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
  title: "Osiągnij Wolność Finansową | Sprawdzone Strategie Biznesu Online od Sho B",
  description: "Poznaj strategie budowy dochodowego biznesu online z Sho B. Dołącz do 20K+ uczniów i osiągnij wolność finansową dzięki kursom eCommerce i tradingu.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.className} ${customFont.variable}`}>
      <body className="antialiased min-h-screen overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrolling>
            {/* <div className=" absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" /> */}
            <Navbar />
            {/* <SplashCursor
              INITIAL_SPLATS={12} // More initial splats
              SPLAT_RADIUS={0.3}  // Larger splats
              VELOCITY_DISSIPATION={1.8} // Longer-lasting effects
            /> */}
            {children}
          </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  );
}
