

  function myFunc(number, ...manyMoreArgs) {
    console.log('number', number);
    console.log('manyMoreArgs', manyMoreArgs);
  }
  
  myFunc('one', 'two', 'three');

  function myFunc(...manyMoreArgs) {
    console.log(manyMoreArgs.length);
    console.log('manyMoreArgs', manyMoreArgs);
  }
  
  myFunc('one', 'two', 'three');