/**
 * Time Complexity -> O( n + 3 ) -> O(n)
 * Spatial complexity -> O( n + 1 ) -> O(n)
 * Auxiliar Space (Spatial complexity - Input Space)  -> O(1)
 */
function linearSearch(arreglo, clave) { // Space = O(n)
  for (let indice = 0; indice < arreglo.length; indice++) { // Time = O(1)  -----  Space = O(1)
    if (arreglo[indice] === clave) { // Time = O(1)
      return indice;  // Time = O(1)
    }
  }
  return -1; // Time = O(1)
}
