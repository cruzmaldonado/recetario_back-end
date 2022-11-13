//? Dependencies
const express = require('express');
const db = require('./utils/database')
const Cors = require ("cors")
const swaggerUi= require("swagger-ui-express")
const swaggerJsDoc=require("swagger-jsdoc")

//? Files
const {port} = require('./config');
const swaggerDoc=require("../swagger.json")



//* Routes
const userRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')
const categoryRouter = require('./categories/categories.router')
const recipeRouter = require('./recipes/recipes.router')
const ingredientRouter = require('./ingredients/ingredients.router')

const initModels = require('./models/initModels');
const Ingredients = require('./models/ingredients.models');



//? Initial Configs
const app = express()

app.use(express.json())
app.use(Cors())

db.authenticate()
    .then(() => {
        console.log('Database Authenticated')
    })
    .catch(err => {
        console.log(err)
    })

db.sync()
    .then(() => {
        console.log('Database Synced')
    })
    .catch(err => {
        console.log(err)
    })

initModels()


app.get('/',(req, res) => {
    res.status(200).json({
        message: 'OK!',
        users: `localhost:${port}/api/v1/users`
    })
})

// *Rutas Raiz
// Ruta para documentacion swagger
app.use("/api/v1/docs",swaggerUi.serve,swaggerUi.setup(swaggerDoc))
// -----//  
app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/categories', categoryRouter)
app.use('/api/v1/recipes', recipeRouter)
app.use("/api/v1/ingredients",ingredientRouter)






app.listen(port, () => {
    console.log(`Server started at port ${port}`);
    
})

