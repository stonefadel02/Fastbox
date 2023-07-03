<template>
 <Header></Header>
 <Read_more></Read_more>
 <About></About>
 <Features></Features>
 <Footer></Footer>
</template>

<script>
import Features from '../components/Features'
import About from '../components/About'
import Read_more from '../components/read_more'
import Footer from '../components/footer'
import Header from '../components/header'
// @ is an alias to /src

export default {
  components: {
    Features,
    About,
    Read_more,
    Footer, Header },
  
}
</script>