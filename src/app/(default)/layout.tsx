"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen">
      <Header />
      <main className="mx-auto w-full max-w-7xl overflow-hidden px-5 md:py-10 md:px-10 lg:px-20 lg:py-2">
        {children}
      </main>
      <Footer />
    </div>
  );
}
