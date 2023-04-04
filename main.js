var form=document.getElementById("item-add");
var itemList = document.getElementById('item-List');
form.addEventListener('submit', addItem);
itemList.addEventListener('click',buyItem);
function myFunction() {
    

    let size=localStorage.length;
    //console.log(size);
    for(let i=0; i<size; i++) {
        let newObject = window.localStorage.getItem(localStorage.key(i));
        //console.log(newObject);

    newObject=(JSON.parse(newObject));
    let name=newObject.name;
    let desc=newObject.description;
    let price=newObject.price;
    let quantity=newObject.quantity;
   // console.log(name);
    var li=document.createElement('li');
    li.className=name;
    li.appendChild(document.createTextNode(name+"   -   "+desc+"      "+price+"      "+quantity));
    var space = document.createTextNode("\u00A0");
    li.appendChild(space);
    var space = document.createTextNode("\u00A0");
    li.appendChild(space);var space = document.createTextNode("\u00A0");
    li.appendChild(space);var space = document.createTextNode("\u00A0");
    li.appendChild(space);var space = document.createTextNode("\u00A0");
    li.appendChild(space);
    var buy= document.createElement('button');
    buy.className="btn";
    buy.value="buy-item";
    buy.innerHTML="buy";
    li.appendChild(buy);
    //console.log(li);
   itemList.appendChild(li);
    }
}





function addItem(e){
    e.preventDefault();
    //get input
    var newItem= document.getElementById('item1').value;
    var newItem2= document.getElementById('item2').value;
    var newItem3= document.getElementById('item3').value;
    var newItem4= document.getElementById('item4').value;

    var li=document.createElement('li');
    li.className=newItem;
    li.appendChild(document.createTextNode(newItem+"   -   "+newItem2+"      "+newItem3+"      "+newItem4));
    var buy= document.createElement('button');
    buy.className="btn";
    buy.value="buy-item";
    buy.innerHTML="buy";
    var obj={
        name:newItem,
        description:newItem2,
        price:newItem3,
        quantity:newItem4
    };
    var data = JSON.stringify(obj);
	localStorage.setItem(newItem,data);
   // console.log(localStorage.length);
    //console.log(obj);
    //console.log(li);
    var space = document.createTextNode("\u00A0");
    li.appendChild(space);
    var space = document.createTextNode("\u00A0");
    li.appendChild(space);var space = document.createTextNode("\u00A0");
    li.appendChild(space);var space = document.createTextNode("\u00A0");
    li.appendChild(space);var space = document.createTextNode("\u00A0");
    li.appendChild(space);
    li.appendChild(buy);
   itemList.appendChild(li);

}

function buyItem(e){
   // console.log("jedsbnc");
    if(e.target.classList.contains('btn')){
        var li =e.target.parentElement;
       // var element = document.getElementById("li");
        //console.log("key");

        let key=li.className;
        let obj=window.localStorage.getItem(key);
        obj=(JSON.parse(obj));
        let quant= obj.quantity-1;
        if(quant>=0){
        //console.log(quant);
        let newobj={
            name:obj.name,
            description:obj.description,
            price:obj.price,
            quantity:quant,
        }
        var buy= document.createElement('button');
    buy.className="btn";
    buy.value="buy-item";
    buy.innerHTML="buy";
        li.innerHTML=obj.name+" "+obj.description+" "+newobj.price+" "+quant;
        var space = document.createTextNode("\u00A0");
        li.appendChild(space);
        var space = document.createTextNode("\u00A0");
        li.appendChild(space);var space = document.createTextNode("\u00A0");
        li.appendChild(space);var space = document.createTextNode("\u00A0");
        li.appendChild(space);var space = document.createTextNode("\u00A0");
        li.appendChild(space);
        li.appendChild(buy);
        var data = JSON.stringify(newobj);
	localStorage.setItem(obj.name,data);
       }
    }
       
       
  }
 

