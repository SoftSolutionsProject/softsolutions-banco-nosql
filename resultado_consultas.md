## Consultar Certificados Emitidos Após uma Data Específica

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