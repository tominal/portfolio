<template lang="html">
  <div>
    <h3>Projects</h3>

    <b-navbar class="mb-3">
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'Home', params: {} }">
          Home
        </b-nav-item>
        <b-nav-item :to="{ name: 'About', params: {} }">
          About me
        </b-nav-item>
        <b-nav-item :to="{ name: 'Blog', params: {} }">
          Blog
        </b-nav-item>
        <b-nav-item :to="{ name: 'Contact', params: {} }">
          Contact
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <b-row>
      <b-col md="6" v-for="p in projects" v-bind:key="p.id">
        <b-card
          :title="p.name"
          :img-src="p.img"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2"
          fluid
        >
          <b-card-text>
            {{ p.desc }}
          </b-card-text>

          <b-button :href="p.link" target="_blank" variant="primary">
            Link
          </b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        projects: [
          {
            id: 1,
            name: "Kahu Software LLC",
            img: '//cdn.kahu.app/assets/img/kahu-logo-regular.png',
            desc: 'A point of sale software company founded in August of 2019. Dedicated for waterparks.',
            link: '//kahu.app'
          },
          {
            id: 2,
            name: "CSS3 - Frosted Glass",
            img: '//images.weserv.nl/?url=admin.thomasj.me/img/small/stuff/vOSpVaNhBF5NssYxgO89JZ632WlU7FteXrXOPPf5.png',
            desc: 'An open source repo explaining the frosted glass technique seen on popular video games and websites.',
            link: '//github.com/tominal/frostedglasscss'
          },
          {
            id: 3,
            name: "EarthThoughts",
            img: '//images.weserv.nl/?url=admin.thomasj.me/img/small/stuff/gtXwnSIFvD3NB1KZKU4Xt5mOaTiRDID2aLD0VMpv.png',
            desc: 'Ingesting APIs from Reddit to produce a combination of /r/ShowerThoughts and /r/EarthPorn. Best viewed on Google Chrome because of Firefox\'s content blocking.',
            link: '//admin.thomasj.me/projects/earththoughts/'
          },
          {
            id: 4,
            name: "Monolith Servers' Store",
            img: '//images.weserv.nl/?url=admin.thomasj.me/img/small/stuff/4GPsyyFm8MqNb4y3L2dm8IthWZPuGPa0xG5h8eW7.png',
            desc: 'A custom built webstore that allows players to purchase a premium membership. Integrated with payment processing company Paddle.',
            link: '//monolithservers.com/store'
          },
          {
            id: 5,
            name: "Clear the Smoke - BPA",
            img: '//images.weserv.nl/?url=admin.thomasj.me/img/small/stuff/W8zMysIzhZH5VqgcMkSJKydhBjXc6WMe1zIxCUfx.png',
            desc: 'A high school team project that we took to Business Professionals of America winning 2nd place in State.',
            link: '//admin.thomasj.me/projects/bpa/'
          }
        ]
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
