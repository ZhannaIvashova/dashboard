const { Chart, registerables } = require('chart.js');
Chart.register(...registerables);

function createChartTasks(ctx, labels, data) {

    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'tasks',
                data: data,
                borderWidth: 1,
                backgroundColor: [
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 159, 64)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 205, 86)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 99, 132)'
                ],
                hoverBackgroundColor: [
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 205, 86, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 99, 132, 0.5)'
                ]
            }]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        maxRotation: 0,
                        minRotation: 0,
                        callback: function(value) {
                            return this.getLabelForValue(value).split(' ');
                        },
                        color: 'black',
                    }
                },
                y: {
                    beginAtZero: true,
                }
            }
        }
        });
}

function createChartSports(ctx, labels, data) {

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'sport-activity',
                data: data,
                backgroundColor: [
                    'rgba(152, 251, 152, 0.5)',
                    'rgba(173, 216, 230, 0.5)',
                    'rgba(188, 143, 143, 0.5)',
                    'rgba(221, 160, 221, 0.5)'
                ],
                hoverOffset: 4
            }]
        }
        });
}

function createChartSteps(ctx, labels, data) {

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'steps',
                data: data,
                fill: false,
                borderColor: 'rgb(154, 205, 50)',
                tension: 0.1
            }]
        }
        });
}

module.exports = {
    createChartTasks,
    createChartSports,
    createChartSteps
};