export default {
  ABILITIES_LOADED: abilitiesLoaded,
  ACCESSORIES_LOADED: accessoriesLoaded,
  ACHIEVEMENT_LOADED: achievementLoaded,
  ACHIEVEMENTS_LOADED: achievementsLoaded,
  CHIPS_LOADED: chipsLoaded,
  DATE_LOADED: dateLoaded,
  DISPLAY_DIALOG: displayDialog,
  LIST_CATEGORIES: listCategories,
  NEW_CATEGORY_ADDED: newCategoryAdded,
  SET_ERRORS: setErrors,
  REWARD_POINTS: rewardPoints,
  USER_LOADED: userLoaded,
  LEVEL_SET: levelSet,
  ACHIEVEMENT_COMPLETED: achievementCompleted,
  LOG_LOADED: logLoaded,
  FILTERED_ACHIEVEMENTS: filteredAchievements,
  NAV_TOGGLED: navToggled,
  ABILITY_POINTS_TALLIED: abilityPointsTallied,
  PLAYERS_LOADED: playersLoaded,
  PLAYER_STARTED: playerStarted
}

function playerStarted (state, payload) {

}

function playersLoaded (state, payload) {
  state.players = payload.players
}

function abilityPointsTallied (state, payload) {
  state.tally.ap = payload.ability_points
}

function navToggled (state, active) {
  state.isRoutesNavActive = active
}

function filteredAchievements (state, search) {
  state.achievements = state.achievementsUnfiltered.filter(searchFilter)

  function searchFilter (a) {
    const title = a.title.toLowerCase()
    const txt = (search.text) ? search.text.toLowerCase() : ''

    const n = num => num * 1
    const gt = (g, t) => n(g) >= n(t)
    const min = k => gt(a[k], search[k])

    return (
      (txt === '' || title.indexOf(txt) !== -1) &&
      min('ap') &&
      min('gp') &&
      min('xp')
    )
  }
}

function logLoaded (state, payload) {
  state.log = payload.log
}

function levelSet (state, level) {
  state.user.level = level
}

function achievementCompleted (state, user) {
}

function userLoaded (state, user) {
  state.user = user
}

function rewardPoints (state, points) {
}

function achievementLoaded (state, achievement) {
  state.achievement = achievement
}

function displayDialog (state, active) {
  state.dialog = active
}

function dateLoaded (state, date) {
  state.date = date
}

function accessoriesLoaded (state, payload) {
  state.accessories = payload.accessories
}

function abilitiesLoaded (state, payload) {
  state.abilities = payload.abilities
  state.abilitiesUnfiltered = state.achievements
}

function achievementsLoaded (state, payload) {
  state.achievements = payload.achievements
  state.completed = payload.completed
  state.achievementsUnfiltered = state.achievements
}

function chipsLoaded (state, payload) {
  state.billboard.chips = payload.chips
}
function newCategoryAdded (state, payload) {
  state.categories = payload.categories
}

function listCategories (state, payload) {
  state.categories = payload.categories
}

function setErrors (state, payload) {
  state.error = payload.error
}
