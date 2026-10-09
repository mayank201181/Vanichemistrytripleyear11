import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ProgressProvider } from "@/lib/store";
import { SiteHeader } from "@/components/SiteHeader";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { TutorProvider } from "@/lib/tutor";
import { TutorDock } from "@/components/TutorDock";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vani's Chemistry Lab · Edexcel IGCSE Chemistry (Triple)",
  description:
    "Edexcel International GCSE Chemistry 4CH1 (Triple): revision guides, a question bank with instant and AI marking, the teacher's consolidation paper, flashcards, interactive labs and an AI tutor.",
  appleWebApp: { capable: true, statusBarStyle: "default", title: "Chem Lab" },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#4f46e5",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-[var(--background)]">
        <ErrorBoundary>
          <ProgressProvider>
            <TutorProvider>
              <ErrorBoundary silent>
                <SiteHeader />
              </ErrorBoundary>
              <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-5 pb-24 sm:py-8 sm:pb-24">{children}</main>
              <footer className="border-t border-slate-200 bg-white py-5 pb-20 text-center text-xs text-slate-500 print:hidden">
                Edexcel International GCSE Chemistry 4CH1 · Triple · Your progress saves on this device · You&apos;ve got this 💪
              </footer>
              <ErrorBoundary silent>
                <TutorDock />
              </ErrorBoundary>
            </TutorProvider>
          </ProgressProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
