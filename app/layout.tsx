import "./globals.css";
import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://next-js-head-less-cms-2.vercel.app/"),
  title: {
    template: "%s | シンプルなコーポレートサイト",
    default: "シンプルなコーポレートサイト",
  },
  description: "Next.js + ヘッドレスCMSで始める!Webサイト",
  openGraph: {
    title: "シンプルなコーポレートサイト",
    description: "Next.js + ヘッドレスCMSで始める!Webサイト",
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "https://next-js-head-less-cms-2.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
