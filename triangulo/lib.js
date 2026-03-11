function classificaTriangulo(a, b, c) {
  const ehValido = a > 0 && b > 0 && c > 0 && 
                  (a + b > c) && (a + c > b) && (b + c > a)

  if (!ehValido) return "none"

  if (a === b && b === c) return "equilateral"
  if (a === b || a === c || b === c) return "isosceles"
  
  return "scalene"
}

export default classificaTriangulo
