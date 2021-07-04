<template>
  <main class="home-wrapper">
    <!-- Intro -->
    <BlockIntro>
      <p class="en l">
        <a href="#">oneacre.online</a> is an experimental publishing &amp;
        distribution project based in The Hague, The Netherlands. The project
        seeds unprintable text-based works by emerging artists.
      </p>
      <p class="jp r">
        Currently it presents the second release of Poetics and Politics of
        Erasure by Yun Lee, a multidisciplinary research paper on the aesthetics
        and politics of erasure.
        <br />
        <br />
        To purchase a copy of the publication please
        <NuxtLink to="/catalog/poetics-and-politics-of-erasure/payment"
          >click here</NuxtLink
        >
      </p>
    </BlockIntro>

    <article>
      <component v-bind:is="child.component"></component>
    </article>

    <BlockFooter>
      <p>
        Made by
        <a href="https://www.yunlee.digital">Yun Lee</a>,
        <a href="http://www.stefkors.com">Stef Kors</a>,
        <a href="http://www.titusknegtel.nl">Titus Knegtel</a>,
        <a href="http://www.dkdkpl.com">Victoria Douka-Doukopoulou</a>
        with the kind support of the Creative Industries Fund NL. For the
        production of Poetics and Politics of Erasure, oneacre.online would like
        to thank: LhGWR gallery, George Knegtel, PublishingLab and Jake Faber.
      </p>
      <p>
        For further contact:
        <a href="mailto:hi@oneacre.online">hi@oneacre.online</a>
      </p>
    </BlockFooter>
  </main>
</template>

<script>
import BlockIntro from '~/components/S2/BlockIntro.vue'
import BlockFooter from '~/components/S2/BlockFooter.vue'
export default {
  components: {
    BlockIntro,
    BlockFooter,
  },
  data() {
    return {
      child: {},
    }
  },
  created() {
    this.$router.options.routes.forEach((route) => {
      if (route.name === 'catalog-poetics-and-politics-of-erasure') {
        this.child = route
      }
    })
  },
}
</script>

<style lang="scss" scoped></style>
