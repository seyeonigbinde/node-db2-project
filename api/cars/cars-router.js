const router = require('express').Router()

const Car = require('./cars-model');
const {
    checkCarId,
    checkVinNumberUnique,
    checkCarPayload,
    checkVinNumberValid
  } = require('./cars-middleware');

router.get('/', async (req, res, next) => {
    try{
        const cars = await Car.getAll()
        res.json(cars)
    } catch (err){
        next(err)
    }
  })
  
router.get('/:id', checkCarId, 
    async (req, res, next) => {
        try{
            const car = await Car.getById(req.params.id)
            res.json(car)
        } catch (err){
            next(err)
        }
  })
  
router.post('/', checkCarPayload, 
    checkVinNumberUnique, 
    checkVinNumberValid, 
    async (req, res, next) => {
        try{
            const newCar = await Car.create(req.body)
            res.status(201).json(newCar)
        }
        catch(error) {
            next(error)
        }
  })
  

module.exports = router;
