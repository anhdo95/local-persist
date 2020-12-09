import localPersist from '../index'

const typesAndValues = [
  { type: 'boolean', value: true },
  { type: 'string', value: '123456' },
  { type: 'number', value: 10 },
  { type: 'float', value: 1.5 },
  { type: 'object', value: { author: 'Richard Do', github: 'https://anhdo95.github.io/' } },
]

describe('local-persist', () => {
  typesAndValues.forEach(({ type, value }) => {
    it(`should localPersist set "${type}" type`, () => {
      expect(localPersist.set(type, value)).toBeTruthy()
    })
  })

  typesAndValues.forEach(({ type, value }) => {
    it(`should localPersist get "${type}" type`, () => {
      expect(localPersist.get(type)).toEqual(value)
    })
  })

  it('should localPersist function sets correctly', () => {
    const [first, second] = typesAndValues

    expect(localPersist.set(first.type, first.value)).toBeTruthy()
    expect(localPersist.set(second.type, second.value)).toBeTruthy()
  })

  it('should localPersist function gets correctly', () => {
    const [first, second] = typesAndValues

    expect(localPersist.get(first.type)).toBe(first.value)
    expect(localPersist.get(second.type)).toBe(second.value)
  })

  typesAndValues.forEach(({ type }) => {
    it(`should localPersist remove "${type}" type`, () => {
      localPersist.remove(type)
      expect(localPersist.get(type)).toBeNull()
    })
  })

  it(`should localPersist clear all items`, () => {
    const [first, second] = typesAndValues

    localPersist.set(first.type, first.value)
    localPersist.set(second.type, second.value)
    localPersist.clear()

    expect(localPersist.get(first.type)).toBeNull()
    expect(localPersist.get(second.type)).toBeNull()
  })
})
