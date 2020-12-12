/**
 * @jest-environment jsdom
 */

import localPersist from '../index'

const typesAndValues = [
  { type: 'boolean', value: true },
  { type: 'string', value: 'something' },
  { type: 'number', value: 10 },
  { type: 'float', value: 1.5 },
  { type: 'object', value: { author: 'Richard Do', github: 'https://anhdo95.github.io/' } },
]

describe('local-persist', () => {
  typesAndValues.forEach(({ type, value }) => {
    it(`should set "${type}" type`, () => {
      expect(localPersist.set(type, value)).toBeTruthy()
    })
  })

  it(`should not set "bigint" type`, () => {
    const key = 'bigint'
    const value = BigInt(1)

    expect(localPersist.set(key, value)).toBeFalsy()
  })

  typesAndValues.forEach(({ type, value }) => {
    it(`should get "${type}" type`, () => {
      expect(localPersist.get(type)).toEqual(value)
    })
  })

  it('should set localPersist function correctly', () => {
    const [first, second] = typesAndValues

    expect(localPersist(first.type, first.value)).toBeTruthy()
    expect(localPersist(second.type, second.value)).toBeTruthy()
  })

  it('should get localPersist function correctly', () => {
    const [first, second] = typesAndValues

    expect(localPersist(first.type)).toBe(first.value)
    expect(localPersist(second.type)).toBe(second.value)
  })

  typesAndValues.forEach(({ type }) => {
    it(`should remove "${type}" type`, () => {
      localPersist.remove(type)
      expect(localPersist.get(type)).toBeNull()
    })
  })

  it(`should clear all items`, () => {
    const [first, second] = typesAndValues

    localPersist.set(first.type, first.value)
    localPersist.set(second.type, second.value)
    localPersist.clear()

    expect(localPersist.get(first.type)).toBeNull()
    expect(localPersist.get(second.type)).toBeNull()
  })
})
