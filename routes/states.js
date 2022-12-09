let express = require('express')
let States = require('../models').States

let router = express.Router()

router.get('/states', function(req, res, next) {
    States.findAll({ order: ['name']}).then( states => {
        return res.json(states)
    })
    .catch( err => next(err) )
})

router.patch('/states/:name', function(req, res, next) {
    let stateName = req.params.name
    let stateVisited = req.body.stateVisited

    States.update( { visited: stateVisited }, {where: { name: stateName }})
        .then( rowsUpdated => {
            let numberOfRowsUpdated = rowsUpdated[0]
            if (numberOfRowsUpdated == 1) {
                return res.send('ok')
            }
            return res.status(404).send('State not found')
        })
        .catch( err => next(err) )
})

module.exports = router