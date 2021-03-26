const  uid  =  require('uuid');

let posts = new Map();

let createPost = (object) =>{

    let post ={
        name:object.name,
        description:object.description,
        id:uid.v4(),
        postedDate:new Date()

    };
    posts.set(post.id,post);

    return post;
}

let getPosts=()=>{
  return [...posts.values()]
}

let getPost=(id) =>
{
    return posts.get(id);
}



module.exports = {

    createPost,
    getPosts,
    getPost,

};
