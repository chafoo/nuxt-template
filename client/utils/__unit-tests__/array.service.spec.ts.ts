import { arrayMove, deleteArrayItem } from '~/utils/array.service'

describe('array service', () => {
  test.each([
    [['a', 'b', 'c'], 0, 1, ['b', 'a', 'c']],
    [['a', 'b', 'c'], -10, 1, ['a', 'b', 'c']],
    [['a', 'b', 'c'], 10, 0, ['a', 'b', 'c']],
    [['a', 'b', 'c'], 0, -10, ['a', 'b', 'c']],
    [['a', 'b', 'c'], 0, 10, ['a', 'b', 'c']],
    [{}, 0, 1, {}],
    [['a', 'b', 'c'], 0, 2, ['b', 'c', 'a']],
    [['a', 'b', 'c'], 2, 0, ['c', 'a', 'b']],
    [['a', 'b', 'c'], 2, 2, ['a', 'b', 'c']],
    [['a', 'b', 'c'], null, 2, ['a', 'b', 'c']],
    [['a', 'b', 'c'], 2, null, ['a', 'b', 'c']]
  ])('array returns correct values %s', (value: any, from:number, to: number, expected: any) => {
    expect(arrayMove(value, from, to)).toStrictEqual(expected)
  })

  test.each([
    [0, ['a', 'b', 'c', 'd'], ['b', 'c', 'd']],
    [-1, ['a', 'b', 'c', 'd'], ['a', 'b', 'c', 'd']],
    [4, ['a', 'b', 'c', 'd'], ['a', 'b', 'c', 'd']]
  ])('array delete item %s', (deleteItemIndex: number, array: any[], expected: any[]) => {
    expect(deleteArrayItem(array, deleteItemIndex)).toStrictEqual(expected)
  })
})
