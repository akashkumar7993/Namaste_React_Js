/*
*<div id="parent">
*       <div id="child">
*           <h1>Nested html structure using react</h1>
*       </div>
*</div>
*
*
*/

const parent = React.createElement("div", {id: "parent"}, 
React.createElement("div", {id: "child"}, 
React.createElement("h1", {}, "Nested html structure using react")
)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);