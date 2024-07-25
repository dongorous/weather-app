import { useGetCityDataQuery } from "../services/weatherApi";

interface WeatherDisplayProps {
  city: string
}

const WeatherDisplay = ({ city } : WeatherDisplayProps) => {

  const { data, isLoading, error } = useGetCityDataQuery(city, {skip: !city || city === ''});

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if(error){
    return <p>{error.data.message}</p>;
  }

  if (!data) {
    return <p>Please Enter City</p>;
  }

  const currentCondition = data;

  return (
    <div className="weather-info">
      <h2>Weather in {city}</h2>
      <p>Temperature: {currentCondition.main.temp} °C</p>
      <p>Weather Conditions are: {currentCondition.weather[0].description}</p>
    </div>
  );
};

export default WeatherDisplay;