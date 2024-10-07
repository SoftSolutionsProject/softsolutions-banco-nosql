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