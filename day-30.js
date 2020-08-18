// http://www.codewars.com/kata/santaclausable-interface
function isSantaClausable(obj) {
  if (typeof obj.sayHoHoHo !== 'function') return false;
  if (typeof obj.distributeGifts !== 'function') return false;
  if (typeof obj.goDownTheChimney !== 'function') return false;
  return true;
}

// http://www.codewars.com/kata/cylon-evolution
function Cylon(model) {
  this.model = model;
  this.attack = function () {
    return 'Destroy all humans!';
  };
}

function HumanSkin(model) {
  this.__proto__ = new Cylon(model);
  this.infiltrate = function () {
    return 'Infiltrate the colonies';
  };
}

// https://www.codewars.com/kata/588a00ad70720f2cd9000005
coming soon
