<template>
    <div class="container">
        <facebook-loader :unique-key="uniqueKey"></facebook-loader>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "nuxt-property-decorator"
    import {FacebookLoader} from 'vue-content-loader'

    @Component({
        components: {
            FacebookLoader
        }
    })

    export default class Skeleton extends Vue {
        private uniqueKey: string = '';

        asyncData() {
            this.uniqueKey = Math.random().toString(36).substring(2);
        }

        // 接口请求
        // async asyncData({ app }: NuxtContext) {
        //     const { results } = await app.$axios.$get('/api/users');
        //     return { users: results };
        // }
    }
</script>

<style scoped>
    .container {
        max-width: 600px;
    }
</style>
