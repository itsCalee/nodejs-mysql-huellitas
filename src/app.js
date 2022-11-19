import express from 'express'
import localesRoutes from './routes/locales.routes.js'
import clienteRoutes from './routes/cliente.routes.js'
import servicioRoutes from './routes/servicio.routes.js'
import citaRoutes from './routes/cita.routes.js'
import indexRoutes from './routes/index.routes.js'

import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'

const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: { title: "Huellitas PI API", version: "1.0.0"},
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis: ["src/routes/*.routes.js", "src/db.js"],
};

const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api', localesRoutes)
app.use('/api', clienteRoutes)
app.use('/api', servicioRoutes)
app.use('/api', citaRoutes)
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found'
    })
})

// app.listen(PORT, () =>{
//     console.log(`Server listening on port ${PORT}`)
//     swaggerDocs(app, PORT)
// }
// )

export default app                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              