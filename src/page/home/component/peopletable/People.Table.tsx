import { person } from "@/models";
import { addFavorite } from "@/redux/states";
import { AppStore } from "@/redux/store";
import { Checkbox } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from 'react';


export interface PeopleTableInterface{}

const PeopleTable: React.FC<PeopleTableInterface> = () => {
  const [selectedPeople, setSelectedPeople]= useState<person[]>([]);

  const dispacth = useDispatch();
  const statePeople = useSelector((store: AppStore) => store.people );

  const favoritePeople = useSelector((store: AppStore) => store.favorites );
  const findPerson = (person: person) => !!favoritePeople.find(p => p.id === person.id)
  const filterPerson = (person: person) => favoritePeople.filter(p => p.id !== person.id)


  const handleChange = (person: person) => {

    const filteredPeople = findPerson(person) ? filterPerson(person) : [...selectedPeople, person]
    dispacth(addFavorite(filteredPeople))
    setSelectedPeople(filteredPeople)
}

  const colums = [{
    field: 'actions',
    type: 'actions',
    sortable: false,
      headerName: '',
      Width: 50,
      renderCell: (params: GridRenderCellParams)=> <>{
        <Checkbox 
        size='small' 
        checked={findPerson(params.row)} onChange={()=> handleChange(params.row)}/>
      }</>
    },
    {
    field: 'name',
    headerName: 'Name',
    flex: 1,
    minWidth: 150,
    renderCell: (params: GridRenderCellParams)=> <>{params.value}</>
  },
  {
    field: 'category',
    headerName: 'Categories',
    flex: 1,
    renderCell: (params: GridRenderCellParams)=> <>{params.value}</>
  },
  {
    field: 'company',
    headerName: 'company',
    flex: 1,
    renderCell: (params: GridRenderCellParams)=> <>{params.value}</>
  },
  {
    field: 'levelOfHappiness',
    headerName: 'Level of happiness',
    flex: 1,
    renderCell: (params: GridRenderCellParams)=> <>{params.value}</>
  }

];

useEffect(() => {

 setSelectedPeople(favoritePeople)
 
}, [favoritePeople])


 return <DataGrid
 rows={statePeople}
 columns={colums}
 disableColumnSelector
 disableRowSelectionOnClick
 autoHeight
 initialState={{
   pagination: {
     paginationModel: {
       pageSize: 5,
     },
   },
 }}
 
  getRowId={(row: any)=> row.id}
 />
 
}
export default PeopleTable;