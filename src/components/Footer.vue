<template lang="html">
    <!-- Sticky footer here -->
    <div class="mt-4">
        <b-navbar>
            <b-container>
                &copy; thomasj.me &sdot; {{ year }}
            <span class="float-right">
            <a href="https://github.com/tominal" class="text-decoration-none" target="_blank">
                GitHub
            </a> &sdot;
            <a href="https://linkedin.com/in/tom-j" target="_blank">
                LinkedIn
            </a>
        </span>
            </b-container>
        </b-navbar>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    data() {
        return {
            year: moment().format('Y')
        }
    }
}
</script>

<style media="screen">
.navbar {
    background-color: #eee
}
</style>
