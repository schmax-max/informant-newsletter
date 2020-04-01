require('./config/connection')
const {channel_dd, params} = require('./tests/data')

const url = 'https://www.theatlantic.com/ideas/archive/2020/01/political-hobbyists-are-ruining-politics/605212/'

const {perSource} = require('./svc/perSource')
// perSource(channel_dd)


const {commander} = require('./svc')
commander(params)



const {move} = require('./adhoc/move')
// move()