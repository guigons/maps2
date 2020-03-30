const { GraphQLServer } = require("graphql-yoga");
const mongoose = require("mongoose");
const Usuario = require('./models/usuario');
const Grupo = require('./models/grupos');

mongoose.connect('mongodb://localhost:27017/graphql', { useNewUrlParser: true});

const typeDefs = `
    input UsuarioInput {
        nome: String,
        email: String
    }

    input GrupoInput {
        nome: String,
    }

    type Usuario {
        id: String,
        nome: String,
        email: String,
        grupos: [Grupo]
    }

    type Grupo {
        id: String,
        nome: String,
        usuarios: [Usuario]
    }

    type Query {
        usuarios: [Usuario],
        usuario(id: String): Usuario,
        grupos: [Grupo],
        grupo(id: String): Grupo
    }

    type Mutation {
        saveUsuario(nome: String, email: String, grupos: [String]): Usuario
        updateUsuario(id: String, usuario: UsuarioInput): Usuario
        removeUsuario(id: String): Usuario
        saveGrupo(nome: String): Grupo
        updateGrupo(id: String,  grupo: GrupoInput): Grupo
        removeGrupo(id: String): Grupo
        addUsuarioGrupo(idUsuario: String, idGrupo: String): Grupo
    }
`;

const resolvers = {
    Query: {
        usuarios: (obj, {}, context, info)  => {
            return Usuario.find({})
        },
        usuario: (obj, {id}, context, info) => {
            return Usuario.findById(id)
        },
        
        grupos: (obj, {}, context, info)  => {
            return Grupo.find({})
        },
        grupo: (obj, {id}, context, info) => {
            return Grupo.findById(id)
        }
    },
    Mutation: {
        // Usuario
        saveUsuario: (obj, {nome, email, grupos}, context, info) => {
            return Usuario.create({nome: nome, email: email, grupos: grupos})
        },
        updateUsuario: (obj, {id, usuario}, context, info) => {
            return Usuario.findByIdAndUpdate(id,usuario)
        },
        removeUsuario: (obj, {id}, context, info) => {
            return Usuario.findByIdAndDelete(id)
        },
        // Grupo
        saveGrupo: (obj, {nome}, context, info) => {
            return Grupo.create({nome: nome})
        },
        updateGrupo: (obj, {id, grupo}, context, info) => {
            return Grupo.findByIdAndUpdate(id,grupo)
        },
        removeGrupo: (obj, {id}, context, info) => {
            return Grupo.findByIdAndDelete(id)
        },
        addUsuarioGrupo: (obj, {idUsuario, idGrupo}, context, info) => {
            return Grupo.findByIdAndUpdate(idGrupo,{ $push: { usuarios: idUsuario}})
        }
    },
    Usuario: {
        grupos: (obj, {}, context, info) => {
            return Grupo.find({usuarios: obj.id})
        }
    },
    Grupo: {
        usuarios: (obj, {}, context, info) => {
            return Usuario.find({ $or: obj.usuarios.map(u => { return { _id: u }} )})
        }
    }
}

const server = new GraphQLServer({typeDefs,resolvers});
server.start(4000);




