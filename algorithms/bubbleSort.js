/**
 * Time Complexity -> O( 1 + n * 2 + 1 + 1 + 1 + 1 + 1 ) -> O(n^2)
 * Spatial complexity -> O(n + 1 + 1 + 1 +1) -> O(n)
 * Espacio Auxiliar -> O(4) -> O(1)
 */
function bubbleSort(arreglo) { // Spatial = O(n)
  let longitud = arreglo.length; // Temporal = O(1) ---- Spatial = O(1)
  for (let i = 0; i < longitud; i++) { // Temporal = O(n) ---- Spatial = O(1)
    for (let j = 0; j < longitud; j++) { // Temporal = O(n) ---- Spatial = O(1)
      if (arreglo[j] > arreglo[j + 1]) { // Temporal = O(1) ---- No memory space is generated
        let temporal = arreglo[j]; // Temporal = O(1) ---- Spatial = O(1)
        arreglo[j] = arreglo[j + 1]; // Temporal = O(1) ---- No memory space is generated
        arreglo[j + 1] = temporal; // Temporal = O(1) ---- No memory space is generated
      }
    }
  }
  return arreglo; // Temporal = O(1) ---- No memory space is generated
}
