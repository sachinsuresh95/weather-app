import tw, { styled } from "twin.macro";

const WeatherReport = ({ weather }) => {
  return (
    <WeatherCard>
      <WeatherTitle>{weather.city?.name}</WeatherTitle>
      <WeatherBody>
        <div className="text-6xl font-bold">
          {weather.list?.[0].main.temp} <sup className="text-2xl">&#8451;</sup>
        </div>
        <div className="text-sm flex justify-evenly my-2">
          <div>Min temp: {weather.list?.[0].main.temp_min}</div>
          <div>Max temp: {weather.list?.[0].main.temp_max}</div>
        </div>
        <div className="flex justify-center">
          <img
            alt="weather icon"
            src={`http://openweathermap.org/img/w/${weather.list?.[0].weather?.[0].icon}.png`}
          />
        </div>
        <div className="text-2xl">{weather.list?.[0].weather?.[0].main}</div>
        <div className="text-lg">
          {weather.list?.[0].weather?.[0].description}
        </div>
      </WeatherBody>
    </WeatherCard>
  );
};

const WeatherCard = styled.div`
  ${tw`flex flex-col border border-theme-primary rounded text-center my-8`}
`;

const WeatherTitle = styled.div`
  ${tw`text-xl py-2 border-b rounded border-theme-primary bg-theme-primary text-theme-secondary font-semibold`}
`;

const WeatherBody = styled.div`
  ${tw`flex flex-col pb-4`}
`;

export default WeatherReport;
