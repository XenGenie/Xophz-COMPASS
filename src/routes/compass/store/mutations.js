export default {
  PLUGINS_LOADED: pluginsLoaded,
  PLUGIN_ACTIVATED: pluginActivated,
  PLUGIN_DEACTIVATED: pluginDeactivated,
  SET_PLUGIN_ERRORS: setPluginErrors,
  CURRENT_USER_LOADED: currentUserLoaded,
  PAINT_BILLBOARD_CHIPS: paintBillboardChips,
  PLUGIN_ACTIVE: pluginActive,
  IS_APP_NAV_DRAWER_OPEN: isAppNavDrawerOpen,
  IS_APP_NAV_DRAWER_MINI: isAppNavDrawerMini,
  IS_BILLBOARD_NAV_DRAWER_MINI: isBillboardNavDrawerMini,
  BOTTOM_SHEET_TOGGLED: bottomSheetToggled,
  WP_MENU_SET: wpMenuSet,
  BILLBOARD_SET: billboardSet,
  BILLBOARD_OFF: billboardOff,
  APP_BAR_OFF: appBarOff,
  STEPPER_SET: stepperSet,
  LOADING_SET: loadingSet,
  USER_MASK_SET: userMaskSet
}

function userMaskSet (state, userMask) {
  state.userMask = userMask
}

function loadingSet (state, loading) {
  state.loading = loading
}

function stepperSet (state, stepper) {
  state.stepper = stepper
}

function appBarOff (state, isOff) {
  state.isAppBarOff = isOff
}

function billboardOff (state, isOff) {
  state.isBillboardOff = isOff
}

function billboardSet (state, billboard) {
  state.billboard = billboard
}

function wpMenuSet (state, isOpen) {
  state.isWpMenuOpen = isOpen
  localStorage.isWpMenuOpen = isOpen ? 1 : ''
}
function bottomSheetToggled (state, active) {
  state.bottomSheet = active
}

function isAppNavDrawerMini (state, isMini) {
  state.isAppNavDrawerMini = isMini
}

function isBillboardNavDrawerMini (state, isMini) {
  state.isBillboardNavDrawerMini = isMini
}

function isAppNavDrawerOpen (state, isOpen) {
  state.isAppNavDrawerOpen = isOpen
}

function pluginActive (state, plugin) {
  state.activePlugin = plugin
}

function paintBillboardChips (state, payload) {
  state.billboard.chips = payload
}

function currentUserLoaded (state, payload) {
  state.blogInfo = payload.blog_info
  state.currentUser = payload.current_user
}

function pluginsLoaded (state, payload) {
  state.pluginList = payload
  state.loading = false
}

function pluginActivated (state, plugin) {
  const foundIndex = state.pluginList.findIndex(x => x.TextDomain === plugin.TextDomain)
  state.pluginList[foundIndex] = { ...plugin, isActivated: true }
  state.loading = false
}

function pluginDeactivated (state, plugin) {
  const foundIndex = state.pluginList.findIndex(x => x.TextDomain === plugin.TextDomain)
  state.pluginList[foundIndex] = { ...plugin, isActivated: false }
  state.loading = false
}

function setPluginErrors (state, payload) {
  state.loading = false
  state.usersErrors = payload
}
