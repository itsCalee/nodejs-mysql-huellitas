import {Router} from 'express'
import {getCita, createCita, updateCita, deleteCita, getCitaById} from '../controllers/cita.controller.js'

const router = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *      Cita:
 *                          type: object
 *                          properties:
 *                              idCliente:  
 *                                  type: integer
 *                                  description: id de cliente
 *                              tipoMas:
 *                                  type: string
 *                                  description: tipo de mascota
 *                              idServicio:
 *                                  type: integer
 *                                  description: id del servicio
 *                              idLocal:
 *                                  type: integer
 *                                  description: id del local
 *                              fecha:
 *                                  type: string
 *                                  description: fecha de cita
 *                             
 */

/**
 * @swagger
 * /api/cita:
 *  get:
 *      summary: get all cita
 *      tags: [Cita]
 *      responses:
 *          200:
 *              description: all cita
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Cita'
 * 
 *                                
 */
router.get('/cita', getCita)

/**
 * @swagger
 * /api/cita/{id}:
 *  get:
 *      summary: get cita by id
 *      tags: [Cita]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: the cita id               
 *      responses:
 *          200:
 *              description: One cita by id
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Cita'
 *          404:
 *              description: cita not found
 * 
 *                                
 */
router.get('/cita/:id', getCitaById)

/**
 * @swagger
 * /api/cita:
 *  post:
 *      summary: create cita
 *      tags: [Cita]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Cita'
 *      responses:
 *          200:
 *              description: nueva cita creada!
 * 
 *                                
 */
router.post('/cita', createCita)

/**
 * @swagger
 * /api/cita/{id}:
 *  patch:
 *      summary: update a cita
 *      tags: [Cita]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: the cita id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Cita'               
 *      responses:
 *          200:
 *              description: cita updated
 *          404:
 *              description: cita not found
 * 
 *                                
 */
router.patch('/cita/:id', updateCita)

/**
 * @swagger
 * /api/cita/{id}:
 *  delete:
 *      summary: delete a cita
 *      tags: [Cita]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: the cita id               
 *      responses:
 *          200:
 *              description: cita deleted
 * 
 *                                
 */
router.delete('/cita/:id', deleteCita)

export default router