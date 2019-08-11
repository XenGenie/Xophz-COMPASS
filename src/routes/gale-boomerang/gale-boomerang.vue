<template>
  <v-app
    :id="$options.name"
    :class="$options.name"
    dark
  >
    <nav-drawer v-model="isAppNavDrawerOpen" />
    <v-app-bar
      app
      clipped-left
      color="#FCE49A"
      light
    >
      <v-app-bar-nav-icon @click="toggleAppNavDrawer" />
      &nbsp;
      <v-img :src="plugin.icon" />
      &nbsp;
      <v-toolbar-title>
        {{ $route.name }}
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          icon
          @click="true"
        >
          <v-icon />
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <div class="row">
        <div class="col-lg-8">
          <section class="widget">
            <header>
              <h4>
                Visits
                <small>
                  Based on a three months data
                </small>
              </h4>
              <div class="widget-controls">
                <a
                  title="Options"
                  href="#"
                ><i class="glyphicon glyphicon-cog" /></a>
                <a
                  data-widgster="expand"
                  title="Expand"
                  href="#"
                ><i class="glyphicon glyphicon-chevron-up" /></a>
                <a
                  data-widgster="collapse"
                  title="Collapse"
                  href="#"
                ><i class="glyphicon glyphicon-chevron-down" /></a>
                <a
                  data-widgster="close"
                  title="Close"
                  href="#"
                ><i class="glyphicon glyphicon-remove" /></a>
              </div>
            </header>
            <div class="body no-margin">
              <div
                id="visits-chart"
                class="chart visits-chart"
              >
                <svg />
              </div>
              <div class="visits-info well well-sm">
                <div class="row">
                  <div class="col-sm-3 col-xs-6">
                    <div class="key">
                      <i class="fa fa-users" /> Total Traffic
                    </div>
                    <div class="value">
                      24 541 <i class="fa fa-caret-up color-green" />
                    </div>
                  </div>
                  <div class="col-sm-3 col-xs-6">
                    <div class="key">
                      <i class="fa fa-bolt" /> Unique Visits
                    </div>
                    <div class="value">
                      14 778 <i class="fa fa-caret-down color-red" />
                    </div>
                  </div>
                  <div class="col-sm-3 col-xs-6">
                    <div class="key">
                      <i class="fa fa-plus-square" /> Revenue
                    </div>
                    <div class="value">
                      $3 583.18 <i class="fa fa-caret-up color-green" />
                    </div>
                  </div>
                  <div class="col-sm-3 col-xs-6">
                    <div class="key">
                      <i class="fa fa-user" /> Total Sales
                    </div>
                    <div class="value">
                      $59 871.12 <i class="fa fa-caret-down color-red" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="widget">
            <header>
              <h4>
                Traffic Sources
                <small>
                  One month tracking
                </small>
              </h4>
              <div class="widget-controls">
                <a
                  data-widgster="expand"
                  title="Expand"
                  href="#"
                ><i class="glyphicon glyphicon-plus" /></a>
                <a
                  data-widgster="collapse"
                  title="Collapse"
                  href="#"
                ><i class="glyphicon glyphicon-minus" /></a>
                <a
                  data-widgster="close"
                  title="Close"
                  href="#"
                ><i class="glyphicon glyphicon-remove" /></a>
              </div>
            </header>
            <div class="widget-table-overflow">
              <table class="table table-striped table-lg mt-sm mb-0 sources-table">
                <thead>
                  <tr>
                    <th class="source-col-header">
                      Source
                    </th>
                    <th>Amount</th>
                    <th>Change</th>
                    <th class="hidden-xs">
                      Percent.,%
                    </th>
                    <th>Target</th>
                    <th class="chart-col-header hidden-xs">
                      Trend
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span class="label label-important">Direct</span></td>
                    <td>713</td>
                    <td><strong class="color-green">+53</strong></td>
                    <td class="hidden-xs">
                      +12
                    </td>
                    <td>900</td>
                    <td class="chart-cell hidden-xs">
                      <div id="direct-trend" />
                    </td>
                  </tr>
                  <tr>
                    <td><span class="label label-warning">Refer</span></td>
                    <td>562</td>
                    <td><strong>+84</strong></td>
                    <td class="hidden-xs">
                      +64
                    </td>
                    <td>500</td>
                    <td class="chart-cell hidden-xs">
                      <div id="refer-trend" />
                    </td>
                  </tr>
                  <tr>
                    <td><span class="label label-success">Social</span></td>
                    <td>148</td>
                    <td><strong class="color-red">-12</strong></td>
                    <td class="hidden-xs">
                      +3
                    </td>
                    <td>180</td>
                    <td class="chart-cell hidden-xs">
                      <div id="social-trend" />
                    </td>
                  </tr>
                  <tr>
                    <td><span class="label label-info">Search</span></td>
                    <td>653</td>
                    <td><strong class="color-green">+23</strong></td>
                    <td class="hidden-xs">
                      +43
                    </td>
                    <td>876</td>
                    <td class="chart-cell hidden-xs">
                      <div id="search-trend" />
                    </td>
                  </tr>
                  <tr>
                    <td><span class="label label-inverse">Internal</span></td>
                    <td>976</td>
                    <td><strong>+101</strong></td>
                    <td class="hidden-xs">
                      -7
                    </td>
                    <td>844</td>
                    <td class="chart-cell hidden-xs">
                      <div id="internal-trend" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
        <div class="col-lg-4">
          <section class="widget large">
            <header>
              <h4>
                Feed
                <span class="label label-success">412</span>
              </h4>
              <div class="actions">
                <button class="btn btn-transparent btn-xs">
                  Show All <i class="fa fa-arrow-down" />
                </button>
              </div>
            </header>
            <div class="body">
              <div
                id="feed"
                class="feed"
              >
                <div class="wrapper">
                  <div class="vertical-line" />
                  <section class="feed-item">
                    <div class="icon pull-left">
                      <i class="fa fa-comment" />
                    </div>
                    <div class="feed-item-body">
                      <div class="text">
                        <a href="#">John Doe</a> commented on
                        <a href="#">What Makes Good Code Good</a>.
                      </div>
                      <div class="time pull-left">
                        3 h
                      </div>
                    </div>
                  </section>
                  <section class="feed-item">
                    <div class="icon pull-left">
                      <i class="fa fa-check color-green" />
                    </div>
                    <div class="feed-item-body">
                      <div class="text">
                        <a href="#">Merge request #42</a> has been approved by
                        <a href="#">Jessica Lori</a>.
                      </div>
                      <div class="time pull-left">
                        10 h
                      </div>
                    </div>
                  </section>
                  <section class="feed-item">
                    <div class="icon pull-left">
                      <img
                        src="img/14.png"
                        class="img-circle"
                        alt=""
                      >
                    </div>
                    <div class="feed-item-body">
                      <div class="text">
                        New user <a href="#">Greg Wilson</a> registered.
                      </div>
                      <div class="time pull-left">
                        Today
                      </div>
                    </div>
                  </section>
                  <section class="feed-item">
                    <div class="icon pull-left">
                      <i class="fa fa-bolt color-orange" />
                    </div>
                    <div class="feed-item-body">
                      <div class="text">
                        Server fail level raises above normal. <a href="#">See logs</a> for details.
                      </div>
                      <div class="time pull-left">
                        Yesterday
                      </div>
                    </div>
                  </section>
                  <section class="feed-item">
                    <div class="icon pull-left">
                      <i class="fa fa-database" />
                    </div>
                    <div class="feed-item-body">
                      <div class="text">
                        <a href="#">Database usage report</a> is ready.
                      </div>
                      <div class="time pull-left">
                        Yesterday
                      </div>
                    </div>
                  </section>
                  <section class="feed-item">
                    <div class="icon pull-left">
                      <i class="fa fa-shopping-cart" />
                    </div>
                    <div class="feed-item-body">
                      <div class="text">
                        <a href="#">Order #233985</a> needs additional processing.
                      </div>
                      <div class="time pull-left">
                        Wednesday
                      </div>
                    </div>
                  </section>
                  <section class="feed-item">
                    <div class="icon pull-left">
                      <i class="fa fa-arrow-down" />
                    </div>
                    <div class="feed-item-body">
                      <div class="text">
                        <a href="#">Load more...</a>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
          <section class="widget widget-tabs">
            <header>
              <ul class="nav nav-tabs">
                <li class="active">
                  <a
                    href="#stats"
                    data-toggle="tab"
                  >Users</a>
                </li>
                <li>
                  <a
                    href="#report"
                    data-toggle="tab"
                  >Favorites</a>
                </li>
                <li>
                  <a
                    href="#dropdown1"
                    data-toggle="tab"
                  >Commenters</a>
                </li>
              </ul>
            </header>
            <div class="body tab-content">
              <div
                id="stats"
                class="tab-pane active clearfix"
              >
                <h5 class="tab-header">
                  <span class="label label-primary">
                    <i class="fa fa-facebook" />
                  </span>
                  Last logged-in users
                </h5>
                <ul class="news-list">
                  <li>
                    <img
                      src="img/1.png"
                      alt=""
                      class="pull-left img-circle"
                    >
                    <div class="news-item-info">
                      <div class="name">
                        <a href="#">Finees Lund</a>
                      </div>
                      <div class="position">
                        Product Designer
                      </div>
                      <div class="time">
                        Last logged-in: Mar 20, 18:46
                      </div>
                    </div>
                  </li>
                  <li>
                    <img
                      src="img/3.png"
                      alt=""
                      class="pull-left img-circle"
                    >
                    <div class="news-item-info">
                      <div class="name">
                        <a href="#">Erebus Novak</a>
                      </div>
                      <div class="position">
                        Software Engineer
                      </div>
                      <div class="time">
                        Last logged-in: Mar 23, 9:02
                      </div>
                    </div>
                  </li>
                  <li>
                    <img
                      src="img/2.png"
                      alt=""
                      class="pull-left img-circle"
                    >
                    <div class="news-item-info">
                      <div class="name">
                        <a href="#">Leopoldo Reier</a>
                      </div>
                      <div class="position">
                        Chief Officer
                      </div>
                      <div class="time">
                        Last logged-in: Jun 6, 15:34
                      </div>
                    </div>
                  </li>
                  <li>
                    <img
                      src="img/13.png"
                      alt=""
                      class="pull-left img-circle"
                    >
                    <div class="news-item-info">
                      <div class="name">
                        <a href="#">Frans Garey</a>
                      </div>
                      <div class="position">
                        Financial Assistant
                      </div>
                      <div class="time">
                        Last logged-in: Jun 8, 17:20
                      </div>
                    </div>
                  </li>
                  <li>
                    <img
                      src="img/14.png"
                      alt=""
                      class="pull-left img-circle"
                    >
                    <div class="news-item-info">
                      <div class="name">
                        <a href="#">Jessica Johnsson</a>
                      </div>
                      <div class="position">
                        Sales Manager
                      </div>
                      <div class="time">
                        Last logged-in: Jun 8, 9:13
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                id="report"
                class="tab-pane"
              >
                <h5 class="tab-header">
                  <i class="fa fa-star" /> Popular contacts
                </h5>
                <ul class="news-list news-list-no-hover">
                  <li>
                    <img
                      src="img/14.png"
                      alt=""
                      class="pull-left img-circle"
                    >
                    <div class="news-item-info">
                      <div class="name">
                        <a href="#">Jessica Johnsson</a>
                      </div>
                      <div class="options">
                        <button class="btn btn-xs btn-success">
                          <i class="fa fa-phone" />
                          Call
                        </button>
                        <button class="btn btn-xs btn-warning">
                          <i class="fa fa-envelope-o" />
                          Message
                        </button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img
                      src="img/13.png"
                      alt=""
                      class="pull-left img-circle"
                    >
                    <div class="news-item-info">
                      <div class="name">
                        <a href="#">Frans Garey</a>
                      </div>
                      <div class="options">
                        <button class="btn btn-xs btn-success">
                          <i class="fa fa-phone" />
                          Call
                        </button>
                        <button class="btn btn-xs btn-warning">
                          <i class="fa fa-envelope-o" />
                          Message
                        </button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img
                      src="img/3.png"
                      alt=""
                      class="pull-left img-circle"
                    >
                    <div class="news-item-info">
                      <div class="name">
                        <a href="#">Erebus Novak</a>
                      </div>
                      <div class="options">
                        <button class="btn btn-xs btn-success">
                          <i class="fa fa-phone" />
                          Call
                        </button>
                        <button class="btn btn-xs btn-warning">
                          <i class="fa fa-envelope-o" />
                          Message
                        </button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img
                      src="img/2.png"
                      alt=""
                      class="pull-left img-circle"
                    >
                    <div class="news-item-info">
                      <div class="name">
                        <a href="#">Leopoldo Reier</a>
                      </div>
                      <div class="options">
                        <button class="btn btn-xs btn-success">
                          <i class="fa fa-phone" />
                          Call
                        </button>
                        <button class="btn btn-xs btn-warning">
                          <i class="fa fa-envelope-o" />
                          Message
                        </button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img
                      src="img/1.png"
                      alt=""
                      class="pull-left img-circle"
                    >
                    <div class="news-item-info">
                      <div class="name">
                        <a href="#">Finees Lund</a>
                      </div>
                      <div class="options">
                        <button class="btn btn-xs btn-success">
                          <i class="fa fa-phone" />
                          Call
                        </button>
                        <button class="btn btn-xs btn-warning">
                          <i class="fa fa-envelope-o" />
                          Message
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                id="dropdown1"
                class="tab-pane"
              >
                <h5 class="tab-header">
                  <i class="fa fa-comments" /> Top Commenters
                </h5>
                <ul class="news-list">
                  <li>
                    <img
                      src="img/13.png"
                      alt=""
                      class="pull-left img-circle"
                    >
                    <div class="news-item-info">
                      <div class="name">
                        <a href="#">Frans Garey</a>
                      </div>
                      <div class="comment">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                        sed quia
                      </div>
                    </div>
                  </li>
                  <li>
                    <img
                      src="img/1.png"
                      alt=""
                      class="pull-left img-circle"
                    >
                    <div class="news-item-info">
                      <div class="name">
                        <a href="#">Finees Lund</a>
                      </div>
                      <div class="comment">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat.
                      </div>
                    </div>
                  </li>
                  <li>
                    <img
                      src="img/14.png"
                      alt=""
                      class="pull-left img-circle"
                    >
                    <div class="news-item-info">
                      <div class="name">
                        <a href="#">Jessica Johnsson</a>
                      </div>
                      <div class="comment">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt.
                      </div>
                    </div>
                  </li>
                  <li>
                    <img
                      src="img/3.png"
                      alt=""
                      class="pull-left img-circle"
                    >
                    <div class="news-item-info">
                      <div class="name">
                        <a href="#">Erebus Novak</a>
                      </div>
                      <div class="comment">
                        Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium
                        doloremque.
                      </div>
                    </div>
                  </li>
                  <li>
                    <img
                      src="img/2.png"
                      alt=""
                      class="pull-left img-circle"
                    >
                    <div class="news-item-info">
                      <div class="name">
                        <a href="#">Leopoldo Reier</a>
                      </div>
                      <div class="comment">
                        Laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis
                        et quasi.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section class="widget">
            <header>
              <h4>
                Server Overview
              </h4>
              <div class="actions">
                <small class="text-muted pull-right">2 days ago</small>
              </div>
            </header>
            <div class="body">
              <ul class="server-stats">
                <li>
                  <div class="key pull-right">
                    CPU
                  </div>
                  <div class="stat">
                    <div class="info">
                      60% / 37&deg;C / 3.3 Ghz
                    </div>
                    <div class="progress progress-small">
                      <div
                        class="progress-bar progress-bar-danger"
                        style="width: 70%;"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div class="key pull-right">
                    Mem
                  </div>
                  <div class="stat">
                    <div class="info">
                      29% / 4GB (16 GB)
                    </div>
                    <div class="progress progress-small">
                      <div
                        class="progress-bar"
                        style="width: 29%;"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div class="key pull-right">
                    LAN
                  </div>
                  <div class="stat">
                    <div class="info">
                      6 Mb/s
                      <i class="fa fa-caret-down" />
                      &nbsp; 3 Mb/s
                      <i class="fa fa-caret-up" />
                    </div>
                    <div class="progress progress-small">
                      <div
                        class="progress-bar progress-bar-inverse"
                        style="width: 48%;"
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </v-content>
    <!-- <v-footer> -->
    <!-- </v-footer> -->
  </v-app>
</template>
<script src="./gale-boomerang.controller.js"></script>
<style lang="scss" src="./_gale-boomerang.scss" scoped></style>
