const themeColours = {
  'dark': '#0f1419',
  'darkish': '#222b3a',
  'yellow': '#cfc242',
  'green': '#25a721',
  'pink': '#eb225d',
  'red': '#962227',
  'blue': '#6623b7',
  'lightBlue': '#3081c7'
};

const statusColours = {
  'unclear':   themeColours.darkish,
  'very low':  themeColours.yellow,
  'low':       themeColours.green,
  'moderate':  themeColours.pink,
  'high':      themeColours.pink,
  'very high': themeColours.red
};

const energyColours = {
  'gas'    : themeColours.red,
  'coal'   : themeColours.red,
  'wind'   : themeColours.yellow,
  'solar'  : themeColours.yellow,
  'biomass': themeColours.green,
  'hydro'  : themeColours.yellow,
  'nuclear': themeColours.green,
  'other'  : themeColours.pink,
  'imports': themeColours.pink
}

export { statusColours, themeColours, energyColours }
