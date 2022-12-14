const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'Saudi Aramco', 'Microsoft', 'Tencent', 'Monsanto', 'Alibaba', 'Chipotle' ];
const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest', 'The Catholic Church', 'Boomers'];

const favorites = [];
//const random1 = Math.floor((Math.random() * startupX.length));
//const random2 = Math.floor((Math.random() * startupY.length));

console.log('A startup that is ' + startupX[0] + ', but for ' + startupY[0]);



window.onload = function(){
    let createButton = document.getElementById('create');
    let favoriteButton = document.getElementById('save');
    let printButton = document.getElementById('print');
    let xForY = document.getElementById('xForY');
    let favoritesNode = document.getElementById('favorites');
    let clearButton = document.getElementById('clear');
    
    createButton.onclick = function(){
        document.getElementById('errorMessage').innerHTML =''
        let random1 = Math.floor((Math.random() * startupX.length));
        let random2 = Math.floor((Math.random() * startupY.length));
        xForY.innerHTML = '';
        let newText = document.createTextNode(`A startup that is ${startupX[random1]}, but for ${startupY[random2]}`)
        xForY.appendChild(newText)
        
        
    }

    favoriteButton.onclick = function(){
        let check = xForY.innerHTML.toLowerCase();
        favorites.forEach(element => {
            if (element.toLowerCase() == check){
                check = null;
            }
        });
        if (check){
            favorites.push(xForY.innerHTML)
        }
        else{
            document.getElementById('errorMessage').innerHTML ='This Item was already liked.'
        }       
    };

    printButton.onclick = function(){
        document.getElementById('errorMessage').innerHTML =''
        while (favoritesNode.firstChild){
            console.log(favoritesNode.firstChild);  //remove this before submission
            favoritesNode.removeChild(favoritesNode.firstChild);
        }

        let newList = document.createElement('ul');
        favoritesNode.appendChild(newList);
        favorites.forEach(element =>{

            let newChild = document.createElement('li');
            newChild.innerHTML = element
            newList.appendChild(newChild);
        })
    }


    clearButton.onclick = function(){
        document.getElementById('errorMessage').innerHTML =''
        if (confirm('Are you SUPER MARIO SURE you want to clear the Favorites Cache?')){
            favorites.length = 0;
            while (favoritesNode.firstChild){
                console.log(favoritesNode.firstChild);  //remove this before submission
                favoritesNode.removeChild(favoritesNode.firstChild);
            }
        }
        else{
            //pass
        }
    }

    
}
