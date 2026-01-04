import type { RouteRecordRaw } from "vue-router";

const PostDigger = () =>
  import(
    /* webpackChunkName: "post-digger" */
    "./post-digger.vue"
  );

const PostDiggerIndex = () =>
  import(
    /* webpackChunkName: "post-digger-index" */
    "./post-digger-index/post-digger-index.vue"
  );

const CreateUpdatePost = () =>
  import(
    /* webpackChunkName: "post-digger-create-update" */
    "./create-update/createUpdatePost.vue"
  );

export default {
  path: "/post-digger",
  component: PostDigger,
  children: [
    {
      path: "",
      name: "Post Digger",
      component: PostDiggerIndex,
    },
    {
      path: "createupdate/:post_id?",
      props: true,
      name: "posts.createupdate",
      component: CreateUpdatePost,
    },
  ],
} as RouteRecordRaw;
