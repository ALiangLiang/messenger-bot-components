import { set } from '../../fixtures/api'

import { GetStarted, PersistentMenu, ButtonUrl, ButtonPostback, ButtonNested } from '../../../src'

describe('PersistentMenu', function () {
  it('should work', function () {
    const json = {
      ...(new GetStarted('foo')).toJSON(),
      ...(new PersistentMenu([
        new PersistentMenu.Locale('default', [
          new ButtonUrl('foo', 'https://foo.bar/index'),
          new ButtonPostback('foo', 'bar'),
          new ButtonNested('next level', [
            new ButtonNested('goto level 3', [
              new ButtonUrl('foo2', 'https://foo.bar/index2')
            ])
          ])
        ])
      ])).toJSON()
    }

    return set(json)
  })
})
