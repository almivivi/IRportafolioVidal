# 🚀 Portafolio Académico - Ingeniería de Requerimientos

Portafolio web moderno, minimalista y responsivo diseñado para presentar de manera profesional todos los Trabajos Prácticos (Individuales y Grupales) de la materia **Ingeniería de Requerimientos** (2do Año, 2do Cuatrimestre).

Desarrollado para el alumno **Vidal**.

---

## ✨ Características Principales

- **Diseño Moderno & Minimalista:** Tipografía limpia, paleta slate/indigo con efectos sutiles de glassmorphism y transiciones suaves.
- **División Clara en Pestañas (Tabs):**
  - 👤 **Trabajos Individuales:** Colección de entregas personales de elicitación, especificación formal (IEEE 830), diagramas de Casos de Uso e Historias de Usuario ágiles con Gherkin.
  - 👥 **Trabajos Grupales:** Proyectos integradores con indicación visual de integrantes de equipo, modelado de procesos de negocio (BPMN 2.0), prototipado y matriz de trazabilidad (RTM).
- **Visor Directo Integrado de Documentos:**
  - Permite previsualizar **archivos PDF** y **documentos gráficos / diagramas (SVG, PNG, JPG)** directamente en la web sin obligar al usuario a descargarlos.
  - Controles de zoom (ampliar, reducir, 1:1), pantalla completa y apertura en nueva pestaña.
  - Pestaña secundaria de **Ficha Técnica**: muestra objetivos del TP, entregables clave y conclusiones académicas.
- **Búsqueda & Filtro por Temas en Tiempo Real:** Filtra instantáneamente por palabras clave (ej: *"Gherkin"*, *"IEEE 830"*, *"BPMN"*, *"Vidal"*) o mediante chips de etiquetas.
- **Modo Oscuro / Claro:** Selector estético de tema con persistencia automática en `localStorage`.
- **Cero Dependencias ni Compiladores:** Construido con HTML5, CSS3 moderno y Vanilla JavaScript. Funciona simplemente haciendo doble clic en `index.html` o desplegándolo en GitHub Pages / Vercel.

---

## 📂 Estructura del Proyecto

```text
IRportafolioVidal/
│
├── index.html                   # Página principal del portafolio
├── README.md                    # Documentación de uso y personalización
│
├── css/
│   └── styles.css               # Estilos modernos, temas claro/oscuro y responsive
│
├── js/
│   ├── data.js                  # Catálogo de datos y metadatos de los TPs
│   └── app.js                   # Lógica de pestañas, visor de documentos y filtros
│
└── docs/                        # Carpeta donde se alojan tus PDFs y diagramas
    ├── tp1-elicitacion.pdf
    ├── tp2-srs-ieee830.pdf
    ├── tp3-casos-de-uso.pdf
    ├── tp4-user-stories.pdf
    ├── diagrama-casos-de-uso.svg
    ├── tp-grupal-1-vision.pdf
    ├── tp-grupal-2-bpmn.pdf
    ├── diagrama-bpmn.svg
    └── tp-grupal-final-rtm.pdf
```

---

## 🖥️ Cómo visualizar el portafolio

1. **Opción Directa (Recomendada y rápida):**
   - Haz doble clic sobre el archivo `index.html` para abrirlo en tu navegador favorito (Chrome, Edge, Firefox, Brave, Safari).
2. **Opción Servidor Local (Opcional):**
   - Si utilizas Visual Studio Code, puedes usar la extensión **Live Server** (clic derecho en `index.html` -> *Open with Live Server*).
   - O con Python en terminal: `python -m http.server 8080`.
3. **Despliegue en GitHub Pages:**
   - Este repositorio está 100% listo para GitHub Pages. Simplemente sube los cambios a tu repositorio `IRportafolioVidal` y activa Pages desde `Settings > Pages > Branch: main`.

---

## 📝 Cómo agregar o editar tus propios Trabajos Prácticos

### Paso 1: Colocar tu archivo
Copia tu archivo PDF o imagen en la carpeta `docs/`, por ejemplo:
`docs/tp5-mi-entrega.pdf`

### Paso 2: Registrarlo en `js/data.js`
Abre el archivo [js/data.js](file:///c:/Users/Bienvenido/Documents/facutareas/2do%20año/segundo%20cuatr/IR/IRportafolioVidal/js/data.js) y agrega un objeto dentro del arreglo `PORTFOLIO_DATA.works`:

```javascript
{
  id: "tp-ind-5",
  category: "individual", // "individual" o "grupal"
  tpNumber: "TP #05",
  title: "Validación y Verificación de Requerimientos",
  subtitle: "Inspecciones de software y matrices de pruebas",
  date: "Noviembre 2026",
  status: "Aprobado",
  score: "10 / 10",
  fileType: "pdf", // "pdf" o "image"
  fileUrl: "docs/tp5-mi-entrega.pdf",
  fileName: "tp5-mi-entrega.pdf",
  fileSize: "1.8 MB",
  tags: ["Validación", "Testing", "Inspección"],
  description: "Descripción detallada de las actividades realizadas...",
  summaryDetails: {
    problemStatement: "Objetivo y planteamiento del trabajo...",
    keyDeliverables: [
      "Checklist de verificación formal.",
      "Informe de discrepancias y resolución de conflictos."
    ],
    conclusions: "Criterios alcanzados con la validación."
  }
}
```

¡Guarda el archivo y recarga la página para ver tu nuevo trabajo reflejado automáticamente!
