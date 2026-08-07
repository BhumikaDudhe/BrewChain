import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { WalletProvider } from "../context/WalletContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "BrewChain",
  description: "Support creators with a cup of crypto coffee",
};


export default function RootLayout({ children }) {

  return (

    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >

      <body>


        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4500,

            style: {
              background: "#FFF7F0",
              color: "#5A3825",
              border: "1px solid #E5C5A3",
              borderRadius: "20px",
              padding: "18px",
              boxShadow: "0 15px 35px rgba(70,35,0,.18)",
              fontWeight: "500",
            },

            success: {
              iconTheme: {
                primary: "#7B4B2A",
                secondary: "#FFF",
              },
            },

            error: {
              iconTheme: {
                primary: "#D14343",
                secondary: "#FFF",
              },
            },
          }}
        />


        <WalletProvider>

          {children}

        </WalletProvider>


      </body>

    </html>

  );
}