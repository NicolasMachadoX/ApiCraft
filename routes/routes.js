const router = require('express').Router();

const { getAll,getByID, getByName,getByIp,getByAcess,getByCapacity,
     getByVersion,getByCode, getMorePopular, getLessPopular, getByCategory,
      post, updateById, deleteById, getDescriptionByCode,
       getCollection, getByShaders, getByPlataform } = require('../controllers/controllers.js');




router.get('/getAll', getAll)
.get('/get/:id', getByID)
.get('/getByName/:name', getByName)
.get('/getByVersion/:version', getByVersion)
.get('/getByCode/:code', getByCode)
.get('/getByCategory/:category', getByCategory)
.get('/getDescriptionByCode/:code', getDescriptionByCode)

.get('/getByShader', getByShaders)
.get('/getMorePopular', getMorePopular)
.get('/getLessPopular', getLessPopular)
.get('/info', getCollection)
.post('/post', post)
.patch('/update/:id', updateById)
.delete('/delete/:id', deleteById)



.get('/getIp', getByIp)
.get('/getAccess', getByAcess)
.get('/getCapacity', getByCapacity)
.get('/getPlataform', getByPlataform)

module.exports = router;