/**
 * Time Complexity -> O( n^2 )
 * Spatial complexity -> O(n + 5) -> O(5)
 * Espacio Auxiliar -> O(5)
 */
function selectionSort(arreglo) { // Spatial = O(n)
  let longitud = arreglo.length; // Temporal = O(1)

  for (let i = 0; i < longitud; i++) { // Temporal = O(n) ---- Spatial = O(1)
    let minimo = i; // Temporal = O(1) ---- Spatial = O(1)
    for (let j = i + 1; j < longitud; j++) { // Temporal = O(n) ---- Spatial = O(1)
      if (arreglo[j] < arreglo[minimo]) { // Temporal = O(1) ---- No memory space is generated
        minimo = j; // Temporal = O(1) ---- No memory space is generated
      }
    }
    if (minimo != i) { // Temporal = O(1) ---- No memory space is generated
      let temporal = arreglo[i]; // Temporal = O(1) ---- Spatial = O(1)
      arreglo[i] = arreglo[minimo]; // Temporal = O(1) ---- No memory space is generated
      arreglo[minimo] = temporal; // Temporal = O(1) ---- No memory space is generated
    }
  }
  return arreglo; // Temporal = O(1) ---- No memory space is generated
}
