import { Avatar, Button, ButtonGroup, Fab, Modal, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Box, Stack } from '@mui/system'
import styled from '@emotion/styled'

const Add = () => {

    const [open, setOpen] = useState()

    const StyledModal = styled(Modal)({
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    })

    const UserBox = styled(Box)({
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px"

    })
    return (
        <>
            <Tooltip title="Delete" onClick={(e) => setOpen(true)} sx={{
                position: "fixed",
                bottom: "20px",
                left: { xs: "calc(50% - 25px)", md: 30 }
            }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={300} p={3} bgcolor={"background.default"} color={"text.primary"} borderRadius={5}>
                    <Typography variant='h6' color="gray" textAlign="center">Create Post</Typography>
                    <UserBox>
                        <Avatar sx={{ width: 30, height: 30 }}
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
                        >
                        </Avatar>
                        <Typography variant='span' fontWeight={500}>John Doe</Typography>

                    </UserBox>
                    <TextField sx={{
                        width: "100%"
                    }}
                        id="standard-multiline-static"
                      
                        multiline
                        rows={3}
                        placeholder="Whats on your mind"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color='primary' /> 
                        <Image color='secondary' /> 
                        <VideoCameraBack color='success' /> 
                        <PersonAdd color='error' /> 
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sc={{width:"100px"}}><DateRange/></Button>
                    </ButtonGroup>
                    
                    
                </Box>
            </StyledModal>
        </>
    )
}

export default Add