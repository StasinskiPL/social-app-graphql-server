const {GraphQLObjectType, GraphQLString,GraphQLNonNull, GraphQLID, GraphQLList } = require("graphql");
const userType = require("./userType");
const User = require("../models/User");
const postType = require("./postType");
const Post = require("../models/Post");

const RootQuery = new GraphQLObjectType({
  name: "query",
  fields: () => ({
    user: {
      type: userType,
      args:{
        id:{type: new GraphQLNonNull(GraphQLID)}
      },
      resolve(parent, {id}) {
        return User.findById(id)
      },
    },
    users:{
      type: GraphQLList(userType),
      resolve(){
        return User.find()
      }
    },
    post:{
      type: postType,
      args:{
        id:{type: new GraphQLNonNull(GraphQLID)}
      }
    },
    posts:{
      type: GraphQLList(postType),
      args:{
        authorId:{type:GraphQLID}
      },
      resolve(parent,{authorId}){
        if(authorId){
          return Post.find({authorId:authorId})
        }else{
          return Post.find()
        }
      }
    },
  }),
});

module.exports = RootQuery;


