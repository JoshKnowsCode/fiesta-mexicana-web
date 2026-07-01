// Spanish translations for menu categories and items
// Keyed by category id, then item name

export const MENU_ES: Record<string, {
  title: string;
  blurb?: string;
  items: Record<string, { name?: string; description?: string; note?: string }>;
}> = {
  appetizers: {
    title: "Aperitivos",
    blurb: "Empieza con algo para compartir, o no, aquí no decimos nada.",
    items: {
      "Fiesta Nachos": {
        description: "Totopos con tu elección de carne, una explosión de sabor. Con frijoles, crema fresca, queso y cilantro.",
      },
      "Queso Fundido": {
        description: "Queso Oaxaca derretido, servido con 3 tortillas de harina para hacer tus propios tacos.",
      },
      "Guacamole": {
        description: "Preparado al momento con nuestra receta familiar, servido con totopos.",
      },
      "El Nido": {
        description: "La creación de Federico, un antojito casero, sencillo pero delicioso. Frijoles refritos con chorizo, rodeados de totopos.",
      },
    },
  },
  antojitos: {
    title: "Antojitos",
    blurb: "Botanas mexicanas tradicionales hechas a mano.",
    items: {
      "Sopes (order of 2)": {
        name: "Sopes (orden de 2)",
        description: "Tortillas gruesas hechas a mano con bordes pellizcados, guarnecidas con lechuga, crema y queso fresco.",
      },
      "Tostadas (order of 2)": {
        name: "Tostadas (orden de 2)",
        description: "Ligeras y frescas, tortillas planas horneadas con frijoles refritos, tu elección de carne o verduras, lechuga, crema y queso fresco.",
      },
      "Flautas (order of 3)": {
        name: "Flautas (orden de 3)",
        description: "Tacos fritos largos y delgados rellenos de tu selección, con lechuga, crema y queso fresco.",
      },
      "Tacos": {
        description: "Tortilla de maíz suave, tu elección de carne, con cilantro, cebolla cruda picada y limón.",
      },
      "Quesadillas (order of 3)": {
        name: "Quesadillas (orden de 3)",
        description: "Hechas con masa de maíz fresca, prensadas, rellenadas y fritas. Con lechuga, queso y crema. Mezcla hasta 2 rellenos.",
      },
      "Enchiladas / Enmoladas": {
        description: "Cuatro tortillas fritas al instante, bañadas en salsa, rellenas de pollo asado deshebrado, con crema, cebolla, queso y cilantro.",
        note: "Cualquier otra carne $15",
      },
      "Enfrijoladas": {
        description: "Cuatro tortillas bañadas en frijoles, rellenas de pollo, con crema, cebolla cruda, queso y cilantro.",
        note: "Cualquier otra carne $16",
      },
      "Tortas": {
        description: "El sándwich mexicano, con frijoles refritos, mayonesa, queso, jitomate, cebolla, aguacate, lechuga y jalapeño o chipotle.",
        note: "$.50 extras adicionales",
      },
      "Pambazo": {
        description: "Reseñado en línea como 'un sándwich increíblemente único.' Un bolillo untado con guajillo, sellado en sartén, relleno de chorizo con papa, lechuga, crema y queso fresco.",
        note: "Cualquier otro relleno $13",
      },
    },
  },
  breakfast: {
    title: "Desayunos",
    blurb: "Huevos al estilo mexicano, servidos con frijoles y tortillas.",
    items: {
      "Huevos a la Mexicana": { description: "Huevos revueltos con jalapeños, jitomate y cebolla." },
      "Huevos Rancheros": { description: "Dos huevos estrellados sobre tortillas fritas, cubiertos con tu elección de salsa." },
      "Huevos con Chorizo": { description: "Dos huevos al gusto con nuestro delicioso chorizo." },
      "Huevos con Frijoles": { description: "Huevos revueltos con frijoles refritos, servidos con aguacate y queso fresco." },
      "Chilaquiles": { description: "Con tu elección de salsa verde o roja, cecina y frijoles refritos." },
    },
  },
  entrees: {
    title: "Platillos",
    blurb: "Platos del corazón de nuestra cocina.",
    items: {
      "Carne Asada o Milanesa": {
        description: "Carne asada o milanesa de res servida con arroz, frijoles, aguacate, lechuga, jitomate, queso fresco y tortillas.",
      },
      "Paquete Eduques": {
        description: "Una probadita: 2 enchiladas, 1 quesadilla, 1 flauta, 1 sope y un taco.",
        note: "Solo res $16",
      },
      "Paquete Llenes": {
        description: "El paquete grande: 2 tacos, 2 tostadas, 2 enchiladas, 1 quesadilla, 1 flauta y 1 sope.",
        note: "Lengua $38 · Pastor · Asada",
      },
    },
  },
  drinks: {
    title: "Bebidas",
    blurb: "¿Tienes sed?",
    items: {
      "Champurrado (winter)": { name: "Champurrado (invierno)" },
    },
  },
  desserts: {
    title: "Postres",
    blurb: "Postres, termina dulce.",
    items: {},
  },
  extras: {
    title: "Extras y Guarniciones",
    blurb: "Complementa tu plato.",
    items: {
      "Rice & Beans": { name: "Arroz y Frijoles" },
      "Sautéed Jalapeños & Onions": { name: "Jalapeños y Cebolla Salteados" },
      "Salsa verde o roja": { name: "Salsa verde o roja" },
      "½ Aguacate": { name: "½ Aguacate" },
      "Aguacate whole": { name: "Aguacate entero" },
    },
  },
};
