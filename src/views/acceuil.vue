<template>
  <shipping_option />
  <Head></Head>
  <!-- <About></About> -->
  <features />
</template>

<script>
import Mon_comptes from '../components/mon_comptes'
import Head from "../components/head.vue";
import features from "../components/features";
import About from "../components/about";
import shipping_option from "../components/shipping_option";
import Footer from "../components/footer";
import Header from "../components/header";
// @ is an alias to /src ;

export default {
  components: {
    Mon_comptes,
    Head,
    features,
    About,
    shipping_option,
    Footer,
    Header,
  },
};
</script>
