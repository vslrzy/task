import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// PP NEUE font import
export const pp_neue = localFont({
  src: [
    {
      path: "../fonts/neue/PPNeueMachina-Light.woff2",
      weight: "400",
      style: "light",
    },
    {
      path: "../fonts/neue/PPNeueMachina-Regular.woff2",
      weight: "500",
      style: "regular",
    },
    {
      path: "../fonts/neue/PPNeueMachina-Ultrabold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
});

// RW DEWI font import
import localFont from "next/font/local";
import Header from "@/partials/header";
import Footer from "@/partials/footer";

export const rw_dewi = localFont({
  src: [
    {
      path: "../fonts/dewi/RFDewi-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/dewi/RFDewi-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
    { path: "../fonts/dewi/RFDewi-Bold.woff2", weight: "700", style: "normal" },
    {
      path: "../fonts/dewi/RFDewi-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/dewi/RFDewi-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/dewi/RFDewi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/dewi/RFDewi-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/dewi/RFDewi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/dewi/RFDewi-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/dewi/RFDewi-SemiboldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    { path: "../fonts/dewi/RFDewi-Thin.woff2", weight: "100", style: "normal" },
    {
      path: "../fonts/dewi/RFDewi-ThinItalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../fonts/dewi/RFDewi-Ultrabold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/dewi/RFDewi-UltraboldItalic.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "../fonts/dewi/RFDewi-Ultralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/dewi/RFDewi-UltralightItalic.woff2",
      weight: "200",
      style: "italic",
    },

    // Extended
    {
      path: "../fonts/dewi/RFDewiExtended-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/dewi/RFDewiExtended-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/dewi/RFDewiExtended-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/dewi/RFDewiExtended-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/dewi/RFDewiExtended-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/dewi/RFDewiExtended-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/dewi/RFDewiExtended-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/dewi/RFDewiExtended-SemiboldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/dewi/RFDewiExtended-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/dewi/RFDewiExtended-ThinItalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../fonts/dewi/RFDewiExtended-Ultrabold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/dewi/RFDewiExtended-UltraboldItalic.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "../fonts/dewi/RFDewiExtended-Ultralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/dewi/RFDewiExtended-UltralightItalic.woff2",
      weight: "200",
      style: "italic",
    },

    // Expanded
    {
      path: "../fonts/dewi/RFDewiExpanded-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/dewi/RFDewiExpanded-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
    {
      path: "../fonts/dewi/RFDewiExpanded-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/dewi/RFDewiExpanded-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/dewi/RFDewiExpanded-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/dewi/RFDewiExpanded-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/dewi/RFDewiExpanded-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/dewi/RFDewiExpanded-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/dewi/RFDewiExpanded-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/dewi/RFDewiExpanded-SemiboldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/dewi/RFDewiExpanded-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/dewi/RFDewiExpanded-ThinItalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../fonts/dewi/RFDewiExpanded-Ultrabold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/dewi/RFDewiExpanded-UltraboldItalic.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "../fonts/dewi/RFDewiExpanded-Ultralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/dewi/RFDewiExpanded-UltralightItalic.woff2",
      weight: "200",
      style: "italic",
    },

    // Condensed
    {
      path: "../fonts/dewi/RFDewiCondensed-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/dewi/RFDewiCondensed-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
    {
      path: "../fonts/dewi/RFDewiCondensed-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/dewi/RFDewiCondensed-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/dewi/RFDewiCondensed-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/dewi/RFDewiCondensed-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/dewi/RFDewiCondensed-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/dewi/RFDewiCondensed-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/dewi/RFDewiCondensed-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/dewi/RFDewiCondensed-SemiboldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/dewi/RFDewiCondensed-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/dewi/RFDewiCondensed-ThinItalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../fonts/dewi/RFDewiCondensed-Ultrabold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/dewi/RFDewiCondensed-UltraboldItalic.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "../fonts/dewi/RFDewiCondensed-Ultralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/dewi/RFDewiCondensed-UltralightItalic.woff2",
      weight: "200",
      style: "italic",
    },
  ],
});

export const metadata = {
  title: "BIRainy",
  description: "BIRainy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rw_dewi.className} antialiased`}>
        <Header />
        <main className="max-w-1680 mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
