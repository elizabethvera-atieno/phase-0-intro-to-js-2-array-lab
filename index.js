// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(){
    cats.push('Ralph')
}

function destructivelyPrependCat(){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(){
    const newcat = [...cats, "Broom"]
    return newcat
}

function prependCat(){
    const prepCat = ['Arnold', ...cats]
    return prepCat
}

function removeLastCat(){
   let removeLast =  [...cats] 
   removeLast .splice(-1)
   return removeLast
}

function removeFirstCat(){
    let removeFirst = [...cats]
    removeFirst.splice(0,1)
    return removeFirst
}
removeFirstCat()
