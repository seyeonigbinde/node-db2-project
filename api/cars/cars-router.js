const router = require('express').Router()

const Car = require('./cars-model');
const {
    checkCarId,
    checkVinNumberUnique,
    checkCarPayload,
    checkVinNumberValid
  } = require('./cars-middleware');

  router.get('/', (req, res, next) => {
    Car.get(req.query.length)
    .then(account => {
      res.status(200).json(account);
    })
    .catch(next)
  })
  
  router.get('/:id', checkCarId, 
  (req, res, next) => {
    res.json(req.account)
  })
  
  router.post('/', checkCarPayload, 
  checkVinNumberUnique, 
  checkVinNumberValid, 
  (req, res, next) => {
    const postCar = { ...req.body};
    Car.insert(postCar)
      .then(car => {
        res.status(201).json(car);
      })
      .catch(error => {
        next(error)
      });
  })
  

module.exports = router;
