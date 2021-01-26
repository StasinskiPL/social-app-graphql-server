const { GraphQLObjectType,GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLList, GraphQLID } = require("graphql");
const User = require("../models/User")


const userType= new GraphQLObjectType({
    name:"user",
    fields:()=>({
        id: { type: new GraphQLNonNull(GraphQLID)},
        nick:{type:new GraphQLNonNull(GraphQLString)},
        bio:{type: GraphQLString},
        photo:{type: GraphQLString},
        country:{type: GraphQLString},
        city:{type: GraphQLString},
        age:{type: GraphQLInt},
        friends:{type: new GraphQLList(userType),
        resolve(parent,args){
            return User.find({_id:[...parent.friends]})
        }}
    }),
})



module.exports = userType;