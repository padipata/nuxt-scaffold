<template>
    <section>
        <div class="header">
            <Menus></Menus>
            <div class="banner"></div>
        </div>
    </section>
</template>

<script lang="ts">
    import {
        Component,
        Vue
    } from "nuxt-property-decorator"
    import {
        State,
        Getter,
        Action,
        Mutation
    } from 'vuex-class'
    import {Data} from "~/types";
    import Menus from "~/components/Menus.vue"

    @Component({
        components: {
            Menus
        }
    })

    export default class extends Vue {
        @State private data !: Data

        private created() {
            console.log(this.data);
        }
    }
</script>

<style scoped lang="less">
    .header {
        .banner {

        }
    }
</style>

