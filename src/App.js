import { useEffect, useState } from "react";
import tw, { styled } from "twin.macro";

import api from "./api";
import CitiesList from "./CitiesList";
import Select from "./components/Select";
import WeatherReport from "./components/WeatherReport";
import withLoader from "./components/Loader";
import Forecast from "./components/Forecast";

export const App = ({ toggleLoader }) => {
  const [currentCity, setCurrentCity] = useState(CitiesList[0]);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    toggleLoader(true);
    api.getWeatherDataById(currentCity.id).then((res) => {
      setWeather(res.data);
      toggleLoader(false);
    });
  }, [currentCity.id, toggleLoader]);

  return (
    <MainLayout>
      <Header>Weather App</Header>
      <Content>
        <Select
          label={"Select City"}
          options={CitiesList}
          current={currentCity.id}
          onChange={setCurrentCity}
        />
        <WeatherReport weather={weather} />
        <Forecast list={weather.list?.slice(1)} />
      </Content>
    </MainLayout>
  );
};

const MainLayout = styled.div`
  ${tw`flex flex-col w-full h-screen bg-theme-secondary text-theme-primary`}
  > * {
    ${tw`px-8! md:px-24!`}
  }
`;
const Header = styled.div`
  ${tw`bg-theme-primary text-theme-secondary font-semibold text-3xl py-2`}
`;

const Content = styled.div`
  ${tw`flex-grow py-2`}
`;

export default withLoader(App);
