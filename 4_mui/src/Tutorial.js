import React from 'react'
import {Button} from "@mui/material"
import {Add, Settings} from "@mui/icons-material";
import styled from "@emotion/styled";

const Tutorial = () => {

    //*Custom black button (ilk harf büyük dikkat!)
    const BlackButton = styled(Button)({ //bu şekilde custom buton oluşturup birden fazla kullanabiliriz
        backgroundColor: "black",
        color: "white",
        margin: 5,
        "&:hover": {
            backgroundColor: "gray"
        },
        "&:disabled": { //bu şekilde disabled oluncaki ayarlamasını da yapabiliriz
            backgroundColor: "lightgray"
        }
    })

    return (
        <div>
            <Button variant="text">Text</Button>
            <Button startIcon={<Settings />} variant="contained" color="secondary" size="small">Settings</Button>
            <Button startIcon={<Add />} variant="contained" color="success" size="small">Add</Button>

            <BlackButton>Custom Button</BlackButton>
            <BlackButton>Custom Button2</BlackButton>
        </div>
    )
}

export default Tutorial
