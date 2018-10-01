const hsl2rgb = require('../index');

test('converts colors', () => {
  const red = hsl2rgb(0, 1, 0.5);
  const green = hsl2rgb(120, 1, 0.5);
  const purple = hsl2rgb(279.7, 0.602, 0.404);
  const black = hsl2rgb(0, 0, 0);
  const blue = hsl2rgb(240, 1, 0.5);
  const pink = hsl2rgb(340, 1, 0.5);

  expect(red).toEqual([255, 0, 0]);
  expect(green).toEqual([0, 255, 0]);
  expect(purple).toEqual([123, 41, 165]);
  expect(black).toEqual([0, 0, 0]);
  expect(blue).toEqual([0, 0, 255]);
  expect(pink).toEqual([255, 0, 85]);
})
