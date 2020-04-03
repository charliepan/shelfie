import React, { Component } from 'react';
import Product from './Product';

export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            inventory: props.inventory
        }
    }
    render() {
        return (
            <div>
                Dashboard
                {
                    this.state.inventory.map((val,i)=>{
                        return <Product key={i} {...val}/>
                    })
                }
            </div>
        )
    }
}
