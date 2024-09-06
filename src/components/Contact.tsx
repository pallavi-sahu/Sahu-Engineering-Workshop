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
            <div className='flex flex-col justify-center items-center bg-primary-blue text-color-white p-4'>
                <p className='font-semibold text-2xl text-white mb-4'>Contact Us</p>
                <Box sx={{ flexGrow: 1 }} className="w-full max-w-screen-md">
                    <Grid container spacing={2} className="flex flex-col md:flex-row">
                        <Grid item xs={12} md={6} className="w-full">
                        <FormControl defaultValue="" required className="w-full">
                        <label className='text-white'>First Name</label>
                        <TextField
                            id="outlined-secondary"
                            variant="outlined"
                            color="secondary"
                            placeholder='Enter First Name'
                            sx={{
                                backgroundColor: 'white',
                                input: { color: 'black' },
                                borderRadius:"5px"
                            }}
                        />
                    </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6} className="w-full">
                        <FormControl defaultValue="" required className="w-full">
                        <label className='text-white'>Last Name</label>
                        <TextField
                            id="outlined-secondary"
                            variant="outlined"
                            color="secondary"
                            placeholder='Enter Last Name'
                            sx={{
                                backgroundColor: 'white',
                                input: { color: 'black' },
                                borderRadius:"5px"
                            }}
                        />
                    </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6} className="w-full">
                        <FormControl defaultValue="" required className="w-full">
                        <label className='text-white'>Mobile Number</label>
                        <TextField
                            id="outlined-secondary"
                            variant="outlined"
                            color="secondary"
                            placeholder='Enter Mobile Number'
                            sx={{
                                backgroundColor: 'white',
                                input: { color: 'black' },
                                borderRadius:"5px"
                            }}
                        />
                    </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6} className="w-full">
                        <FormControl defaultValue="" required className="w-full">
                        <label className='text-white'>Email</label>
                        <TextField
                            id="outlined-secondary"
                            variant="outlined"
                            color="secondary"
                            placeholder='Enter Your Email'
                            sx={{
                                backgroundColor: 'white',
                                input: { color: 'black' },
                                borderRadius:"5px"
                            }}

                        />
                    </FormControl>
                        </Grid>

                        <Grid item xs={12} className="w-full">
                        <FormControl defaultValue="" required className="w-full">
                        <label className='text-white'>Address</label>
                        <TextField
                            id="outlined-secondary"
                            variant="outlined"
                            color="secondary"
                            multiline
                            rows={2}
                            placeholder='Type here...'
                            sx={{
                                backgroundColor: 'white',
                                input: { color: 'black' },
                                borderRadius:"5px"
                            }}

                        />
                    </FormControl>
                        </Grid>

                        <Grid item xs={12} className="w-full">
                        <FormControl defaultValue="" required className="w-full">
                        <label className='text-white'>Leave Message here for your queries and orders</label>
                        <TextField
                            multiline
                            rows={3}
                            id="outlined-secondary"
                            variant="outlined"
                            color="secondary"
                            placeholder='Type here...'
                            sx={{
                                backgroundColor: 'white',
                                input: { color: 'black' },
                                borderRadius:"5px"
                            }}

                        />
                    </FormControl>
                        </Grid>
                    </Grid>
                </Box>
                <button className='border-2 rounded-md px-4 py-2 mt-4 bg-white text-primary-blue text-center'>Submit</button>
            </div>
        </div>
    )
}

export default Contact
