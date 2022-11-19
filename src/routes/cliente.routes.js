import {Router} from 'express'
import {getClientes, createCliente, updateCliente, deleteCliente, getClienteById} from '../controllers/cliente.controller.js'

const router = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *      Cliente:
 *                          type: object
 *                          properties:
 *                              nombre:  
 *                                  type: string
 *                                  description: nombre de cliente
 *                              apellido:
 *                                  type: string
 *                                  description: apellido
 *                              nombreMas:
 *                                  type: string
 *                                  description: nombre de mascota
 *                              tipoMas:
 *                                  type: string
 *                                  description: tipo de mascota
 *                              dni:
 *                                  type: string
 *                                  description: dni de cliente
 *                             
 */

/**
 * @swagger
 * /api/cliente:
 *  get:
 *      summary: get all cliente
 *      tags: [Cliente]
 *      responses:
 *          200:
 *              description: all cliente
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Cliente'
 * 
 *                                
 */
router.get('/cliente', getClientes)

/**
 * @swagger
 * /api/cliente/{id}:
 *  get:
 *      summary: get cliente by id
 *      tags: [Cliente]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: the cliente id               
 *      responses:
 *          200:
 *              description: One cliente by id
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Cliente'
 *          404:
 *              description: cliente not found
 * 
 *                                
 */
router.get('/cliente/:id', getClienteById)

/**
 * @swagger
 * /api/cliente:
 *  post:
 *      summary: create cliente
 *      tags: [Cliente]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Cliente'
 *      responses:
 *          200:
 *              description: nueva cliente creado!
 * 
 *                                
 */
router.post('/cliente', createCliente)

/**
 * @swagger
 * /api/cliente/{id}:
 *  patch:
 *      summary: update a cliente
 *      tags: [Cliente]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: the cliente id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Cliente'               
 *      responses:
 *          200:
 *              description: cliente updated
 *          404:
 *              description: cliente not found
 * 
 *                                
 */
router.patch('/cliente/:id', updateCliente)

/**
 * @swagger
 * /api/cliente/{id}:
 *  delete:
 *      summary: delete a cliente
 *      tags: [Cliente]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: the cliente id               
 *      responses:
 *          200:
 *              description: cliente deleted
 * 
 *                                
 */
router.delete('/cliente/:id', deleteCliente)

export default router