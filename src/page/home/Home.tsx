import { People } from '@/data/people';
import { addPeople } from '@/redux/states';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PeopleTable } from './component';

export interface HomeInterface{}

 const Home: React.FC<HomeInterface> = () => {

  const dispacth = useDispatch();

  useEffect(() => {
  dispacth(addPeople(People))
  
 }, [])

  return (
    <PeopleTable/>
    )
}
 
export default Home;

