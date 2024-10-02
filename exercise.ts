// Christopher Costa Silva
// Matemática para Computação - P.C.2.3

const progressaoAritmeticaIterativa = (
  a1: number,
  r: number,
  n: number,
): number => {
  let termo = a1;
  for (let i = 2; i <= n; i++) {
    termo += r;
  }
  return termo;
};

const a1 = 2;
const r = 3;
const n = 5;

const quintoTermo = progressaoAritmeticaIterativa(a1, r, n);
console.log(`${n}º termo = ${quintoTermo}`);
