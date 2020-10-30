<template>
  <div class="plain-html">
    <span class="oa_window_border" id="border_top"></span>
    <span class="oa_window_border" id="border_right"></span>
    <span class="oa_window_border" id="border_bottom"></span>
    <span class="oa_window_border" id="border_left"></span>

    <!-- Mobile Notification -->
    <div class="ma_mobile">
      <div class="ma_notification">
        <h5>oneacre.online</h5>
        <img src="/images/lisa/msa_title.svg" alt="" />
        <p>
          Meaning Seeking Animals is not optimised for mobile browsers. Enter
          your email below to send yourself a reminder and/or signup for our
          newsletter.
        </p>

        <form class="ma_notification-form" action="/subscribe" method="post">
          <input
            class="ma_notification-form-input"
            type="email"
            name="email"
            placeholder="Email"
            required="required"
          />
          <input
            type="submit"
            value="Send reminder"
            name="subscribe"
            class="ma_notification-form-button"
          />
          <input
            class="ma_notification-form-checkmark"
            type="checkbox"
            id="newsletter"
            name="newsletter"
            value="true"
          />
          <label class="ma_notification-form-checkmark-label" for="newsletter"
            >Signup for our Newsletter</label
          >
        </form>
      </div>
    </div>
    <!-- Overlay -->
    <div class="sma_overlay">
      <h4>oneacre.online</h4>
      <div class="sma_content">
        <h1>Meaning Seeking Animals</h1>
        <h2>Lisa van Casand</h2>
        <button type="button" class="sma_start" name="button">Begin</button>
        <div class="sma_loader loading">
          <div class="sma_bar" id="b_01"></div>
          <div class="sma_bar" id="b_02"></div>
          <div class="sma_bar" id="b_03"></div>
          <div class="sma_bar" id="b_04"></div>
        </div>
      </div>
    </div>

    <!-- Minimap -->
    <Minimap />

    <!-- Walks Interface -->
    <div class="ma_walks">
      <div class="w_selector w_hidden">
        <span class="oa_button" id="ma_walks">A walk with</span>
        <div class="oa_button w_button" id="walk_01">
          <p class="w_author">Marit Mihklepp</p>
        </div>
        <div class="oa_button w_button" id="walk_02">
          <p class="w_author">Jacob Knegtel</p>
        </div>
        <div class="oa_button w_button" id="walk_03">
          <p class="w_author">Aleid de Jong</p>
        </div>
      </div>
      <!-- player_hidden -->
      <div class="w_player player_hidden">
        <audio id="my-audio">
          <source id="audioSource" src="" type="audio/mpeg" />
          <!-- place fallback here as <audio> supporting browsers will ignore it -->
          <a href="audiofile.mp3">audiofile.mp3</a>
        </audio>

        <div id="controls">
          <span id="loading">loading</span>
          <div id="play" style="display: none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="20"
              viewBox="0 0 18 24"
            >
              <path
                fill="#000"
                fill-rule="evenodd"
                d="M18 12L0 24V0"
                class="play-pause-icon"
                id="playPause"
              />
            </svg>
          </div>
          <div id="pause" style="display: none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="20"
              viewBox="0 0 18 24"
            >
              <rect fill="#000" width="20" height="20" class="x3-y0"></rect>
            </svg>
          </div>
        </div>
        <div id="time"></div>
        <div id="progress">
          <div id="bar"></div>
        </div>
      </div>
    </div>

    <Posts :posts="posts" />
  </div>
</template>

<script>
import { setMeta } from '~/helpers'
import Minimap from '~/components/meaning-seeking-animals/Minimap'
import Posts from '~/components/meaning-seeking-animals/Posts'

export default {
  async asyncData({ $axios }) {
    const posts = await $axios.$get('http://localhost:8080/api/v2/lisa')
    console.log(posts)
    return { posts }
  },
  components: {
    Minimap,
    Posts,
  },
  data() {
    return {
      title: 'Meaning Seeking Animals',
      description:
        'oneacre.online is an experimental publication project, of size exactly equal to the area of 1 chain by 1 furlong that aims to utilise the omnidirectional website space to seed works.',
      image: '/images/lisa/oa_meta_img.jpg',
    }
  },
  head() {
    return {
      title: this.title,
      meta: setMeta(this.title, this.description, this.image),
      script: [
        {
          type: 'text/javascript',
          src: '/scripts/oneacre/logo.js',
        },
        {
          type: 'text/javascript',
          src: '/scripts/lisa/script.js',
        },
        {
          type: 'text/javascript',
          src: '/scripts/lisa/audio_player.js',
        },
        {
          type: 'text/javascript',
          src: '/scripts/lisa/vancouver_script.js',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: '/styles/works/lisa/compile.css',
        },
        {
          rel: 'stylesheet',
          href: '/styles/works/sophieeline/logo.css',
        },
        {
          rel: 'stylesheet',
          href: '/styles/works/sophieeline/style.css',
        },
        {
          rel: 'stylesheet',
          href: '/styles/works/sophieeline/payment.css',
        },
        {
          rel: 'icon',
          href: '/favicon_black.ico',
          type: 'image/x-icon',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
