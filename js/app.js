let baseTriangulo
let alturaTriangulo

baseTriangulo=parseInt(prompt("Ingrese la base del Triangulo en cm"))
alturaTriangulo=parseInt(prompt("Ingrese la altura del Triangulo en cm"))

let areaTriangulo=baseTriangulo*alturaTriangulo/2

document.write("El Area del triangulo es: " +areaTriangulo +"cm²")
console.log("El resultado del Area del triangulo es: ",areaTriangulo +"cm²")

let radioCirculo
const pi = "3.14" 

radioCirculo=parseInt(prompt("Ingrese el Radio del circulo en cm"))

let areaCirculo=((pi)*radioCirculo**2)

document.write("<br> El Area del circulo es: " +areaCirculo +"cm²")
console.log("El resultado del Area del circulo es: ",areaCirculo +"cm²")
