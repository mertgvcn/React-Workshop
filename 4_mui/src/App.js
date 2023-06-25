import { Box, Stack } from "@mui/material"
//Components
import Feed from "./components/feed"
import Navbar from "./components/navbar"
import Rightbar from "./components/rightbar"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <Box> {/*HTML deki divle aynı, bu yapılara mui docs'tan bakarsın tekrar*/}
      
      <Navbar/>

      {/*Tek boyutlu grid sistem, yatay veya dikey*/}
      <Stack direction="row" spacing={2} justifyContent="space-between"> 
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
