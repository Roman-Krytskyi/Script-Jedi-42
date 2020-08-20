// http://www.codewars.com/kata/this-is-a-problem
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    return this.name = first + ' ' + last;
}

// https://www.codewars.com/kata/this-is-an-other-problem
function NamedOne(first, last) {
    this.firstName = first;
    this.lastName = last;
    
    Object.defineProperty(this, "fullName", {
      get: function() {
        return this.firstName + ' ' + this.lastName;
      },
      set: function(value) {
        var nameSplit = value.split(' ');
        if (nameSplit.length > 1) {
          this.firstName = nameSplit[0];
          this.lastName = nameSplit[1];
        }
      }
    });
}
