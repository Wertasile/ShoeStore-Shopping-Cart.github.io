const shoppingcartbutton = document.getElementById('shopping-cart-button')
var totalprice = 0;


//---------------------------------------------------------------------------TO HIDE/SHOW SIDEBAR-------------------------------------------------------------------------------------------//
shoppingcartbutton.addEventListener('click', () => {
    const shoppingcart = document.getElementById('shopping-cart-side-bar')
    

    if (shoppingcart.style.width === "0px") {
        shoppingcart.style.width = "350px"
        
    }
    else {
        shoppingcart.style.width = "0px"
        
    }
    
})

//---------------------------------------------------------------------------ADDING ITEMS TO CART-------------------------------------------------------------------------------------------//
var quantity = [1,1,1,1]
const addtocart = document.getElementsByClassName('add-to-cart') //getting all grid-items with class add-to-cart (add to cart button)
console.log(addtocart)

for(let i=0;i<addtocart.length;i++){
    
    addtocart[i].addEventListener('click', (e) => {         //looping through the addtocart collection and adding even listener to every button
        console.log("button clicked at index;",i)
        console.log(addtocart[i].classList[1])
        const griditem = addtocart[i].closest('.grid-item')              //acquire the griditem curresponding to  clicked buttton
        const imagesrc = griditem.querySelector('img').src               //acquire url of griditem
        const itemname = griditem.querySelector('.name').textContent     //acquire name of griditem
        const cost = griditem.querySelector('.cost').textContent           //acquire cost of griditem
        
        //this is what runs if an item in grid has status clicked , which is applied
        //when item is first added to cart, to jsut increase quantity of item
        if (addtocart[i].classList[1]==="clicked"){
            quantity[i]++
            console.log(quantity[i])
            const a = document.getElementById(i)
            const quantitycontainer = a.getElementsByClassName('quantity-div')
            quantitycontainer[0].textContent =quantity[i]
 
        }
        
        //if item being added for first time
        else{
            

            const cartgrid = document.getElementById('side-bar-cart-grid') //acquire/locate the grid
        
            const cartgriditem = document.createElement('div')             //create div/grid item element
            cartgriditem.style.textAlign = 'center'

            cartgriditem.classList.add("twocolumngrid")                     //converted the grid item into a container containing 2 grid items

            const cartgriditemleft = document.createElement('div')
            
            const cartgriditemimg = document.createElement('img')          //create img element
            
            cartgriditemimg.src = imagesrc                                 //setting src/adding url for img

            const cartgriditemright = document.createElement('div')
            cartgriditemright.setAttribute('id',i)
            
            const shoesimgcontainer = document.createElement('div')
            shoesimgcontainer.append(cartgriditemimg)

                //create a quantity property for each element!!!!
            const shoesnamecontainer = document.createElement('div')
            shoesnamecontainer.append(itemname)

            const shoescostcontainer = document.createElement('div')
            shoescostcontainer.append(" QR "+ cost)

            
            const quantitycontainer = document.createElement('span')
            quantitycontainer.classList.add('quantity-div')
            const quantityText = document.createElement('span')
            quantityText.classList.add('quantity')
            quantityText.textContent = quantity[i]
            quantitycontainer.appendChild(quantityText)

            const quantitybutton = document.createElement('div')
            const minusbuttoncontainer = document.createElement('span')
            minusbuttoncontainer.classList.add('minus')
            minusbuttoncontainer.textContent = ' - '
            const plusbuttoncontainer = document.createElement('span')
            plusbuttoncontainer.classList.add('plus')
            plusbuttoncontainer.textContent = ' + '
            const deletebutton = document.createElement('div')
            deletebutton.classList.add('material-symbols-outlined')
            deletebutton.textContent = 'delete'

            quantitybutton.append(minusbuttoncontainer)
            quantitybutton.append(quantitycontainer)
            quantitybutton.append(plusbuttoncontainer)
            quantitybutton.classList.add('quantity-button') 

            cartgriditemright.append(shoesnamecontainer)
            cartgriditemleft.append(shoescostcontainer)
            
            cartgriditemright.append(quantitybutton)
            cartgriditemright.append(deletebutton)
            cartgriditemleft.append(shoesimgcontainer)
            cartgriditem.append(cartgriditemleft)
            cartgriditem.append(cartgriditemright)

            cartgrid.append(cartgriditem)

            addtocart[i].classList.add('clicked')

            minusbuttoncontainer.addEventListener('click', () => {
                console.log('hi')
                quantity[i]--
                const quan = cartgriditem.getElementsByClassName('quantity-div')
                console.log(quan)
                quan[0].textContent =quantity[i]
                totalprice = totalprice - cost
                document.getElementById('total-cost').textContent = totalprice
    
            })

            plusbuttoncontainer.addEventListener('click', () => {
                console.log('hi')
                quantity[i]++
                const quann = cartgriditem.getElementsByClassName('quantity-div')
                console.log(quann)
                quann[0].textContent = quantity[i]
                totalprice = totalprice + parseFloat(cost)
                document.getElementById('total-cost').textContent = totalprice
    
            })

            deletebutton.addEventListener('click',() => {
                const costbyitem = parseFloat(cost) * parseFloat(quantity[i]) 
                quantity[i] = 1
                totalprice = totalprice - parseFloat(costbyitem)
                document.getElementById('total-cost').textContent = totalprice
                cartgriditem.remove()
                addtocart[i].classList.remove('clicked')

            })
   
        }

        totalcostcontent= document.getElementById('total-cost')
        totalprice+=parseFloat(cost)
        totalcostcontent.textContent = totalprice

        
    })
}



function kids(){
    
    const women = document.querySelector('#women')
    const kids = document.querySelector('#kids')
    const men = document.querySelector('#men')
    
    if (kids.style.maxHeight==="" || kids.style.maxHeight === '0px'){
        men.style.maxHeight="0px"
        women.style.maxHeight="0px"
        kids.style.maxHeight="700px"
    }
    else if(kids.style.maxHeight==="700px"){
        kids.style.maxHeight="0px"
    }
}

function women(){
    
    const women = document.querySelector('#women')
    const kids = document.querySelector('#kids')
    const men = document.querySelector('#men')
    
    if (women.style.maxHeight==="" || women.style.maxHeight === '0px'){
        men.style.maxHeight="0px"
        kids.style.maxHeight="0px"
        women.style.maxHeight="700px"
    }
    else if(women.style.maxHeight==="700px"){
        women.style.maxHeight="0px"
    }
}

function men(){
    
    const women = document.querySelector('#women')
    const kids = document.querySelector('#kids')
    const men = document.querySelector('#men')
    
    if (men.style.maxHeight==="" || men.style.maxHeight === '0px'){
        women.style.maxHeight="0px"
        kids.style.maxHeight="0px"
        men.style.maxHeight="700px"
    }
    else if(men.style.maxHeight==="700px"){
        men.style.maxHeight="0px"
    }
}

const clearcartbutton = document.getElementById('clear-cart')

clearcartbutton.addEventListener('click', () => {
    quantity=[1,1,1,1]
    totalprice = 0
    document.getElementById('total-cost').textContent = 0
    document.getElementById('side-bar-cart-grid').textContent = ''
    const addtocartbuttons = document.getElementsByClassName('add-to-cart')
    for(let k=0;addtocartbuttons.length;k++){
        addtocartbuttons[k].classList.remove('clicked')
    }
    
    
})



