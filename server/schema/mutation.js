const {GraphQLObjectType, GraphQLString, GraphQLID,GraphQLNonNull, GraphQLInt } = require("graphql");
const Post = require("../models/Post");
const User = require("../models/User");
const commentType = require("./commentType");
const postType = require("./postType");
const userType = require("./userType");


const RootMutation= new GraphQLObjectType({
    name: "mutation",
    fields:()=>({
        addUser: {
            type: userType,
            args:{
                nick:{type:new GraphQLNonNull(GraphQLString)},
                photo:{type: GraphQLString},
                country:{type: GraphQLString},
                city:{type: GraphQLString},
                age:{type: GraphQLInt},
            },
            resolve(parent,{nick,photo,country,city,age}){
                const user = new User({
                    nick,
                    photo,
                    country,
                    city,
                    age,
                })
                return user.save()
            }
        },
        addPost:{
            type: postType,
            args:{
                text:{type:new GraphQLNonNull(GraphQLString)},
                authorId:{type:new GraphQLNonNull(GraphQLID)},
            },
            resolve(parent,{text,authorId}){
                const post = new Post({
                    text,
                    authorId,
                    likes:0,
                    comments:[],
                })
                return post.save()
            }
        },
        addComment:{
            type: commentType,
            args:{
                text:{type:new GraphQLNonNull(GraphQLString)},
                authorId:{type:new GraphQLNonNull(GraphQLID)},
                postId:{type:new GraphQLNonNull(GraphQLID)},
            },
            resolve(parent,{text,authorId,postId}){
                const comment = new Comment({
                    text,authorId,postId
                })
                return comment.save();
            }
        }
    })
})


module.exports = RootMutation;
