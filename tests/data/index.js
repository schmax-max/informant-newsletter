const fs = require('fs')

exports.channel_dd = JSON.parse(fs.readFileSync(`./tests/data/channel_dd.json`, 'UTF-8'))
exports.channel_fc = JSON.parse(fs.readFileSync(`./tests/data/channel_fc.json`, 'UTF-8'))
exports.channel_rf = JSON.parse(fs.readFileSync(`./tests/data/channel_rf.json`, 'UTF-8'))
exports.params = JSON.parse(fs.readFileSync(`./tests/data/params.json`, 'UTF-8'))
