import { pointsFor } from "@punto-penal/core";
import { Logo } from "@punto-penal/ui/brand/logo";

// Página provisoria hasta la home de la Fase 0. El chequeo de abajo confirma
// que la app importa bien desde packages/core y packages/ui; se borra con la home.
export default function Home() {
  const points = pointsFor(2, 1, { win: 3, draw: 1, loss: 0 });

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
      <Logo className="text-4xl" />
      <p className="text-muted-foreground max-w-md text-lg">
        Resultados, archivo histórico, juegos diarios y simulador del fútbol argentino. En
        construcción.
      </p>
      <p className="text-muted-foreground font-mono text-sm">
        Chequeo del monorepo: un 2 a 1 suma {points} puntos (calculado en @punto-penal/core).
      </p>
    </main>
  );
}
