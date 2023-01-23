import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css"
// import logos from "./logos.jsonc"
/* // */ const logos = {
/* // */     "folder": "/favicon.ico",
/* // */     "": "/favicon.ico", // no extension

/* // */     ".html": "/favicon.ico"
/* // */ }

// import fs from "fs";
// import path from "path"

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
    return (
        <div>
            <h1>Index of {decodeURIComponent(window.location.pathname)}</h1>
            <br/>
            <hr/>
            <Files/>
        </div>
    );
}

const Files = () => {
    return (
        <div>
            <File path={/* get this somehow */"./index.html"} />
            <File path="./guh" />
            <File path="./the.file" />
        </div>
    );
}

const File = (props) => {
    const extension = props.path.match(/\.\w+$/);
    let src;
    if (/* it's a folder */false) {
        src = logos.folder;
    }

    if (extension in logos) {
        src = logos[extension];
    } else {
        src = logos[""];
    }

    return (
        <div class="file">
            <img src={src} alt={props.path.match(/[^/]+$/)} />
            <a href={props.path}>{props.path.match(/[^/]+$/)}</a>
        </div>
    )
}

root.render(<App />);