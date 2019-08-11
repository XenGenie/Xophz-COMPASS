import api from './api'

export default (props) => {
  return {
    getPosts,
    getPostById
  }
  function getPosts () {
    return api.get('get_posts')
  }
  function getPostById (postId) {
    return api.get(
      'get_post',
      { postId }
    )
  }
}
