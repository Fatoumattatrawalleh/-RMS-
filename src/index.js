const express = require('express')
const app = express()
const port = 3000

const middleware = require('./utilities/middleware')

app.use(express.json())



const me ={
  fname:"fatima",
minit :"binta",
lname :"Trawalleh",
status :"online",
location :"bundung",
living :"true",
id :"0195",
phone:"3536708",
picture:"jpg",
email :"fatima@gmail.com",
gender:"female",
dob :"20/3/2000",

}

let users =[
  {
    id:1,
    username: 'fatima',
    phone:'3536708',
    password:'secrete'
  },
  {
    id:2,
    username: 'binta',
    phone:'3322708',
    password:'secrete'
  }
]

  
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  
  app.get('/api/users/:id', ( req, res) => {
    const id =req.params.id
    
    const user = users.find((user) => user.id === Number(id))
    res.json(user)
    })

  app.get('/api/users', (req, res) =>{
    res.json(users)
  })

  app.delete('/api/users/:id',(req, res) => {
   const id =req.params.id
   users = users.filter((u) => u.id !==Number(id))

   res.status(204).end()
  })

  app.post('/api/users', (req,res) => {
    const content = req.body
     
    res.json(content)
  })

  app.put('/api/users/:id', (req, res) =>{
     const id = req.params.id
  })

  app.use(middleware.unknownEndpoint)

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })