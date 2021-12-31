import assert from 'assert';
import notEmptyPlainObject from './notEmptyPlainObject.js';

describe('notEmptyPlainObject', () => {
  describe('传入 `{}`', () => {
    it('决策 `false`', () => {
      assert.equal(notEmptyPlainObject({}), false);
    });
  });

  describe('传入 `{ a: "after" }`', () => {
    it('决策 `true`', () => {
      assert.equal(notEmptyPlainObject({ a: "after" }), true);
    });
  });

  describe('传入 `""`', () => {
    it('决策 `false`', () => {
      assert.equal(notEmptyPlainObject(''), false);
    });
  });

  describe('传入 `123`', () => {
    it('决策 `false`', () => {
      assert.equal(notEmptyPlainObject(123), false);
    });
  });
});
