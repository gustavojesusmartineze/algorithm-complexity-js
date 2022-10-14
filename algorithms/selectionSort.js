/**
 * Complejidad Temporal -> O( n^2 )
 * Complejidad Espacial -> O(  )
 * Espacio Auxiliar -> O(  )
 */
function selectionSort(arreglo) {
  let longitud = arreglo.length; // Temporal = O(1)

  for (let i = 0; i < longitud; i++) { // Temporal = O(n)
    let minimo = i; // Temporal = O(1)
    for (let j = i + 1; j < longitud; j++) { // Temporal = O(n)
      if (arreglo[j] < arreglo[minimo]) { // Temporal = O(1)
        minimo = j; // Temporal = O(1)
      }
    }
    if (minimo != i) { // Temporal = O(1)
      let temporal = arreglo[i]; // Temporal = O(1)
      arreglo[i] = arreglo[minimo]; // Temporal = O(1)
      arreglo[minimo] = temporal; // Temporal = O(1)
    }
  }
  return arreglo; // Temporal = O(1)
}
