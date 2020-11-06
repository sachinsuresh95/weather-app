import tw, { styled } from "twin.macro";
const Forecast = ({ list }) => {
  return (
    <div>
      <div className="font-semibold">Forecast</div>
      <div className="flex flex-wrap justify-between">
        {list?.map((w) => {
          const date = new Date(w.dt_txt);
          return (
            <ForecastCard key={date}>
              <CardTitle>
                {`${date.getHours() % 12 === 0 ? "12" : date.getHours() % 12} ${
                  date.getHours() > 11 ? "PM" : "AM"
                }, ${date.toDateString().slice(0, -4)}`}
              </CardTitle>
              <span className="text-lg">
                {w.main.temp}
                <span className="text-sm">&#8451;</span>
              </span>
              <span className="text-lg font-semibold">{w.weather[0].main}</span>
              <span>{w.weather[0].description}</span>
            </ForecastCard>
          );
        })}
      </div>
    </div>
  );
};

const ForecastCard = styled.div`
  ${tw`flex flex-col border border-theme-primary rounded text-center my-2`}
  width: 45%;
`;

const CardTitle = styled.div`
  ${tw`bg-theme-primary text-theme-secondary py-1 text-sm font-semibold`}
`;

export default Forecast;
