import { defineStore } from 'pinia'
import Api from '../xp.api'

export const useXpStore = defineStore('xp', {
  state: () => ({
    abilities: [
      {
        title: 'My Ability',
        ap_to_unlock: 4,
        repeats_every: 'week'
      },
      {
        title: 'My Ability',
        ap_to_unlock: 4,
        repeats_every: 'week'
      }
    ],
    accessories: [
      {
        title: 'item 1',
        gp_cost: 400
      },
      {
        title: 'item 2',
        gp_cost: 400
      }
    ],
    achievement: {
      title: 'Empty Trash',
      repeat_on: [],
      xp: 150,
      ap: 1,
      gp: 15
    },
    achievements: [
      {
        title: 'Empty Trash',
        repeat_on: [],
        xp: 150,
        ap: 1,
        gp: 15
      },
      {
        title: 'Brushteeth',
        repeat_on: [],
        xp: 100,
        ap: 1,
        gp: 10
      },
      {
        title: 'Make Bed',
        repeat_on: [],
        xp: 50,
        ap: 1,
        gp: 25
      }
    ],
    achievementsUnfiltered: [], 
    billboard: {
      chips: []
    },
    categories: [
      {
        name: 'Self Improvement',
        description: 'Cleanliness is next to godliness',
        count: 100,
        slug: 'house-keeping'
      },
      {
        name: 'Teamwork',
        description: 'Cleanliness is next to godliness',
        count: 100,
        slug: 'house-keeping'
      },
      {
        name: 'Hygiene',
        description: 'Cleanliness is next to godliness',
        count: 100,
        slug: 'house-keeping'
      },
      {
        name: 'House Keeping',
        description: 'Cleanliness is next to godliness',
        count: 9,
        slug: 'house-keeping'
      }
    ],
    date: new Date(),
    dialog: false,
    log: {},
    players: [
      {
        name: 'Nightlynn',
        age: 12,
        xp: 1800,
        avatar: ''
      },
      {
        name: 'Khronus',
        age: 8,
        xp: 1800,
        avatar: ''
      },
      {
        name: 'Gaia',
        age: 5,
        xp: 1800,
        ap: 24,
        avatar: ''
      },
      {
        name: 'Ronan',
        age: 4,
        xp: 1800,
        ap: 24,
        avatar: ''
      }
    ],
    user: {
      xp: 0,
      ap: 0,
      gp: 0
    },
    soundFx: {
      click: '/wp-content/plugins/xophz-compass-xp/assets/audio/click.mp3',
      confirm: '/wp-content/plugins/xophz-compass-xp/assets/audio/confirm.wav',
      cancel: '/wp-content/plugins/xophz-compass-xp/assets/audio/cancel2.wav',
      cursorX: 'http://starmen.net/mother2/soundfx/curshoriz.wav',
      cursorY: 'http://starmen.net/mother2/soundfx/cursverti.wav',
      cursor: 'http://starmen.net/mother2/soundfx/curshoriz.wav',
      error: 'http://starmen.net/mother2/soundfx/error.wav',
      text: 'http://starmen.net/mother2/soundfx/text.wav',
      item: {
        give: '/wp-content/plugins/xophz-compass-xp/assets/audio/Alarm.aif',
        take: '/wp-content/plugins/xophz-compass-xp/assets/audio/FX01.aif',
        all: 'http://starmen.net/mother2/soundfx/buy2.wav'
      },
      question: '/wp-content/plugins/xophz-compass-xp/assets/audio/question.wav',
      points: '/wp-content/plugins/xophz-compass-xp/assets/audio/points.mp3',
      complete: '/wp-content/plugins/xophz-compass-xp/assets/audio/complete.mp3',
      levelUp: 'http://starmen.net/mother2/soundfx/statsup.wav',
      levelDown: 'http://starmen.net/mother2/soundfx/statsdown.wav',
      burp: '/wp-content/plugins/xophz-compass-xp/assets/audio/FX01.aif'
    },
    isRoutesNavActive: false,
    tally: {
      ap: {
        1: 20,
        7: 50,
        30: 300,
        60: 0,
        120: 0,
        180: 0,
        365: 0,
        366: 0
      }
    },
    // Adding uninitialized state props from mutations
    error: null,
    completed: [],
    abilitiesUnfiltered: []
  }),
  actions: {
    startPlayer(birthdate) {
      Api().startPlayer({ birthdate })
        .then(response => {
           // mutation: PLAYER_STARTED (empty in original)
           this.getUser()
        })
        .catch(this.handleErrors)
    },
    loadPlayers() {
      Api().listPlayers()
        .then(response => {
          this.players = response.data.players
        })
        .catch(this.handleErrors)
    },
    tallyAbilityPoints() {
      Api().tallyAbilityPoints()
        .then(response => {
          this.tally.ap = response.data.ability_points
        })
        .catch(this.handleErrors)
    },
    searchAchievements(search) {
      // Logic from mutation FILTERED_ACHIEVEMENTS
      if (!this.achievementsUnfiltered.length && this.achievements.length) {
         this.achievementsUnfiltered = this.achievements
      }
      
      const searchFilter = (a) => {
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
      
      this.achievements = this.achievementsUnfiltered.filter(searchFilter)
    },
    loadLog() {
      Api().loadLog()
        .then(response => {
          this.log = response.data.log
        })
        .catch(this.handleErrors)
    },
    levelUp(level) {
      Api().levelUp({ level })
        .then(() => {
          this.user.level = level
        })
        .catch(this.handleErrors)
    },
    setUserPoints(user) {
      this.user = user
    },
    rewardPointsToUser(achievement) {
      Api().completeAchievement(achievement)
        .then(response => {
           // mutation: ACHIEVEMENT_COMPLETED (empty in original)
           this.getUser()
           this.listAchievements()
        })
        .catch(this.handleErrors)
    },
    getUser(payload) {
      Api().getUser(payload)
        .then(response => {
          this.user = response.data
          this.paintBillboardChips()
        })
        .catch(this.handleErrors)
    },
    completeAchievement(payload) {
      Api().completeAchievement(payload)
        .then(response => {
          // mutation: ACHIEVEMENT_LOGGED -> implies log update? not clear in original
          // but calls REWARD_POINTS which was empty
        })
        .catch(this.handleErrors)
    },
    setAchievement(achievement) {
      this.achievement = achievement
    },
    setDialog(active) {
      this.dialog = active
    },
    setDate(date) {
      this.date = date
    },
    listAccessories(payload) {
      Api().listAccessories(payload)
        .then(response => {
          this.accessories = response.data.accessories
        })
        .catch(this.handleErrors)
    },
    listAbilities(payload) {
      Api().listAbilities(payload)
        .then(response => {
          this.abilities = response.data.abilities
          this.abilitiesUnfiltered = this.achievements // logic from original? seems odd assignment
        })
        .catch(this.handleErrors)
    },
    listAchievements(payload) {
      Api().listAchievements(payload)
        .then(response => {
          this.achievements = response.data.achievements
          this.completed = response.data.completed
          this.achievementsUnfiltered = this.achievements
        })
        .catch(this.handleErrors)
    },
    paintBillboardChips(payload) {
      Api().listBillboardChips(payload)
        .then(response => {
          this.billboard.chips = response.data.chips
        })
        .catch(this.handleErrors)
    },
    addNewCategory(payload) {
      Api().addNewCategory(payload)
        .then(response => {
          this.categories = response.data.categories
          this.listCategories()
        })
        .catch(this.handleErrors)
    },
    listCategories() {
      Api().listCategories()
        .then(response => {
          this.categories = response.data.categories
        })
        .catch(this.handleErrors)
    },
    setNavToggled(active) {
      this.isRoutesNavActive = active
    },
    handleErrors(response) {
       this.error = response && response.error ? response.error : response
    }
  }
})
