// Ajout d'un espace tous les 3 chiffres
export const numberFormat = num => {
   return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
};

export const capitalize1stLetter = str => {
   return str.charAt(0).toUpperCase() + str.slice(1);
};