import { mapStores } from 'pinia'
import { usePostDiggerStore } from '../post-digger.store'

export default {
  name: 'Normal',
  props: ['post_id'],
  data,
  computed: {
    ...getComputed(),
    ...mapStores(usePostDiggerStore)
  },
  methods: getMethods(),
  created: onCreated,
  mounted: onMounted,
  components: {
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
      return this.postDiggerStore.editingPost
    }
  }
}
function onCreated () {
  // was created returning object in original, but that's invalid for options API
}
function onMounted () {
  const vm = this
  vm.loadPost()
}
function getMethods () {
  return {
    loadPost () {
      const vm = this
      vm.postDiggerStore.loadPost(vm.post_id)
    }
  }
}
