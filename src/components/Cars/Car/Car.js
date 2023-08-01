import React from "react";

class Car extends React.Component {

    render() {
        const {car} = this.props;
        return (
            <div>
                <div>{car.id}</div>
                <div>{car.brand}</div>
                <div>{car.price}</div>
                <div>{car.year}</div>
                <hr/>
            </div>
        )
    }
}

export {
    Car
}