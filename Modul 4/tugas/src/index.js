import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import BlogPost from './minggu4-5/container/BlogPost/BlogPost';
import MahasiswaPost from './minggu4-5/container/MahasiswaPost/MahasiswaPost';

ReactDOM.render(<MahasiswaPost />, document.getElementById('content'));

serviceWorker.unregister();
