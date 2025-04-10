import type { Metadata } from "next";
import "../styles/global.css";
import Layout from "@/components/Layout/Layout";



export const metadata: Metadata = {
  title: "نوابل",
  description: "سایت نوابل",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
