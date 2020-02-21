import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import profil from './assets/profil.PNG';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
const Hello = () => {
    return (
        <div className="container">
            <br></br>
            <div className="row">
                <div className="col-sm-9">
                    <table className="table table-bordered">
                        <tr><td colSpan="4"><center>Biodata</center></td></tr>
                        <tr>
                            <td>Nama</td>
                            <td>Alenovan</td>
                        </tr>
                        <tr>
                            <td>Kelas</td>
                            <td>TI-3C</td>
                        </tr>
                        <tr>
                            <td>NIM</td>
                            <td>1741720065</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>novannanega@gmail.com</td>
                        </tr>
                        <tr>
                            <td>No Hp</td>
                            <td>081334367717</td>
                        </tr>
                        <tr>
                            <td>Alamat</td>
                            <td>Kota Wisata Batu</td>
                        </tr>
                        <tr>
                            <td>Keterangan</td>
                            <td>Kosong</td>
                        </tr>
                    </table>
                </div>
                <div className="col-sm-3">
                    <table className="table table-bordered">
                        <tr><td colSpan="4"><center>Profile</center></td></tr>
                        <tr>
                            <td><img src={profil} /></td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>
    )

}
ReactDOM.render(<Hello />, document.getElementById('root'));
serviceWorker.unregister();
