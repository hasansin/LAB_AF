const Router = require("@koa/router");
const {createPost} = require("../api/posts.api");
const {getPosts} = require("../api/posts.api");
const {getPost} = require("../api/posts.api");






const router = new Router({
    prefix: '/posts'
});

router.post('/', ctx => {

    let post = ctx.request.body;
    post = createPost(post);
    ctx.response.status = 201;
    ctx.body = post; });

router.get('/', ctx => {

    ctx.body = getPosts(); });


router.get('/:id', ctx => {

    const id = ctx.params.id; ctx.body = getPost(id); });

module.exports = router;