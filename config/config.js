//==============================
// ESTABLECIENDO EL PUERTO
//==============================
process.env.PORT = process.env.PORT || 3000

//=====================================
// BASE DE DATOS
//=====================================

let DBConnectionString 
if (process.env.NODE_ENV === 'dev'){
    DBConnectionString = "mongodb://localhost:27017/Caaaa"
}else{
    DBConnectionString = "mongodb+srv://bequico:bequico111@cluster0-5ohbs.mongodb.net/Practica-Udemy?retryWrites=true&w=majority"
}
process.env.DBConnectionString = DBConnectionString