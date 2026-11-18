import ddlRaw from "./sql/01_creacion_tablas.sql?raw";

const ddl = ddlRaw.replace(/\r/g, "");

export type Columna = {
  nombre: string;
  tipo: string;
  pk: boolean;
  fk: boolean;
};

export type Tabla = {
  nombre: string;
  columnas: Columna[];
};

/** Lee las tablas finales (3FN) directamente del script de creación del proyecto. */
export function tablasFinales(): Tabla[] {
  const tablas: Tabla[] = [];
  for (const m of ddl.matchAll(/CREATE TABLE (\w+) \(([\s\S]*?)\n\) ENGINE/g)) {
    const [, nombre, cuerpo] = m;
    const lineas = cuerpo.split("\n").map((l) => l.trim()).filter(Boolean);
    const pk = new Set<string>();
    const fk = new Set<string>();
    for (const l of lineas) {
      const p = l.match(/PRIMARY KEY \(([^)]+)\)/);
      if (p) p[1].split(",").forEach((c) => pk.add(c.trim()));
      const f = l.match(/FOREIGN KEY \(([^)]+)\)/);
      if (f) f[1].split(",").forEach((c) => fk.add(c.trim()));
    }
    const columnas = lineas
      .filter((l) => !/^(CONSTRAINT|REFERENCES)/.test(l))
      .map((l) => {
        const [col, tipo] = l.split(/\s+/);
        return { nombre: col, tipo, pk: pk.has(col), fk: fk.has(col) };
      });
    tablas.push({ nombre, columnas });
  }
  return tablas;
}

export const vistas = [...ddl.matchAll(/CREATE VIEW[\s\S]*?;/g)].map((m) => m[0]);

export const scriptCreacion = ddl;
