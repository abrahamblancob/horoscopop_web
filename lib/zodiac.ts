export interface ZodiacSign {
  name: string;
  emoji: string;
  dates: string;
  element: string;
}

export const ZODIAC_SIGNS: ZodiacSign[] = [
  { name: "Aries", emoji: "♈", dates: "21 Mar - 19 Abr", element: "Fuego" },
  { name: "Tauro", emoji: "♉", dates: "20 Abr - 20 May", element: "Tierra" },
  { name: "Géminis", emoji: "♊", dates: "21 May - 20 Jun", element: "Aire" },
  { name: "Cáncer", emoji: "♋", dates: "21 Jun - 22 Jul", element: "Agua" },
  { name: "Leo", emoji: "♌", dates: "23 Jul - 22 Ago", element: "Fuego" },
  { name: "Virgo", emoji: "♍", dates: "23 Ago - 22 Sep", element: "Tierra" },
  { name: "Libra", emoji: "♎", dates: "23 Sep - 22 Oct", element: "Aire" },
  { name: "Escorpio", emoji: "♏", dates: "23 Oct - 21 Nov", element: "Agua" },
  { name: "Sagitario", emoji: "♐", dates: "22 Nov - 21 Dic", element: "Fuego" },
  { name: "Capricornio", emoji: "♑", dates: "22 Dic - 19 Ene", element: "Tierra" },
  { name: "Acuario", emoji: "♒", dates: "20 Ene - 18 Feb", element: "Aire" },
  { name: "Piscis", emoji: "♓", dates: "19 Feb - 20 Mar", element: "Agua" },
];
