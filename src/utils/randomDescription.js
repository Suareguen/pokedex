export function generatePokemonDescription(pokemonName) {
    const adjectives = [
      "poderoso",
      "rápido",
      "inteligente",
      "misterioso",
      "colorido",
      "valiente",
      "amigable",
      "encantador",
      "legendario",
      "majestuoso",
    ];
  
    const verbs = [
      "ataca",
      "defiende",
      "explora",
      "conquista",
      "protege",
      "corre",
      "vuela",
      "navega",
      "hipnotiza",
      "inspira",
    ];
  
    const habitats = [
      "en la selva",
      "en las montañas",
      "bajo el agua",
      "en la ciudad",
      "en la oscuridad",
      "en el cielo",
      "en la playa",
      "en el espacio",
      "en la cueva",
      "en el bosque",
    ];
  
    const randomElement = (array) => array[Math.floor(Math.random() * array.length)];
  
    const adjective = randomElement(adjectives);
    const verb = randomElement(verbs);
    const habitat = randomElement(habitats);
  
    return `El Pokémon ${pokemonName} es conocido por ser ${adjective} y ${verb} ${habitat}. ¡Descúbrelo en tu próxima aventura!`;
  }
  

  