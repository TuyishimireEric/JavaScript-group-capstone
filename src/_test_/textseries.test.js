const getSeries = async () => {
  const response = await fetch('https://api.tvmaze.com/shows/1/episodes');
  const series = await response.json();
  return series;
};

describe('fetch Series test', () => {
  test('check if getSeries is a function', () => {
    expect(typeof getSeries).toBe('function');
  });
});
