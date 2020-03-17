import Vue from 'vue';
import Vuex from 'vuex';
import { createDirectStore } from 'direct-vuex';
import RankingService from '@/services/RankingService';

import rankings from './ranking/index';

Vue.use(Vuex);

const services = {
  rankingService: new RankingService(15),
};

const mod = {
  modules: {
    rankings
  },
  state: {

  },
  actions: {

  },
  mutations: {

  },
  getters: {
    rankingService() {
      return services.rankingService;
    }
  },
} as const;

const { store, rootActionContext, moduleActionContext } = createDirectStore(mod);

export default store;

export { rootActionContext, moduleActionContext };

export type AppStore = typeof store;

declare module 'vuex' {
  interface Store<S> {
    direct: AppStore;
  }
}