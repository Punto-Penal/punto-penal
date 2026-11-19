import { cn } from "cn";

/**
 * Logo de Punto Penal. PROVISORIO: es solo el nombre en texto.
 *
 * Cuando esté el logo definitivo, se reemplaza el contenido por el SVG
 * (con fill="currentColor" para que tome el color del texto) y todos los
 * lugares que usan <Logo /> se actualizan solos. Ver docs/diseno/identidad.md.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Punto Penal"
      className={cn("font-heading text-xl font-bold tracking-tight", className)}
    >
      Punto Penal
    </span>
  );
}
