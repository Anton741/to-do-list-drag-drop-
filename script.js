const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener("dragstart", dragstart)
item.addEventListener("dragend", dragend)

function dragstart(event) {
  setTimeout(()=>event.target.classList.add('overhide'), 0)
  event.target.classList.add('item-drag')
}

function dragend(event) {
  event.target.className = 'item'
}

placeholders.forEach(placeholder => {
  placeholder.addEventListener('dragover', dragover)
  placeholder.addEventListener('dragenter', dragenter)
  placeholder.addEventListener('dragleave', dragleave)
  placeholder.addEventListener('drop', dragdrop)
})

function dragover(event) {
  event.preventDefault()
}

function dragenter(event) {
  event.target.classList.add("placeholder-hover")
}

function dragleave(event) {
  event.target.classList.remove("placeholder-hover")
}

function dragdrop(event) {
  event.target.append(item)
  console.log(event);
  event.target.classList.remove("placeholder-hover")
}