import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@punto-penal/ui/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// Tipografías PROVISORIAS (las que trae create-next-app). Para cambiarlas se
// cambia el import y se mantiene el nombre de la variable. Para títulos con otra
// tipografía, sumar una con variable "--font-display". Ver docs/diseno/identidad.md.
const bodyFont = Geist({
  variable: "--font-body",
  subsets: ["latin"],
});

const codeFont = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Punto Penal",
  description:
    "Resultados, archivo histórico, juegos diarios y simulador del fútbol argentino.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-AR"
      suppressHydrationWarning
      className={`${bodyFont.variable} ${codeFont.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
