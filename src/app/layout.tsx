import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://linkme-demo.vercel.app"),
  title: { default: "Linkme — Everything about you, in one link", template: "%s | Linkme" },
  description: "Share everything you create, sell, and represent from one beautifully personal page.",
  openGraph: { title: "Linkme", description: "One link. Your entire digital world.", type: "website" },
  twitter: { card: "summary_large_image" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}
