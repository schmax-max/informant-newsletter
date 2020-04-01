const {Newsletter} = require('../model')
module.exports = {move}


async function move () {
  try {
    
    
    const move = true

    if (move) {
      const docs = await Newsletter.others.find(getQuery ())
      let iterations = docs.length
      // iterations = 1
      // console.log({iterations})
      await create (docs, iterations)  
    } else {
      // const jim = await Newsletter.others.deleteMany(getQuery ())
    }

    
    
    return 'home'
  } catch(e) {
    console.log({e})
  }
}

function getQuery () {
  const podcasts = [
    'constant listener',
    'the podcast dragon',
    'podcast gumbo',
    'wooly knickers',
    'pod of the month',
    'inside podcasting',
    '7 on 7',
    'sara weber',
    'podcast brunch club',
    'hurt your brain',
  ]
  
  return {
    'name': {$in: podcasts}
  }
}

async function create (docs, iterations) {
  for (let i=0; i<iterations; i++) {
    const doc = docs[i]
    try {
      const {source_url} = doc
      const options = {upsert: true, new: true}
      await Newsletter.podcasts.findOneAndUpdate({source_url}, doc, options)
    } catch(e) {
      console.log({e})
    }
  }
}