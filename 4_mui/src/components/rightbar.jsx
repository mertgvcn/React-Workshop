import React from 'react'
import { Box } from "@mui/material"

const rightbar = () => {
    return (
        <Box
            bgcolor="green"
            flex={2}
            padding={2}
            sx={{ display: { xs: "none", sm: "block" } }}
        >
            Rightbar
        </Box>
    )
}

export default rightbar