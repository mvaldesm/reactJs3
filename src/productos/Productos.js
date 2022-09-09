const catalogo = [
  {
    id: 1,
    titulo: "Proteína Vegetal",
    descripcion:
      "GOLD STANDARD 100% PLANT, es una proteína vegetal orgánica diseñada en base a arveja, arroz integral y sacha inchi, las que en conjunto aportan un perfil completo de aminoácidos esenciales para apoyar la recuperación muscular. Además es una excelente fuente de vitamina B12. Es ideal para cualquier persona que busque complementar el aporte proteico de su alimentación.",
    precio: "19,990",
    category: "proteina",
    img: require("../img/proteina-vegetal.webp"),
    alt: "Proteína Vegetal",
  },
  {
    id: 2,
    titulo: "Proteína Carne",
    descripcion:
      "Carnivor es el primer suplemento proteico en polvo a base de carne de vacuno sin grasa ni colesterol. Contiene los niveles más altos de aminoácidos que otras fuentes proteicas, incluyendo la leche, el huevo y suero. Es un 350% más concentrado en aminoácidos y proporciona 20 veces más creatina que el filete de carne para saturar la musculatura de fuerza y fomentar el crecimiento muscular. Para reforzar la acción anabólica de carnivor, se ha añadido todos los BCAAs que tu organismo necesita para aumentar la síntesis de proteínas, disminuir el catabolismo, mejorar el rendimiento y reducir la fatiga muscular post entrenamiento. Cada porción de 37g contiene 2,5 g de creatina, 325% y 46% de la dosis diaria recomendada de vitamina B6 y Niacina.",
    precio: "49,990",
    category: "proteina",
    img: require("../img/proteina-de-carne.png"),
    alt: "Proteína Carne",
  },
  {
    id: 3,
    titulo: "Proteína Suero Leche",
    descripcion:
      "SYNTHA 6, es una mezcla de proteínas de alto valor biológico y variable velocidad de absorción, aportando hasta 7 horas de efectividad. Además contiene 2 tipos de enzimas digestivas (papaína y bromelina) lo que garantiza una mejor digestión, absorción y rápida utilización de los aminoácidos que requiere el tejido muscular para lograr un óptimo desarrollo y recuperación muscular.",
    precio: "42,990",
    category: "proteina",
    img: require("../img/proteina-suero-leche.webp"),
    alt: "Proteína de Leche",
  },
  {
    id: 4,
    titulo: "Creatina",
    descripcion:
      "Crea Max es un suplemento de Creatina, reforzado con Glutamina para mejorar y acelerar la recuperación muscular y con Taurina para mejorar los niveles de energía. La contracción y relajación muscular se dan a través de la energía proveniente de las células a través del ATP (Adenosin Trifosfato). Los músculos tienen un limitado aporte de ATP y son rápidamente usados durante el ejercicio. La Creatina es un derivado de los aminoácidos que resintetiza el ATP (Adenosin Trifosfato) principal fuente de energía que necesita el músculo para realizar un movimiento. Por esta razón entrega un plus de energía a tus músculos cuando entrenas, aumentando rápidamente tu fuerza y potencia muscular.",
    precio: "31,990",
    category: "creatina",
    img: require("../img/creatina.webp"),
    alt: "Creatina",
  },
];

export const getProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(catalogo);
    }, 2000);
  });
};

export const getProductosPorCategoria = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        catalogo.filter((micatalogo) => micatalogo.category === categoryId)
      );
    }, 2000);
  });
};

export const getProductosPorId = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(catalogo.find((elproducto) => elproducto.id === id));
    }, 2000);
  });
};

export default catalogo;
