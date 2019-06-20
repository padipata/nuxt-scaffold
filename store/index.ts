import request from '~/assets/utils/axios'

import {
    MutationTree,
    ActionTree,
    Commit,
    GetterTree
} from "vuex";
import {RootState, Data} from "~/types";

export const state = (): RootState => ({
    data: {data: Object}
})

export const mutations: MutationTree<RootState> = {
    setData(state: RootState, data: Data): void {
        state.data = data
    }
}

export const actions: ActionTree<RootState, RootState> = {
    async getQiniu(context: { commit: Commit }, payload: any) {
        try {
            const response = await request.get('/qiniu')
            const data = response.data
            context.commit('setData', data)
            return data
        } catch (error) {
            context.commit('setData', [])
            throw error
        }
    }
}

export const getters: GetterTree<RootState, any> = {
    data: (state: RootState) => state.data
}
