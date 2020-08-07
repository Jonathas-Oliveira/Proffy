import express from 'express'
import routes from './routes'
import cors from 'cors'//permite que meu servidor starte a minha api front no back com endereços host diferentes
//GET: Buscar um usúario
//POST: Fazer atualizações de attr de usuarios
//PUT: Atualizar attr já existentes
//DELETE: Apaga um usúario

//Route params:identificar qual usuario quero deletar atraves do id por exemplo
//query params : Paginação filtros

const app = express()
app.use(cors())
app.use(express.json())

app.use(routes)

app.listen(3333)