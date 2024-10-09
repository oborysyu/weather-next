import { create } from "zustand";

interface CityState {
  city: string;
  updateCity: (cityName: string) => void;
}

const useCityStore = create<CityState>((set) => ({
  city: process.env.NEXT_PUBLIC_START_CITY as string,
  updateCity: (lastName) => set(() => ({ city: lastName })),
}));

export default useCityStore;
