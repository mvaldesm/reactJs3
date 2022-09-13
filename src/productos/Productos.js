const catalogo = [
  {
    id: 1,
    titulo: "100% Plant Gold Standard",
    descripcion:
      "GOLD STANDARD 100% PLANT, es una proteína vegetal orgánica diseñada en base a arveja, arroz integral y sacha inchi, las que en conjunto aportan un perfil completo de aminoácidos esenciales para apoyar la recuperación muscular. Además es una excelente fuente de vitamina B12. Es ideal para cualquier persona que busque complementar el aporte proteico de su alimentación.",
    precio: "19,990",
    category: "proteinas",
    img: require("../img/proteina-vegetal.webp"),
    alt: "Proteína Vegetal",
  },
  {
    id: 2,
    titulo: "Proteína Carnivor",
    descripcion:
      "Carnivor es el primer suplemento proteico en polvo a base de carne de vacuno sin grasa ni colesterol. Contiene los niveles más altos de aminoácidos que otras fuentes proteicas, incluyendo la leche, el huevo y suero. Es un 350% más concentrado en aminoácidos y proporciona 20 veces más creatina que el filete de carne para saturar la musculatura de fuerza y fomentar el crecimiento muscular. Para reforzar la acción anabólica de carnivor, se ha añadido todos los BCAAs que tu organismo necesita para aumentar la síntesis de proteínas, disminuir el catabolismo, mejorar el rendimiento y reducir la fatiga muscular post entrenamiento. Cada porción de 37g contiene 2,5 g de creatina, 325% y 46% de la dosis diaria recomendada de vitamina B6 y Niacina.",
    precio: "49,990",
    category: "proteinas",
    img: require("../img/proteina-de-carne.png"),
    alt: "Proteína Carne",
  },
  {
    id: 3,
    titulo: "Proteína Syntha 6",
    descripcion:
      "SYNTHA 6, es una mezcla de proteínas de alto valor biológico y variable velocidad de absorción, aportando hasta 7 horas de efectividad. Además contiene 2 tipos de enzimas digestivas (papaína y bromelina) lo que garantiza una mejor digestión, absorción y rápida utilización de los aminoácidos que requiere el tejido muscular para lograr un óptimo desarrollo y recuperación muscular.",
    precio: "42,990",
    category: "proteinas",
    img: require("../img/proteina-suero-leche.webp"),
    alt: "Proteína de Leche",
  },
  {
    id: 4,
    titulo: "Creatina Crea Max",
    descripcion:
      "Crea Max es un suplemento de Creatina, reforzado con Glutamina para mejorar y acelerar la recuperación muscular y con Taurina para mejorar los niveles de energía. La contracción y relajación muscular se dan a través de la energía proveniente de las células a través del ATP (Adenosin Trifosfato). Los músculos tienen un limitado aporte de ATP y son rápidamente usados durante el ejercicio. La Creatina es un derivado de los aminoácidos que resintetiza el ATP (Adenosin Trifosfato) principal fuente de energía que necesita el músculo para realizar un movimiento. Por esta razón entrega un plus de energía a tus músculos cuando entrenas, aumentando rápidamente tu fuerza y potencia muscular.",
    precio: "31,990",
    category: "creatinas",
    img: require("../img/creatina.webp"),
    alt: "Creatina",
  },
  {
    id: 5,
    titulo: "Creatina Drive 300G",
    descripcion:
      "CREATINE DRIVE™ contiene monohidrato de creatina puro que aumenta tu fuerza, potencia y energía en cada entrenamiento.",
    precio: "33,990",
    category: "creatinas",
    img: require("../img/creatina2.webp"),
    alt: "Creatina Drive 300g",
  },
  {
    id: 6,
    titulo: "Creatina Platinum 100%",
    descripcion:
      "La creatina es capaz de regenerar rápidamente la energía con la que trabajan las células del músculo (ATP). Con mayores niveles de ATP, podrás entrenar con mayor potencia y tendrás una recuperación mucho más rápida entre cada serie. Al presentar un formato tabletas, facilita su dosificación y portabilidad.",
    precio: "26,990",
    category: "creatinas",
    img: require("../img/creatina3.webp"),
    alt: "Creatina Platinum 100%",
  },
  {
    id: 7,
    titulo: "Lipo 6 Black Her",
    descripcion:
      "La nueva fórmula del renombrado quemador de grasas LIPO 6 BLACK HERS, te brindará un apoyo para la baja de peso corporal, siendo uno de los más estimulantes en el mercado, por lo cual se recomienda consumir sólo 1 cápsula. LIPO 6 BLACK HERS favorece 2 efectos en nuestro organismo, permite un efecto termogénico y un efecto lipotrópico, el primero realizará un aumento en el estado de alerta mental y energía física, y el segundo, una remoción de las grasas almacenadas. Ambos te permitirán una reducción de peso según tu meta. Para garantizar un mejor efecto, todos los ingredientes de esta fórmula son naturales y permitidos en nuestra legislación.",
    precio: "28,990",
    category: "quemadores",
    img: require("../img/quemador1.webp"),
    alt: "Lipo 6 Black Her Ultra",
  },
  {
    id: 8,
    titulo: "New Hydroxycut Hardcore",
    descripcion:
      "Fórmula súper termogénica para bajar de peso de manera segura, con ingredientes cuidadosamente seleccionados para una mayor efectividad en la quema de grasas junto con una experiencia sensorial incomparable. La combinación de principios activos permite una eficiente estimulación de la termogénesis. La termogénesis es un proceso natural del organismo que incrementa la quema de calorías y grasas. Una fórmula termogénica estimula la termogénesis para quemar más grasas y bajar de peso rápidamente mientras se hace ejercicio.",
    precio: "29,990",
    category: "quemadores",
    img: require("../img/quemador2.webp"),
    alt: "New Hydroxycut Hardcore Elite",
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

export const getProductosPorId = (productoId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        catalogo.find((elproducto) => elproducto.id === parseInt(productoId))
      );
    }, 2000);
  });
};

export default catalogo;
