function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n){
  var num_list = document.querySelectorAll("ul.ranked-list li")

  for (let i = 0; i < num_list.length; i++){
    num_list[i].innerHTML = parseInt(num_list[i].innerHTML) + n
  }
}

function deepestChild(){
  var element_list = document.getElementById("grand-node").querySelector('#grand-node div div div div')
  return element_list
  var current = []

  for (let i = 0; i < element_list.length + 1; i++){
    if (element_list[i]){
      current.push(document.querySelector(element_list[i]))
      if (!document.querySelector(element_list[i+1])){
        return current
        }
      }
    }
  }
