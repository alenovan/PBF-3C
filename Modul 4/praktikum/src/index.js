import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogPost from "./container/BlogPost/BlogPost"

ReactDOM.render(<BlogPost />, document.getElementById("content"));
serviceWorker.unregister();