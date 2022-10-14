/**
 * Time Complexity -> O( 1 + n * 2 + 1 + 1 + 1 + 1 + 1 ) -> O(n^2)
 * Spatial complexity -> O(  )
 * Espacio Auxiliar -> O(  )
 */
function bubbleSort(arreglo) {
  let longitud = arreglo.length; // Temporal = O(1)
  for (let i = 0; i < longitud; i++) { // Temporal = O(n)
    for (let j = 0; j < longitud; j++) { // Temporal = O(n)
      if (arreglo[j] > arreglo[j + 1]) { // Temporal = O(1)
        let temporal = arreglo[j]; // Temporal = O(1)
        arreglo[j] = arreglo[j + 1]; // Temporal = O(1)
        arreglo[j + 1] = temporal; // Temporal = O(1)
      }
    }
  }
  return arreglo; // Temporal = O(1)
}
