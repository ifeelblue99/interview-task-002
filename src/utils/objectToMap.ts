export default function objectToMap(obj: Object) {
  /*
   * Turn object into maps
  
   * obj = {
   *   id1: {data: 15},
   *   id1: {data: 20}
   * }
   *  TO
   * map -> key: id1, value: {data: 15}
   *        key: id2, value: {data: 20}
   *
   * */

  const map = new Map();

  for (let [key, value] of Object.entries(obj)) {
    map.set(key, value);
  }

  return map;
}
