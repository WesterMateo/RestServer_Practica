const { express,bcrypt, _ } = require('../imports')
const app = express()
const Usuario = require('../Model/usuario')
app.get('/usuario',(req,res)=>{
    let desde = req.query.desde || 0
    desde = Number(desde)

    let hasta = req.query.hasta || 0
    hasta = Number(hasta)
    Usuario.find({estado: true},'nombre email estado')
            .skip(desde)
            .limit(hasta)
            .exec((err,ListUsuario)=>{
                if (err)
                {
                   return res.status(400).json({
                        ok: false,
                        err
                    })
                }
                Usuario.countDocuments((err,conteo)=>{
                    if (err)
                         {
                             return res.status(400).json({
                                         ok: false,
                                         err
                            })
                         }
                        res.json({
                            ok: true,
                            ListUsuario,
                            conteo
                        })
                })
                              
            })   
})
app.get('/usuario/:id',(req,res)=>{
    let id = req.params.id

    Usuario.findById(id, (err, UsuarioDB)=>{
        if (err)
        {
           return res.status(400).json({
                ok: false,
                err
            })
        }               
            res.json({
                ok: true,
                UsuarioDB,
            }) 
    })
                
})
app.post('/usuario',(req,res)=>{
    let body = req.body
    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password,10),
        role: body.role
    })
    usuario.save((err,usuarioDB)=>{
        if (err)
        {
           return res.status(400).json({
                ok: false,
                err
            })
        }
         res.json({
            ok: true,
            usuario: usuarioDB
        })
    })
  })
app.put('/usuario/:id',(req,res)=>{
    let id = req.params.id
    let body = req.body
    let usuario = {
        nombre: body.nombre,
        email: body.email,
        // password: bcrypt.hashSync(body.password,10),
        role: body.role,
        estado: body.estado
    }
    Usuario.findByIdAndUpdate(id,usuario,{new:true}, (err,NuevoUsuario) =>{
        if (err)
        {
           return res.status(400).json({
                ok: false,
                err
            })
        }
        res.json({
            ok: true,
            Usuario: NuevoUsuario
        })
    })
        
})
app.delete('/usuario/:id',(req,res)=>{
    let id = req.params.id
    let usuario = {
        estado: false
    }
    Usuario.findByIdAndUpdate(id,usuario,{new:true}, (err,NuevoUsuario) =>{
        if (err)
        {return res.status(400).json({
                ok: false,
                err
            })}
        res.json({
            ok: true,
            Usuario: NuevoUsuario
        })
    })


    // Usuario.findByIdAndRemove(id, (err,usuarioBorrado) =>{
    //     if (err)
    //     {
    //        return res.status(400).json({
    //             ok: false,
    //             err
    //         })
    //     }
    //     res.json({
    //         ok: true,
    //         Usuario: usuarioBorrado
    //     })
    // })
        
})
  
  module.exports = app