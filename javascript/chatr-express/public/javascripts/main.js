// Write chatr code here!
// Write chatr code here!


function qS (query, node) {
  return (node || document).querySelector(query);
}

function qSA (query, node) {
  return (node || document).querySelectorAll(query);
}

// AJAX HTTP Requests

// Using Fetch

// Making a GET request

// chatr-express contains CRUD for a message model
// You make requests to:
// - messages#index GET /messages
// - messages#create POST /messages
// - message#update PATCH /messages/:id
// - message#destroy DELETE /messages/:id

// By default, fetch will use the GET verb.
// It takes a URL as its first argument.

// fetch('/messages')
//   .then(res => console.log(res))

// The `response` is returned from the server. It's object
// that contains the http headers, the status, the status message
// the body (or content of the response), the url, etc.

// The `headers` property is very similar to the `FormData` object.
// We can do the following to read from it:

// fetch('/messages')
//   .then(
//     res => console.log(Array.from(res.headers.entries()))
//   );

// To read the data from the response's body, you must use a method to
// parse it. The `.text()` method will consider the body as text while
// the `.json()` method will consider it as JSON. In most situations,
// you will use `.json()`.

// examples:

// To console.log the response body as text do

// fetch('/messages')
//   .then(res => res.text())
//   .then(console.log)

// To console.log the response body as json do

// fetch('/messages')
//   .then(res => res.json())
//   .then(console.log)

// To display tabular like data structures as a table in Chrome

// fetch('/messages')
//   .then(res => res.json())
//   .then(console.table)

// console.table() will display arrays of objects as a table

// Making a POST request

// Unlike a GET request, we need specify options for a fetch when
// making a POST request.

// To do this, fetch can take an object as a second argument.
// Inside, we can specify a `method` property where its value
// is an HTTP verb (which you should write in uppercase).
/**
 *
fetch(
	'/messages',
  {
  	method: 'POST',
    // Just like we did with Postman, specify the content
    // in the headers if you want to send JSON.
  	headers: { 'Content-Type': 'application/json'},
    // Any JS data that should be sent as JSON should first
    // be stringified.
  	body: JSON.stringify({content: 'Stuff stuff'})
  }
)
*/


// fetch(
//   '/messages/30',
//   {
//     method: 'DELETE'
//   }
// )

// AJAX Helpers
function getMessages () {
  return fetch(`/messages`)
    .then(res => res.json());
}

function flagMessage (id, flagged) {
  console.log(flagged)
  return fetch(`/messages/${id}`,
    {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({flagged})
    }
  )
}


function createMessage (message) {
  return fetch(
    `/messages`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    }
  );
}


function destroyMessage (id) {
  return fetch(
    `/messages/${id}`,
    {
      method: 'DELETE'
    }
  );
}

// Render Functions
/**
<a data-id="${message.id}" data-flagged="${message.flagged}"
   class="flag-button" href>${message.flagged ? 'Unflag' : 'Flag'}
</a>
 *
 */
function renderMessages (messages = []) {
  // return messages.filter(message => filter ? message.flagged : true)
  return messages.filter(message =>
    (filter ? message.flagged : true)
    && (searchTerm.length === 0
      ? true
      : message.username && message.username.includes(searchTerm))
  )
    .map(message => `
      <li>
        <p>
          <strong>${message.id}- </strong>
          <strong>${message.username || ''}: </strong>
          ${message.content}
        </p>
        <a data-id="${message.id}" class="delete-button" href>Delete</a>
        <i data-id="${message.id}"
           data-flagged="${message.flagged}"
           class="flag-button fa fa-lg fa-flag${message.flagged ? '' : '-o' }">
        </i>
      </li>
    `).join('');
}



// Write DOM manipulation code inside this event listener
document.addEventListener('DOMContentLoaded', () => {
  const messagesUL = qS('ul#messages');
  const newMessageForm = qS('form#new-message');
  const filterButton = qS('button#filter');
  const searchBar = qS('input#search');

  window.searchTerm = '';
  searchBar.addEventListener('keyup', event => {
    searchTerm = event.target.value;
    refreshMessages();
  });


  window.filter = false;
  filterButton.addEventListener('click', event => {
    filter = !filter
    filterButton.classList.toggle('selected');
    refreshMessages();
  })
  function refreshMessages () {
    getMessages()
    .then(messages => {
      messagesUL.innerHTML = renderMessages(messages);
    });
  }

  refreshMessages();
  // Reload messages list with new messages every 500ms
  setInterval(refreshMessages, 500);

  // getMessages()
  //   .then(messages => {
      // messages.forEach(message => {
        // const li = document.createElement('li');
        // li.innerHTML = message.content;
        // With this approach, we change the DOM with every iteration.
        // Doing changes to the DOM can be very expensive. It's much
        // better to build all the changes you want to do outside of
        // the DOM and modify the DOM once instead.
        // messagesUL.appendChild(li);
      // })
    //   messagesUL.innerHTML = renderMessages(messages);
    // });

  newMessageForm.addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget;
    const fData = new FormData(form);

  createMessage({content: fData.get('content'), username: fData.get('username')})
    // update all the time
    .then(refreshMessages)
    // clear the field after posting
    .then(() => form.reset());
  });

  // qSA('.delete-button').forEach(node => {
  //   node.addEventListener('click', event => {
  //     event.preventDefault();
  //     console.log('Delete clicked!');
  //   })
  // })

    // The `.delete-button` are not on the page initially and once
    // they appear they will be repeatedly replaced. Yet we need to
    // be able to listen to clicks on the delete buttons.

    // It would be a bad strategy to the event listeners everytime
    // the delete buttons created. This impact performance and use
    // a lot of memory.

    // Instead, we'll listen for clicks on an ancestor of
    // the delete button that is always on the page from the beginning.
    // Then, we'll check that the target is the delete button.

    // This is called "Event Delegation".
    messages.addEventListener('click', event => {
      const target = event.target;

      if (target.matches('.delete-button')) {
        event.preventDefault();
        const messageId = target.getAttribute('data-id');
        // console.log('Delete clicked!');
        destroyMessage(messageId)
          .then(refreshMessages);
      }
      if (target.matches('.flag-button')) {
        event.preventDefault();
        const messageId = target.getAttribute('data-id');
        const flagged = "true" === target.getAttribute('data-flagged');
        flagMessage(messageId, !flagged)
          .then(refreshMessages);
      }
    })
  });


  // CHAT-BATTLE EXERCISES!!!

  // function createMessage (text) {
  //   return fetch(
  //    '/messages/',
  //     {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json'},
  //       body: JSON.stringify({body: text})
  //     }
  //   );
  // }
  //
  // function replaceMessage (id, text) {
  //   return fetch(
  //     `/messages/${id}`,
  //     {
  //       method: 'PATCH',
  //       headers: { 'Content-Type': 'application/json'},
  //       body: JSON.stringify({body: text})
  //     }
  //   )
  // }
  //
  // function deleteMessage (id) {
  //   return fetch(
  //     `/messages/${id}`,
  //     {
  //       method: 'DELETE',
  //     }
  //   )
  // }
  //
  // function copyMessage (id) {
  //   return fetch(
  //     `/messages`,
  //   )
  //     .then(res => res.json())
  //     .then(messages => {
  //       const message = messages.find(m => m.id === id);
  //       return createMessage(message.body);
  //      })
  // }

  /*
  createMessage(`
    <style>
      @keyframes Spin {
        from {
          transform: rotateZ(0deg)
        }

        to {
          transform: rotateZ(360deg)
        }
      }

      img {
        animation: 5s linear 0s infinite Spin;
      }
    </style>
  `)
  */

  /*
  createMessage(`
  <script>
    document.querySelectorAll('td').forEach(node => {
      node.innerHTML = node.innerHTML.replace(/hello/, 'konnichiwa');
    })
  </script>
  `)
  */








  // bump
