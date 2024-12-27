'use client';

import React, { useEffect, useState } from 'react';
import AccountHeader from '@/components/accountPage/accountHeader/accountHeader'
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
    <div>
      <AccountHeader />
      <DndClassOrder initialOrder={userData[0].classOrder} />
      <h2 className='uppercase flex justify-center text-[100px] mt-10'>{userData[0].nickname}</h2>
    </div>
  );
};

export default AccountPage;
