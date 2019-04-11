export const createDataPoint = (time = Date.now(), watts = 1000, offset = 0) => {
  return [
    time + offset * watts,
    Math.round((Math.random() * 100) * 2) / 2,
  ];
};

export const createRandomData = (time, watts, points = 20) => {
  const data = [];
  let i = (points * -1) + 1;
  for (i; i <= 0; i++) {
    data.push(createDataPoint(time, watts, i));
  }
  return data;
};

