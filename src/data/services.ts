import grav from "/assets/images/gravure.jpeg"
import urus from "/assets/images/urus.jpeg"
import mirror from "/assets/images/mirror.jpeg"

export interface Service {
  image: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    image: grav,
    title: "Gravure",
    description: "Designs personnalisés sur divers matériaux"
  },
  {
    image: urus,
    title: "Souvenirs",
    description: "Personnalisation élégante pour vos souvenirs uniques"
  },
  {
    image: mirror,
    title: "Services",
    description: "Image de marque et signalétique corporative"
  }
];
