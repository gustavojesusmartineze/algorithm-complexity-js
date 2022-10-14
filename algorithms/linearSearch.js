/**
 * Time Complexity -> O( n + 3 ) -> O(n)
 * Complejidad Espacial -> O(  )
 * Espacio Auxiliar -> O(  )
 */
function linearSearch(arreglo, clave) {
  for (let indice = 0; indice < arreglo.length; indice++) { // Temporal = O(n)
    if (arreglo[indice] === clave) { // Temporal = O(1)
      return indice; // Temporal = O(1)
    }
  }
  return -1; // Temporal = O(1)
}
