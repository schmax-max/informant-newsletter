'use strict'
const {processLatest} = require ('./processLatest')
const {updateSource} = require ('./updateSource')
const {getLatest} = require ('./getLatest')

async function perSource (source) {
    // console.log('starting perSource')
    // console.log({apiResponse})
    let response
    const latestUnprocessed = await getLatest (source)
    if (!latestUnprocessed) {
        console.log(`latestUnprocessed is undefined`)
        const newSource = await updateSource (source)
    } else if (latestUnprocessed === 'completed') {
        console.log(`latestUnprocessed is already completed`)
    } else {
        response = await processLatest (source, latestUnprocessed)
        const newSource = await updateSource (source, response)
    }
    return response
}


module.exports = {
    perSource
}