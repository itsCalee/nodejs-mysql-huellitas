import {pool} from '../db.js'

export const getLocales = async (req, res) => {
    
    try {
        const [rows] = await pool.query('select * from locales')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const getLocalesById = async (req, res) => {
    
    try {
        const { id } = req.params;
        const [rows] = await pool.query("SELECT * FROM locales WHERE id = ?", [
          id,
        ]);
    
        if (rows.length <= 0) {
          return res.status(404).json({ message: "Local not found" });
        }
    
        res.json(rows[0]);
      } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
      }
    };

export const createLocales = async (req, res) => {
    const {distrito, direccion, horario} = req.body
    try {
        const [rows] = await pool.query('insert into locales (distrito, direccion, horario) values (?, ?, ?)', [distrito, direccion, horario])
        res.send({
            id: rows.insertId,
            distrito,
            direccion,
            horario
    })
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const deleteLocales = async (req, res) => {
    try {
        const [result] = await pool.query('delete from locales where id = ?', [req.params.id])

        if(result.affectedRows <= 0) return res.status(404).json({
            message: 'Local not found'
    })

    res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const updateLocales = async (req, res) => {
    const {id} = req.params
    const {distrito, direccion, horario} = req.body
    
    try {
        const [result] = await pool.query('update locales set distrito = ifnull(?, distrito), direccion = ifnull(?, direccion), horario = ifnull(?, horario) where id = ?', [distrito, direccion, horario, id])
        console.log(result)

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Local not found'
    })

    const [rows] = await pool.query('select * from locales where id = ?', [id])
    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

