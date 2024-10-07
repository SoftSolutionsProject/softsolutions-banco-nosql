//Junção entre Inscrições e Usuario (listar todas as inscrições para o curso "Desenvolvimento de Apps", retornando, ainda, informações sobre os alunos inscritos.)

use('soft')
db.inscricao.aggregate([
  {
      $match: { "_idCurso": 2 } 
  },
  {
      $lookup: {
          from: "usuario", 
          localField: "_idUser", 
          foreignField: "_idUser", 
          as: "aluno_info"  
      }
  },
  {
    $project: {
        _idInscricao: 1,
        statusInscricao: 1,
        "aluno_info.nomeUsuario": 1,
        "aluno_info.email": 1,
        "aluno_info.telefone": 1
    }
}
])


 
//Junção entre Inscrições e Cursos (Obter todas as inscrições e seus cursos correspondentes)
use('soft')
db.inscricao.aggregate([
  {
    $lookup: {
      from: "cursos", 
      localField: "_idCurso", 
      foreignField: "_idCurso",
      as: "curso" 
    }
  }
])