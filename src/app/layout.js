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
        <main className="max-w-1680 mx-auto mt-20 px-[80px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
