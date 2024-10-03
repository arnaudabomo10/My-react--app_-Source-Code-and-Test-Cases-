// components/Menu/Layout.js
import React, { useState } from 'react';
import { Menu, Button } from 'antd';
import DateComponent from '../Date';
import LanguageSwitcher from '../LanguageSwitcher'; // Import du LanguageSwitcher

type MenuItem = Required<MenuProps>['items'][number];

const CustomLayout = () => {
  const [current, setCurrent] = useState('mail');
  const [language, setLanguage] = useState('EN'); // Gérer l'état de la langue

  const handleLanguageChange = (lang) => {
    setLanguage(lang); // Mettre à jour la langue en fonction de la sélection
    console.log(`Langue sélectionnée : ${lang}`);
  };

  // Fonction de clic sur "Date"
  const handleDateClick = () => {
    const date = new Date();
    console.log('Date option clicked:', date.toLocaleDateString());
  };

  // Définition des éléments du menu
  const items: MenuItem[] = [
    {
      label: 'Search By Flight',
      key: 'SubMenu',
      children: [
        { label: 'Option 1', key: 'search:1' },
        { label: 'Option 2', key: 'search:2' },
        { label: 'Option 3', key: 'search:3' },
        { label: 'Option 4', key: 'search:4' },
      ],
    },
    {
      label: 'Airport',
      children: [
        { label: 'Option 1', key: 'airport:1' },
        { label: 'Option 2', key: 'airport:2' },
        { label: 'Option 3', key: 'airport:3' },
        { label: 'Option 4', key: 'airport:4' },
      ],
    },
    {
      key: 'date',
      label: (
        <span onClick={() => {
          console.log("Date clicked!");
          handleDateClick();
        }}>
          Date
        </span>
      ),
    },
    {
      key: 'dateComponent',
      label: <DateComponent />,
    },
    {
      key: 'search',
      label: (
        <Button type="primary" onClick={() => console.log('Search clicked')}>
          Recherche
        </Button>
      ),
    },
    {
      key: 'languageSwitcher',
      label: <LanguageSwitcher onLanguageChange={handleLanguageChange} />, // Ajout du switcher
      style: { marginLeft: 'auto' }, // Pour le placer à droite
    },
  ];

  // Gestion du clic sur un élément de menu
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
  );
};

export default CustomLayout;
