// http://tddbin.com/#?kata=es6/language/arrow-functions/basics
// 5: arrow functions - basics
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('Arrow functions', function() {
  it('are shorter to write, instead of `function(){}` write `() => {}`', function() {
    var func = () => {};
    assert.equal('' + func, '() => {}');
  });
  it('instead `{}` use an expression, as return value', function() {
    var func = () => 'I return too';
    assert.equal(func(), 'I return too');
  });
  it('one parameter can be written without parens', () => {
    var func = p => p - 1;
    assert.equal(func(25), 24);
  });
  it('many params require parens', () => {
    var func = (param, param1) => param + param1;
    assert.equal(func(23, 42), 23+42);
  });
  it('the function body needs parens to return an object', () => {
    var func = () => ({iAm: 'an object'});
    assert.deepEqual(func(), {iAm: 'an object'});
  });
});

// http://tddbin.com/#?kata=es6/language/arrow-functions/binding
describe('mocha + assert', () => {

  it('simple values equal?', () => assert.equal('one', 'one'));
  it('simple values doesnt equal?', () => assert.notEqual('one', 'two'));

  it('value is truthy', () => assert.ok(true));

  it('complex types equal?', () => assert.deepEqual([1,2,3], [1,2,3]));
  it('complex types dont equal?', () => assert.notDeepEqual([1,2,3], ['one', 'two']));

  it('value and type equal?', () => assert.strictEqual('1', '1'));
  it('complex types dont equal?', () => assert.notStrictEqual(1, '1'));

  it('throws?', () => assert.throws(() => { throw new Error(); }));
  it('does not throw?', () => assert.doesNotThrow(() => {}));

});// 6: arrow functions - binding
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

class LexicallyBound {

  getFunction() {
    return () => {
      return this;
    };
  }

  getArgumentsFunction() {
    return () => {
      return arguments;
    };
  }

}

describe('Arrow functions have lexical `this`, no dynamic `this`', () => {
  it('bound at definition time, use `=>`', function() {
    var bound = new LexicallyBound();
    var fn = bound.getFunction();
    assert.strictEqual(fn(), bound);
  });
  it('can NOT bind a different context', function() {
    var bound = new LexicallyBound();
    var fn = bound.getFunction();
    var anotherObj = {};
    var expected = bound;
    assert.strictEqual(fn.call(anotherObj), expected);
  });
  it('`arguments` does NOT work inside arrow functions', function() {
    var bound = new LexicallyBound();
    var fn = bound.getArgumentsFunction();
    assert.equal(fn(1, 2).length, 0);
  });
});
