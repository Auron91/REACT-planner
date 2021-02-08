import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default class Header extends Component {
    static contextType = ThemeContext
    render() {
        // const { isLightTheme, light, dark } = this.context;
        // const theme = isLightTheme ? light : dark;

        return (
            <header className="main-header">
            <a className="main-header__brand" href="/"><div>Planner App</div></a>
            <div className="main-header__right">
                <a className="btn btn-header" href="/">
                    Log In
                </a>
            </div>
        </header>
        )
    }
}