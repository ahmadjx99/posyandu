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
      ttl : "2014-03-02",
      kelamin : 'Perempuan',
      OrangTuaId : 1,
      MantriId : 2,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      namabayi : 'Rosihan Anwar',
      kelamin : 'Perempuan',
      ttl : '2016-07-18',
      OrangTuaId : 1,
      MantriId : 2,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      namabayi : 'I Gak Chatur',
      kelamin : 'Laki-laki',
      ttl : '2017-05-01',
      OrangTuaId : 2,
      MantriId :1,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      namabayi : 'Muhammad Irfan',
      kelamin : 'Laki-laki',
      ttl : '2015-07-25',
      OrangTuaId : 3,
      MantriId : 2,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      namabayi : 'Tri Rachmanto',
      kelamin : 'Laki-laki',
      ttl : '2015-12-05',
      OrangTuaId : 4,
      MantriId : 3,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      namabayi : 'Nurpatria',
      kelamin : 'Laki-laki',
      ttl : '2016-11-15',
      OrangTuaId : 4,
      MantriId : 3,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      namabayi : 'Muhammad Zia Ulhaq',
      kelamin : 'Laki-laki',
      ttl : '2017-04-01',
      OrangTuaId : 5,
      MantriId : 3,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      namabayi : 'Nurhasanah',
      kelamin : 'Perempuan',
      ttl : '2015-09-23',
      OrangTuaId : 6,
      MantriId : 2,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      namabayi : 'Riza Hidayat',
      kelamin : 'Laki-laki',
      ttl : '2017-02-13',
      OrangTuaId : 6,
      MantriId : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      namabayi : 'Ridho Pandu Dirgantara',
      kelamin : 'Laki-laki',
      ttl : '2013-12-16',
      OrangTuaId : 7,
      MantriId : 1,
      createdAt : new Date(),
      updatedAt : new Date()
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
