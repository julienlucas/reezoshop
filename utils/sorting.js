export const sortAsc = (array, key) => {
   return [...array].sort((a,b) => (a[key] < b[key]) ? -1 : ((b[key] < a[key]) ? 1 : 0))
};

export const sortDsc = (array, key) => {
   return [...array].sort((a,b) => (a[key] > b[key]) ? -1 : ((b[key]> a[key]) ? 1 : 0))
};
