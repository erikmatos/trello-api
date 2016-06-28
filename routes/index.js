"use strict"

let fs = require('fs')

/**
 * Routes constructor.
 * Inserts all routes in the server (index.js on root)
 */
class Index{
  constructor(server){
    fs.readdirSync('./routes').forEach((file)=> {
      if (file.substr(-3, 3) === '.js' && file !== 'index.js') {
        let ModuleAPI = require('./' + file.replace('.js', ''))
        new ModuleAPI(server)
      }
    })

    server.get('/', (req,res,next)=>{
      res.send(200)
      next()
    })
  }
}
module.exports = Index
