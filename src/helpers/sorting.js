export const sortByAscending = (a,b) => {
  return ((a.name.toLowerCase() > b.name.toLowerCase()) ?  1 :  -1);
 }

export const sortByDescending = (a,b) => {
  return ((a.name.toLowerCase() > b.name.toLowerCase()) ?  -1 :  1);
}
