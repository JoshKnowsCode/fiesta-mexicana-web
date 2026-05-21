export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  options?: string[];
  note?: string;
  popular?: boolean;
};

export type MenuCategory = {
  id: string;
  title: string;
  blurb?: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: "appetizers",
    title: "Appetizers",
    blurb: "Start with something to share, or don't, we won't tell.",
    items: [
      {
        name: "Fiesta Nachos",
        price: "14",
        popular: true,
        description:
          "Tortilla chips with your choice of meat, an explosion of flavor. Topped with beans, crema fresca, queso and cilantro.",
      },
      {
        name: "Queso Fundido",
        price: "9",
        description: "Melted Oaxaca cheese, served with 3 flour tortillas for you to make your own tacos.",
        options: ["Sencillo (plain)", "Con Hongos (mushroom)", "Con Rajas (poblano)", "Con Papa (potatoes)", "Con Chorizo"],
      },
      {
        name: "Guacamole",
        price: "8",
        description: "Made to order with our family recipe, served with chips.",
      },
      {
        name: "El Nido",
        price: "9",
        description:
          "Federico's creation, a homemade snack, simple but delicious. Refried beans tossed with chorizo, surrounded with chips.",
      },
    ],
  },
  {
    id: "antojitos",
    title: "Antojitos",
    blurb: "Traditional handmade Mexican street snacks.",
    items: [
      {
        name: "Sopes (order of 2)",
        price: "13",
        description:
          "Thick handmade tortillas with pinched rims, garnished with lettuce, crema and queso fresco.",
        options: ["Hongos", "Rajas", "Pollo", "Tinga de pollo", "Carne de res", "Chorizo", "Chorizo con papa"],
      },
      {
        name: "Tostadas (order of 2)",
        price: "11",
        description:
          "Light and fresh, baked hard flat tortillas with refried beans, your choice of meat or vegetables, lettuce, crema, queso fresco.",
        options: ["Pollo", "Tinga de pollo", "Res", "Hongos", "Rajas"],
      },
      {
        name: "Flautas (order of 3)",
        price: "13",
        description:
          "Long, thin fried tacos filled with your selection and topped with lettuce, crema and queso fresco.",
        options: ["Papa", "Pollo", "Res"],
      },
      {
        name: "Tacos",
        price: "3.5",
        description:
          "Soft corn tortilla, your choice of meat, topped with cilantro, diced raw onions and lime.",
        options: [
          "Tinga de pollo",
          "Pollo",
          "Chorizo",
          "Campechanos",
          "Carnitas",
          "Carne de res ($4)",
          "Asada ($4.50)",
          "Lengua o Pastor Alambre ($4.50)",
        ],
      },
      {
        name: "Quesadillas (order of 3)",
        price: "13",
        description:
          "Made with fresh corn dough, pressed, stuffed, then fried. Garnished with lettuce, queso and crema. Mix up to 2 fillings.",
        options: ["Queso", "Frijoles", "Hongos", "Rajas", "Papa", "Pollo", "Tinga", "Res", "Chorizo", "Chorizo con papa"],
      },
      {
        name: "Enchiladas / Enmoladas",
        price: "15",
        description:
          "Four tortillas flash-fried, tossed in salsa, stuffed with shredded roasted chicken, garnished with crema, onions, cheese and cilantro.",
        options: ["Salsa verde", "Mole (when available, from Mexico City)"],
        note: "Any other meat $15",
      },
      {
        name: "Enfrijoladas",
        price: "15",
        description:
          "Four tortillas tossed with beans, filled with chicken, garnished with crema, raw onions, cheese and cilantro.",
        note: "Any other meat $16",
      },
      {
        name: "Tortas",
        price: "12",
        description:
          "The Mexican sub, refried beans, mayo, cheese, tomato, onions, avocado, lettuce, jalapeño or chipotle.",
        options: [
          "Pollo",
          "Tinga de pollo",
          "Huevo con chorizo",
          "Chorizo con papa",
          "Milanesa de res (10.85)",
          "Carnitas (10.85)",
          "Res (10.85)",
          "Asada (11)",
          "Lengua (11)",
          "Pastor (11)",
        ],
        note: "$.50 any extras",
      },
      {
        name: "Pambazo",
        price: "12",
        popular: true,
        description:
          "Reviewed online as 'a uniquely awesome sandwich.' A fresh roll brushed with guajillo, pan-seared, stuffed with chorizo & papa, lettuce, crema and queso fresco.",
        note: "Any other filling $13",
      },
    ],
  },
  {
    id: "breakfast",
    title: "Breakfast",
    blurb: "Eggs Mexican style, served with beans and tortillas.",
    items: [
      { name: "Huevos a la Mexicana", price: "14", description: "Scrambled eggs with jalapeños, tomato and onions." },
      { name: "Huevos Rancheros", price: "14", popular: true, description: "Two over-easy eggs on fried tortillas, covered with your choice of salsa." },
      { name: "Huevos con Chorizo", price: "14", description: "Two eggs any style with our delicious chorizo." },
      { name: "Huevos con Frijoles", price: "14", description: "Scrambled eggs tossed with refried beans, served with avocado and queso fresco." },
      { name: "Chilaquiles", price: "15", popular: true, description: "Your choice of green or red salsa, cecina, and refried beans." },
    ],
  },
  {
    id: "entrees",
    title: "Entrees",
    blurb: "Plates from the heart of our kitchen.",
    items: [
      {
        name: "Carne Asada o Milanesa",
        price: "18",
        popular: true,
        description: "Carne asada or breaded beef served with rice, beans, avocado, lettuce, tomato, fresh cheese and tortillas.",
      },
      {
        name: "Paquete Eduques",
        price: "25",
        description: "A sampler: 2 enchiladas, 1 quesadilla, 1 flauta, 1 sope and a taco.",
        note: "Only beef $16",
      },
      {
        name: "Paquete Llenes",
        price: "35",
        popular: true,
        description: "A bigger sampler: 2 tacos, 2 tostadas, 2 enchiladas, 1 quesadilla, 1 flauta and 1 sope.",
        note: "Lengua $38 · Pastor · Asada",
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    blurb: "Feeling thirsty?",
    items: [
      { name: "Aguas frescas", price: "4" },
      { name: "Imported sodas", price: "3" },
      { name: "Can sodas", price: "1.5" },
      { name: "Nectar Jumex", price: "2" },
      { name: "SmartWater", price: "2.5" },
      { name: "Deer Park", price: "2" },
      { name: "Dasani", price: "2" },
      { name: "Coca-Cola products", price: "2.5" },
      { name: "Coffee", price: "1.5" },
      { name: "Champurrado (winter)", price: "3" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    blurb: "Postres, finish sweet.",
    items: [
      { name: "Flan", price: "4" },
      { name: "Tres Leches", price: "4" },
      { name: "Gelatina Mosaico", price: "4" },
      { name: "Arroz con Leche", price: "4" },
      { name: "Buñuelos", price: "1" },
    ],
  },
  {
    id: "extras",
    title: "Extras & Sides",
    blurb: "Round out your plate.",
    items: [
      { name: "Rice & Beans", price: "7" },
      { name: "Sautéed Jalapeños & Onions", price: "4" },
      { name: "Guacamole (2 oz)", price: "1" },
      { name: "Crema", price: "1" },
      { name: "Salsa verde o roja", price: "1" },
      { name: "½ Aguacate", price: "3" },
      { name: "Aguacate whole", price: "6" },
    ],
  },
];

export const RESTAURANT = {
  name: "Fiesta Mexicana",
  tagline: "Food made from the heart",
  address: "8436 Philadelphia Road, Rosedale, Maryland 21237",
  phone: "410-686-0134",
  phoneHref: "tel:4106860134",
  hours: "Open today 11:00 am – 9:00 pm",
  mapsQuery: "Fiesta Mexicana 8436 Philadelphia Road Rosedale Maryland 21237",
};
