import { pointsFor } from "@punto-penal/core";

// Página provisoria hasta la home de la Fase 0 (Emi). El chequeo de abajo
// confirma que la app importa bien desde packages/core; se borra con la home.
export default function Home() {
  const points = pointsFor(2, 1, { win: 3, draw: 1, loss: 0 });

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">Punto Penal</h1>
      <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
        Resultados, archivo histórico, juegos diarios y simulador del fútbol
        argentino. En construcción.
      </p>
      <p className="font-mono text-sm text-zinc-500">
        Chequeo del monorepo: un 2 a 1 suma {points} puntos (calculado en
        @punto-penal/core).
      </p>
    </main>
  );
}
