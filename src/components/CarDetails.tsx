import {FC, PropsWithChildren} from "react";

import {ICar} from "../interfaces";

interface IProps extends PropsWithChildren {
    car: ICar;
}

const CarDetails: FC<IProps> = ({car: {id, brand, price, year}}) => {
    return (
        <div>
            {id}: Brand: {brand}. Price: {price}. Year: {year}.
        </div>
    );
};

export {CarDetails};