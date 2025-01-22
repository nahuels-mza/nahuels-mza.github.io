import image1 from "../../src/assets/habPrincipalHome.jpg";
import image2 from "../../src/assets/habCompartidaHome.jpeg";
import image3 from "../../src/assets/habIndividualHome.jpg";

const LorenImpsu =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nisl vitae purus lobortis, quis scelerisque diam tincidunt. Donec eu risus urna. Sed quis enim vitae orci tristique imperdiet eget sed lectus. Suspendisse placerat mi id blandit accumsan. Integer sodales neque nisl, mollis consectetur sapien fringilla vitae. Etiam est sapien, fermentum id quam a, tincidunt vestibulum odio. Nullam dapibus porta elit, vel vestibulum nisl dictum eu. Quisque tincidunt vitae enim eget mollis. Aenean tincidunt massa mauris, sit amet porta libero auctor nec. Phasellus id tincidunt eros, vitae gravida turpis. Nam mattis eget turpis vitae aliquam.Suspendisse mattis ex a velit posuere posuere.In vitae justo scelerisque nulla tincidunt vehicula.Ut vulputate iaculis consequat.Donec in mauris euismod, tempus dolor sed, pretium elit.Curabitur in dui ultrices, tristique leo eu, feugiat tortor.Etiam at auctor dui.Ut fermentum pulvinar turpis, finibus vulputate metus eleifend in.Curabitur posuere eu magna vitae commodo.Pellentesque quis dapibus lectus.Nam elementum dolor vel iaculis consectetur.Praesent feugiat porta velit pulvinar faucibus.Suspendisse sed iaculis metus.Morbi blandit a sem et varius.";

const LorenImpsu2 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere odio eget odio tempor, non.";

const WhatsAppMessage= "Hola Plaza Hostel. Queria obtener informacion sobre"



const hostelImages = [
  {
    img: image1,
    title: "Habitaciones Familiares",
    description: LorenImpsu,
  },
  {
    img: image2,
    title: "Habitaciones Compartidas ",
    description: LorenImpsu,
  },
  {
    img: image3,
    title: "Habitaciones Individuales",
    description: LorenImpsu,
  },
];

const agenciaImages = [
  {
    id:1,
    img: "https://picsum.photos/id/134/400/300",
    title: "Ciudad",
    description: LorenImpsu2,
    videoUrl: "https://www.shutterstock.com/shutterstock/videos/1100619309/preview/stock-footage-city-of-mendoza-argentina-aerial-drone-above-green-landscape-and-metropolitan-area-great-wine.webm",
    wspMessage : `${WhatsAppMessage} tour en la ciudad`,
  },
  {
    id:2,
    img: "https://001e6926.rocketcdn.me/wp-content/uploads/elementor/thumbs/Gastronomia-en-bodegas-q9zp70jjnj8fa4r5u3tsf5hskepvx20va3kv7g226g.jpg",
    title: "Bodegas",
    description: LorenImpsu2,
    videoUrl: "https://www.shutterstock.com/shutterstock/videos/1035525677/preview/stock-footage-argentina-circa-aerial-over-a-woman-walking-through-a-vineyard-winery-in-argentina.webm",
    wspMessage : `${WhatsAppMessage} tours a las bodegas`,
  },
  {
    id:3,
    img: "https://picsum.photos/id/79/400/300",
    title: "Montaña",
    description: LorenImpsu2,
    videoUrl: "https://www.shutterstock.com/shutterstock/videos/3498719143/preview/stock-footage-video-of-sky-center-las-le-as-mendoza-argentina.webm",
    wspMessage : `${WhatsAppMessage} excursiones a la montaña`,
  },
  {
    id:4,
    img: image3,
    title: "Aventura",
    description: LorenImpsu,
    videoUrl: "https://www.shutterstock.com/shutterstock/videos/1110814829/preview/stock-footage-san-rafael-argentina-october-video-rafting-in-rio-atuel-in-valle-grande-ca-on-del.webm",
    wspMessage : `${WhatsAppMessage} excursiones aventureras`,
  },
];

const commentData = [
  {
    img: "https://picsum.photos/400/300",
    title: "Ciudad",
    description: LorenImpsu2,
  },
  {
    img: "https://001e6926.rocketcdn.me/wp-content/uploads/elementor/thumbs/Gastronomia-en-bodegas-q9zp70jjnj8fa4r5u3tsf5hskepvx20va3kv7g226g.jpg",
    title: "Bodegas",
    description: LorenImpsu2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Camera",
    description: LorenImpsu2,
  },
  {
    img: image3,
    title: "Habitaciones familiares",
    description: LorenImpsu,
  },
];

const ownerData = [
  {
    name: "Damian",
    descriptions: "qalsjdalsdasñldkq1231254twed",
  },
  {
    name: "Matias",
    descriptions: LorenImpsu,
  },
  {
    name: "Nahuel",
    descriptions: "asjhda",
  },
];


const isMobile = "ontouchstart" in window || navigator.maxTouchPoints > 0;

export { hostelImages, agenciaImages, commentData, ownerData, LorenImpsu, isMobile, WhatsAppMessage };
