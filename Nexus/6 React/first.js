// Create Element through js

// IT is Consuming more space
// const header1 = document.createElement('h1');
// header1.innerHTML = "Hello World..!!";
// header1.style.backgroundColor = "green";
// header1.style.fontSize = "30px";
// header1.style.color = "white";

// const header2 = document.createElement('h2');
// header2.innerHTML = "Hello World..!!";
// header2.style.backgroundColor = "red";
// header2.style.fontSize = "30px";
// header2.style.color = "white";

// root.append(header1);
// root.append(header2);



// React: Object hoti hai(libraries bhi)
// ReactDom: ye bhi Object hoti hai


// we can create same in react 
const React ={
    
    createElement: function(tag,styles,children){
        const element = document.createElement(tag);

        if(typeof children === 'object'){
            for(let val of children)
                element.append(val);
        }
        else{
        element.innerText = children;
        }
        for(let key in styles){
            element.style[key] = styles[key];
        }
        return element;
    }
}

const ReactDom = {
    render: function(element,root){
        root.append(element);
    }
}

const header1 = React.createElement('h1',{fontSize:"50px", backgroundColor:"blue",color:"white"},"MAI HU Krish");
const header2 = React.createElement('h2',{fontSize:"50px", backgroundColor:"black",color:"white"},"I'M SHubham");

const root = document.getElementById('root');

// creating a list
const li1 = React.createElement('li',{},"Html");
const li2 = React.createElement('li',{},"CSS");
const li3 = React.createElement('li',{},"JS");

const ul = React.createElement('ul',{fontSize:"50px", backgroundColor:"blue",color:"white"},[li1,li2,li3])

ReactDom.render(header1,document.getElementById('root'));
ReactDom.render(header2,document.getElementById('root'));
ReactDom.render(ul,document.getElementById('root'));
