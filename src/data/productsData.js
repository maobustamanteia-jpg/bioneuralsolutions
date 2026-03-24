export const productsData = [
    {
        id: "acidos-humicos",
        name: "Humicos",
        commercialName: "Humicos",
        category: "Ácidos Húmicos y Fúlvicos",
        tagline: "Bio-regenerador de suelos",
        description: "Son materia y carbón orgánico líquido de alta pureza, provenientes de origen fósil. Este potente regenerador biológico ayuda sustancialmente a la recuperación natural de los suelos agrícolas agotados o compactados.",
        presentations: ["1 Litro", "4 Litros (Galón)", "20 Litros (Caneca)"],
        benefits: [
            "Mejora la disponibilidad de nutrientes ya existentes o aplicados en el suelo, actuando como un quelatante natural.",
            "Ayuda a reducir la compactación física del suelo, permitiendo una mayor retención de humedad, pero también un mayor oxígeno para la zona radicular de la planta.",
            "Suministra alimento directo y energía para los microorganismos benéficos del suelo.",
            "Fortalece la resistencia sistémica de las plantas ante enfermedades o estrés.",
            "Mejora el aprovechamiento general de las aplicaciones de fertilizantes edáficos.",
            "Aumenta progresivamente el porcentaje de Materia Orgánica (% M.O) y el carbón orgánico disponible en el suelo."
        ],
        composition: [],
        dosis: [],
        ctaLinks: {
            whatsapp: "https://wa.me/573000000000?text=Hola,%20estoy%20interesado%20en%20comprar%20Humicos%20(Ácidos%20Húmicos)",
            buy: "#comprar-humomax"
        },
        images: {
            hero: "/images/bioneural_hero_tree_1772241624988.png",
            product: "/images/humicos_bottle_1772241648719.png"
        },
        theme: {
            primary: "var(--bio-leaf)",    /* Aesthetic Leaf Green */
            secondary: "var(--bio-sun)",  /* Solar Shield Yellow accent */
        },
        labelTheme: {
            primary: "#4A3B32", /* Marrón oscuro orgánico */
            accent: "#B8860B",  /* Dorado para resaltar premium */
            bg: "#F5F0E6"       /* Tono papel reciclado muy claro */
        }
    },
    {
        id: "sulphomax",
        name: "Caldo Sulfocálcico",
        commercialName: "Sulphomax",
        category: "Protección y Nutrición (Fungicida/Acaricida y Precursor de Proteínas)",
        tagline: "Escudo Protector y Precursor Metabólico",
        description: "Sulphomax es un producto de control Bioracional y precursor de proteínas formulado con polisulfuro de potasio (caldo sulfocálcico modificado). Actúa como un potente escudo protector contra ácaros y más de 50 enfermedades fúngicas, a la vez que nutre el cultivo.",
        presentations: ["1 Litro", "4 Litros (Galón)", "20 Litros (Caneca)"],
        benefits: [
            "Acción preventiva y erradicante contra ácaros (arañita roja) y más de 50 enfermedades fúngicas (antracnosis, cenicillas, roya, etc.).",
            "Activación metabólica en la planta. Actúa como precursor de proteínas.",
            "Aporta Azufre asimilable al cultivo acelerando el vigor y la respuesta inmunológica natural y minimizando periodos de estrés."
        ],
        composition: [
            { element: "Polisulfuro de potasio", percentage: "---" },
            { element: "Azufre Agrícola", percentage: "---" },
            { element: "Potasio", percentage: "---" }
        ],
        dosis: [
            { crop: "Control Foliar", rate: "10 cc / Litro de agua", details: "Aplicar al amanecer. No aplicar en floración ni con sol intenso." }
        ],
        ctaLinks: {
            whatsapp: "https://wa.me/573000000000?text=Hola,%20estoy%20interesado%20en%20comprar%20Sulphomax",
            buy: "#comprar-sulphomax"
        },
        images: {
            hero: "/images/bioneural_hero_tree_1772241624988.png",
            product: "/images/sulphomax_bottle_1772241667175.png"
        },
        theme: {
            primary: "var(--bio-neural-blue)",    /* Neural Deep Blue */
            secondary: "var(--bio-emerald)",  /* Emerald Innovation Green accent */
        },
        labelTheme: {
            primary: "#556B2F", /* Verde Olivo Oscuro */
            accent: "#FFD700",  /* Amarillo Azufre brillante */
            bg: "#FFFFF0"       /* Tono blanco/amarillento muy tenue */
        }
    },
    {
        id: "nutriquel-max",
        name: "Complejo de Micronutrientes Quelatados",
        commercialName: "Nutriquel Max",
        category: "Fertilizante Foliar Biorracional",
        tagline: "Máxima asimilación y sistemia",
        description: "Complejo líquido concentrado de micronutrientes esenciales, quelatados orgánicamente con Ácidos Fúlvicos y Ácido Cítrico. Garantiza una máxima asimilación y sistemia dentro de la planta, corrigiendo de manera rápida y eficiente las deficiencias nutricionales múltiples.",
        presentations: ["1 Litro", "4 Litros (Galón)", "20 Litros (Caneca)"],
        benefits: [
            "Alta Biodisponibilidad: El agente quelante orgánico evita el bloqueo de los metales en el suelo o tanque, facilitando entrada directa a la savia.",
            "Acción Rápida (Shock): Rápida penetración foliar y traslocación en la planta.",
            "Corrección Múltiple: Previene y corrige clorosis, manchas foliares, deformaciones de brotes y caída de flor.",
            "Efecto Bioestimulante: Aporta carbono asimilable, estimulando el desarrollo del sistema radicular y fotosíntesis."
        ],
        composition: [
            { element: "Micronutrientes Quelatados", percentage: "---" },
            { element: "Ácidos Fúlvicos", percentage: "---" },
            { element: "Ácido Cítrico", percentage: "---" }
        ],
        dosis: [
            { crop: "Foliar (Cultivos)", rate: "10 a 15 cc / Litro de agua", details: "Activo crecimiento, pre-floración, o inicio de síntomas." }
        ],
        ctaLinks: {
            whatsapp: "https://wa.me/573000000000?text=Hola,%20estoy%20interesado%20en%20comprar%20Nutriquel%20Max",
            buy: "#comprar-nutriquel"
        },
        images: {
            hero: "/images/bioneural_hero_tree_1772241624988.png",
            product: "/images/nutriquel_bottle_1772241679224.png"
        },
        theme: {
            primary: "var(--bio-sun)",    /* Solar Shield Yellow */
            secondary: "var(--bio-emerald)",  /* Emerald Innovation Green accent */
        },
        labelTheme: {
            primary: "#0047AB", /* Azul Zafiro */
            accent: "#FF4500",  /* Naranja Vibrante (Shock) */
            bg: "#F0F8FF"       /* Alice Blue claro */
        }
    }
];
