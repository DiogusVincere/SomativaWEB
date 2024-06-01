document.addEventListener('DOMContentLoaded', function () {
    // Dados para o gráfico diário de produção
    const dailyProductionData = {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        datasets: [
            {
                label: 'Produto A',
                data: [10, 12, 15, 14, 18, 20, 22, 19, 23, 25, 28, 30, 29, 31, 35, 36, 38, 40, 42, 41, 43, 45, 47, 49, 48, 50, 52, 54, 55, 57],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false
            },
            {
                label: 'Produto B',
                data: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                fill: false
            }
        ]
    };

    const dailyProductionConfig = {
        type: 'line',
        data: dailyProductionData,
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Dia do Mês'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Produção'
                    }
                }
            }
        }
    };

    var dailyProductionChart = new Chart(
        document.getElementById('dailyProductionChart'),
        dailyProductionConfig
    );

    // Dados para o gráfico de comparação de eficiência
    const efficiencyComparisonData = {
        labels: ['Linha 1', 'Linha 2', 'Linha 3', 'Linha 4', 'Linha 5'],
        datasets: [
            {
                label: 'Eficiência (%)',
                data: [75, 82, 78, 85, 90],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
    };

    const efficiencyComparisonConfig = {
        type: 'bar',
        data: efficiencyComparisonData,
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Linhas de Produção'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Eficiência (%)'
                    }
                }
            }
        }
    };

    var efficiencyComparisonChart = new Chart(
        document.getElementById('efficiencyComparisonChart'),
        efficiencyComparisonConfig
    );

    // Dados para a tabela de estoque de matéria-prima
    const rawMaterialStockData = [
        { material: 'Aço', quantity: 500, required: 600, status: 'Baixo' },
        { material: 'Plástico', quantity: 1200, required: 1000, status: 'Suficiente' },
        { material: 'Borracha', quantity: 300, required: 400, status: 'Crítico' }
    ];

    const rawMaterialStockTable = document.getElementById('rawMaterialStockTable').getElementsByTagName('tbody')[0];
    rawMaterialStockData.forEach(item => {
        const row = rawMaterialStockTable.insertRow();
        row.insertCell(0).innerText = item.material;
        row.insertCell(1).innerText = item.quantity;
        row.insertCell(2).innerText = item.required;
        row.insertCell(3).innerText = item.status;
    });

    // Dados para a tabela de status de produção atual
    const currentProductionStatusData = [
        { produced: 400, goal: 500, percentage: '80%' },
        { produced: 350, goal: 450, percentage: '78%' },
        { produced: 500, goal: 500, percentage: '100%' }
    ];

    const currentProductionStatusTable = document.getElementById('currentProductionStatusTable').getElementsByTagName('tbody')[0];
    currentProductionStatusData.forEach(item => {
        const row = currentProductionStatusTable.insertRow();
        row.insertCell(0).innerText = item.produced;
        row.insertCell(1).innerText = item.goal;
        row.insertCell(2).innerText = item.percentage;
    });
});