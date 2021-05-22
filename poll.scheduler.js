const {Scheduler} = require('./model')

const scheduler = async () => {
    const data = await Scheduler.findOne({executeOn: {$lte: new Date() }}).limit(1)

    if (!data) {
        console.log('no data')
        setTimeout(() => {scheduler()}, 1000)
    }
    else {
        switch (data.type) {
            case 'SMS':
                sendSMS(data.data)
            default:
                console.log('Case not found')
        }


        await scheduler()
    }
}

const sendSMS = (data) => console.log(data);

module.exports = {
    scheduler
}



