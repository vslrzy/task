import "./globals.css";
import Header from "@/partials/header";
import Footer from "@/partials/footer";

// Metadata
export const metadata = {
  title: "BIRainy",
  description: "BIRainy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-dewi">
        <Header />
        <main className="max-w-1680 mx-auto mt-30 1000:mt-20 px-[24px] 450:px-[32px] 760:px-[48px] 1000:px-[80px] ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
