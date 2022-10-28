import { classnames } from '../classnames'

describe('@wrapped-in-react/classnames', () => {
  describe('classnames', () => {

    test('Пустые аргументы', () => {
      expect(classnames()).toEqual('')
    });

    test('undefined', () => {
      expect(classnames('Block', undefined, 'Block2')).toEqual('Block Block2')
    });

    test('Уникальное значение', () => {
      expect(classnames('CompositeBlock', 'Block', 'Test', 'Block')).toEqual(
        'CompositeBlock Block Test',
      )
    });

  })
})