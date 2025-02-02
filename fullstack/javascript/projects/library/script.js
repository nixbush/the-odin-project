/* ------------------------------
 * Library Objects and Stuff
 */

function Book(name, author, year, synopsis, read = false) {
   this.name = name
   this.author = author
   this.year = year
   this.read = read
   this.synopsis = synopsis
}

Book.prototype.createElement = function(id) {
   const bookElem = document.createElement('li')
   bookElem.classList.add('book-card')
   bookElem.dataset.id = id
   bookElem.dataset.read = this.read

   const title = document.createElement('h2')
   title.innerText = this.name
   bookElem.appendChild(title)

   const authorAndYear = document.createElement('strong')
   authorAndYear.innerText = `${this.author} (${this.year})`
   bookElem.appendChild(authorAndYear)

   const synopsis = document.createElement('div')
   synopsis.classList.add('book-synopsis')
   /* NOTE: This is a security risk, but idgaf */
   synopsis.innerHTML = this.synopsis
   bookElem.appendChild(synopsis)

   const actionGroup = document.createElement('div')
   actionGroup.classList.add('book-action-group')
   /* NOTE: Too lazy to make all this, like ain't no way bro */
   actionGroup.innerHTML = `
      <button class="book-action-button" id="book-action-read">
         <img src="/assets/${this.read ? 'menu_book' : 'book_2'}.svg" alt="" class="icon" />
         <p>${this.read ? 'Reading' : 'Closed'}</p>
      </button>
      <button class="book-action-button critical-action" id="book-action-delete">
         <img src="/assets/delete.svg" alt="" class="icon" />
         <p>Delete</p>
      </button>
   `

   bookElem.appendChild(actionGroup)
   return bookElem
}

let libraryCollection = {}
const bookList = document.querySelector('.book-list')
let bookID = 0

function libraryCollectionAdd(book) {
   libraryCollection[bookID] = book
   const bookElem = book.createElement(bookID)

   bookElem.querySelector('#book-action-read').addEventListener('click', function() {
      if (bookElem.dataset.read === 'false') {
         this.querySelector('p').innerText = 'Reading'
         this.querySelector('img').src = '/assets/menu_book.svg'
         bookElem.dataset.read = true
         book.read = true
      } else {
         this.querySelector('p').innerText = 'Closed'
         this.querySelector('img').src = '/assets/book_2.svg'
         bookElem.dataset.read = false
         book.read = false
      }
   })

   bookElem.querySelector('#book-action-delete').addEventListener('click', function() {
      delete libraryCollection[bookID]
      bookList.removeChild(bookElem)
   })

   bookList.appendChild(bookElem)
   bookID += 1
}

/* ------------------------------
 * Button Functionality
 */
const createBookModal = document.querySelector('.modal-create-book')
createBookModal.querySelector('.create-book-submit').addEventListener('click', e => {
   e.preventDefault()

   const form = createBookModal.querySelector('.create-book-form')
   const data = new FormData(form)
   const book = new Book(
      data.get('title'),
      data.get('author'),
      data.get('year'),
      form.querySelector('#synopsis').value,
      data.get('read') === 'on',
   )
   libraryCollectionAdd(book)
   form.reset()

   createBookModal.close()
})

const libraryActionAdd = document.querySelector('#library-action-add')
libraryActionAdd.addEventListener('click', () => {
   createBookModal.showModal()
   //libraryCollectionAdd(book)
})

const libraryActionRemove = document.querySelector('#library-action-remove')
libraryActionRemove.addEventListener('click', () => {
   libraryCollection = {}
   bookList.replaceChildren()
   bookID = 0
})
