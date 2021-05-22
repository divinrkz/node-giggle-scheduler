const {Scheduler} = require('./model');

exports.createTask = async (data) => {
    const instance = await Scheduler.create(data);
    console.log(instance);
}