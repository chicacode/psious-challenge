import React, { Component } from 'react';
import '../assets/styles/components/Item.scss';
import { items } from '../utils/data';

class Item extends Component {


    state = { items: items }

    renderItems = (items, i) => {
        return <div key={i} className="items-description-container" >
            {items.name}
        </div>
    }

    render() {
        return (
            <div className="items">
                <div className="items-container">
                    <div className="items-description">{this.state.items.map(this.renderItems)}</div>
                </div>
            </div>
        )
    }

}

export default Item;