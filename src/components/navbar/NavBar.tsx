import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { CustomDialog } from "../customdialog";
import { FavoriteTable } from "./favoriteTable";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { dialogOpenSubject$ } from "../customdialog/CustomDialog";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";

export interface NavBarInterface{}

const NavBar: React.FC<NavBarInterface> = () => {
  useSelector((store: AppStore) => store.favorites );

  const handleClick = () => {

      dialogOpenSubject$.setSubject = true;
  }
  return (
    <>

    <CustomDialog>
      <FavoriteTable/>
    </CustomDialog>

    <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Jorge Dev Frontend 
          </Typography>
          <IconButton color="secondary" aria-label="favorites" component='label' onClick={ handleClick}>
           <FavoriteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      </>
  )
}

export default NavBar;
