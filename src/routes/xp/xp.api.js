import api from '@/plugins/api'

export default () => ({

  loadLog (args) {
    return api.put('xp_load_log', args)
  },
  levelUp (args) {
    return api.put('level_up', args)
  },
  completeAchievement (args) {
    return api.put('xp_complete_achievement', args)
  },
  getUser (args) {
    return api.get('xp_get_user', args)
  },
  listAchievements (args) {
    return api.get('list_achievements', args)
  },
  listAccessories (args) {
    return api.get('list_accessories', args)
  },
  tallyAbilityPoints (filters) {
    return api.get('tally_ability_points', filters)
  },
  listAbilities (filters) {
    return api.get('list_abilities', filters)
  },
  listBillboardChips (args) {
    return api.get('list_billboard_chips', args)
  },
  listLeaderboard (filters) {
    return api.get('list_leaderboard', filters)
  },
  listCategories (filters) {
    return api.get('list_categories', filters)
  },
  listAchievement (filters) {
    return api.get('list_achievement', filters)
  },
  listPlayers (filters) {
    return api.get('xp_list_players', filters)
  },
  startPlayer (birthdate) {
    return api.put('xp_start_player', birthdate)
  },
  addNewCategory (category) {
    return api.put('xp_add_new_category', category)
  }
})
