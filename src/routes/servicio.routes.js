import {Router} from 'express'
import {getServicio, createServicio, updateServicio, deleteServicio, getServicioById} from '../controllers/servicio.controller.js'

const router = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *      Servicio:
 *                          type: object
 *                          properties:
 *                              nombre:  
 *                                  type: string
 *                                  description: nombre del servicio
 *                              costo:
 *                                  type: string
 *                                  description: costo del servicio
 *                              descripcion:
 *                                  type: string
 *                                  description: descripción del servicio
 *                             
 */

/**
 * @swagger
 * /api/servicio:
 *  get:
 *      summary: get all servicios
 *      tags: [Servicio]
 *      responses:
 *          200:
 *              description: all servicios
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Servicio'
 * 
 *                                
 */
router.get('/servicio', getServicio)

/**
 * @swagger
 * /api/servicio/{id}:
 *  get:
 *      summary: get servicio by id
 *      tags: [Servicio]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: the servicio id               
 *      responses:
 *          200:
 *              description: One servicio by id
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Servicio'
 *          404:
 *              description: Servicio not found
 * 
 *                                
 */
router.get('/servicio/:id', getServicioById)

/**
 * @swagger
 * /api/servicio:
 *  post:
 *      summary: create servicio
 *      tags: [Servicio]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Servicio'
 *      responses:
 *          200:
 *              description: nueva servicio creado!
 * 
 *                                
 */
router.post('/servicio', createServicio)

/**
 * @swagger
 * /api/servicio/{id}:
 *  patch:
 *      summary: update a servicio
 *      tags: [Servicio]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: the servicio id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Servicio'               
 *      responses:
 *          200:
 *              description: servicio updated
 *          404:
 *              description: servicio not found
 * 
 *                                
 */
router.patch('/servicio/:id', updateServicio)

/**
 * @swagger
 * /api/servicio/{id}:
 *  delete:
 *      summary: delete a servicio
 *      tags: [Servicio]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: the servicio id               
 *      responses:
 *          200:
 *              description: servicio deleted
 * 
 *                                
 */
router.delete('/servicio/:id', deleteServicio)

export default router