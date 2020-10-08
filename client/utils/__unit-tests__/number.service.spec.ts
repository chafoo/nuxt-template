import { generateNumberOptions } from '~/utils/number.service'

describe('number-service', () => {
  test('is generateNumberOptions returning numbers 1 - 10', () => {
    expect(generateNumberOptions(1, 10).length).toBe(10)
  })
})
