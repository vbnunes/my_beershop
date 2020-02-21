import React, { Component } from 'react';
import "./BeerItem.css";

export default class BeerItem extends Component {
    render() {
        return (
            <div className="card-item">
                <header className="card-header">
                    <img 
                        src="https://www.fastshop.com.br/wcsstore/FastShopCAS/Marketplace/_BC_Bebidas_e_Comidas/BC/2117402238/2117402238_PRD_447_1.jpg"
                        alt="imagem_cerveja_modelo"
                        className="beer-img"
                    />                    
                </header>
                <div className="card-content">
                    <div className="content-header">
                        <span className="header-content-title">Modelo Negra</span>
                        <span className="header-content-packsize">12 Unit • 33oz Bottle</span>
                        <span className="header-content-price">RD$32.00/Unit</span>
                    </div>
                    <div className="content-body">
                        <span className="body-content-promotion-text">Buy 3 get 1 free</span>
                        <a href="#" className="body-details-text">View details</a>
                    </div>
                </div>
                <footer className="card-footer">
                    <button className="circle-button"> - </button>
                    <input className="input-footer" value="0"></input>                                      
                    <button className="circle-button"> + </button>
                    <button className="retangle-button"> Add </button>
                </footer>
            </div>
        )
    }
}
