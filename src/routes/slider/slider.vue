<template>
  <div>
    <!-- use router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
    <router-link :to="{name: 'xophz-compass'}">
      Go to Foo
    </router-link>
    <router-link :to="{name: 'admin', params : {userid : 4}}">
      Go to Bar
    </router-link>
  </div>
</template>
