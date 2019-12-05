import React, { Component } from 'react';
import NavbarComponents from './Components/Navbar/Navbar'
import HomePage from './Components/HomePage/HomePage'
import Exhibit from './Components/Exhibit/Exhibit'
import Museum from './Components/Museum/Museum'
import University from './Components/University/University'
import { Switch, Route } from 'react-router-dom';


export const App = () => (
    <>
        <NavbarComponents />

        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/exhibit' component={Exhibit} />
            <Route path='/museum' component={Museum} />
            <Route path='/university' component={University} />
        </Switch>
    </>
)

