const { express,bodyParser,mongoose, color } = require('./imports')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(require('./Controller/usuario'))



mongoose.connect(process.env.DBConnectionString,
                  {useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology:true},
                  (err, res)=>{
  if (err) throw err
    console.log(`Base de datos ${color.green('ONLINE')}`)
})

app.listen(process.env.PORT,()=>{
    console.log(`Escuchando peticiones en el puerto ${process.env.PORT}`)
})