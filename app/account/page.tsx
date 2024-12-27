'use client';

import React, { useEffect, useState } from 'react';
import Logo from '@/components/logo/logo';
import DndClassOrder from '@/components/accountPage/dndClassOrder/dndClassOrder';

const AccountPage = () => {
  const [userData, setUserData] = useState<any>(null); 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/frontendDataTest.json');
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Erreur lors du chargement des données :', error);
      }
    };

    fetchData();
  }, []);

  if (!userData) {
    return <p>Chargement des données...</p>;
  }


  return (
    <div className="p-8">
      <Logo />
      <DndClassOrder initialOrder={userData[0].classOrder} />
    </div>
  );
};

export default AccountPage;
