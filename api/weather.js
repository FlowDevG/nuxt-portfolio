const URLS = {
  weather: '/data/2.5/weather?'
};

export const getWeather = (params) => {

  // console.log('params here', params)
  return {
    url: `${URLS.weather}lat=40.63666412&lon=22.942162898&appid=11b0499bd13ab56063de7565a440eb97&units=metric`,
    method: "GET",
    params,
  };
};

