import api from '@/plugins/api'

export default (props) => {
  return {
    getPlugins,
    activatePlugin,
    deactivatePlugin,
    getCurrentUser
  }
  function getCurrentUser () {
    return api.get('get_current_user')
  }
  function getPlugins () {
    return api.get('get_plugins')
  }
  function activatePlugin (plugin) {
    return api.get('activate_plugin', plugin)
  }
  function deactivatePlugin (plugin) {
    return api.get('deactivate_plugin', plugin)
  }
}
