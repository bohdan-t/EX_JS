console.log('Module')

async function start() {
    return  await Promise.resolve('asynk working')
}

start().then(console.log)
