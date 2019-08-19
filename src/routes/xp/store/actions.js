import Api from '../xp.api'

export default {
  ADD_NEW_CATEGORY: addNewCategory,
  COMPLETE_ACHIEVEMENT: completeAchievement,
  GET_USER: getUser,
  SET_USER_POINTS: setUserPoints,
  LIST_ABILITIES: listAbilities,
  LIST_ACCESSORIES: listAccessories,
  LIST_ACHIEVEMENTS: listAchievements,
  LIST_CATEGORIES: listCategories,
  PAINT_BILLBOARD_CHIPS: paintBillboardChips,
  REWARD_POINTS_TO_USER: rewardPointsToUser,
  SET_ACHIEVEMENT: setAchievement,
  SET_DATE: setDate,
  LEVEL_UP: levelUp,
  SET_DIALOG: setDialog,
  LOAD_LOG: loadLog,
  SEARCH_ACHIEVEMENTS: searchAchievements,
  TALLY_ABILITY_POINTS: tallyAbilityPoints,
  LOAD_PLAYERS: loadPlayers,
  START_PLAYER: startPlayer
}

function startPlayer ({ dispatch, commit }, birthdate) {
  return Api()
    .startPlayer({ birthdate })
    .then(commitResponse)
    .catch(handleErrors)

  function commitResponse (response) {
    commit('PLAYER_STARTED', response.data)
    dispatch('xp/GET_USER')
  }

  function handleErrors (response) {
    commit('SET_ERRORS', response)
  }
}

function loadPlayers ({ commit }) {
  Api()
    .listPlayers()
    .then(commitResponse)
    .catch(handleErrors)

  function commitResponse (response) {
    commit('PLAYERS_LOADED', response.data)
  }

  function handleErrors (response) {
    commit('SET_ERRORS', response)
  }
}

function tallyAbilityPoints ({ commit }) {
  Api().tallyAbilityPoints()
    .then(commitResponse).catch(handleErrors)

  function commitResponse (response) {
    commit('ABILITY_POINTS_TALLIED', response.data)
  }

  function handleErrors (response) {
    commit('SET_ERRORS', response)
  }
}

function searchAchievements ({ commit }, search) {
  commit('FILTERED_ACHIEVEMENTS', search)
}

function loadLog ({ commit }) {
  Api().loadLog()
    .then(commitResponse).catch(handleErrors)

  function commitResponse (response) {
    commit('LOG_LOADED', response.data)
  }

  function handleErrors (response) {
    commit('SET_ERRORS', response)
  }
}

function levelUp ({ commit }, level) {
  Api().levelUp({
    level
  })
    .then(commitResponse).catch(handleErrors)

  function commitResponse () {
    commit('LEVEL_SET', level)
    // dispatch("GET_USER");
  }

  function handleErrors (response) {
    commit('SET_ERRORS', response)
  }
}

function setUserPoints ({ commit }, user) {
  commit('USER_LOADED', user)
}

function rewardPointsToUser ({ dispatch, commit }, achievement) {
  // eslint-disable-next-line
  Api().completeAchievement(achievement)
    .then(commitResponse).catch(handleErrors)

  function commitResponse (response) {
    commit('ACHIEVEMENT_COMPLETED', response.data)
    dispatch('GET_USER')
    dispatch('LIST_ACHIEVEMENTS')
  }

  function handleErrors (response) {
    commit('SET_ERRORS', response)
  }
}

function getUser ({ dispatch, commit }, payload) {
  // eslint-disable-next-line
  Api().getUser(payload)
    .then(commitResponse).catch(handleErrors)

  function commitResponse (response) {
    commit('USER_LOADED', response.data)
    dispatch('PAINT_BILLBOARD_CHIPS')
  }

  function handleErrors (response) {
    commit('SET_ERRORS', response)
  }
}

function completeAchievement ({ dispatch, commit }, payload) {
  // eslint-disable-next-line
  Api().completeAchievement(payload)
    .then(commitResponse).catch(handleErrors)

  function commitResponse (response) {
    commit('ACHIEVEMENT_LOGGED', response.data)
    dispatch('REWARD_POINTS')
  }

  function handleErrors (response) {
    commit('SET_ERRORS', response)
  }
}

function setAchievement ({ commit }, achievement) {
  commit('ACHIEVEMENT_LOADED', achievement)
}

function setDialog ({ commit }, payload) {
  commit('DISPLAY_DIALOG', payload)
}

function setDate ({ commit }, payload) {
  commit('DATE_LOADED', payload)
}

function listAccessories ({ commit }, payload) {
  Api().listAccessories(payload)
    .then(commitResponse).catch(handleErrors)

  function commitResponse (response) {
    commit('ACCESSORIES_LOADED', response.data)
  }

  function handleErrors (response) {
    commit('SET_ERRORS', response)
  }
}

function listAbilities ({ commit }, payload) {
  Api().listAbilities(payload)
    .then(commitResponse).catch(handleErrors)

  function commitResponse (response) {
    commit('ABILITIES_LOADED', response.data)
  }

  function handleErrors (response) {
    commit('SET_ERRORS', response)
  }
}

function listAchievements ({ commit }, payload) {
  Api().listAchievements(payload)
    .then(commitResponse).catch(handleErrors)

  function commitResponse (response) {
    commit('ACHIEVEMENTS_LOADED', response.data)
  }

  function handleErrors (response) {
    commit('SET_ERRORS', response)
  }
}

function paintBillboardChips ({ commit }, payload) {
  Api().listBillboardChips(payload)
    .then(commitResponse).catch(handleErrors)

  function commitResponse (response) {
    commit('CHIPS_LOADED', response.data)
  }

  function handleErrors (response) {
    commit('SET_ERRORS', response)
  }
}

function addNewCategory ({ dispatch, commit }, payload) {
  Api().addNewCategory(payload)
    .then(commitResponse).catch(handleErrors)

  function commitResponse (response) {
    commit('NEW_CATEGORY_ADDED', response.data)
    dispatch('LIST_CATEGORIES')
  }

  function handleErrors (response) {
    commit('SET_ERRORS', response)
  }
}

function listCategories ({ commit }) {
  Api().listCategories()
    .then(commitResponse).catch(handleErrors)

  function commitResponse (response) {
    commit('LIST_CATEGORIES', response.data)
  }

  function handleErrors (response) {
    commit('SET_ERRORS', response)
  }
}
