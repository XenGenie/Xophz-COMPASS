// Import the editor

// import Vue from 'vue';
import VueFriendlyIframe from 'vue-friendly-iframe'

export default {
  name: 'Normal',
  props: ['post_id'],
  data,
  mounted,
  created,
  computed: getComputed(),
  methods: getMethods(),
  beforeDestroy () {
  },
  components: {
    VueFriendlyIframe
    // Use the <ckeditor> component in this view.
    // ckeditor: CKEditor.component
  }
}
function data () {
  return {
    // editor: ClassicEditor,
    editorConfig: {
    }
  }
}
function getComputed () {
  return {
    post () {
      return this.$store.state.posts.editingPost
    }
  }
}
function created () {
  return {
    editor: null
  }
}
function mounted () {
  const vm = this
  vm.loadPost()
}
function getMethods () {
  return {
    loadPost () {
      const vm = this
      vm.$store.dispatch('posts/LOAD_POST', vm.post_id)
    }
  }
}
