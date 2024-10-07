consultas: 
//Consultar Certificados Emitidos Após uma Data Específica
use('soft')
db.certificado.find(
  { dataEmissao: { $gt: "2017-06-01" } }  
)
 

 
//Consultar Cursos com Nomes Específicos
use('soft')
db.cursos.find(
  { nomeCurso: { $in: ["Desenvolvimento Web"] } },
  { _idCurso: 1, nomeCurso: 1}
)


 
//Consultar Inscrições de Alunos com Status Específico
use('soft')
db.inscricao.find(
  { statusInscricao: 1 },
  { _idInscricao: 1, cpfUsuario: 1, _idCurso: 1 }
)
 

 
//Consultar Módulos Concluídos de um Curso Específico
use('soft')
db.modulo.find(
  { _idCurso: 1, _idConclusao: 1 },
  { _idModulo: 1, nomeModulo: 1}
)
 

 
//Consultar Suporte Baseado em Assuntos Específicos com a palavra "problema"
use('soft')
db.suporte.find(
  { assunto: { $regex: /problema/i } },
  { _idSuporte: 1, assunto: 1, emailVisitante: 1 }
)
 

 
//Consultar Usuários que São Alunos e Têm um CPF Específico
use('soft')
db.usuario.find(
  { tipo: "aluno", cpfUsuario: { $eq: 10234567890 } },
  { _idUser: 1, nomeUsuario: 1, email: 1 }
)