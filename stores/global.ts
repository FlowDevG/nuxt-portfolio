import { defineStore } from 'pinia';

export const isLoggedIn = defineStore('login', {

  state: () => {
    return { login: false }
  },
  actions: {
    loggedIn() {
      this.login = true;
    },
    loggedOut() {
      this.login = false;
    }
  },
  getters: {
    isAuthenticated(): any {
      return this.login
    }
  }
})