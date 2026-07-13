export const TRIPS = {
  milan: {
    label: 'Milán',
    subtitle: 'Milán + Lago di Como',
    dates: '11 – 12 julio 2026',
  },
  dolomitas: {
    label: 'Dolomitas en camper',
    subtitle: '9 días recorriendo las Dolomitas en camper',
    dates: '13 – 21 julio 2026',
  },
} as const;

export type TripKey = keyof typeof TRIPS;
