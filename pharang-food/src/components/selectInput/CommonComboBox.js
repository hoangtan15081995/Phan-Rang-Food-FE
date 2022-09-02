import PropTypes from "prop-types";
import "./commonBox.css"

import React, { useEffect, useState } from 'react';
import { FormLabel, Stack } from 'react-bootstrap';
import { isEmptyArray, isStringNullOrEmpty, validateCharacters, vnConvert } from "../../utils/Helper";
import OutsideClickHandler from "react-outside-click-handler";

const CommonComboBox = (props) => {
    const [isDrop, setIsDrop] = useState(false);
    const [isOutSide, setIsOutSide] = useState(false);
    const [keywords, setKeywords] = useState('');
    // const [isSelect, setIsSelect] = useState(props.value);
    let clearSetInterval;
    const handleIsDrop = (value) => {
        if (!isEmptyArray(props.data)) {
            setIsDrop(value)
        }
        clearSetInterval && clearInterval(clearSetInterval)
    }

    const handleSelect = (objectValue) => {
        setIsDrop(!isDrop);
        props.onChange && props.onChange(objectValue)
    }
    const handleClickOutside = (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
            clearSetInterval = setInterval(() => {
                handleIsDrop(false);
            }, 10)
        }
    }

    const handleSearch = (keywords) => {
        console.log('keywords:::', props.viewValue);
        if (keywords === '') {
            return props.data;
        }
        var character = validateCharacters(keywords);
        const regex = new RegExp(`${character.trim()}`, 'i');
        // vnConvert('á')
        // const data =  arrayData.filter(item => vnConvert(item.name).search(regex) >= 0);
        return props.data.filter(item => vnConvert(item[props.viewValue]).search(regex) >= 0);
    }
    let dataFilter = handleSearch(keywords);
    return (
        <div className='combo-box'>
            {
                !isStringNullOrEmpty(props.label) &&
                <FormLabel>
                    {props.require && <small className="text-danger">*</small>}
                    {props.label}
                </FormLabel>
            }
            <div className={isDrop ? 'wrap-box wrap-box-active  is-open' : 'wrap-box wrap-box-active '} >
                {
                    (props.value || props.defaultValue) ?
                        <OutsideClickHandler
                            onOutsideClick={(e) => handleClickOutside(e)}
                        >
                            <div className='select-value' onClick={() => handleIsDrop(true)} >
                                <Stack direction="horizontal">
                                    {props.value}
                                    {
                                        isDrop ?
                                            <i className="mdi mdi-chevron-up ms-auto"></i>
                                            :
                                            <i className="mdi mdi-chevron-down ms-auto"></i>
                                    }
                                </Stack>
                            </div>
                        </OutsideClickHandler>
                        :
                        <OutsideClickHandler
                            onOutsideClick={(e) => handleClickOutside(e)}
                        >
                            <div className='select-hint' onClick={() => handleIsDrop(true)} >
                                <Stack direction="horizontal">
                                    <small className="textOverflow">{props.hint}</small>
                                    {
                                        isDrop ?
                                            <i className="mdi mdi-chevron-up ms-auto"></i>
                                            :
                                            <i className="mdi mdi-chevron-down ms-auto"></i>
                                    }
                                </Stack>
                            </div>
                        </OutsideClickHandler>
                }
                {
                    (isDrop) &&
                    <ul className='list-data' data-aos="fade-up" data-aos-duration="200">
                        {
                            (props.isSearch) &&
                            <li className="fix-sticky-top">
                                <input placeholder="search" autoFocus={true} onClick={() => handleIsDrop(true)}
                                    onChange={(e) => setKeywords(e.target.value)} />
                            </li>
                        }

                        {
                            // props.data.map((item, index) => {
                            (!isEmptyArray(dataFilter)) &&
                            [].concat(dataFilter)
                                .map((item, index) => {
                                    return (
                                        <li key={index} tabIndex={index} className={(props.value === item[props.viewValue]) ? 'selected' : ''} onClick={() => handleSelect(item)}>
                                            <Stack direction="horizontal">
                                                {item[props.viewValue]}
                                                {
                                                    (props.value === item[props.viewValue]) &&
                                                    <i className="mdi mdi-check ms-auto"></i>
                                                }
                                            </Stack>
                                        </li>
                                    )
                                })
                        }
                    </ul>
                }

            </div>
        </div>
    )
}

CommonComboBox.propTypes = {
    isSearch: PropTypes.bool,
    require: PropTypes.bool,
    label: PropTypes.string,
    hint: PropTypes.string,
    value: PropTypes.string,
    viewKey: PropTypes.string,
    viewValue: PropTypes.string,
    defaultValue: PropTypes.string,
    array: PropTypes.array,
    onChange: PropTypes.func
};
CommonComboBox.defaultProps = {
    label: '',
    hint: '',
    value: '',
    defaultValue: '',
    viewKey: 'key',
    viewValue: 'value',
    data: [],
    require: false,
    isSearch: true,
    onChange: () => { },
};

export default CommonComboBox
