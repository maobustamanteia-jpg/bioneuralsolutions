// Datos de productos - BioNeural Solutions
// Biofertilizantes artesanales para agricultura sostenible

export const products = [
    {
        id: 1,
        name: "Microorganismos de Montaña",
        shortName: "MM",
        description: "Consorcio de microorganismos benéficos recolectados de bosques nativos colombianos. Mejora la salud del suelo y aumenta la absorción de nutrientes por las plantas.",
        benefits: [
            "Aumenta la biodiversidad del suelo",
            "Mejora la absorción de nutrientes",
            "Fortalece el sistema inmune de las plantas",
            "100% natural y artesanal"
        ],
        usage: "Aplicar diluido en agua (1:10) directamente al suelo. Ideal para todo tipo de cultivos.",
        category: "bioestimulante"
    },
    {
        id: 2,
        name: "Quelatos Minerales",
        shortName: "QM",
        description: "Minerales quelatados de fuentes naturales para fácil absorción por las plantas. Corrige deficiencias nutricionales de forma efectiva.",
        benefits: [
            "Rápida absorción foliar y radicular",
            "Corrige deficiencias de hierro, zinc y manganeso",
            "Compatible con otros productos",
            "No daña el suelo"
        ],
        usage: "Aplicación foliar: 2-3 ml por litro de agua. Repetir cada 15 días.",
        category: "nutrición"
    },
    {
        id: 3,
        name: "Jabón Potásico",
        shortName: "JP",
        description: "Insecticida natural a base de potasio. Controla plagas de cuerpo blando sin afectar insectos benéficos ni el medio ambiente.",
        benefits: [
            "Controla pulgones, mosca blanca y ácaros",
            "No genera resistencia en plagas",
            "Seguro para aplicar cerca de cosecha",
            "Biodegradable 100%"
        ],
        usage: "Diluir 10-20 ml por litro de agua. Aplicar en las horas frescas del día.",
        category: "control-plagas"
    },
    {
        id: 4,
        name: "Caldo Sulfocálcico",
        shortName: "CS",
        description: "Preparado tradicional a base de azufre y cal. Fungicida y acaricida natural para control de enfermedades.",
        benefits: [
            "Controla hongos y ácaros",
            "Aporta azufre y calcio",
            "Bajo costo y alta efectividad",
            "Preparación artesanal"
        ],
        usage: "Diluir según concentración: 50-100 ml por litro. No aplicar en floración.",
        category: "fungicida"
    },
    {
        id: 5,
        name: "Ajo Ají",
        shortName: "AA",
        description: "Extracto concentrado de ajo y ají picante. Potente repelente natural de insectos y plagas.",
        benefits: [
            "Repele insectos naturalmente",
            "No tóxico para humanos ni animales",
            "Fácil aplicación",
            "Ingredientes 100% naturales"
        ],
        usage: "Diluir 5-10 ml por litro de agua. Aplicar cada 7-10 días como preventivo.",
        category: "repelente"
    },
    {
        id: 6,
        name: "Extracto de Neem",
        shortName: "EN",
        description: "Aceite y extracto del árbol de Neem. Insecticida y repelente natural de amplio espectro.",
        benefits: [
            "Controla más de 200 especies de insectos",
            "Actúa como antialimentario",
            "Regula el crecimiento de plagas",
            "Seguro para el medio ambiente"
        ],
        usage: "Diluir 3-5 ml por litro de agua. Aplicar en la tarde o noche.",
        category: "control-plagas"
    },
    {
        id: 7,
        name: "Bambusina",
        shortName: "BA",
        description: "Extracto fermentado de bambú rico en silicio y aminoácidos. Bioestimulante natural para crecimiento vigoroso.",
        benefits: [
            "Fortalece tallos y hojas",
            "Aumenta resistencia a enfermedades",
            "Rico en silicio natural",
            "Estimula el crecimiento"
        ],
        usage: "Aplicar 5 ml por litro de agua. Ideal durante etapa vegetativa.",
        category: "bioestimulante"
    },
    {
        id: 8,
        name: "Diatomeas",
        shortName: "DT",
        description: "Tierra de diatomeas micronizada. Control físico de insectos rastreros sin químicos.",
        benefits: [
            "Control mecánico, no químico",
            "Efectivo contra insectos rastreros",
            "Seguro para mascotas y humanos",
            "Larga duración de efecto"
        ],
        usage: "Espolvorear directamente sobre plantas o suelo. Reaplicar después de lluvia.",
        category: "control-plagas"
    },
    {
        id: 9,
        name: "Leonarditas",
        shortName: "LE",
        description: "Ácidos húmicos y fúlvicos naturales extraídos de leonardita. Mejora la estructura del suelo y la nutrición vegetal.",
        benefits: [
            "Mejora la estructura del suelo",
            "Aumenta la capacidad de retención de agua",
            "Potencia la absorción de nutrientes",
            "Regenera suelos degradados"
        ],
        usage: "Aplicar 2-3 kg por hectárea. Incorporar al suelo antes de siembra.",
        category: "acondicionador"
    }
];

export const categories = {
    "bioestimulante": { name: "Bioestimulantes", icon: "🌱" },
    "nutrición": { name: "Nutrición Vegetal", icon: "💧" },
    "control-plagas": { name: "Control de Plagas", icon: "🛡️" },
    "fungicida": { name: "Fungicidas", icon: "🍄" },
    "repelente": { name: "Repelentes", icon: "🌿" },
    "acondicionador": { name: "Acondicionadores de Suelo", icon: "🏔️" }
};

export const companyInfo = {
    name: "BioNeural Solutions",
    tagline: "Biofertilizantes Artesanales para Agricultura Sostenible",
    location: "Fresno, Tolima, Colombia",
    phone: "+57 XXX XXX XXXX",
    whatsapp: "+57 XXX XXX XXXX",
    email: "contacto@bioneuralsolutions.com.co",
    description: "Somos una empresa colombiana dedicada a la producción de biofertilizantes artesanales. Nuestros productos están elaborados con ingredientes naturales y técnicas tradicionales para mejorar la salud del suelo y las plantas, sin dañar el medio ambiente.",
    mission: "Proveer a los agricultores colombianos productos naturales de alta calidad que mejoren sus cultivos de forma sostenible.",
    vision: "Ser la empresa líder en biofertilizantes artesanales en Colombia, contribuyendo a una agricultura más limpia y productiva."
};
