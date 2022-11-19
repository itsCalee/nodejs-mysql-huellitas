import {pool} from '../db.js'

export const getServicio = async (req, res) => {
    
    try {
        const [rows] = await pool.query('select * from servicio')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const getServicioById = async (req, res) => {
    
    try {
        const { id } = req.params;
        const [rows] = await pool.query("SELECT * FROM servicio WHERE id = ?", [
          id,
        ]);
    
        if (rows.length <= 0) {
          return res.status(404).json({ message: "Servicio not found" });
        }
    
        res.json(rows[0]);
      } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
      }
    };

export const createServicio = async (req, res) => {
    const {nombre, costo, descripcion} = req.body
    try {
        const [rows] = await pool.query('insert into servicio (nombre, costo, descripcion) values (?, ?, ?)', [nombre, costo, descripcion])
        res.send({
            id: rows.insertId,
            nombre,
            costo,
            descripcion
    })
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const deleteServicio = async (req, res) => {
    try {
        const [result] = await pool.query('delete from servicio where id = ?', [req.params.id])

        if(result.affectedRows <= 0) return res.status(404).json({
            message: 'Servicio not found'
    })

    res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const updateServicio = async (req, res) => {
    const {id} = req.params
    const {nombre, costo, descripcion} = req.body
    
    try {
        const [result] = await pool.query('update servicio set nombre = ifnull(?, nombre), costo = ifnull(?, costo), descripcion = ifnull(?, descripcion) where id = ?', [nombre, costo, descripcion, id])
        console.log(result)

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Servicio not found'
    })

    const [rows] = await pool.query('select * from servicio where id = ?', [id])
    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}
