import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import Etalase from "../../component/Etalase/Etalase"
import "./Product.css";
import 'bootstrap/dist/css/bootstrap.min.css';
class Product extends Component {
    state = {
        listProduk: [],
        stokLama: 1,
        insertKeranjang: {
            idproduk: 1,
            nama: "",
            harga: 1,
            qty: 1,
            total: 1,
            gambar: ""
        }
    }
    handlerSimpan = this.handlerSimpan.bind(this);

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }



    handlerMasukkanKeranjang = () => {
        fetch(`http://localhost:5001/posts`, {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertKeranjang)
        })
            .then(res => {
                alert("Pesanan anda berhasil di masukkan")

            })
        // console.log(this.state.insertKeranjang);
    }

    handlerCekProduk(id) {
        fetch(`http://localhost:5001/posts?idproduk=${id}`)
            .then(response => response.json())
            .then(json => {
                if (json.length == 0) {
                    this.handlerMasukkanKeranjang()
                    this.handlerStokCount(id)
                    this.ambilDataDariServerAPI()
                } else {
                    fetch(`http://localhost:5000/data?id=${id}`)
                        .then(response => response.json())
                        .then(json => {
                            console.log(id);
                            var stok = (json[0].stok);
                            if (stok <= 0) {
                                alert("mohon maaf saat ini kami sedang kehabisan barang")
                            } else {
                                var qtyold = (json[0].qty) + 1;
                                var ids = json[0].id;
                                var idproduk = json[0].idproduk;
                                var total = (json[0].harga) * qtyold;
                                fetch(`http://localhost:5001/posts/${ids}`, {
                                    method: 'PATCH',
                                    body: JSON.stringify({
                                        qty: qtyold,
                                        total: total
                                    }),
                                    headers: {
                                        "Content-type": "application/json; charset=UTF-8"
                                    }
                                })
                                    .then(response => response.json())
                                    .then(json => {
                                        this.handlerStokCount(id);
                                        console.log(json)
                                        this.ambilDataDariServerAPI()
                                    })
                            }
                        })

                }
            })
    }

    handlerStokCount(id) {
        fetch(`http://localhost:5000/data?id=${id}`)
            .then(response => response.json())
            .then(json => {
                console.log(id);
                var stokold = (json[0].stok) - 1;
                fetch(`http://localhost:5000/data/${id}`, {
                    method: 'PATCH',
                    body: JSON.stringify({
                        stok: stokold
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                    .then(response => response.json())
                    .then(json => {
                        this.ambilDataDariServerAPI()
                    })
            })
    }

    handlerSimpan(event) {
        event.preventDefault();
        this.state.insertKeranjang.idproduk = event.target.elements.id.value;
        this.state.insertKeranjang.nama = event.target.elements.nama.value;
        this.state.insertKeranjang.harga = (event.target.elements.harga.value);
        this.state.insertKeranjang.qty = 1;
        this.state.insertKeranjang.total = (event.target.elements.harga.value);
        this.state.insertKeranjang.gambar = (event.target.elements.gambar.value);
        this.handlerCekProduk(event.target.elements.id.value)
        this.ambilDataDariServerAPI()
    }




    ambilDataDariServerAPI() {
        fetch("http://localhost:5000/data")
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listProduk: jsonHasilAmbilDariAPI
                })
            })
    }
    render() {
        return (

            <div>
                <div class="w3-main c1">
                    <div class="w3-container" style={{ marginTop: "80px" }} id="showcase">
                        <h1 class="w3-jumbo"><b>Mesin Cuci Untuk Anda</b></h1>
                        <br></br>
                        <div className="row">
                            {
                                this.state.listProduk.map(data => {
                                    // return <Etalase id={data.id} name={data.nama_produk} gambar={data.gambar} harga={data.harga} stok={data.stok} />
                                    return (
                                        <div class="col-sm-3">
                                            <form onSubmit={this.handlerSimpan}>
                                                <div class='card' style={{ padding: '10px' }}>
                                                    <img src={data.gambar} style={{ height: '170px' }} />
                                                    <h5 style={{ padding: '10px' }}>{data.nama_produk} </h5>
                                                    <p class="price">Rp.{new Intl.NumberFormat().format(data.harga)} </p>
                                                    <h5>Stok ({data.stok})</h5>
                                                    <input id="id" name="id" value={data.id} style={{ display: 'none' }} />
                                                    <input id="nama" name="nama" value={data.nama_produk} style={{ display: 'none' }} />
                                                    <input id="harga" name="harga" value={data.harga} style={{ display: 'none' }} />
                                                    <input id="stok" name="stok" value={data.stok} style={{ display: 'none' }} />
                                                    <input id="gambar" name="gambar" value={data.gambar} style={{ display: 'none' }} />
                                                    <p style={{ padding: '25px' }}>
                                                        <input type="submit" className="btn" style={{ background: '#f44336', color: 'white' }} value="Add to Cart" />
                                                    </p>
                                                </div>
                                            </form>
                                            <br></br>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Product;