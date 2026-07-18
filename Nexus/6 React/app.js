const element = React.createElement("h1",{},"hello world..!");

// OldReact(17)
// ReactDOM.render(element,document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);