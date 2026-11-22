/**
 * IRportafolioVidal - Datos de Trabajos Prácticos
 * Materia: Ingeniería de Requerimientos (2do Año - Segundo Cuatrimestre)
 * Alumno: Vidal
 * 
 * Puedes editar, agregar o quitar trabajos fácilmente modificando este archivo.
 */

const PORTFOLIO_DATA = {
  student: {
    name: "Alma",
    fullName: "Alma Vidal",
    subject: "Ingeniería de Requerimientos",
    subjectCode: "IR-2026",
    period: "2do Año • 2do Cuatrimestre",
    institution: "UAI",
    bio: "Portafolio académico que reúne los trabajos prácticos individuales y proyectos grupales desarrollados a lo largo de la cursada de Ingeniería de Requerimientos.",
    stats: {
      total: 22,
      individual: 12,
      group: 10,
      avgGrade: "5.50"
    }
  },

  works: [
    // ==========================================
    // TRABAJOS INDIVIDUALES
    // ==========================================
    {
      id: "tp-ind-1",
      category: "individual",
      tpNumber: "TP #01",
      title: "Actividad de investigación obligatoria Lenguaje Natural e Ing. de Requerimientos",
      subtitle: "",
      date: "24/8/26",
      status: "Sin calificar",
      score: "0/0",
      fileType: "pdf",
      fileUrl: "docs/ActividadInvestigaciónObligatoria.pdf",
      fileName: "ActividadInvestigaciónObligatoria.pdf",
      fileSize: "83 KB",
      tags: ["Investigacion", "Lenguaje natural"],
      description: "Sintesis sobre tesis elegida sobre el lenguae natural e ing de requerimientos.",
      summaryDetails: {
        problemStatement: "",
        keyDeliverables: [
          ""
        ],
        conclusions: ""
      }
    },

{
      id: "tp-ind-2",
      category: "individual",
      tpNumber: "Debate 1",
      title: "Debate de cierre de la clase 1 - El software como producto y como proceso",
      subtitle: "",
      date: "17/8/2026",
      status: "Sin calificar",
      score: "0/0",
      fileType: "image",
      fileUrl: "docs/Debate1.png",
      fileName: "Debate1.png",
      fileSize: "39 KB",
      tags: ["Debate", "Software"],
      description: "",
      summaryDetails: {
        problemStatement: "",
        keyDeliverables: [
          ""
        ],
        conclusions: ""
      }
    },

{
      id: "tp-ind-3",
      category: "individual",
      tpNumber: "Debate 2",
      title: "Debate de cierre de la clase 2",
      subtitle: "",
      date: "17/8/2026",
      status: "Sin Calificar",
      score: "0/0",
      fileType: "image",
      fileUrl: "docs/Debate2.png",
      fileName: "Debate2.png",
      fileSize: "39 KB",
      tags: ["Debate", "calidad de software"],
      description: "",
      summaryDetails: {
        problemStatement: "",
        keyDeliverables: [""],
        conclusions: ""
      }
    },

   {
      id: "tp-ind-4",
      category: "individual",
      tpNumber: "TP #02",
      title: "Ejercitación obligatoria INDIVIDUAL - Clase 3 - Requerimientos en el Ciclo de Vida",
      subtitle: "",
      date: "11/11/26",
      status: "Sin Calificar",
      score: "0/0",
      fileType: "image",
      fileUrl: "docs/EjercitaciónObligatoriaINDIVIDUAL-Clase 3-RequerimientosCicloDeVida.png",
      fileName: "EjercitaciónObligatoriaINDIVIDUAL-Clase 3-RequerimientosCicloDeVida.png",
      fileSize: "101 KB",
      tags: ["Ciclo de vida", "Requerimientos"],
      description: "Preguntas sobre los requerimientos y su ciclo de vida, y buenas practicas",
      summaryDetails: {
        problemStatement: "",
        keyDeliverables: [""],
        conclusions: ""
      }
    },


    {
      id: "tp-ind-5",
      category: "individual",
      tpNumber: "Debate 3",
      title: "Actividad de cierre luego de la participación en el CIITI",
      subtitle: "",
      date: "5/10/2026",
      status: "Sin Calificar",
      score: "0/0",
      fileType: "pdf",
      fileUrl: "docs/Debate3.pdf",
      fileName: "Debate3.pdf",
      fileSize: "72 KB",
      tags: ["Debate", "Participacion en el CIITI"],
      description: "",
      summaryDetails: {
        problemStatement: "",
        keyDeliverables: [""],
        conclusions: ""
      }
    },
    {
      id: "tp-ind-6",
      category: "individual",
      tpNumber: "TP #03",
      title: "Simulación Obtención de Requerimientos con IA",
      subtitle: "",
      date: "15/10/26",
      status: "Sin Calificar",
      score: "0/0",
      fileType: "pdf",
      fileUrl: "docs/Simulación Obtención de Requerimientos con IA.pdf",
      fileName: "Simulación Obtención de Requerimientos con IA.pdf",
      fileSize: "50 KB",
      tags: ["Simulacion con IA"],
      description: "",
      summaryDetails: {
        problemStatement: "",
        keyDeliverables: [""],
        conclusions: ""
      }
    },

{
      id: "tp-ind-7",
      category: "individual",
      tpNumber: "TP #04",
      title: "Ejercitación obligatoria - Clase 10 - Uso del Lenguaje Natural",
      subtitle: "",
      date: "22/10/26",
      status: "Sin Calificar",
      score: "0/0",
      fileType: "pdf",
      fileUrl: "docs/Ejercitación obligatoria - Clase 10 - Uso del Lenguaje Natural.pdf",
      fileName: "Ejercitación obligatoria - Clase 10 - Uso del Lenguaje Natural.pdf",
      fileSize: "44 KB",
      tags: ["Lenguaje Natural"],
      description: "",
      summaryDetails: {
        problemStatement: "",
        keyDeliverables: [""],
        conclusions: ""
      }
    },
{
      id: "tp-ind-8",
      category: "individual",
      tpNumber: "TP #05",
      title: "Actividad Obligatoria Individual Aplicación LEL en un dominio técnico",
      subtitle: "",
      date: "28/10/26",
      status: "Sin Calificar",
      score: "0/0",
      fileType: "pdf",
      fileUrl: "docs/Aplicación+LEL+en+un+dominio+técnico+-+Alma+Vidal.pdf",
      fileName: "Aplicación+LEL+en+un+dominio+técnico+-+Alma+Vidal.pdf",
      fileSize: "360 KB",
      tags: ["LEL", "Investigacion"],
      description: "",
      summaryDetails: {
        problemStatement: "",
        keyDeliverables: [""],
        conclusions: ""
      }
    },

{
      id: "tp-ind-9",
      category: "individual",
      tpNumber: "TP #06",
      title: "Elicitación de Requerimientos con IA - Entrevista II",
      subtitle: "",
      date: "28/10/26",
      status: "Sin Calificar",
      score: "0/0",
      fileType: "pdf",
      fileUrl: "docs/Elicitación de Requerimientos con IA - Entrevista II - Alma Vidal.pdf",
      fileName: "Elicitación de Requerimientos con IA - Entrevista II - Alma Vidal.pdf",
      fileSize: "262 KB",
      tags: ["Simulacion con IA", "Elicitacion de Requerimientos"],
      description: "",
      summaryDetails: {
        problemStatement: "",
        keyDeliverables: [""],
        conclusions: ""
      }
    },
{
      id: "tp-ind-10",
      category: "individual",
      tpNumber: "TP #07",
      title: "Ejercitación individual obligatoria: autoevaluación cierre Clase 11",
      subtitle: "",
      date: "22/10/26",
      status: "Sin Calificar",
      score: "0/0",
      fileType: "pdf",
      fileUrl: "docs/Ejercitación individual obligatoria autoevaluación cierre Clase 11.pdf",
      fileName: "Ejercitación individual obligatoria autoevaluación cierre Clase 11.pdf",
      fileSize: "61 KB",
      tags: ["Glosario LEL"],
      description: "",
      summaryDetails: {
        problemStatement: "",
        keyDeliverables: [""],
        conclusions: ""
      }
    },
{
      id: "tp-ind-11",
      category: "individual",
      tpNumber: "TP #08",
      title: "ACTIVIDAD OBLIGATORIA INDIVIDUAL Casos de Uso, Historias de Usuario y Escenarios",
      subtitle: "",
      date: "4/11/26",
      status: "Sin Calificar",
      score: "0/0",
      fileType: "pdf",
      fileUrl: "docs/Casos de Uso, Historias de Usuario y Escenarios - Alma Vidal.pdf",
      fileName: "Casos de Uso, Historias de Usuario y Escenarios - Alma Vidal.pdf",
      fileSize: "269 KB",
      tags: ["Casos  de uso", "Historias de Usuario", "Escenarios"],
      description: "En función del TP de la cursada y enunciado de cada grupo, presentar al menos un ejemplo de Casos de Uso, Historias de usuario y Escenarios.",
      summaryDetails: {
        problemStatement: "",
        keyDeliverables: [""],
        conclusions: ""
      }
    },
{
      id: "tp-ind-12",
      category: "individual",
      tpNumber: "TP #09",
      title: "Desafío Final: Simulación elicitación de requerimientos- Juego de roles con IA (Obligatorio)",
      subtitle: "",
      date: "12/11/26",
      status: "Sin Calificar",
      score: "0/0",
      fileType: "pdf",
      fileUrl: "docs/Desafío Final Simulación elicitación de requerimientos - Alma Vidal.pdf",
      fileName: "Desafío Final Simulación elicitación de requerimientos - Alma Vidal.pdf",
      fileSize: "291 KB",
      tags: ["Simulacion con IA", "Elicitacion de Requerimientos"],
      description: "",
      summaryDetails: {
        problemStatement: "",
        keyDeliverables: [""],
        conclusions: ""
      }
    },



    // ==========================================
    // TRABAJOS GRUPALES
    // ==========================================
    {
      id: "tp-grp-1",
      category: "grupal",
      tpNumber: "TPG #01",
      title: "Ejercitación obligatoria - Clase 1 - Software",
      subtitle: "",
      date: "17/8/26",
      status: "Aprobado",
      score: "0/0",
      fileType: "pdf",
      fileUrl: "docs/Ejercitación-Clase1-Software.pdf",
      fileName: "Ejercitación-Clase1-Software.pdf",
      fileSize: "284 KB",
      members: ["Vidal", "Ritcher", "Gutiérrez"],
      tags: ["Software"],
      description: "Cuadro con cualidades de software y comparacion con otros temas.",
      summaryDetails: {
        problemStatement: "",
        keyDeliverables: [""],
        conclusions: ""
      }
    },
    {
      id: "tp-grp-2",
      category: "grupal",
      tpNumber: "TPG #02",
      title: "Ejercitación obligatoria - Clase 4 - SISTEMA DE BIBLIOTECA (EJEMPLO TRABAJO PRÁCTICO DE CURSADA)",
      subtitle: "",
      date: "9/9/26",
      status: "Aprobado",
      score: "0/0",
      fileType: "pdf",
      fileUrl: "docs/Ejercitación obligatoria-Clase 4-SISTEMA DE BIBLIOTECA.pdf",
      fileName: "Ejercitación obligatoria-Clase 4-SISTEMA DE BIBLIOTECA.pdf",
      fileSize: "91 KB",
      members: ["Vidal", "Ritcher", "Gutiérrez"],
      tags: ["Sistema de Biblioteca", "Ejercicio de Practica"],
      description: "Ejemplos de necesidades, deseos y expectativas; diferencias entre los requerimientos del usuario y los requerimientos del sistema; stakeholders",
      summaryDetails: {
        problemStatement: "",
        keyDeliverables: [
          ""],
        conclusions: ""
      }
    },

    {
      id: "tp-grp-3",
      category: "grupal",
      tpNumber: "TPG #03",
      title: "Actividad de aprendizaje procesos de la IR",
      subtitle: "",
      date: "16/9/26",
      status: "Sin Calificar",
      score: "0/0",
      fileType: "pdf",
      fileUrl: "docs/ActividadAprendizajeProcesosIR-Richter,Vidal,Gutierrez.pdf",
      fileName: "ActividadAprendizajeProcesosIR-Richter,Vidal,Gutierrez.pdf",
      fileSize: "153 KB",
      members: ["Vidal", "Ritcher", "Gutiérrez"],
      tags: ["Entrega Final"],
description: "",
      summaryDetails: {
        problemStatement: "",
        keyDeliverables: [
          ""],
        conclusions: ""
      }
},

{
      id: "tp-grp-4",
      category: "grupal",
      tpNumber: "TPG #04",
      title: "Ejercitación Práctica Especificación en Ingeniería de Requerimientos",
      subtitle: "",
      date: "10/9/26",
      status: "Sin Calificar",
      score: "0/0",
      fileType: "pdf",
      fileUrl: "docs/EjercitaciónPrácticEspecificaciónGutiérrez,Richter,Vidal.pdf",
      fileName: "EjercitaciónPrácticEspecificaciónGutiérrez,Richter,Vidal.pdf",
      fileSize: "107 KB",
      members: ["Vidal", "Ritcher", "Gutiérrez"],
      tags: ["Especificacion", "Ejercicio practico"],
description: "",
      summaryDetails: {
        problemStatement: "",
        keyDeliverables: [
          ""],
        conclusions: ""
      }
},
{
      id: "tp-grp-5",
      category: "grupal",
      tpNumber: "TPG #05",
      title: "Clase 5 - Actividad de aprendizaje procesos de la IR",
      subtitle: "",
      date: "16/9/26",
      status: "Sin Calificar",
      score: "0/0",
      fileType: "pdf",
      fileUrl: "docs/ActividadAprendizajeProcesosIR-Richter,Vidal,Gutierrez.pdf",
      fileName: "ActividadAprendizajeProcesosIR-Richter,Vidal,Gutierrez.pdf",
      fileSize: "96 KB",
      members: ["Vidal", "Ritcher", "Gutiérrez"],
      tags: ["Procesos de la IR"],
      description: "",
      summaryDetails: {
        problemStatement: "",
        keyDeliverables: [
          ""
        ],
        conclusions: ""
      }
    },
{
      id: "tp-grp-6",
      category: "grupal",
      tpNumber: "TPG #06",
      title: "Actividad Trabajo de Investigación - (Parte 1)",
      subtitle: "",
      date: "8/10/26",
      status: "Sin Calificar",
      score: "0/0",
      fileType: "pdf",
      fileUrl: "docs/INFORMEGRUPO3.pdf",
      fileName: "INFORMEGRUPO3.pdf",
      fileSize: "96 KB",
      members: ["Vidal", "Ritcher", "Gutiérrez"],
      tags: [""],
      description: "",
      summaryDetails: {
        problemStatement: "",
        keyDeliverables: [
          ""
        ],
        conclusions: ""
      }
    },
{
      id: "tp-grp-6",
      category: "grupal",
      tpNumber: "TPG #07",
      title: "Actividad Trabajo de Investigación - Informe Grupal",
      subtitle: "",
      date: "8/10/26",
      status: "Sin Calificar",
      score: "0/0",
      fileType: "pdf",
      fileUrl: "docs/INFORMEGRUPO3.pdf",
      fileName: "INFORMEGRUPO3.pdf",
      fileSize: "96 KB",
      members: ["Vidal", "Ritcher", "Gutiérrez"],
      tags: [""],
      description: "",
      summaryDetails: {
        problemStatement: "",
        keyDeliverables: [
          ""
        ],
        conclusions: ""
      }
    },
{
      id: "tp-grp-7",
      category: "grupal",
      tpNumber: "TPG Final Entrega 1",
      title: "TP Cursada - Entrega 1",
      subtitle: "",
      date: "14/10/26",
      status: "Aprobado",
      score: "0/0",
      fileType: "pdf",
      fileUrl: "docs/TP1_Richter_Vidal_Gutierrez.pdf",
      fileName: "TP1_Richter_Vidal_Gutierrez.pdf",
      fileSize: "162 KB",
      members: ["Vidal", "Ritcher", "Gutiérrez"],
      tags: ["TP Cursada"],
      description: "",
      summaryDetails: {
        problemStatement: "",
        keyDeliverables: [
          ""
        ],
        conclusions: ""
      }
    },

{
      id: "tp-grp-8",
      category: "grupal",
      tpNumber: "TPG Final Entrega 2",
      title: "TP Cursada - Entrega 2",
      subtitle: "",
      date: "3/11/26",
      status: "Sin Calificar",
      score: "0/0",
      fileType: "pdf",
      fileUrl: "docs/TP2_Vidal_Richter_Gutierrez.pdf",
      fileName: "TP2_Vidal_Richter_Gutierrez.pdf",
      fileSize: "148 KB",
      members: ["Vidal", "Ritcher", "Gutiérrez"],
      tags: ["TP Cursada"],
      description: "",
      summaryDetails: {
        problemStatement: "",
        keyDeliverables: [
          ""
        ],
        conclusions: ""
      }
    },
{
      id: "tp-grp-9",
      category: "grupal",
      tpNumber: "TPG Final Entrega 3",
      title: "TP Cursada - Entrega Final",
      subtitle: "",
      date: "17/11/26",
      status: "Sin Calificar",
      score: "0/0",
      fileType: "pdf",
      fileUrl: "docs/TP3_Richter_Vidal_Gutierrez.pdf",
      fileName: "TP3_Richter_Vidal_Gutierrez.pdf",
      fileSize: "379 KB",
      members: ["Vidal", "Ritcher", "Gutiérrez"],
      tags: ["TP Cursada"],
      description: "",
      summaryDetails: {
        problemStatement: "",
        keyDeliverables: [
          ""
        ],
        conclusions: ""
      }
    },


  ]
};