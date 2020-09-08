<template lang="html">
  <div>
    <navbar />

    <h3 class="pb-2 border-bottom">About me</h3>

    <p>Welcome to my portfolio.</p>

    <p>
      I had a lot of fun creating this. If you're curious about how this website functions, take a look at <router-link :to="{ name: 'Blog', params: { id: 1 } }">this!</router-link>
    </p>

    <p>
      <b>Whois</b>
    </p>
    <p>
      My name is Thomas and I am a Computer Science student whose passion is web and software development. Born and raised Texan, I have bounced
      around the state since my dad was in the military. I then bounced around a few more times for Midwestern State University,
      The Univiersity of Texas at Dallas, Collin, and Richland College. Currently I reside in Dallas, TX where I started my
      first company, Kahu Software LLC. Both myself and fellow developers have created some fun products that are being used
      in different fields.
    </p>
    <p>
      I still have a little further to go before I drop my brain child that I have been creating since the summer of 2019. I
      am a bit of perfectionist and I can not stand mediocre products.
    </p>

    <p>
      <b>Work</b>
    </p>
    <p>
      I got my first job with a Garland waterpark in 2013 where I started as a cabana attendant for a couple summers. From there
      I moved around the field to understand more about the business; front gate, administrative assistant, food supervisor, etc.
      I landed an IT position with the waterpark chain's ownership in 2017. Since then I have been sponging in everything I see
      in the amusement industry.
    </p>
    <p>
      Apart from my work in the amusement industry, I have done a free open source and freelance projects that you can view
      <router-link :to="{ name: 'Projects' }">here</router-link>.
    </p>

    <p>
      <b>Education</b>
    </p>
    <p>
      I graduated from high school in 2016 and have been pursuing a degree in Computer Science (CS). Midwestern State University was
      not ABET accredited and the education there was mediocre. I transferred to the University of Texas at Dallas where I
      gained more knowledge in the field than before and found myself loving the campus. I am currently looking to end the
      stupid amount of debt I have been accruing by graduating at Richland College with an associate degree in CS.
    </p>
  </div>
</template>

<script>
  import Navbar from "../components/Navbar";
export default {
  components: {
    'navbar': Navbar
  }
}
</script>

<style lang="css" scoped>
</style>
