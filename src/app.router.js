import Vue from 'vue'
import Router from 'vue-router'

// ADD ALL THE POSSIBLE routes HERE...
import compass from './routes/compass/compass.routes'
import arrow from './routes/silver-arrow/silver-arrow.routes'
import bazaar from './routes/bazaar/bazaar.routes'
import bombBag from './routes/bomb-bag/bomb-bag.routes'
import boomerang from './routes/gale-boomerang/gale-boomerang.routes'
import boots from './routes/pegasus-boots/pegasus-boots.routes'
import bugnet from './routes/bugnet/bugnet.routes'
import castle from './routes/moving-castle/moving-castle.routes'
import cloak from './routes/magic-cloak/magic-cloak.routes'
import enchiridion from './routes/enchiridion/enchiridion.routes'
import eventHorizon from './routes/event-horizon/event-horizon.routes'
import hammer from './routes/thors-hammer/thors-hammer.routes'
import keys from './routes/golden-keys/golden-keys.routes'
import lamp from './routes/lit-lamp/lit-lamp.routes'
import magnet from './routes/lead-magnet/lead-magnet.routes'
import map from './routes/treasure-map/treasure-map.routes'
import mirror from './routes/enchanted-mirror/enchanted-mirror.routes'
import mitt from './routes/titans-mitt/titans-mitt.routes'
import nerd from './routes/midnight-nerd/midnight-nerd.routes'
import phantomZone from './routes/phantom-zone/phantom-zone.routes'
import pixieDust from './routes/pixie-dust/pixie-dust.routes'
import posts from './routes/post-digger/post-digger.routes'
import shield from './routes/mirror-shield/mirror-shield.routes'
import trove from './routes/treasure-trove/treasure-trove.routes'
import wand from './routes/magic-wand/magic-wand.routes'
import xp from './routes/xp/xp.routes'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: '/wp-admin/admin.php?page=xophz-compass#/',
  routes: [
    compass,
    arrow,
    bazaar,
    bombBag,
    boomerang,
    boots,
    bugnet,
    castle,
    cloak,
    enchiridion,
    eventHorizon,
    hammer,
    keys,
    lamp,
    magnet,
    map,
    mirror,
    mitt,
    nerd,
    phantomZone,
    pixieDust,
    posts,
    shield,
    trove,
    wand,
    xp
  ],
  // scrollBehavior (to, from, savedPosition) {
  scrollBehavior (to) {
    return to.hash ? {
      selector: to.hash,
      offset: { x: 0, y: 98 }
    } : {}
  }
})
