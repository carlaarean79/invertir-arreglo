import "./styles.css";

let longitud: number = Number(prompt("Ingrese la longitud que desee analizar"));
let n: number[] = new Array(longitud);

for (let i = longitud - 1; i >= 0; i--) {
  n[i] = Number(prompt("Ingrese el número"));
  console.log(`sus numeros ingresados en posición ${i} son ${n[i]}`);
}
