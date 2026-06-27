import type { ReactNode } from "react";
import { Nav, Footer, StickyCtas, FloatingWhatsApp, Trust } from "@/routes/index";

export function SectionPage({ children, hideTrust = false }: { children: ReactNode; hideTrust?: boolean }) {
  return (
    <div className="min-h-screen bg-background pb-16 lg:pb-0">
      <Nav />
      <main className="pt-24">
        {children}
      </main>
      {!hideTrust && <Trust />}
      <Footer />
      <StickyCtas />
      <FloatingWhatsApp />
    </div>
  );
}
