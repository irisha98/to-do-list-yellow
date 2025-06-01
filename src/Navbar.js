// src/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './App.css'; // если стили для navbar хранятся там

function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className='navbar'>
      <NavLink to='/' className='nav-link'>{t('nav.home')}</NavLink>
      <NavLink to='/Mood' className='nav-link'>{t('nav.mood')}</NavLink>
      <NavLink to='/Inspiration' className='nav-link'>{t('nav.inspiration')}</NavLink>
      <NavLink to='/Planner' className='nav-link'>{t('nav.planner')}</NavLink>
      <NavLink to='/Recipes' className='nav-link'>{t('nav.recipes')}</NavLink>
      <LanguageSwitcher />
    </nav>
  );
}

export default Navbar;
