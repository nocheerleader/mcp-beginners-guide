import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Model Context Protocol (MCP) Beginner's Course",
  description: "Learn the basics of MCP and how to use it with Claude Desktop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-text font-sans">
        <div className="notion-style-container prose lg:prose-xl">
          {children}
        </div>
      </body>
    </html>
  );
}
