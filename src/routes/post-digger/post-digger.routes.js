import createUpdatePost from './create-update/createUpdatePost.vue'
import index from './post-digger-index/post-digger-index.vue'

const PostDigger = () => import(
  /* webpackChunkName: "post-digger" */
  './post-digger.vue'
)

export default {
  path: '/post-digger',
  component: PostDigger,
  children: [{
    path: '',
    name: 'Post Digger',
    component: index
  }, {
    path: 'createupdate/:post_id?',
    props: true,
    name: 'posts.createupdate',
    component: createUpdatePost
  }]
}
