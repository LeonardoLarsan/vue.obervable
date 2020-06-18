import Vue from 'vue'

// Esto es solo para probar... 
const timer = (milliseconds: number) => new Promise((resolve) => {
  setTimeout(() => {
    resolve()
  }, milliseconds)
})

///////////// modelo //////////////

interface IState {
  id: number,
  pass: string
}

//////////////// store ///////////////////

const state = Vue.observable<IState>({
  id: 0,
  pass: '1'
})

const mutators = {
  setUser(user: IState) {
    state.pass = user.pass
    state.id = user.id
  }
}

const actions = {
  async signIn(user: IState) {
    await services.signIn()
    mutators.setUser(user)
  }
}

const services = {
  async signIn() {
    await timer(2000)
  }
}

export { state, actions }
