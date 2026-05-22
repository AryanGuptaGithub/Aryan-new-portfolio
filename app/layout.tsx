import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aryan Gupta — Full Stack Developer",
  description: "Full Stack Developer with 1.5+ years of experience. MERN stack, Next.js, React Native. Mumbai, India.",
  keywords: ["Full Stack Developer", "MERN", "Next.js", "React Native", "Mumbai"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
