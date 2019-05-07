import client from '../index'

jest.mock('../index')

test('should fetch recipes', () => {
  const recipes = [{ id: 1 }]
  const resp = { data: recipes }
  client.get.mockResolvedValue(resp)

  const Recipes = require('../recipes')

  return Recipes.default.list().then(list => expect(list).toEqual(recipes))
})

test('should fetch recipe by id', () => {
  const recipes = { id: 1 }
  const resp = { data: recipes }
  client.get.mockResolvedValue(resp)

  const Recipes = require('../recipes')

  return Recipes.default.get(1).then(recipe => expect(recipe).toEqual(recipes))
})