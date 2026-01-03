// Datos de productos - BioNeural Solutions
// Biofertilizantes artesanales para agricultura sostenible

export const products = [
    {
        id: 1,
        name: "Microorganismos de Montaña",
        shortName: "MM",
        image: "/images/microorganismos.png",
        description: "Consorcio de microorganismos benéficos recolectados de bosques nativos colombianos. Mejora la salud del suelo y aumenta la absorción de nutrientes por las plantas.",
        benefits: [
            "Aumenta la biodiversidad del suelo",
            "Mejora la absorción de nutrientes",
            "Fortalece el sistema inmune de las plantas",
            "100% natural y artesanal"
        ],
        applications: [
            "Recuperación de suelos degradados",
            "Aceleración de compostaje",
            "Tratamiento de aguas residuales agrícolas",
            "Inóculo para semilleros"
        ],
        casesOfUse: "Ideal para cultivos de café y frutales en etapas de establecimiento. En huertas caseras, revitaliza macetas con tierra agotada.",
        usage: "Dilución 1:10 en agua sin cloro. Aplicar vía drench o foliar al amanecer o atardecer.",
        category: "Suelo"
    },
    {
        id: 2,
        name: "Quelatos Minerales",
        shortName: "QM",
        image: "/images/quelatos.png",
        description: "Minerales quelatados de fuentes naturales para fácil absorción por las plantas. Corrige deficiencias nutricionales de forma efectiva.",
        benefits: [
            "Rápida absorción foliar y radicular",
            "Corrige deficiencias de hierro, zinc y manganeso",
            "Compatible con otros productos",
            "No daña el suelo"
        ],
        applications: [
            "Corrección rápida de clorosis férrica",
            "Etapas de alta demanda nutricional (floración)",
            "Suplemento para suelos con pH extremo",
            "Bio-estimulación foliar"
        ],
        casesOfUse: "Utilizar cuando las hojas presentan amarillamiento entre las venas. Muy efectivo en cítricos y hortalizas de hoja.",
        usage: "2-3 ml por litro de agua para aplicación foliar. Repetir cada 15 días según necesidad.",
        category: "Nutrición"
    },
    {
        id: 3,
        name: "Jabón Potásico",
        shortName: "JP",
        image: "/images/jabon-potasico.png",
        description: "Insecticida natural a base de potasio. Controla plagas de cuerpo blando sin afectar insectos benéficos ni el medio ambiente.",
        benefits: [
            "Controla pulgones, mosca blanca y ácaros",
            "No genera resistencia en plagas",
            "Seguro para aplicar cerca de cosecha",
            "Biodegradable 100%"
        ],
        applications: [
            "Control preventivo y curativo de insectos",
            "Limpieza de melaza dejada por plagas",
            "Coadyuvante para otros productos biológicos",
            "Uso en agricultura urbana y jardinería"
        ],
        casesOfUse: "Aplicar ante los primeros avistamientos de pulgón. Útil para lavar hongos como la fumagina de las hojas.",
        usage: "10-20 ml por litro de agua. Mojar bien el envés de las hojas. Aplicar bajo sombra.",
        category: "Protección"
    },
    {
        id: 4,
        name: "Caldo Sulfocálcico",
        shortName: "CS",
        image: "/images/caldo-sulfocalcico.png",
        description: "Preparado tradicional a base de azufre y cal. Fungicida y acaricida natural para control de enfermedades.",
        benefits: [
            "Controla hongos y ácaros",
            "Aporta azufre y calcio",
            "Bajo costo y alta efectividad",
            "Preparación artesanal"
        ],
        applications: [
            "Control de Oidios, Royas y Antracnosis",
            "Tratamiento protector de invierno en frutales",
            "Suministro de azufre elemental",
            "Limpieza de troncos y ramas"
        ],
        casesOfUse: "Excelente para el control de la roya del café y el ácaro tostador en cítricos de forma orgánica.",
        usage: "50-100 ml por litro de agua. No aplicar en temperaturas superiores a 28°C o pleno sol.",
        category: "Protección"
    },
    {
        id: 5,
        name: "Ajo Ají",
        shortName: "AA",
        image: "/images/ajo-aji.png",
        description: "Extracto concentrado de ajo y ají picante. Potente repelente natural de insectos y plagas.",
        benefits: [
            "Repele insectos naturalmente",
            "No tóxico para humanos ni animales",
            "Fácil aplicación",
            "Ingredientes 100% naturales"
        ],
        applications: [
            "Repelencia de hormigas y masticadores",
            "Prevención de visitas de insectos plaga",
            "Efecto irritante para desalojar nidos",
            "Barrera biológica perimetral"
        ],
        casesOfUse: "Ideal como barrera preventiva en bordes de huertas o cuando se detecta actividad inicial de hormiga arriera.",
        usage: "5-10 ml por litro de agua. Aplicar semanalmente o después de lluvias fuertes.",
        category: "Protección"
    },
    {
        id: 6,
        name: "Extracto de Neem",
        shortName: "EN",
        image: "/images/neem.png",
        description: "Aceite y extracto del árbol de Neem. Insecticida y repelente natural de amplio espectro.",
        benefits: [
            "Controla más de 200 especies de insectos",
            "Actúa como antialimentario",
            "Regula el crecimiento de plagas",
            "Seguro para el medio ambiente"
        ],
        applications: [
            "Control sistémico de minadores",
            "Interrupción del ciclo biológico de plagas",
            "Control de nematodos en el suelo",
            "Protección de granos almacenados"
        ],
        casesOfUse: "Muy efectivo contra el minador de la hoja en café y hortalizas, actuando desde el interior de la planta.",
        usage: "3-5 ml por litro de agua. Emulsionar bien. Se recomienda usar con Jabón Potásico.",
        category: "Protección"
    },
    {
        id: 7,
        name: "Bambusina",
        shortName: "BA",
        image: "/images/bambusina.png",
        description: "Extracto fermentado de bambú rico en silicio y aminoácidos. Bioestimulante natural para crecimiento vigoroso.",
        benefits: [
            "Fortalece tallos y hojas",
            "Aumenta resistencia a enfermedades",
            "Rico en silicio natural",
            "Estimula el crecimiento"
        ],
        applications: [
            "Fortalecimiento de la pared celular vegetal",
            "Resistencia al estrés hídrico y térmico",
            "Mejora del llenado de grano y fruto",
            "Bio-estimulación en viveros"
        ],
        casesOfUse: "Aplicar en etapas de crecimiento rápido para lograr estructuras más rígidas y resistentes al viento y hongos.",
        usage: "5 ml por litro de agua vía foliar cada 15-20 días durante el levante.",
        category: "Nutrición"
    },
    {
        id: 8,
        name: "Diatomeas",
        shortName: "DT",
        image: "/images/diatomeas.png",
        description: "Tierra de diatomeas micronizada. Control físico de insectos rastreros sin químicos.",
        benefits: [
            "Control mecánico, no químico",
            "Efectivo contra insectos rastreros",
            "Seguro para mascotas y humanos",
            "Larga duración de efecto"
        ],
        applications: [
            "Control de hormigas, babosas y caracoles",
            "Protección de semillas almacenadas",
            "Aporte de silicio al suelo",
            "Control de parásitos externos en animales"
        ],
        casesOfUse: "Espolvorear alrededor de la base de plantas jóvenes para protegerlas del ataque nocturno de babosas.",
        usage: "Aplicación en seco sobre plantas o barrera en suelo. Reaplicar si se humedece o llueve.",
        category: "Protección"
    },
    {
        id: 9,
        name: "Leonarditas",
        shortName: "LE",
        image: "/images/leonarditas.png",
        description: "Ácidos húmicos y fúlvicos naturales extraídos de leonardita. Mejora la estructura del suelo y la nutrición vegetal.",
        benefits: [
            "Mejora la estructura del suelo",
            "Aumenta la capacidad de retención de agua",
            "Potencia la absorción de nutrientes",
            "Regenera suelos degradados"
        ],
        applications: [
            "Acondicionamiento de suelos compactados",
            "Aumento de la capacidad de intercambio catiónico",
            "Estimulación del desarrollo radicular",
            "Desbloqueo de fósforo retenido"
        ],
        casesOfUse: "Indispensable en el abonado de fondo de nuevos cultivos y en la recuperación de suelos fatigados por químicos.",
        usage: "2-3 kg por hectárea o 50g por árbol. Mezclar con la tierra del hoyo de siembra.",
        category: "Suelo"
    }
];

export const categories = {
    "Suelo": { name: "Acondicionadores de Suelo", icon: "🏔️", image: "/images/leonarditas.png" },
    "Nutrición": { name: "Nutrición Vegetal", icon: "💧", image: "/images/quelatos.png" },
    "Protección": { name: "Protección de Cultivos", icon: "🛡️", image: "/images/jabon-potasico.png" }
};

export const companyInfo = {
    name: "BioNeural Solutions",
    tagline: "Biofertilizantes Artesanales para Agricultura Sostenible",
    location: "Fresno, Tolima, Colombia",
    phone: "+57 320 306 2007",
    whatsapp: "+57 320 306 2007",
    email: "bioneuralsolutions@gmail.com",
    description: "Somos una empresa colombiana dedicada a la producción de biofertilizantes artesanales en Fresno, Tolima. Nuestros productos están elaborados con ingredientes naturales y técnicas tradicionales para mejorar la salud del suelo y las plantas.",
    mission: "Proveer a los agricultores colombianos productos naturales de alta calidad que mejoren sus cultivos de forma sostenible.",
    vision: "Ser la empresa líder en biofertilizantes artesanales en Colombia, contribuyendo a una agricultura más limpia y productiva."
};
