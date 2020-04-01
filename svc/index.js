'use strict'
const {gateway} = require('./gateway')
const {Newsletter} = require('../model')
const postData = require('../config/postData')

module.exports = {master, commander}

async function master (req = {}) {
  console.log('starting master')
  if (gateway (req)) {
    return await commander(req.params)
  } else {
    return
  } 
}

async function commander ({trigger}) {
  try {
    // console.log({trigger})
    const sources = await Newsletter[trigger].find()
    let iterations = sources.length
    // iterations = 1
    for (let i=0; i<iterations; i++) {
      const source = sources[i]
      const {perSource} = require('./perSource')
      const response = await perSource(source)
      if (response) {
        postToScanner (source, trigger, response.links)
      } else {
        console.log(`no response for ${source.source_url}`)
      }
    }
  } catch(e) {
    console.log({e})
  }
  return
}



function postToScanner ({source_url}, trigger, links) {
    const scannerConfig = {
        target: `scanner`, 
        data: {source_url, source_type: `newsletter_${trigger}`, links},
    }
    postData(scannerConfig)
}