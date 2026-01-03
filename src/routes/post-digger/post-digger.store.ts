import { defineStore } from 'pinia'
import postDiggerApi from '@/plugins/post-digger.api'

export const usePostDiggerStore = defineStore('post-digger', {
  state: () => ({
    posts: {},
    editingPost: {},
    loading: true,
    error: null
  }),
  actions: {
    async loadPosts () {
      try {
        const response = await postDiggerApi().getPosts()
        this.posts = response.data
        this.loading = false
      } catch (error) {
        this.error = error.data?.error || error
      }
    },
    async loadPost (postId) {
      try {
        const response = await postDiggerApi().getPostById(postId)
        this.editingPost = response.data
        this.loading = false
      } catch (error) {
        this.error = error.data?.error || error
      }
    }
  }
})
