exports.seed = function (knex) {
    return knex('cars').truncate()
      .then(function () {
        return knex('cars').insert([
          { vin: 22222222222, make: 'Toyota', model: 'Corolla', mileage: 222322, title: 'clean', transmission: 'manual' },
          { vin: 11111111111, make: 'Toyota', model: 'Camry', mileage: 430000, title: 'salvage', transmission: 'automatic' },
          { vin: 33333333333, make: 'Ford', model: 'Focus', mileage: 32000, title: 'salvage' },
        ]);
      });
  };
  
