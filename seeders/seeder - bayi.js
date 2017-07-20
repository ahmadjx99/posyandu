'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Bayis', [{
      namabayi : 'Revi Rinanda',
      kelamin : 'Perempuan',
      ttl : '2014-03-02',
      kelamin : 'Perempuan',
      OrtuId : 1,
      PetugasId : 2
    }, {
      namabayi : 'Rosihan Anwar',
      kelamin : 'Perempuan',
      ttl : '2016-07-18',
      OrtuId : 1,
      PetugasId : 2
    }, {
      namabayi : 'I Gak Chatur',
      kelamin : 'Laki-laki',
      ttl : '2017-05-01',
      OrtuId : 2,
      PetugasId :1
    }, {
      namabayi : 'Muhammad Irfan',
      kelamin : 'Laki-laki',
      ttl : '2015-27-25',
      OrtuId : 3,
      PetugasId : 2
    }, {
      namabayi : 'Tri Rachmanto',
      kelamin : 'Laki-laki',
      ttl : '2015-12-05',
      OrtuId : 4,
      PetugasId : 3
    }, {
      namabayi : 'Nurpatria',
      kelamin : 'Laki-laki',
      ttl : '2016-11-15',
      OrtuId : 4,
      PetugasId : 3
    }, {
      namabayi : 'Muhammad Zia Ulhaq',
      kelamin : 'Laki-laki',
      ttl : '2017-04-01',
      OrtuId : 5,
      PetugasId : 3
    }, {
      namabayi : 'Nurhasanah',
      kelamin : 'Perempuan',
      ttl : '2015-09-23',
      OrtuId : 6,
      PetugasId : 2
    }, {
      namabayi : 'Riza Hidayat',
      kelamin : 'Laki-laki',
      ttl : '2017-02-13',
      OrtuId : 6,
      PetugasId : 1
    }, {
      namabayi : 'Ridho Pandu Dirgantara',
      kelamin : 'Laki-laki',
      ttl : '2013-12-16',
      OrtuId : 7,
      PetugasId : 1
    }], {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
