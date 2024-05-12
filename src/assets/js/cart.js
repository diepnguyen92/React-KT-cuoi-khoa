console.log(123);




function increment() {
    var input = document.getElementById('quantity');
    input.value = parseInt(input.value) + 1;
  }

  function decrement() {
    var input = document.getElementById('quantity');
    var value = parseInt(input.value) - 1;
    input.value = value >= 1 ? value : 1;
  }