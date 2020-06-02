const { express, bodyParser } = require('./imports')

let app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/usuario',(req,res)=>{
    res.json('GET {Wester Mateo Medina}')
})
app.post('/usuario',(req,res)=>{
    let body = req.body
    res.json(body)
  })
app.put('/usuario/:id',(req,res)=>{
    let id = req.params.id
        res.json({
            id,
            nombre: `Wester Mateo Medina`
        })
})
app.delete('/usuario',(req,res)=>{
    res.json('DELETE {Wester Mateo Medina}')
  })
app.listen(process.env.PORT,()=>{
    console.log(`Escuchando peticiones en el puerto ${process.env.PORT}`)
})