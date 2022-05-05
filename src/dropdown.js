import React, {useState} from "react";
import './dropdown.css';

export default function Dropdown() {
    const selectNames = ["select1", "select2", "select3"];
    const [options] = useState([
        {
            label: 'A',
            value: 'A'
        },
        {
            label: 'B',
            value: 'B'
        },
        {
            label: 'C',
            value: 'C'
        },
        {
            label: 'D',
            value: 'option4'
        }
    ]);
    
    

    const [chosenOptions, setChosenOptions] = useState({});

    const isChosenByOther = (optionValue, selectName) => {
        for (let key in chosenOptions) {
            if (key !== selectName) {
                if (chosenOptions[key] === optionValue) {
                    return true;
                }
            }
        }
        return false;
    };

    const handleChange = (ev) => {
        setChosenOptions({...chosenOptions, [ev.target.name]: ev.target.value});
    };

    const Submit = (ev) => {
        ev.preventDefault();
        console.log(ev.target.select1.name, ev.target.select1.value);
        console.log(ev.target.select2.name, ev.target.select2.value);
        console.log(ev.target.select3.name, ev.target.select3.value);   
    };

    return (
        <div>
            <form onSubmit={Submit}>
    {selectNames.map((name, index) => {
        return (
            <select name={name} key={index} onChange={handleChange} value={chosenOptions[name] || ''}
                    required className="select">
                <option value='' disabled={chosenOptions[name]}>Choose Option</option>
                {options.filter(({value}) => !isChosenByOther(value, name))
                    .map(({label, value}, oIndex) =>
                        <option value={value} key={oIndex}>{label}</option>)
                }
            </select>
        )
    })}
        <button type="submit" value="submit">Submit</button>
        </form>
</div>
    );
}