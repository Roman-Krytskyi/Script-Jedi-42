// http://tddbin.com/#?kata=es6/language/object-api/is
// ES6 - 54: Object - is
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Object.is()` determines whether two values are the same', function(){
  describe('scalar values', function() {
    it('1 is the same as 1', function() {
      const areSame = Object.is(1, 1);
      assert.equal(areSame, true);
    });
    it('int 1 is different to string "1"', function() {
      const areSame = Object.is(1, '1');
      assert.equal(areSame, false);
    });
    it('strings just have to match', function() {
      const areSame = Object.is('one', 'one');
      assert.equal(areSame, true);
    });
    it('+0 is not the same as -0', function() {
      const areSame = false;
      assert.equal(areSame, Object.is(+0, -0));
    });
    it('NaN is the same as NaN', function() {
      const number = NaN;
      assert.equal(Object.is(NaN, number), true);
    });
  });
  describe('coercion (as in `==`) and strict compare (as in `===`) do NOT apply', function() {
    it('+0 and -0 are not the same for `Object.is()`', function() {
      const strictlyCompared = +0 !== -0;
      const objectIsCompared = Object.is(+0, -0);
      assert.equal(objectIsCompared, strictlyCompared);
    });
    it('empty string and `false` are not the same', function() {
      const emptyString = false;
      const isSame = Object.is(emptyString, false);
      assert.equal(isSame, emptyString == false);
    });
    it('NaN', function() {
      const coerced = isNaN == isNaN;
      const isSame = Object.is(NaN, NaN);
      assert.equal(isSame, coerced);
    });
    it('NaN and 0/0', function() {
      const isSame = Object.is(NaN, 0/0);
      assert.equal(isSame, true);
    });
  });
  describe('complex values', function() {
    it('`{}` is just not the same as `{}`', function() {
      const areSame = false;
      assert.equal(areSame, Object.is({}, {}));
    });
    it('two `Map`s with the same content are not the same thing', function() {
      let map1 = new Map([[1, 'one']]);
      let map2 = new Map([[1, 'one']]);
      const areSame = Object.is(map1, map2);
      assert.equal(areSame, false);
    });
  });
});


// http://tddbin.com/#?kata=es6/language/reflect/basics
// 58: Reflect - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect` basics', function() {
  describe('Reflect is special, it is different to e.g. `Object`', function() {
    it('it`s of type object', function() {
      const actualType = 'object';
      assert.equal(actualType, typeof Reflect);
    });
    it('it can not be instantiated (`new Reflect()`)', function() {
      const tryToConstruct = () => new Reflect();
      assert.throws(tryToConstruct, TypeError);
    });
    it('has no `call` method (as opposed to e.g. Object)', function() {
      const actual = 'undefined';
      assert.equal(actual, typeof Reflect.call);
    });
  });
  
  describe('some `Reflect` usages', function() {
    it('`Reflect.construct()` is like `new ClassName`', function() {
      class Class{}
      assert.equal(Reflect.construct(Class, []) instanceof Class, true);
    });
    it('`Reflect.get()` returns a property`s value', function() {
      let obj = {x: 23};
      assert.equal(Reflect.get(obj, 'x'), 23);
    });
    it('`Reflect.has()` is like `in` just as a function', function() {
      let obj = {x : 'something'};
      assert.equal(Reflect.has(obj, 'x'), true);
    });
  });
});

// http://tddbin.com/#?kata=es6/language/reflect/apply
// 59: Reflect - apply 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.apply` calls a target function', function() {
  it('it is a static method', function() {
    const actualType = 'function';
    assert.equal(actualType, typeof Reflect.apply)
  });

  describe('the 1st parameter', () => {
    it('is a callable, e.g. a function', () => {
      let fn = () => 42;
      assert.equal(Reflect.apply(fn, void 0, []), 42);
    });
    it('passing it a non-callable throws a TypeError', function() {
      const applyOnUncallable = () =>
        Reflect.apply(void 0);
      assert.throws(applyOnUncallable, TypeError);
    });
  });

  describe('the 2nd parameter', () => {
    it('is the scope (or the `this`)', function() {
      class FourtyTwo {
        constructor() { this.value = 42}
        fn() {return this.value}
      }
      let instance = new FourtyTwo();
      const fourtyTwo = Reflect.apply(instance.fn, instance, []);
      assert.deepEqual(fourtyTwo, 42);
    });
  });

  describe('the 3rd parameter', () => {
    it('must be an array (or array-like)', () => {
      const thirdParam = [];
      assert.doesNotThrow(() => Reflect.apply(() => void 0, null, thirdParam));
    });
    it('is an array of parameters passed to the call', function() {
      let emptyArrayWithFiveElements = Reflect.apply(Array, void 0, [5]);
      assert.deepEqual(emptyArrayWithFiveElements.fill(42), [42, 42, 42, 42, 42]);
    });
  });

  describe('example usages', () => {
    it('simple function call', () => {
      const fn = () => 'the return value';
      assert.equal(Reflect.apply(fn, void 0, []), 'the return value');
    });
    it('call a function on an array', () => {
      const fn = [].slice;
      assert.deepEqual(Reflect.apply(fn, [0, 23, 42], [1]), [23, 42]);
    });
    it('pass in the `this` that the function to call needs', () => {
      class Bob {
        constructor() { this._name = 'Bob'; }
        name() { return this._name; }
      }
      const bob = new Bob();
      const scope = bob;
      assert.equal(Reflect.apply(bob.name, scope, []), 'Bob');
    });
  });
});

// http://tddbin.com/#?kata=es6/language/reflect/getprototypeof
// 60: Reflect - getPrototypeOf 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.getPrototypeOf` returns the prototype', function() {
  it('works like `Object.getPrototypeOf`', function() {
    const viaObject = Object.getPrototypeOf({});
    const viaReflect = Reflect.getPrototypeOf({});
    assert.strictEqual(viaObject, viaReflect);
  });
  it('throws a TypeError for a non-object', function() {
    let fn = () => { Reflect.getPrototypeOf() };
    assert.throws(fn, TypeError);
  });
  it('a `new Set()` has a prototype', function() {
    const aSet = new Set();
    assert.equal(Reflect.getPrototypeOf(aSet), Set.prototype);
  });
  it('for a class, it is `Klass.prototype`', function() {
    class Klass{}
    const proto = Reflect.getPrototypeOf(new Klass());
    assert.equal(proto, Klass.prototype);
  });
  it('works also for an old-style "class"', function() {
    function Klass() {}
    const proto = Reflect.getPrototypeOf(new Klass());
    assert.equal(proto, Klass.prototype);
  });
  it('an array has a prototype too', function() {
    let arr = [];
    const expectedProto = Array.prototype;
    assert.equal(Reflect.getPrototypeOf(arr), expectedProto);
  });
  
  // http://tddbin.com/#?kata=es6/language/reflect/construct
  // 68: Reflect - construct 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.construct` is the `new` operator as a function', function() {
  describe('the function itself', function() {
    it('is static on the `Reflect` object', function() {
      const name = 'constructor';
      assert.equal(name in Reflect, true);
    });
    it('is of type `function`', function() {
      const actualType = 'function';
      assert.equal(actualType, typeof Reflect.construct)
    });
  });
  
  describe('the 1st parameter is the constructor to be invoked', function() {
    it('fails when given a number as constructor', function() {
      let aNumber = 0;
      assert.throws(() => { Reflect.construct(aNumber, []) }, TypeError);
    });
    it('works given a function that can be instanciated', function() {
      function aFunction(){}
      assert.doesNotThrow(() => { Reflect.construct(aFunction, []) });
    });
    it('works given a class', function() {
      const aClass = class {};
      assert.doesNotThrow(() => { Reflect.construct(aClass, []) });
    });
  });

  describe('the 2nd parameter is a list of arguments, that will be passed to the constructor', function() {
    
    const aClass = class {};
    it('fails when it`s not an array(-like), e.g. a number', function() {
      let aNumber = 0;
      assert.throws(() => { Reflect.construct(aClass, aNumber) }, TypeError);
    });
    it('works with an array-like object (the `length` property look up should not throw)', function() {
      let arrayLike = {};
      assert.doesNotThrow(() => { Reflect.construct(aClass, arrayLike) });
    });
    it('works with a real array', function() {
      let realArray = [];
      assert.doesNotThrow(() => { Reflect.construct(aClass, realArray) });
    });
  });

  describe('in use', function() {
    it('giving it a class it returns an instance of this class', function() {
      class Constructable {}
      let instance = Reflect.construct(Constructable, [])
      assert.equal(instance instanceof Constructable, true);
    });
    describe('the list of arguments are passed to the constructor as given', function() {
      class Constructable {
        constructor(...args) { this.args = args; }
      }
      it('if none given, nothing is passed', function() {
        let instance = Reflect.construct(Constructable, []);
        assert.deepEqual(instance.args, []);
      });
      it('passing an array, all args of any type are passed', function() {
        const argumentsList = ['arg1', ['arg2.1', 'arg2.2'], {arg: 3}];
        let instance = Reflect.construct(Constructable, argumentsList);
        assert.deepEqual(instance.args, argumentsList);
      });
    });
  });

  describe('the length property', function() {
    it('of `Reflect.construct` is 2', function() {
      let actual = 2;
      assert.equal(actual, Reflect.construct.length);
    });
  });
});

// http://tddbin.com/#?kata=es6/language/reflect/defineproperty
// 69: Reflect - defineProperty 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.defineProperty()` is like `Object.defineProperty()` but returns a Boolean.', function() {
  describe('the function itself', function() {
    it('is static on the `Reflect` object', function() {
      const name = 'defineProperty';
      assert.equal(name in Reflect, true);
    });
    it('is of type `function`', function() {
      const actualType = 'function';
      assert.equal(actualType, typeof Reflect.defineProperty)
    });
  });
  
  describe('the 1st parameter is the object on which to define a property', function() {
    it('fails if it is not an object', function() {
      let noObj = null ;
      assert.throws(() => { Reflect.defineProperty(noObj, 'property', {value: 'value'}); });
    });
    it('accepts an object', function() {
      let obj = {};
      assert.doesNotThrow(() => { Reflect.defineProperty(obj, 'property', {value: 'value'}); });
    });
    it('accepts an instance (of a class)', function() {
      let instance = new class {};
      assert.doesNotThrow(() => { Reflect.defineProperty(instance, 'property', {value: 'value'}); });
    });
  });

  describe('2nd parameter is the name of the property to be defined on the object (normally a string)', function() {
    it('works with a `normal` string', function() {
      let obj = {};
      Reflect.defineProperty(obj, 'prop', {});
      assert.equal('prop' in obj, true);
    });
    it('a number gets converted into a string', function() {
      let obj = {};
      Reflect.defineProperty(obj, 1, {});
      assert.equal('1' in obj, true);
    });
    it('`undefined` also gets converted into a string (watch out!)', function() {
      let obj = {};
      let undef;
      Reflect.defineProperty(obj, undef, {});
      assert.equal('undefined' in obj, true);
    });
    it('it can be a symbol', function() {
      let obj = {};
      const sym = Symbol.for('prop');
      Reflect.defineProperty(obj, sym, {});
      assert.equal(sym in obj, true);
    });
  });

  describe('the `value` is part of the 3rd parameter, given as a property in an object `{value: ...}`', function() {
    // The entire complexity of the 3rd parameter might be covered in a later kata. 
    it('contains the initial value of the property, as an object in the property `value`', function() {
      let obj = {};
      Reflect.defineProperty(obj, 'prop', {value: 'property value'});
      assert.equal(obj.prop, 'property value');
    });
    it('can be of any type (even itself)', function() {
      let obj = {};
      Reflect.defineProperty(obj, 'prop', {value: obj});
      assert.equal(obj.prop, obj);
    });
  });

  describe('the return value of the function indicates wether the property was defined successfully', function() {
    describe('returns true', function() {
      it('when the property was created (which requires the 3rd parameter too!!!)', function() {
        let instance = new class {};
        const wasPropertyDefined = Reflect.defineProperty(instance, '', {value: null});
        assert.equal(wasPropertyDefined, true);
      });
      it('no matter what the value of the property is (just the 3rd param has to exist as `{}`)', function() {
        let instance = new class {};
        const wasPropertyDefined = Reflect.defineProperty(instance, '', {value: void 0});
        assert.equal(wasPropertyDefined, true);
      });
    });
    describe('returns false', function() {
      it('when a non-configurable property wants to be changed to configurable=true', function() {
        let obj = {};
        Reflect.defineProperty(obj, 'x', {configurable: true});
        const wasPropertyDefined = !Boolean(Reflect.defineProperty); // Bad idea, isn't it? :)
        assert.equal(wasPropertyDefined, false);
      });
      it('when the object we want to add a property to is frozen', function() {
        let instance = new class {};
        Object.freeze(instance);
        const wasPropertyDefined = Reflect.defineProperty(instance, 'prop', {value: 1});
        assert.equal(wasPropertyDefined, false);
      });
    });
  });
});

// https://tddbin.com/?664#?kata=es6/language/modules/import
//** tddbin.options.transpileToEs5=true
// 61: modules - import
// To do: make all tests pass, leave the assert lines unchanged!

import assert from 'assert';
import { expectedType } from 'assert';
import { equal } from 'assert';
import { deepEqual } from 'assert';
import { notEqual } from 'assert';
import { equal as myEqual } from 'assert';
import { default as myAssert } from 'assert';

describe('use `import` to import functions that have been exported (somewhere else)', function() {
  describe('the import statement', function() {
    it('is only allowed on the root level', function() {
      // Try to comment this out, it will yell at you!
      // import assert from 'assert';
    });
    it('import an entire module using `import <name> from "<moduleName>"`', function() {
      const expectedType ='function'
      assert.equal(typeof assert, expectedType);
    });
  });
  describe('import members', function() {
    it('import a single member, using `import {<memberName>} from "module"`', function() {
      assert.strictEqual(equal, assert.equal);
    });
    describe('separate multiple members with a comma', function() {
      it('`deepEqual` from the assert module', () => {
        assert.strictEqual(deepEqual, assert.deepEqual);
      });
      it('`notEqual` from the assert module', () => {
        assert.strictEqual(notEqual, assert.notEqual);
      });
    });
  });
  describe('alias imports', function() {
    it('using `member as alias` as memberName', function() {
      assert.strictEqual(myEqual, assert.equal);
    });
    it('rename the default export of a module, using `default as alias` as memberName', function() {
      assert.strictEqual(myAssert, assert);
    });
  });
});
