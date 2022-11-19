import {Router} from 'express'
import {getLocales, createLocales, updateLocales, deleteLocales, getLocalesById} from '../controllers/locales.controller.js'

const router = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *      Locales:
 *                          type: object
 *                          properties:
 *                              distrito:  
 *                                  type: string
 *                                  description: distrito de local
 *                              direccion:
 *                                  type: string
 *                                  description: dirección de local
 *                              horario:
 *                                  type: string
 *                                  description: horario de local
 *                             
 */

/**
 * @swagger
 * /api/locales:
 *  get:
 *      summary: get all locales
 *      tags: [Locales]
 *      responses:
 *          200:
 *              description: all locales
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Locales'
 * 
 *                                
 */
router.get('/locales', getLocales)

/**
 * @swagger
 * /api/locales/{id}:
 *  get:
 *      summary: get local by id
 *      tags: [Locales]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: the local id               
 *      responses:
 *          200:
 *              description: One local by id
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Locales'
 *          404:
 *              description: Local not found
 * 
 *                                
 */
router.get('/locales/:id', getLocalesById)

/**
 * @swagger
 * /api/locales:
 *  post:
 *      summary: create local
 *      tags: [Locales]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Locales'
 *      responses:
 *          200:
 *              description: nueva local creado!
 * 
 *                                
 */
router.post('/locales', createLocales)

/**
 * @swagger
 * /api/locales/{id}:
 *  patch:
 *      summary: update a local
 *      tags: [Locales]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: the local id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Locales'               
 *      responses:
 *          200:
 *              description: local updated
 *          404:
 *              description: local not found
 * 
 *                                
 */
router.patch('/locales/:id', updateLocales)

/**
 * @swagger
 * /api/locales/{id}:
 *  delete:
 *      summary: delete a local
 *      tags: [Locales]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: the local id               
 *      responses:
 *          200:
 *              description: local deleted
 * 
 *                                
 */
router.delete('/locales/:id', deleteLocales)

export default router