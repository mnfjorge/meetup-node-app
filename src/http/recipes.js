import client from './index'

export default class Recipes {
  static list() {
    return client.get('/recipes').then(response => response.data)
  }

  static get(id) {
    return client.get(`/recipes/${id}`).then(response => response.data)
  }
}
