// Pro-Tips

// Shortcut functions for `.querySelector()` and `.querySelectorAll()`
function q(query, node) {
  return (node || document).querySelector(query);
}

function qs(query, node) {
  return (node || document).querySelectorAll(query);
}


/* I was trying to figure out what to do ---- it is wrong but interesting*
qs('.doggo.fighter').forEach(node => {
const target = q('#larry-the-lion')
node.addEventListener('mousedown', e => {
const currentTarget = event.currentTarget;
currentTarget.prepend(target);
})
})
 *
 qs('.doggo.fighter').forEach(node => {
 let currentTarget = '';
 node.addEventListener('click', e => {
 let selected = q('.selected');
 if (selected) {
 console.log(currentTarget);
 selected.classList.remove('selected');
}
currentTarget = e.currentTarget;
currentTarget.classList.add('selected');
});
});
 */

/**
 *
 */
qs('.doggo.fighter').forEach(node => {
  let currentTarget = '';
  let selected = '';
  node.addEventListener('click', e => {
    selected = q('.selected');
    if (selected) {
      // console.log([...selected.classList]);
      if ([...selected.classList].includes('doggo', 'fighter')) {
        console.log([...selected.classList])
        selected.classList.remove('selected');
      } else {
        console.log('this:', this);
      }
    }
    currentTarget = e.currentTarget;
    currentTarget.classList.add('selected');
  });
  node.addEventListener('click', e => {
  });
});

let currTarget = '';

qs('.teams .title').forEach('click', node => {
  currTarget = node.currTarget;
  if (currTarget) {

  }

}
/**
 *
let selectedDoggo = '';
let counter = 0;
qs('.doggo.fighter').forEach(node => {
  node.addEventListener('click', event => {
    selectedDoggo = event.currentTarget;
    qs('.doggo.fighter').forEach(node => {
      node.classList.remove('selected');
    });
    selectedDoggo.classList.add('selected');
  })
});

qs('.teams .title').forEach(node => {
  node.addEventListener('click', event => {
    let team = event.currentTarget.nextElementSibling;
    team.appendChild(selectedDoggo);
    selectedDoggo.classList.remove('selected');
  })
});
*/







//
