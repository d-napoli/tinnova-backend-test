import React, { useEffect, useState } from 'react';

import CarItem from '../CarItem'
import FilterButton from '../FilterButton';

import {
    Container,
    FiltersWrapper
} from './styles'

function CarsList(props) {
    const [filterAll, setFilterAll] = useState(true)
    const [filterSevenDays, setFilterSevenDays] = useState(false)
    const [filterDays, setFilterDays] = useState(7)

    function handleCallBack() {
        props.callBackFunction()
    }

    function applyAllFilter() {
        setFilterAll(true)
        setFilterSevenDays(false)
    }

    function applySevenDaysFilter() {
        setFilterAll(false)
        setFilterSevenDays(true)
    }

    function isDateWithinPeriod(date) {
        var last_week = new Date()
        last_week.setDate(last_week.getDate() - filterDays)
        last_week.setHours(0, 0, 0, 0)

        var compare_date = new Date(date)
        compare_date.setHours(0, 0, 0, 0)

        if (compare_date >= last_week)
            return true

        return false
    }
  
    useEffect(() => {
        
    }, [props.cars]);
    
    return (
        <Container>
            <FiltersWrapper>
                <FilterButton
                    active={filterAll}
                    text="Todos"
                    click={applyAllFilter}
                />
                <FilterButton
                    active={filterSevenDays}
                    text={filterDays + " dias"}
                    click={e => applySevenDaysFilter()}
                />
            </FiltersWrapper>
            {
                props.cars.map(car => (
                    filterAll || isDateWithinPeriod(car.created) ?
                        <CarItem
                            key={car.id}
                            id={car.id}
                            veiculo={car.veiculo}
                            marca={car.marca}
                            ano={car.ano}
                            descricao={car.descricao}
                            vendido={car.vendido}
                            created={car.created}
                            callBackFunction={e => handleCallBack()}
                        />
                    : null
                ))  
            }
        </Container>
    )
}

export default CarsList;