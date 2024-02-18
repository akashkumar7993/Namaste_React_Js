/*
*<div id="parent">
*       <div id="child">
*           <h1>Nested html structure using react</h1>
*           <h2>Nested html structure using react</h2>
*       </div>
*</div>
*
* ReactElement(object) => HTML(Browser Understands)
*/

// const parent = React.createElement("div", {id: "parent"}, 
// React.createElement("div", {id: "child"}, 
// [React.createElement("h1", {}, "Nested html structure using react"),
// React.createElement("h2", {}, "Nested html structure using react")
// ])
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// /*
//  * <div id="parent">
// *       <div id="child">
// *           <h1>Nested html structure using react</h1>
// *           <h2>Nested html structure using react</h2>
// *       </div>
//        <div id="child">
// *           <h1>Nested html structure using react</h1>
// *           <h2>Nested html structure using react</h2>
// *       </div>
// *</div>
//  * 
//  * /
 

const parent = React.createElement("div", {id: "parent"}, 
[React.createElement("div", {id: "child 1"}, 
[React.createElement("h1", {}, "Nested html structure using react"),
React.createElement("h2", {}, "Nested html structure using react")
]),
React.createElement("div", {id: "child 2"}, 
[React.createElement("h1", {}, "Nested html structure using react"),
React.createElement("h2", {}, "Nested html structure using react")
])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);