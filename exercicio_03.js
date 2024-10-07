// Array com as entradas do mês
const cashInflows = [
  { day: 1, value: 22174.1664 },
  { day: 2, value: 24537.6698 },
  { day: 3, value: 26139.6134 },
  { day: 4, value: 0.0 },
  { day: 5, value: 0.0 },
  { day: 6, value: 26742.6612 },
  { day: 7, value: 0.0 },
  { day: 8, value: 42889.2258 },
  { day: 9, value: 46251.174 },
  { day: 10, value: 11191.4722 },
  { day: 11, value: 0.0 },
  { day: 12, value: 0.0 },
  { day: 13, value: 3847.4823 },
  { day: 14, value: 373.7838 },
  { day: 15, value: 2659.7563 },
  { day: 16, value: 48924.2448 },
  { day: 17, value: 18419.2614 },
  { day: 18, value: 0.0 },
  { day: 19, value: 0.0 },
  { day: 20, value: 35240.1826 },
  { day: 21, value: 43829.1667 },
  { day: 22, value: 18235.6852 },
  { day: 23, value: 4355.0662 },
  { day: 24, value: 13327.1025 },
  { day: 25, value: 0.0 },
  { day: 26, value: 0.0 },
  { day: 27, value: 25681.8318 },
  { day: 28, value: 1718.1221 },
  { day: 29, value: 13220.495 },
  { day: 30, value: 8414.61 }
]

/* Variáveis:
    - Menor faturamento do mês
    - Maior faturamento do mês
    - Soma dos dias de faturamento
    - Dias com faturamento
*/
let lowestCashInflow = null
let highestCashInflow = null
let totalCashInflow = 0
let daysWithCashInflow = 0

// Para cada item em 'cashInflows', extraia o valor de 'value'
cashInflows.forEach(item => {
  const dailyInflow = item.value

  // Ignorando dias sem faturamento
  if (dailyInflow > 0) {
    if (lowestCashInflow === null || dailyInflow < lowestCashInflow) {
      lowestCashInflow = dailyInflow
    }

    if (highestCashInflow === null || dailyInflow > highestCashInflow) {
      highestCashInflow = dailyInflow
    }

    // Adiciona o valor de faturamento do dia ao total
    totalCashInflow += dailyInflow
    // Adiciona +1 ao contador de dias com faturamento acima de 0
    daysWithCashInflow++
  }
})

/* Calcula a média de faturamento, ignorando 
   os dias onde a entrada foi 0
*/
let averageCashInflow = 0
if (daysWithCashInflow > 0) {
  averageCashInflow = totalCashInflow / daysWithCashInflow
}


// Resultados 

console.log(`Média de Faturamento: R$ ${averageCashInflow.toFixed(2)}`);
console.log(`Menor valor de faturamento no mês: R$ ${lowestCashInflow.toFixed(2)}`)
console.log(`Maior valor de faturamento no mês: R$ ${highestCashInflow.toFixed(2)}`)


// Calculando os dias acima da média
let inflowsAboveAverage = 0
console.log('Dias com faturamento acima da média:')

// Condicional para que cada dia de faturamento acima da média seja informado no console
cashInflows.forEach(item => {
  if (item.value > averageCashInflow) {
    inflowsAboveAverage++
    console.log(`Dia ${item.day} - Valor: ${item.value.toFixed(2)}`)
  }
})

console.log(`Em ${inflowsAboveAverage} dias do mês, o valor de faturamento foi superior à média mensal`)

