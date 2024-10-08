//criando os índices 2dspere
use('soft')
db.usuario.createIndex({localizacao: '2dsphere'})



//1. Encontrar alunos dentro de um raio de 20 km do centro de Sorocaba
use('soft')
db.usuario.find({
    tipo: "aluno",
    localizacao: {
        $geoWithin: {
            $centerSphere: [[-47.4584, -23.5018], 200 / 6378.1] 
        }
    }
},{nomeUsuario:1, _id:0})



//2. Encontrar alunos dentro de um polígono definido na cidade de Itu
use('soft')
db.usuario.find({
    tipo: "aluno",
    localizacao: {
        $geoWithin: {
            $geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [-47.2960, -23.2259],
                        [-47.3674, -23.2416],
                        [-47.3765, -23.2900],
                        [-47.3708, -23.3457],
                        [-47.3243, -23.3753],
                        [-47.2682, -23.3774],
                        [-47.2167, -23.3358],
                        [-47.1974, -23.2796],
                        [-47.2195, -23.2249],
                        [-47.2960, -23.2259]  
                    ]
                ]
            }
        }
    }
}, {nomeUsuario: 1, _id: 0, "endereco.cidade": 1});



//3. Encontrar administradores em um raio de 3 km de um endereço específico na cidade de Votorantim (Prefeitura Municipal)
use('soft')
db.usuario.find({
    tipo: "administrador",
    localizacao: {
        $geoWithin: {
            $centerSphere: [[-47.447341, -23.540871], 3 / 6378.1] 
        }
    }
},{nomeUsuario:1, _id:0})

