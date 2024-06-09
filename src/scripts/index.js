const {getDataTasks, getDataSports, getDataStepsWeeks} = require('./data.js');
const {createChartTasks, createChartSports, createChartSteps} = require('./charts.js');

const moment = require('moment');
const $ = require('jquery');


function displayInfo(maxNum=null, minNum=null) {
    $('.today-date__date').html(`${moment().format('L')}<br>${moment().format('dddd')}<br>${moment().format('LT')}`);

    $('.summary-steps__info').html(`
                Максимальное количество шагов: ${maxNum}<br>
                Минимальное количество шагов: ${minNum}
                `);
}

$(async function() {
    const chartTasks = $('#myChartTasks');
    const chartSports = $('#myChartSports');
    const chartSteps = $('#myChartSteps');

    const {tasksName, tasksStatus} = await getDataTasks();
    const {sportsActivityName, sportsActivityPart} = await getDataSports();
    const {daysList, stepsList, maxSteps, minSteps} = getDataStepsWeeks();

    createChartTasks(chartTasks, tasksName, tasksStatus);
    createChartSports(chartSports, sportsActivityName, sportsActivityPart);
    createChartSteps(chartSteps, daysList, stepsList);

    displayInfo(maxSteps, minSteps);
})
