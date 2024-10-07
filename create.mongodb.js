
//CREATE CERTIFICADOS 

const fs = require('fs')
const dadosCertificado = fs.readFileSync("softGeo/json/certificado.json")
const jsonCertificado = JSON.parse(dadosCertificado)

use('soft')
db.certificado.insertMany(jsonCertificado) 



//CREATE CURSOS

const fs = require('fs')
const dadosCursos = fs.readFileSync("softGeo/json/cursos.json")
const jsonCursos = JSON.parse(dadosCursos)

use('soft')
db.cursos.insertMany(jsonCursos) 



//CREATE INCRICAO

const fs = require('fs')
const dadosInscricao = fs.readFileSync("softGeo/json/inscricao.json")
const jsonInscricao = JSON.parse(dadosInscricao)

use('soft')
db.inscricao.insertMany(jsonInscricao) 



//CREATE MODULO

const fs = require('fs')
const dadosModulo = fs.readFileSync("softGeo/json/modulo.json")
const jsonModulo = JSON.parse(dadosModulo)

use('soft')
db.modulo.insertMany(jsonModulo)   



//CREATE SETORES

const fs = require('fs')
const dadosSetores = fs.readFileSync("softGeo/json/setores.json")
const jsonSetores = JSON.parse(dadosSetores)

use('soft')
db.setores.insertMany(jsonSetores)  



//CREATE SUPORTE

const fs = require('fs')
const dadosSuporte = fs.readFileSync("softGeo/json/suporte.json")
const jsonSuporte = JSON.parse(dadosSuporte)

use('soft')
db.suporte.insertMany(jsonSuporte) 



//CREATE USUARIO

const fs = require('fs')
const dadosUsuario = fs.readFileSync("softGeo/json/usuario.json")
const jsonUsuario = JSON.parse(dadosUsuario)

use('soft')
db.usuario.insertMany(jsonUsuario) 

