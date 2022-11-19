import {pool} from '../db.js'

export const getClientes = async (req, res) => {
    
    try {
        const [rows] = await pool.query('select * from cliente')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const getClienteById = async (req, res) => {
    
    try {
        const { id } = req.params;
        const [rows] = await pool.query("SELECT * FROM cliente WHERE id = ?", [
          id,
        ]);
    
        if (rows.length <= 0) {
          return res.status(404).json({ message: "Cliente not found" });
        }
    
        res.json(rows[0]);
      } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
      }
}

export const createCliente = async (req, res) => {
    const {nombre, apellido, nombreMas, tipoMas, dni} = req.body
    try {
        const [rows] = await pool.query('insert into cliente (nombre, apellido, nombreMas, tipoMas, dni) values (?, ?, ?, ?, ?)', [nombre, apellido, nombreMas, tipoMas, dni])
        res.send({
            id: rows.insertId,
            nombre,
            apellido,
            nombreMas,
            tipoMas,
            dni
    })
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const deleteCliente = async (req, res) => {
    try {
        const [result] = await pool.query('delete from cliente where id = ?', [req.params.id])

        if(result.affectedRows <= 0) return res.status(404).json({
            message: 'Cliente not found'
    })

    res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const updateCliente = async (req, res) => {
    const {id} = req.params
    const {nombre, apellido, nombreMas, tipoMas, dni} = req.body
    
    try {
        const [result] = await pool.query('update cliente set nombre = ifnull(?, nombre), apellido = ifnull(?, apellido), nombreMas = ifnull(?, nombreMas), tipoMas = ifnull(?, tipoMas), dni = ifnull(?, dni)  where id = ?', [nombre, apellido, nombreMas, tipoMas, dni, id])
        console.log(result)

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Cliente not found'
    })

    const [rows] = await pool.query('select * from cliente where id = ?', [id])
    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}
