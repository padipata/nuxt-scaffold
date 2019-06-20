<template>
    <section>
        <div class="header">
            <Menus></Menus>
            <div class="banner">
                {{qiniu}}
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import {
        Component,
        Vue
    } from "nuxt-property-decorator"
    import {State, Action} from 'vuex-class'
    import {Fetch} from "~/types";
    import Menus from "~/components/Menus.vue"

    @Component({
        components: {
            Menus
        }
    })

    export default class extends Vue {
        private qiniu: any = {};

        @Action getQiniu !: Function;

        private async getQiu_yp() {
            this.qiniu = await this.getQiniu();
            console.log(this.qiniu.data.token, 'test')
        }

        private created() {
            this.getQiu_yp();
        }
    }
</script>

<style scoped lang="less">
    .header {
        .banner {

        }
    }
</style>

