import db from './config.js';

export const getAllRestaurants = (req, res) => {
  const q = "SELECT * FROM restaurant"
  db.query(q, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
}

export const getRestaurantById = (req, res) => {
  const id = req.params.id;
  const q = "SELECT * FROM restaurant where id = ?"
  console.log("backend COde")
  db.query(q, id, (err, data) => {
    if (err) return res.json(err)
    return res.json(data[0])
  })
}

export const addRestaurant = (req, res) => {
  const q = "INSERT INTO restaurant (`restaurant_name`,`contact_name`,`pincode`,`location`,`website`,`phone_number`,`average_transactions`) VALUES (?)"
  const values = [
    req.body.restaurant_name,
    req.body.contact_name,
    req.body.pincode,
    req.body.location,
    req.body.website,
    req.body.phone_number,
    req.body.average_transactions,
  ]

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err)
    return res.json("Restaurant has been Created Successfully")
  })
}

export const deleteRestaurantById = (req, res) => {
  const id = req.params.id;
  const q = "DELETE FROM restaurant WHERE id =?"

  db.query(q, [id], (err, data) => {
    if (err) return res.json(err)
    return res.json("Restaurant has been deleted Successfully")
  })
}

export const updateRestaurantById = (req, res) => {
  const id = req.params.id;
  const q = "Update restaurant SET `restaurant_name` = ?, `contact_name`=? , `pincode`=?,`location` = ?, `website`=? , `phone_number`=?,`average_transactions` = ? WHERE id = ?"
  const values = [
    req.body.restaurant_name,
    req.body.contact_name,
    req.body.pincode,
    req.body.location,
    req.body.website,
    req.body.phone_number,
    req.body.average_transactions,
  ]
  db.query(q, [...values, id], (err, data) => {
    if (err) return res.json(err)
    return res.json("Restaurant has been updated Successfully")
  })
}
