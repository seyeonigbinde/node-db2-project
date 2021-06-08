const Car = require('../cars/cars-model')

const checkCarId = (req, res, next) => {
  Car.get(req.params.id)
    .then(car => {
      if (!car) {
        res.status(404).json({
          error: `car with id ${req.params.id} is not found`
        })
      } else {
        req.cars = car
        next()
      }
    })
    .catch(err => {
      next(err)
    })
}

const checkCarPayload = (req, res, next) => {
  const { name , description} = req.body
  if ( !name || !description ) {
    // validation fails
    next({
      message: 'missing required name and description field',
      status: 400,
    })

  } else {
    req.projects = { name: req.body.name.trim() }
    req.projects = { name: req.body.description.trim() }
    next()
    // validation succeed
  }
}


const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid
}
