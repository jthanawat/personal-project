const express = require('express')
const router = express.Router()
const db = require('../models')


// ขอข้อมูลจาก front
router.post("/", (req, res) => {
  const variable = req.body.isCompleted

  // create รับ dataTypes: object
  db.guest.create({
    data: data
  })
    .then(result => {
      res.status(200).send(result)
    }).catch(err => {
      res.status(400).send(err)
    })
})

// ขอจาก back to front
router.get("/", (req, res) => {

  db.guest.findAll()
    .then(result => {
      res.status(200).send(result)
    }).catch(err => {
      res.status(400).send(err)
    })
})

// รับ id เพื่อ identify ตัวที่จะแก้
router.put("/:id", (req, res) => {
  const variable = req.body.edit
  const id = req.body.id
  const id = req.params.id

  db.guest.update({ data: data }, { where: { id: id } })
    .then(result => {
      res.status(200).send(result)
    }).catch(err => {
      res.status(400).send(err)
    })
})

router.delete("/:id", (req, res) => {
  const id = req.params.id

  db.guest.destroy({ where: { id: id } })
    .then(result => {
      res.status(200).send(result)
    }).catch(err => {
      res.status(400).send(err)
    })
})

module.exports = router;