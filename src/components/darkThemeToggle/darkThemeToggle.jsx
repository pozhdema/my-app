import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_DARKTHEME } from "../../actions/actions";
import './darkThemeToggle.css'

const DarkThemeToggle = () => {
    const darkThemeEnabled = useSelector((state) => state.preferences.darkThemeEnabled);
    const dispatch = useDispatch();

    return (
        <p className='change-theme'>
            <input
                type="checkbox"
                checked={darkThemeEnabled}
                onChange={() => dispatch({ type: TOGGLE_DARKTHEME })}
            ></input>
            <span>Use Dark Theme</span>
        </p>
    );
};

export default DarkThemeToggle;