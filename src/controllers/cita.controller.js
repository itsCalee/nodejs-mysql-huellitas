import {pool} from '../db.js'

export const getCita = async (req, res) => {
    
    try {
        const [rows] = await pool.query('select * from cita')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const getCitaById = async (req, res) => {
    
    try {
        const { id } = req.params;
        const [rows] = await pool.query("SELECT * FROM cita WHERE id = ?", [
          id,
        ]);
    
        if (rows.length <= 0) {
          return res.status(404).json({ message: "Cita not found" });
        }
    
        res.json(rows[0]);
      } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
      }
    };

    
export const createCita = async (req, res) => {
    const {idCliente, tipoMas, idServicio, idLocal, fecha} = req.body
    try {
        const [rows] = await pool.query('insert into cita (idCliente, tipoMas, idServicio, idLocal, fecha) values (?, ?, ?, ?, ?)', [idCliente, tipoMas, idServicio, idLocal, fecha])
        res.send({
            id: rows.insertId,
            idCliente,
            tipoMas,
            idServicio,
            idLocal,
            fecha
    })
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const deleteCita = async (req, res) => {
    try {
        const [result] = await pool.query('delete from cita where id = ?', [req.params.id])

        if(result.affectedRows <= 0) return res.status(404).json({
            message: 'Cita not found'
    })

    res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const updateCita = async (req, res) => {
    const {id} = req.params
    const {idCliente, tipoMas, idServicio, idLocal, fecha} = req.body
    
    try {
        const [result] = await pool.query('update cita set idCliente = ifnull(?, idCliente), tipoMas = ifnull(?, tipoMas), idServicio = ifnull(?, idServicio), idLocal = ifnull(?, idLocal), fecha = ifnull(?, fecha) where id = ?', [idCliente, tipoMas, idServicio, idLocal, fecha, id])
        console.log(result)

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Cita not found'
    })

    const [rows] = await pool.query('select * from cita where id = ?', [id])
    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}