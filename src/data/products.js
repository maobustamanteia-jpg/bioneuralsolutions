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
        usage: "Aplicar diluido en agua (1:10) directamente al suelo. Ideal para todo tipo de cultivos.",
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
        usage: "Aplicación foliar: 2-3 ml por litro de agua. Repetir cada 15 días.",
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
        usage: "Diluir 10-20 ml por litro de agua. Aplicar en las horas frescas del día.",
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
        usage: "Diluir según concentración: 50-100 ml por litro. No aplicar en floración.",
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
        usage: "Diluir 5-10 ml por litro de agua. Aplicar cada 7-10 días como preventivo.",
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
        usage: "Diluir 3-5 ml por litro de agua. Aplicar en la tarde o noche.",
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
        usage: "Aplicar 5 ml por litro de agua. Ideal durante etapa vegetativa.",
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
        usage: "Espolvorear directamente sobre plantas o suelo. Reaplicar después de lluvia.",
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
        usage: "Aplicar 2-3 kg por hectárea. Incorporar al suelo antes de siembra.",
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
