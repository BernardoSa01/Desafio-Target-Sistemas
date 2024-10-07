// Definindo o faturamento mensal de cada Estado
const cashInflows = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  OUTROS: 19849.53
}

// Calculando o faturamento total
let totalInflow = cashInflows.SP + cashInflows.RJ + cashInflows.MG + cashInflows.ES + cashInflows.OUTROS

// Calculando o percentual de cada Estado
function calculatePercentage(value, totalInflow) {
  return (value / totalInflow) * 100
}

// Exibindo no console a representatividade de cada Estado
for (let state in cashInflows) {
  console.log(`O percentual de representação de ${state} é de ${calculatePercentage(cashInflows[state], totalInflow).toFixed(2)} % do total de vendas`)
}
