export const sort = (array, key, sortOrder) => {
   if (sortOrder === 'pricesDsc') {
      return [...array].sort((a,b) => (a[key] > b[key]) ? -1 : ((b[key]> a[key]) ? 1 : 0))
   }
   if (sortOrder === 'pricesAsc') {
      return [...array].sort((a,b) => (a[key] < b[key]) ? -1 : ((b[key] < a[key]) ? 1 : 0))
   }
   return array;
};
