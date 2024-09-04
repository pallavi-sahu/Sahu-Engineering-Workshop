import { Label } from '@mui/icons-material'
import { Button, colors, FormControl, TextField } from '@mui/material'
// import Grid from '@mui/material/Grid2';
import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const services = [
    {
        id: 1,
        stats: "100 +",
        text: "Customers",
        bg_color: "#FFF5EF",
        color: "#F59121",
        border_color: '#FFCE85'
    },
    {
        id: 2,
        stats: "1 Lakh +",
        text: "Orders",
        bg_color: "#D4E1FD",
        color: "#1F499E",
        border_color: '#1F499E'
    },
    {
        id: 3,
        stats: "20 +",
        text: "Services",
        bg_color: "#FFF5EF",
        color: "#F59121",
        border_color: '#FFCE85'
    }
]
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));
const Contact = () => {
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center items-center p-10'>
                {
                    services.map((service) => {
                        return (
                            <div
                                key={service.id}
                                className={`flex flex-col justify-center items-center border-2 p-4 rounded-xl`}
                                style={{
                                    backgroundColor: service.bg_color,
                                    color: service.color,
                                    width: '300px',
                                    height: '150px',
                                    border: `1px solid ${service.border_color}`
                                }}>
                                <p className='font-semibold text-2xl'>{service.stats}</p>
                                <p className='font-semibold text-2xl '>{service.text}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex flex-col justify-conter items-center bg-primary-blue text-color-white p-4'>
                <p>Contact</p>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                        <FormControl defaultValue="" required>
                        <label>First Name</label>
                        <TextField
                            id="outlined-secondary"
                            variant="outlined"
                            color="secondary"
                            placeholder='Enter First Name'
                        />
                    </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <FormControl defaultValue="" required>
                        <label>Last Name</label>
                        <TextField
                            id="outlined-secondary"
                            variant="outlined"
                            color="secondary"
                            placeholder='Enter Last Name'
                        />
                    </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                        <FormControl defaultValue="" required>
                        <label>Mobile Number</label>
                        <TextField
                            id="outlined-secondary"
                            variant="outlined"
                            color="secondary"
                            placeholder='Enter Mobile Number'
                        />
                    </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                        <FormControl defaultValue="" required>
                        <label>Email</label>
                        <TextField
                            id="outlined-secondary"
                            variant="outlined"
                            color="secondary"
                            placeholder='Enter Your Email'

                        />
                    </FormControl>
                        </Grid>
                    </Grid>
                </Box>
                <Button className='border-2 p4'>Submit</Button>
            </div>
        </div>
    )
}

export default Contact
