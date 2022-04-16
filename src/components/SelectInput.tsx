import React from 'react';
import arrow_left from '../assets/img/arrow_left.svg'
interface ItemProps {
    name: string
    items: string[]
    onValueChange: Function
    valueIndex: number | string
    type: string
}

const SelectInput = ({ name, valueIndex, type, items, onValueChange }: ItemProps) => {

    const [state, setStates] = React.useState({
        value: typeof valueIndex === 'number' ? items[valueIndex] : valueIndex,
    })
    const updateStatus = (params: { [key: string]: string | number | boolean }) => setStates({ ...state, ...params })
    return (
        <div className={`select-input ${type}`}  style={{width:'140px'}}>
            <input type="text" className="w100" placeholder={name} value={state.value} onChange={() => { }}></input>
            <span className='down_icon'><img src={arrow_left} alt="down_icon"></img></span>
            <div className='select-list'>
                {Object.keys(items).map(i => <div key={i} className="select-item" onClick={() => { updateStatus({ value: items[i] }); onValueChange(items[i]) }}>{items[i]}</div>)}
            </div>
        </div>
    )
}

export default SelectInput