type Age = number;
type Person = {
  name: string;
  age: Age;
  favoritecolor: FavoriteColor;
};

type RGB = 'Red' | 'Green' | 'Blue';
type CMYK = 'Cian' | 'Magenta' | 'Yellow' | 'Black';
type FavoriteColor = RGB | CMYK;

const person1: Person = {
  name: 'ana',
  age: 18,
  favoritecolor: 'Black',
};
