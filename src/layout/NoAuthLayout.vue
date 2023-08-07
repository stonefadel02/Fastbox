<template>
  <Header />
  <slot />
  <Footer></Footer>
</template>
<script>
import Head from "../components/head";
import Footer from "../components/footer";
import Header from "../components/header";
// @ is an alias to /src ;

export default {
  components: {
    Head,
    Footer,
    Header,
  },
};
</script>
