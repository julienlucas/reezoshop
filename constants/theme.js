export const colors = {
   black: '#313131',
   grey100: '#919191',
   grey200: '#C4C4C4',
   grey300: '#F6F6F6',
   grey400: '#DCDCDC',
   grey500: '#555555',
   grey600: '#DDDDDD',
   grey700: '#EBEBEB',
   orange100: '#F29301',
   orange200: '#C98722',
   jaune100: '#F29400',
   orange: '#F29400',
   blue: '#11589A',
   blue100: '#11589A',
   blue200: '#124b80',
};

export const medias = {
   min1200: '@media (min-width: 1200px)',
   min990: '@media (min-width: 990px)',
   min800: '@media (min-width: 800px)',
   min780: '@media (min-width: 780px)',
   min768: '@media (min-width: 768px)',
   min750: '@media (min-width: 750px)',
   min620: '@media (min-width: 620px)',
   min480: '@media (min-width: 480px)',
   min380: '@media (min-width: 380px)',
   min: (width) => `@media (min-width: ${width}px)`,
   mins: ({ height, width }) =>
      `@media ${height ? `(min-height: ${height}px)` : ''}${height && width ? ' and ' : ''}${
         width ? `(min-width: ${width}px)` : ''
      }`,
};

export const theme = {
   ...colors,
   colors,
   medias,
};