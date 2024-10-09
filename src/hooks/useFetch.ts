"use client";
import moment from "moment";
import { useEffect, useState } from "react";

export default function useFetch(city: string) {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // method to update weather data
  const updateData = (data: any) => {
    const full = [];
    for (let i = 0; i < data.list.length; i++) {
      if (moment(data.list[i].dt_txt).isSame(new Date(), "day")) {
        full.push({
          city,
          time: data.list[i].dt_txt,
          temperature: data.list[i].main.temp,
          humidity: data.list[i].main.humidity,
          wind: data.list[i].wind.speed,
          icon: data.list[i].weather[0].icon,
        });
      }
    }
    const short = full.slice(0, 2);
    const current = {
      city,
      time: data.list[0].dt_txt,
      humidity: data.list[0].main.humidity,
      temperature: data.list[0].main.temp,
      wind: data.list[0].wind.speed,
      icon: data.list[0].weather[0].icon,
    };
    return { current, full, short };
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL +
          `?q=${city}&units=metric&APPID=${process.env.NEXT_PUBLIC_KEY}`
      );
      const result = await response.json();
      setLoading(false);
      if (result.cod === "200") {
        setError(null);
        setData(updateData(result));
      } else {
        setError(result.message);
      }
    };

    fetchData();
  }, [city]);

  return { data, error, loading };
}
