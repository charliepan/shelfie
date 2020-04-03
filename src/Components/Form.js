import React, { Component } from 'react'

export default class Form extends Component {
    constructor(){
        super();
        this.state={
            img_url:'',
            product_name:'',
            price: 0
        }
    }

    cancelInputs = () =>{
        this.setState({img_url:'', product_name:'',price:0});
    }

    handleChange = (target)=>{
        const {name, value} = target;
        this.setState({[name]:value});
    }

    render() {
        const {img_url,product_name,price} = this.state;
        return (
            <div>
                <input value={img_url} name='img_url' onChange={(e)=>this.handleChange(e.target)} type="text" placeholder='Image url'/>
                <input value={product_name} name='product_name' onChange={(e)=>this.handleChange(e.target)} type="text" placeholder='Product Name'/>
                <input value={price} name='price' onChange={(e)=>this.handleChange(e.target)} type="text" placeholder='Price'/>
                <button onClick={this.cancelInputs}>Cancel</button><button>Add to Inventory</button>
            </div>
        )
    }
}
