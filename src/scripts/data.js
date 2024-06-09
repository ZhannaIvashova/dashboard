const axios = require('axios');
const moment = require('moment');

const max = 20000;
const min = 5000;

async function getDataTasks() {
    const tasksName = [];
    const tasksStatus = [];

    try {
        const tasksData = await axios.get('../../data_json/tasks.json');
        tasksData.data.tasks.forEach(task => {
            tasksName.push(task.name);
            tasksStatus.push(task.status);
        });
    }
    catch(error) {
        console.log('Ошибка при получении данных о задачах: ', error)
    }

    return {tasksName, tasksStatus}
}

async function getDataSports() {
    const sportsActivityName = [];
    const sportsActivityPart = [];

    try {
        const sportsData = await axios.get('../../data_json/sports_activity.json');
        sportsData.data.activity.forEach(sport => {
            sportsActivityName.push(sport.name);
            sportsActivityPart.push(sport.part);
        });
    }
    catch(error) {
        console.log('Ошибка при получении данных о спорте: ', error)
    }

    return {sportsActivityName, sportsActivityPart}
}

function getDataStepsWeeks() {
    const daysList = [];
    const stepsList = [];

    for(let i = 0; i <=6; i++) {
        const number = Math.floor(Math.random() * (max - min + 1) + min);
        stepsList.push(number);
    }
    for(let i = 6; i >= 0; i--) {
        const day = moment().subtract(i, 'days').format('dddd');
        daysList.push(day.slice(0,3));
    }

    const maxSteps = Math.max(...stepsList);
    const minSteps = Math.min(...stepsList);

    return {daysList, stepsList, maxSteps, minSteps}
}

module.exports = {
    getDataTasks,
    getDataSports,
    getDataStepsWeeks
};
