import React from 'react';
import './App.css';
import Home from'./Home';
import {

  BrowserRouter as Router,

  Routes,

  Route,

  NavLink

} from "react-router-dom";

import Mood from './Mood';
import Inspiration from './Inspiration';
import Planner from './Planner';
import Recipes from './Recipes';

import './i18n';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';



function App(){
  const { t } = useTranslation();
  return <Router>
<nav className='navbar'>
  <NavLink to='/' className='nav-link'>{t('nav.home')}</NavLink>
  <NavLink to='/Mood' className='nav-link'>{t('nav.mood')}</NavLink>
  <NavLink to='/Inspiration' className='nav-link'>{t('nav.inspiration')}</NavLink>
  <NavLink to='/Planner' className='nav-link'>{t('nav.planner')}</NavLink>
  <NavLink to='/Recipes' className='nav-link'>{t('nav.recipes')}</NavLink>
  <LanguageSwitcher />
</nav>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/Mood' element={<Mood />} />
  <Route path='/Inspiration' element={<Inspiration />} />
  <Route path='/Planner' element={<Planner />} />
  <Route path='/Recipes' element={<Recipes />} />
  
</Routes>

</Router>
}

export default App;
