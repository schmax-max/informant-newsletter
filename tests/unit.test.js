const chai = require('chai')
const mongoose = require('mongoose')
const chaiAsPromised = require('chai-as-promised')
const expect = require('chai').expect
const should = require('chai').should()
chai.use(chaiAsPromised).should()


require ('../config/connection')
const {master} = require ('../svc')
const {processLatest} = require('../svc/processLatest')
const {channel_dd} = require('./data')
// beforeEach(async () => {
//     const db = mongoose.connection
//     db.on('error', console.error.bind(console, 'connection error'))
//     db.once('open', () => {
//         console.log('test DB connected!')
//     })
// });
  
const defaultTimeout = 10 * 1000 

describe('TEST: .... ||', () => {
    it('...', async () => {
        const archive_url = 'https://www.densediscovery.com/archive/72/'
        const {links} = await processLatest(channel_dd, {archive_url})
        const resultUrls = [
            'https://medium.com/@alexstamos/techs-adversaries-vs-enemies-a5ca09e09aca',
            'https://www.theatlantic.com/magazine/archive/2020/01/before-zuckerberg-gutenberg/603034/',
            'https://edition.cnn.com/interactive/2019/05/europe/finland-fake-news-intl/'
        ]
        expect(links).to.be.an('array').that.includes(resultUrls[0])
        expect(links).to.be.an('array').that.includes(resultUrls[1])
        expect(links).to.be.an('array').that.includes(resultUrls[2])
    }).timeout(defaultTimeout)
})
