import type { ImageMetadata } from "astro";
import type { GalleryItem } from "../components/EvidenceGallery.astro";

const apuntesFiles = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/evidencias/apuntes/*.jpg",
  { eager: true },
);
const proyectoFiles = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/evidencias/proyecto/*.png",
  { eager: true },
);

type Tema = "algebra" | "sql" | "normalizacion" | "mer";

/** Descripción de cada foto de apuntes, en el orden de los archivos (tema-01, tema-02, ...). */
const captions: Record<Tema, string[]> = {
  mer: [
    "Ejercicios de MER: relación ternaria, especialización de USUARIO en ESTUDIANTE y DOCENTE, y agregación.",
    "Generalización y especialización: PERSONA, EMPLEADO, ESTUDIANTE, PROFESOR y ADMINISTRATIVO.",
    "Agregación: la relación Casar (HOMBRE–MUJER) tratada como entidad de nivel más alto que oficia un JUEZ.",
    "Ejercicio 1: CLIENTE, VEHÍCULO y MECÁNICO con sus atributos y cardinalidades.",
    "Ejercicio 2: EQUIPO, UNIDAD FÍSICA y USUARIO, con entidad débil y relación de préstamo.",
  ],
  normalizacion: [
    "Dependencias funcionales: reglas de inferencia (descomposición, transitividad, unión y pseudotransitividad).",
    "Ejercicio 2 de dependencias funcionales: reflexividad, transitividad y descomposición.",
    "Ejercicio con AD → E: aumento, descomposición y transitividad.",
  ],
  algebra: [
    "Introducción: operaciones tradicionales y especializadas, selección (σ) y proyección (π).",
    "Resumen de operadores: selección, proyección, unión, intersección, diferencia, producto cartesiano, renombrar y joins.",
    "Selección y proyección sobre ADMINISTRADOR y PRODUCTOR, con sus tablas de resultado.",
    "Producto cartesiano y diferencia entre ADMINISTRADOR y PRODUCTOR.",
    "Selección, proyección, renombrar (ρ) y unión sobre ESTUDIANTE.",
    "Tabla de símbolos, join condicional (θ), left, right y full join, y división.",
    "Intersección, diferencia, join, theta join y división (estudiantes matriculados en todas las materias).",
    "Ejercicios sobre ESTUDIANTE, CARRERA, MATRICULA y BECA: becas vigentes y conteo por ciudad.",
    "Agregación (γ) con AVG y MAX, y división para las materias del Dr. Ramírez.",
    "Profesores sin estudiantes reprobados y compañeros de clase de Ana López.",
    "Ejercicios ESTUDIANTE–PROFESOR–MATERIA: profesores de Laura Díaz y ciudades con materias de 3 créditos.",
    "Selección por carrera y ciudad, y conteo de estudiantes becados por carrera.",
  ],
  sql: [
    "Diapositivas 1: lenguajes DML, DDL y DCL, y estructura básica del SELECT.",
    "Diapositivas 2: alias de columna, concatenación, literales y DISTINCT.",
    "Diapositivas 3: operadores de comparación, condiciones lógicas y ORDER BY.",
    "Limitar filas con FETCH y variables de sustitución (&, DEFINE, UNDEFINE).",
    "LIKE, IS NULL, operadores lógicos y reglas de precedencia.",
    "Funciones ROUND y MOD, formato de fecha y SYSDATE.",
    "Diapositivas 4: funciones de caracteres (LOWER, UPPER, INITCAP, CONCAT, SUBSTR, LENGTH...).",
    "Funciones numéricas (ROUND, TRUNC, MOD) y funciones anidadas.",
    "Modelos de formato de fecha y número: TO_CHAR, TO_NUMBER y TO_DATE.",
    "Funciones de fecha: MONTHS_BETWEEN, ADD_MONTHS, NEXT_DAY y LAST_DAY.",
    "Diapositivas 5: conversión de tipos de datos con TO_CHAR.",
    "Funciones para nulos: NVL, NVL2 y NULLIF.",
    "JSON_VALUE y diapositivas 6: funciones de grupo (AVG, SUM, MIN, MAX, COUNT).",
    "MIN, MAX y COUNT sobre distintos tipos de datos y valores nulos.",
    "NVL dentro de funciones de grupo, GROUP BY y agrupación por varias columnas.",
    "HAVING y funciones de grupo anidadas.",
    "Diapositivas 7: NATURAL JOIN y JOIN con USING.",
    "Cláusula ON, joins de tres tablas y condiciones adicionales.",
    "Non-equijoins, INNER JOIN y OUTER JOIN (LEFT, RIGHT y FULL).",
    "Producto cartesiano y CROSS JOIN.",
    "Diapositivas 8: subconsultas de una sola fila y operadores de comparación.",
    "Subconsultas en WHERE y en HAVING.",
    "Subconsultas multifila: IN, ANY y ALL.",
    "Diapositivas 9: operadores de conjuntos UNION, UNION ALL e INTERSECT.",
    "Operador MINUS.",
  ],
};

const altPorTema: Record<Tema, string> = {
  mer: "Apuntes de modelo entidad-relación",
  normalizacion: "Apuntes de dependencias funcionales y normalización",
  algebra: "Apuntes de álgebra relacional",
  sql: "Apuntes de sentencias SQL",
};

export function apuntes(tema: Tema): GalleryItem[] {
  return Object.entries(apuntesFiles)
    .filter(([path]) => path.includes(`/apuntes/${tema}-`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, mod], i) => ({
      src: mod.default,
      alt: `${altPorTema[tema]} (${i + 1})`,
      caption: captions[tema][i],
    }));
}

export function proyecto(nombre: string): ImageMetadata {
  const entry = Object.entries(proyectoFiles).find(([path]) =>
    path.endsWith(`/proyecto/${nombre}.png`),
  );
  if (!entry) throw new Error(`No existe la imagen del proyecto: ${nombre}`);
  return entry[1].default;
}
