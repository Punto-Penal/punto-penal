"use client";

import { Button } from "@punto-penal/ui/components/button";
import { useTheme } from "next-themes";

const options = [
  { value: "light", label: "Claro" },
  { value: "dark", label: "Oscuro" },
  { value: "system", label: "Sistema" },
] as const;

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="flex gap-2" role="group" aria-label="Modo de color">
      {options.map((option) => (
        <Button key={option.value} variant="outline" size="sm" onClick={() => setTheme(option.value)}>
          {option.label}
        </Button>
      ))}
    </div>
  );
}
