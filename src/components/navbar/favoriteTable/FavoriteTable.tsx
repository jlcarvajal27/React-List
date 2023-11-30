import { person } from "@/models";
import {  removeFavorite } from "@/redux/states";
import { AppStore } from "@/redux/store";
import { IconButton } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';

export interface FavoriteTableInterface{}

const FavoriteTable:React.FC<FavoriteTableInterface> = () => {
    
    const dispacth = useDispatch();
    const stateFavorites = useSelector((store: AppStore) => store.favorites );
  
    const handleClick = (person: person) => {
      
       dispacth(removeFavorite(person))
  }
  
    const colums = [{
        field: 'actions',
        type: 'actions',
        sortable: false,
          headerName: '',
          Width: 50,
          renderCell: (params: GridRenderCellParams)=> (
            <>{
                <IconButton color="secondary" aria-label="favorites" component='label' onClick={ () => handleClick(params.row)}>
                 <DeleteIcon/>
               </IconButton>
            }</>
          )
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
      field: 'LevelOfHappiness',
      headerName: 'level of happiness',
      flex: 1,
      renderCell: (params: GridRenderCellParams)=> <>{params.value}</>
    }
  
  ];
  
   return <DataGrid
   rows={stateFavorites}
   columns={colums}
   disableColumnSelector
   disableRowSelectionOnClick
   autoHeight
   initialState={{
     pagination: {
       paginationModel: {
         pageSize: 6,
       },
     },
   }}
    getRowId={(row: any)=> row.id}
   />
   
  }


export default FavoriteTable
