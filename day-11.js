// http://tddbin.com/#?kata=es6/language/set/basics
// 47: Set - basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Set` lets you store unique values of any type', function(){
  it('`Set` is a new global constructor function', function() {
    const typeOfSet = 'function';
    assert.equal(typeOfSet, typeof Set);
  });
  it('every value in a set is unique', function() {
    let set = new Set();
    set.add(1);
    set.add(2);
    const actualSize = 2;
    assert.equal(actualSize, set.size);
  });
  it('the string "1" is different to the number 1', function() {
    let set = new Set();
    set.add(1);
    set.add(0);
    assert.equal(set.size, 2);
  });
  it('even NaN is equal to NaN', function() {
    let set = new Set();
    set.add(NaN);
    set.add(NaN);
    assert.equal(set.size, 1);
  });
  it('+0 and -0 are seen as equal', function() {
    let set = new Set();
    set.add(+0);
    set.add(0);
    set.add(-0);
    assert.deepEqual([...set.values()], [+0]);
  });
});

// http://tddbin.com/#?kata=es6/language/set/add
// 48: Set - add
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`add()` appends a new element to the end of a Set object.', function(){
  let set;
  beforeEach(() => set = new Set());
  it('adds every value, of any type, only once', function() {
    const fn = () => {};
    set.add(1);
    set.add(1);
    set.add(fn);
    set.add(fn);
    assert.equal(set.size, 2);
  });
  it('is chainable', function() {
    set.add(1).add(2);
    assert.equal(set.has(2), true);
  });
  it('call without params adds undefined', function() {
    set.add(undefined)
    assert.equal(set.has(void 0), true);
  });
  it('0, -0 and +0 are equal', function() {
    set.add(-0);
    set.add(+0);
    assert.equal(set.has(+0), true);
  });
});

// http://tddbin.com/#?kata=es6/language/set/delete
// 64: Set - delete
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`set.delete()` deletes an element from a set', function(){
  let set;
  beforeEach(() => set = new Set());
  describe('use `delete(<value>)` to delete an element', function() {
    beforeEach(function() {
      set.add('one').add('two').add('three');
    });
    it('`delete()` returns `true` when the element was found', function() {
      const returns = set.delete('three');
      assert.strictEqual(returns, true);
    });
    it('and the size decreases', function() {
      set.delete('one')
      assert.equal(set.size, 2);
    });
  });
  describe('if nothing was deleted (no element with the given value was found)', function() {
    it('returns `false`', function() {
      set.add('one');
      set.delete('one');
      const returns = set.delete('one');
      assert.equal(returns, false);
    });
  });
  describe('`undefined` is a valid value in a set', function() {
    it('deleting it, when it is not in the set, returns `false` too', function() {
      let whatToDelete;
      assert.equal(set.delete(whatToDelete), false);
    });
    it('`delete()` removes it, when its in the set', function() {
      set.add();
      assert.equal(set.delete(), true);
    });
  });
  describe('the value does NOT get casted', function() {
    it('number 1 is different to string "1"', function() {
      set.add(1);
      set.add(1);
      assert.equal(set.delete('1'), false);
    });
  });
});
