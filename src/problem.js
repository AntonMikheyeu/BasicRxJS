const btn = document.getElementById('interval')
const rxjsBtn = document.getElementById('rxjs')
const display = document.querySelector('#problem .result')

const people = [
  {name: 'Vladilen', age: 25},
  {name: 'Elena', age: 17},
  {name: 'Ivan', age: 18},
  {name: 'Igor', age: 14},
  {name: 'Lisa', age: 32},
  {name: 'Irina', age: 23},
  {name: 'Oleg', age: 20}
]

btn.addEventListener('click', () => {
  display.textContent = '';
  btn.disabled = true;
  let i = 0;
  const canDrink = [];

  const intervalId = setInterval(() => {
    if (people[i]) {
      if (people[i].age > 17) canDrink.push(people[i].name);
      display.textContent = canDrink.join(', ');

      return i++;
    }
    btn.disabled = false;

    return clearInterval(intervalId);
  }, 1000);
});
