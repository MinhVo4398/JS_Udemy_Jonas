const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: prompt('Degree celsius'),
  };
  console.log(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};
