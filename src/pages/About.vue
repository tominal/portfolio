<template lang="html">
    <div>
        <navbar/>

        <h3 class="pb-2 border-bottom">About me</h3>

        <p>Welcome to my portfolio.</p>

        <p>
            I had a lot of fun creating this. If you're curious about how this website functions, take a look at
            <router-link :to="{ name: 'Blog', params: { id: 1 } }">this!</router-link>
        </p>

        <p>
            <b>Whois</b>
        </p>
        <p>
            A Software Engineer whose passion is business web development. Born and raised Texan, I
            have bounced
            around the state since my father was in the military. I then bounced around a few more times for Midwestern
            State University,
            The Univiersity of Texas at Dallas, Collin, and Richland College. Currently I reside in McKinney, TX where I
            started my
            first company, Kahu Software LLC. Both myself and fellow developers have created some fun products that are
            being used in different fields.
        </p>
        <p>
            I still have a little further to go before I drop my brain child that I have been creating since the summer
            of 2019. I am a bit of a perfectionist and I can not stand overpriced mediocre products.
        </p>

        <p>
            <b>Work</b>
        </p>
        <p>
            I did a lot of web-based game modding/development as a kid which sparked a desire to turn it into my job.
            My first job was with a Garland waterpark in 2013 where I started as a cabana attendant for a couple
            summers. From there
            I moved around the field to understand more about the business; front gate, administrative assistant, food
            supervisor, etc.
            I landed an IT position with the waterpark chain's ownership in 2017 managing 5 waterparks until 2 were sold.
            From there I had the opportunity to find several niche software-related problems that desperately needed fixing.
            That opportunity quickly gave birth to Kahu Software LLC, a waterpark-focused software development company.
            I joined IAPPA in 2019 and met several professionals and charlatans making bank from the industry further
            fueling my desire to make Kahu one badass software company.
        </p>
        <p>
            I landed my first official full-time position in 2020 with a marketing and process automation company which focused on the
            property management industry. I was tasked with building an LMS to interface with Articulate's Rise 360 product,
            a client support ticketing system that integrated with HubSpot, an Intranet (employee-facing portal containing
            several much-needed features), an Extranet (client-facing portal to interface with the LMS, ticketing, etc.),
            and a few other client-requested products.
        </p>
        <p>
            Apart from my work in the amusement and property management industry, I have done a few open source projects
            that you can view <router-link :to="{ name: 'Projects' }">here</router-link>.
        </p>

        <p>
            <b>Education</b>
        </p>
        <p>
            I graduated from high school in 2016 and have been pursuing a degree in Computer Science (CS). Midwestern
            State University was
            not ABET accredited and the education there was mediocre. I transferred to the University of Texas at Dallas
            where I
            gained more knowledge in the field than before and found myself loving the campus. I am currently looking to
            end the
            stupid amount of debt I have been accruing by graduating somewhere somehow with anything.
        </p>

        <hr>

<!--        <p>-->
<!--            <b>Skills</b>-->
<!--        </p>-->
<!--        <p>-->
<!--            So that was a little about me. Let's go over what I'm worth.-->
<!--        </p>-->

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
