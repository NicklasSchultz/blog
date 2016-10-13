import React from 'react'

export default class Row extends React.Component {
    doSomething() {
        console.log('child clicked');
    }

    render() {
        const childrenWithProps = React.Children.map(this.props.children,
             (child) => React.cloneElement(child, {
               doSomething: this.doSomething
             })
        );
        return (
            <div className="grid-row">{childrenWithProps}</div>
        )
    }
}
