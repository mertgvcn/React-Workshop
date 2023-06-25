import React from 'react'
import { Box } from "@mui/material"

const Sidebar = () => {
    return (
        <Box
            bgcolor="skyblue"
            flex={1} //örn feed'in flex=4 olduğu için bundan 4 kat fazla yer kaplayacak
            padding={2}
            sx={{ display: { xs: "none", sm: "block" } }} //responsive
        >
            Sidebar
        </Box>
    )
}

export default Sidebar