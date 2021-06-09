const Car = require('../cars/cars-model')
const db = require('../../data/db-config');
const vin = require('vin-validator');

const checkCarId = async (req, res, next) => {
  try {
    const car = await Car.getById(req.params.id)
    if(!car) {
      next({status: 404, message: `car with id ${req.params.id} is not found`})
    } else {
      req.car = car
      next()
    }
  }catch(err) {
    next(err)
  }
}


const checkCarPayload = (req, res, next) => {
  const error = { status: 400 }
  if (!req.body.vin ) return next({
    status: 400,
    message: 'vin is missing'
  }) 
  if (!req.body.vin ) return next({
    status: 400,
    message: 'make is missing'
  }) 
  if (!req.body.vin ) return next({
    status: 400,
    message: 'model is missing'
  }) 
  if (!req.body.vin ) return next({
    status: 400,
    message: 'mileage is missing'
  }) 
    next()
}


const checkVinNumberValid =  (req, res, next) => {

    if (vin.validate(req.body.vin)){
      next()
    } else {
      next({status: 400, 
        message: `vin ${req.body.vin} is invalid`})
    }
  } 


const checkVinNumberUnique =  async (req, res, next) => {
  try{
    const existing = await Car.getByVin(req.body.vin)
    if(existing){
      next({status: 400, message: `vin ${req.body.vin} already exists`})
    } else {
      next()
    }
  } catch (err){
    next(err)
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid
}
