export default {
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
  users: [
    {
      name: 'Nightlynn',
      age: 12,
      xp: 1800,
      // level:17,
      avatar: ''
    },
    {
      name: 'Khronus',
      age: 8,
      xp: 1800,
      // level: 11,
      avatar: ''
    },
    {
      name: 'Gaia',
      age: 5,
      xp: 1800,
      ap: 24,
      // level: 7,
      avatar: ''
    },
    {
      name: 'Ronan',
      age: 4,
      xp: 1800,
      // level: 6,
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
      // give : '/wp-content/plugins/xophz-compass-xp/assets/audio/return_item.mp3',
      take: '/wp-content/plugins/xophz-compass-xp/assets/audio/FX01.aif',
      // take : '/wp-content/plugins/xophz-compass-xp/assets/audio/take_item.mp3',
      all: 'http://starmen.net/mother2/soundfx/buy2.wav'
    },
    question: '/wp-content/plugins/xophz-compass-xp/assets/audio/question.wav',
    // points : 'https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-23735/zapsplat_multimedia_game_points_tally_beep_bright_long_24932.mp3',
    points: '/wp-content/plugins/xophz-compass-xp/assets/audio/points.mp3',
    complete: '/wp-content/plugins/xophz-compass-xp/assets/audio/complete.mp3',
    // levelUp : '/wp-content/plugins/xophz-compass-xp/assets/audio/levelUp.wav',
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
  }
}
