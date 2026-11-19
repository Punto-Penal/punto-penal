import type { Metadata } from "next";
import { Logo } from "@punto-penal/ui/brand/logo";
import { Button } from "@punto-penal/ui/components/button";
import { ThemeToggle } from "@/components/theme-toggle";

// Muestrario de la identidad: tokens, logo y componentes en claro y oscuro.
// Sirve para revisar la paleta al cambiarla. Ver docs/diseno/identidad.md.
export const metadata: Metadata = {
  title: "Identidad visual · Punto Penal",
  robots: { index: false },
};

const colors = [
  ["background", "foreground"],
  ["card", "card-foreground"],
  ["primary", "primary-foreground"],
  ["secondary", "secondary-foreground"],
  ["muted", "muted-foreground"],
  ["accent", "accent-foreground"],
  ["destructive", "background"],
  ["success", "success-foreground"],
  ["warning", "warning-foreground"],
  ["border", "foreground"],
] as const;

const charts = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"] as const;

const buttonVariants = ["default", "secondary", "outline", "ghost", "destructive", "link"] as const;

export default function DesignPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-6 py-12">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <Logo className="text-3xl" />
          <p className="text-muted-foreground">Identidad visual · paleta provisoria</p>
        </div>
        <ThemeToggle />
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-lg font-semibold">Colores</h2>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {colors.map(([name, text]) => (
            <li
              key={name}
              className="flex h-24 flex-col justify-end rounded-lg border p-3 text-sm"
              style={{ background: `var(--${name})`, color: `var(--${text})` }}
            >
              <span className="font-medium">{name}</span>
              <span className="font-mono text-xs opacity-80">--{name}</span>
            </li>
          ))}
        </ul>
        <ul className="flex gap-3">
          {charts.map((name) => (
            <li key={name} className="flex flex-col items-center gap-1 text-xs">
              <span className="size-10 rounded-md border" style={{ background: `var(--${name})` }} />
              <span className="font-mono">{name}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-lg font-semibold">Tipografía</h2>
        <p className="font-heading text-4xl font-bold tracking-tight">Local 2 - 1 Visitante</p>
        <p className="max-w-prose">
          Texto de cuerpo: resultados, tablas y crónicas. Primera División, Primera Nacional y el
          ascenso, con el archivo histórico desde los primeros campeonatos.
        </p>
        <p className="text-muted-foreground text-sm">Texto secundario: fecha 12 · sábado 21:30</p>
        <p className="font-mono text-sm">PJ 14 · PG 9 · PE 3 · PP 2 · GF 25 · GC 11 · DG +14</p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-lg font-semibold">Botones</h2>
        <div className="flex flex-wrap gap-3">
          {buttonVariants.map((variant) => (
            <Button key={variant} variant={variant}>
              {variant}
            </Button>
          ))}
        </div>
      </section>
    </main>
  );
}
