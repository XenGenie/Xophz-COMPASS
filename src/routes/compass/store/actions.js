import Api from '../compass.api'

export default {
  LOAD_PLUGINS: loadPlugins,
  ACTIVATE_PLUGIN: activatePlugin,
  SET_ACTIVE_PLUGIN: setActivePlugin,
  DEACTIVATE_PLUGIN: deactivatePlugin,
  GET_CURRENT_USER: getCurrentUser,
  SET_IS_APP_NAV_DRAWER_OPEN: setIsAppNavDrawerOpen,
  SET_IS_APP_NAV_DRAWER_MINI: setIsAppNavDrawerMini,
  SET_IS_BILLBOARD_NAV_DRAWER_MINI: setIsBillboardNavDrawerMini,
  SET_BILLBOARD: setBillboard,
  SET_BILLBOARD_CHIPS: setBillboardChips,
  SET_BOTTOM_SHEET: setBottomSheet,
  SET_WP_MENU: setWpMenu,
  TURN_OFF_BILLBOARD: turnOffBillboard,
  TURN_OFF_APP_BAR: turnOffAppBar,
  SET_STEPPER: setStepper,
  SET_LOADING: setLoading,
  SET_USER_MASK: setUserMask
}

function setUserMask ({ commit }, userMask) {
  commit('USER_MASK_SET', userMask)
}

function setLoading ({ commit }, loading) {
  commit('LOADING_SET', loading)
}

function setStepper ({ commit }, stepper) {
  commit('STEPPER_SET', stepper)
}

function turnOffAppBar ({ commit }, isOff) {
  commit('APP_BAR_OFF', isOff)
}

function turnOffBillboard ({ commit }, isOff) {
  commit('BILLBOARD_OFF', isOff)
}

function setBillboard ({ commit }, billboard) {
  commit('BILLBOARD_SET', billboard)
}

function setWpMenu ({ commit }, isOpen) {
  commit('WP_MENU_SET', isOpen)
}

function setBottomSheet ({ commit }, active) {
  commit('BOTTOM_SHEET_TOGGLED', active)
}

function setIsAppNavDrawerOpen ({ commit }, isOpen) {
  commit('IS_APP_NAV_DRAWER_OPEN', isOpen)
}

function setIsAppNavDrawerMini ({ commit }, isMini) {
  commit('IS_APP_NAV_DRAWER_MINI', isMini)
}

function setIsBillboardNavDrawerMini ({ commit }, isMini) {
  commit('IS_BILLBOARD_NAV_DRAWER_MINI', isMini)
}

function setActivePlugin ({ commit }, plugin) {
  commit('PLUGIN_ACTIVE', plugin)
}

function setBillboardChips ({ commit }, payload) {
  // Vue.compassApi()
  //   .compass()
  //   .getCurrentUser()
  //   .then(commitResponse)
  //   .catch(handleErrors);
  commit('PAINT_BILLBOARD_CHIPS', payload)

  // function commitResponse( response ) {
  //   commit("CURRENT_USER_LOADED", response.data);
  // }

  // function handleErrors(response) {
  //   commit("SET_PLUGIN_ERRORS", response);
  // }
}

function getCurrentUser ({ commit }) {
  Api()
    .getCurrentUser()
    .then(commitResponse)
    .catch(handleErrors)

  function commitResponse (response) {
    commit('CURRENT_USER_LOADED', response.data)
  }

  function handleErrors (response) {
    commit('SET_PLUGIN_ERRORS', response)
  }
}

function loadPlugins ({ commit }) {
  // eslint-disable-next-line
  return Api() 
    .getPlugins()
    .then(populatePlugins)
    .catch(handleErrors)
  function populatePlugins (response) {
    commit('PLUGINS_LOADED', response.data)
  }

  function handleErrors (response) {
    commit('SET_PLUGIN_ERRORS', response)
  }
}

function activatePlugin ({ commit }, plugin) {
  return Api()
    .activatePlugin({
      plugin: plugin.TextDomain
    })
    .then(populateLink)
    .catch(handleErrors)

  function populateLink (response) {
    addLink('xophz-compass')
    // Messenger().post({
    //     message: "<img src='"+plugin.icon+"' class='pull-right'/> Activated "+plugin.Name,
    //     hideAfter: 3,
    //     type: 'success',
    //     showCloseButton: false
    // });
    commit('PLUGIN_ACTIVATED', plugin, response.data)
    function addLink (slug) {
      // let menu = $('#toplevel_page_' + slug);
      // let url = "admin.php?page="+slug+"#/";
      // let ul = $('<ul></ul>');
      // let li = $('<li></li>');
      // let link = $('<a></a>');
      // let goto = plugin.TextDomain.replace(slug+'-','')

      // MAKE THE SUBMENU!
      // if(!menu.has('ul').length){
      //   ul.addClass('wp-submenu wp-submenu-wrap');
      //   menu.append(ul).addClass('wp-has-submenu wp-has-current-submenu wp-menu-open');
      // }
      //
      // ul = menu.find('ul');
      //
      // link
      //   .attr('href',url+goto)
      //   .html(plugin.Name);
      //
      // ul
      //   .append(
      //     li.append(link)
      //   );
    }
  }

  function handleErrors (response) {
    commit('SET_PLUGIN_ERRORS', response)
  }
}

function deactivatePlugin ({ commit }, plugin) {
  return Api()
    .deactivatePlugin({
      plugin: plugin.TextDomain
    })
    .then(removeLink)
    .catch(handleErrors)

  function removeLink (response) {
    deleteLink('xophz-compass')
    commit('PLUGIN_DEACTIVATED', plugin, response.data)
    function deleteLink (slug) {
      // let menu = $('#toplevel_page_' + slug+' .wp-submenu');
      // let url = "admin.php?page="+slug+"#/";
      // let goto = plugin.TextDomain.replace(slug+'-','')
      // menu.find('a[href="'+url+goto+'"]').remove();
    }
  }

  function handleErrors (response) {
    commit('SET_PLUGIN_ERRORS', response)
  }
}
