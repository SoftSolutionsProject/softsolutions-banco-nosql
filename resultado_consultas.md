## Consultar Certificados Emitidos Após uma Data Específica
Retorna todos os certificados que foram emitidos após 1º de junho de 2017. Isso é útil para verificar a emissão de certificados em um determinado período e monitorar a frequência de emissão.

**Código da Consulta**:
```
use('soft')
db.certificado.find(
  { dataEmissao: { $gt: "2017-06-01" } }  
)
```

**Resultado**:
```
[
  {
    "_id": {
      "$oid": "67034152810b8a07eee51238"
    },
    "_idCertificado": 2,
    "dataEmissao": "2018-09-25"
  }
]
```

## Consultar Cursos com Nomes Específicos
Busca cursos com nomes específicos, como "Desenvolvimento Web". Essa consulta pode ser usada para verificar se determinados cursos estão disponíveis na plataforma.

**Código da Consulta**:
```
use('soft')
db.cursos.find(
  { nomeCurso: { $in: ["Desenvolvimento Web"] } },
  { _idCurso: 1, nomeCurso: 1}
)
```

**Resultado**:
```
[
  {
    "_id": {
      "$oid": "670341c8e4b49270958f115e"
    },
    "_idCurso": 1,
    "nomeCurso": "Desenvolvimento Web"
  }
]
```

## Consultar Inscrições de Alunos com Status Específico
**Código da Consulta**:
```
use('soft')
db.inscricao.find(
  { statusInscricao: 1 },
  { _idInscricao: 1, cpfUsuario: 1, _idCurso: 1 }
)
```
**Resultado**:
```
[
  {
    "_id": {
      "$oid": "670341cc966385c7b1f202e4"
    },
    "_idInscricao": 1,
    "_idCurso": 1
  },
  {
    "_id": {
      "$oid": "670341cc966385c7b1f202e5"
    },
    "_idInscricao": 2,
    "_idCurso": 2
  },
  {
    "_id": {
      "$oid": "670341cc966385c7b1f202e6"
    },
    "_idInscricao": 3,
    "_idCurso": 1
  },
  {
    "_id": {
      "$oid": "670341cc966385c7b1f202e7"
    },
    "_idInscricao": 4,
    "_idCurso": 2
  },
  {
    "_id": {
      "$oid": "670341cc966385c7b1f202e8"
    },
    "_idInscricao": 5,
    "_idCurso": 1
  }
]
```

## Consultar Módulos Concluídos de um Curso Específico
**Código da Consulta**:
```
use('soft')
db.modulo.find(
  { _idCurso: 1, _idConclusao: 1 },
  { _idModulo: 1, nomeModulo: 1}
)
```
**Resultado**:
```
[
  {
    "_id": {
      "$oid": "670341d33cb6876fc4f94f8e"
    },
    "_idModulo": 6,
    "nomeModulo": "CONCLUIDO"
  }
]
```

## Consultar Suporte Baseado em Assuntos Específicos com a palavra "problema"
**Código da Consulta**:
```
use('soft')
db.suporte.find(
  { assunto: { $regex: /problema/i } },
  { _idSuporte: 1, assunto: 1, emailVisitante: 1 }
)
```
**Resultado**:
```
[
  {
    "_id": {
      "$oid": "670341dcc7e65980bf834f4f"
    },
    "_idSuporte": 1,
    "assunto": "Problema com pagamento",
    "emailVisitante": "joao.silva@example.com"
  },
  {
    "_id": {
      "$oid": "670341dcc7e65980bf834f52"
    },
    "_idSuporte": 5,
    "assunto": "Problema com cursos online",
    "emailVisitante": "carla.ferreira@example.com"
  }
]
```

## Consultar Usuários que São Alunos e Têm um CPF Específico
**Código da Consulta**:
```
use('soft')
db.usuario.find(
  { tipo: "aluno", cpfUsuario: { $eq: 10234567890 } },
  { _idUser: 1, nomeUsuario: 1, email: 1 }
)
```
**Resultado**:
```
[
  {
    "_id": {
      "$oid": "670341e18b4ddaa6597c9f75"
    },
    "_idUser": 6,
    "nomeUsuario": "João Silva",
    "email": "joao.silva@hotmail.com"
  }
]
```