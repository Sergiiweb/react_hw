import React from "react";
import {carsService} from "../../services";
import {Car} from "./Car/Car";

class Cars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        };
    }

    componentDidMount() {
        carsService.getAll().then(({data}) => this.setState({data}));
    }

    render() {
        const {data} = this.state;
        return (
            <div>
                {data.map(car=><Car key={car.id} car={car}/>)}
            </div>
        )
    }
}

export {
    Cars
};