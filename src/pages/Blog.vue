<template lang="html">
    <div>
        <navbar/>

        <div v-if="$route.params.id">
            <h3 class="pb-2 border-bottom">Blog</h3>

            <blog :id="$route.params.id" />
        </div>
        <div v-else>
            <b-row>
                <b-col>
                    test
                </b-col>
                <b-col>
                    test
                </b-col>
                <b-col>
                    test
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Blog from "../components/Blog"

export default {
    mounted() {

    },
    components: {
        'navbar': Navbar,
        'blog': Blog
    },
    data() {
        return {
            blogs: [
                {
                    key: 1,
                    file: ''
                }
            ]
        }
    },
}
</script>

<style lang="css" scoped>
</style>
