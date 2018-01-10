
const $titleHeader = $('h1.title')
function fadeOut (node, waitTime) {
  return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          resolve(node.fadeOut(waitTime));
        }
      );
  });
}

function fadeIn (node, waitTime) {
  return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          resolve(node.fadeIn(waitTime));
        }
      );
  });
}

fadeOut($titleHeader, 1000)
  .then(function (node) { return fadeIn(node, 2000) })
  .then(function (node) { return fadeOut(node, 1500) })
  .then(function (node) { return fadeIn(node, 2000) })
  .then(function (node) { return fadeOut(node, 1500) })
  .then(function (node) { return fadeIn(node, 2000) })
