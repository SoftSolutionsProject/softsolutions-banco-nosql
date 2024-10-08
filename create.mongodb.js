
//CREATE CERTIFICADOS 

const fs = require('fs')
const dadosCertificados = fs.readFileSync("json/certificados.json")
const jsonCertificados = JSON.parse(dadosCertificados)

use('soft')
db.certificados.insertMany(jsonCertificados) 



//CREATE CURSOS

const fs = require('fs')
const dadosCursos = fs.readFileSync("json/cursos.json")
const jsonCursos = JSON.parse(dadosCursos)

use('soft')
db.cursos.insertMany(jsonCursos) 



//CREATE INCRICAO

const fs = require('fs')
const dadosInscricoes = fs.readFileSync("json/inscricoes.json")
const jsonInscricoes = JSON.parse(dadosInscricoes)

use('soft')
db.inscricoes.insertMany(jsonInscricoes) 


//CREATE SETORES

const fs = require('fs')
const dadosSetores = fs.readFileSync("json/setores.json")
const jsonSetores = JSON.parse(dadosSetores)

use('soft')
db.setores.insertMany(jsonSetores)  



//CREATE SUPORTE

const fs = require('fs')
const dadosSuportes = fs.readFileSync("json/suportes.json")
const jsonSuportes = JSON.parse(dadosSuportes)

use('soft')
db.suportes.insertMany(jsonSuportes) 



//CREATE USUARIO

const fs = require('fs')
const dadosUsuarios = fs.readFileSync("json/usuarios.json")
const jsonUsuarios = JSON.parse(dadosUsuarios)

use('soft')
db.usuarios.insertMany(jsonUsuarios) 

