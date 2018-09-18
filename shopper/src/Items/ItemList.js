import React from 'react';

class ItemList extends React.PureComponentComponent {
   static propTypes={
       items:PropTypes.array.isRequired
   }

    render() { 
        return (  
            <ul>
                {this.props.items.map(item=>
                <li key={item.id}>{item.value}</li>
                )}
            </ul>
        );
    }
}
 
export default ItemList;