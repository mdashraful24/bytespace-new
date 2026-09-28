import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteSpace — Learn Online with Hundreds of Courses",
  description:
    "ByteSpace is the leading online learning platform offering hundreds of courses in web development, data science, design, and more. Start learning today.",
  keywords:
    "online courses, e-learning, web development, data science, design, programming",
  openGraph: {
    title: "ByteSpace — Learn Online with Hundreds of Courses",
    description:
      "Get access to hundreds of courses and start learning from top instructors on ByteSpace.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
