import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000",
  ),
  title: "Visory AI — See Further. Sell Faster.",
  description:
    "Exclusive, pre-qualified personal injury leads delivered straight to your firm. Pay per result — every lead is yours alone, never shared with a competing attorney.",
  icons: {
    icon: "/assets/logo.png",
  },
  openGraph: {
    title: "Visory AI — See Further. Sell Faster.",
    description:
      "Exclusive, pre-qualified personal injury leads delivered straight to your firm. Pay per result — never shared with a competing attorney.",
    images: ["/assets/logo-full.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="grain">{children}</body>
    </html>
  );
}
