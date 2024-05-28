import React, { useEffect, useState } from 'react';
import { Box, Paper, Avatar, Typography, Button, Input } from '@mui/material';
import bgImg from '../../img/bg.png';
import QrScanner from '../QrScanner';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import jsQR from 'jsqr';

const ScannerPage = () => {
    const CONTRACT_ADDRESS = '0x62081f016446585cCC507528cc785980296b4Ccd';
    const [qrData, setQrData] = useState('');

    const { auth } = useAuth();
    const navigate = useNavigate();

    const passData = (data) => {
        setQrData(data);
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];  // Get the uploaded file
        const reader = new FileReader(); // Create a FileReader to read the image

        reader.onload = (event) => {
            const imageData = event.target.result; // Read the file data as Data URL
            const img = new Image();
            img.src = imageData;

            img.onload = () => {
                const canvas = document.createElement('canvas');  // Create a canvas to draw the image
                const context = canvas.getContext('2d');

                canvas.width = img.width;
                canvas.height = img.height;

                context.drawImage(img, 0, 0, img.width, img.height);  // Draw the image on canvas

                const imageData = context.getImageData(0, 0, img.width, img.height);  // Get image data
                const qrCode = jsQR(imageData.data, img.width, img.height);  // Decode the QR code

                if (qrCode) {
                    passData(qrCode.data);  // Pass the extracted data
                }
            };
        };

        reader.readAsDataURL(file);  // Read the file as Data URL
    };

    useEffect(() => {
        const arr = qrData.split(',');
        const contractAddress = arr[0];

        if (contractAddress) {
            if (contractAddress === CONTRACT_ADDRESS) {
                if (auth.role === 'supplier' || auth.role === 'retailer') {
                    navRole();
                } else {
                    navUser();
                }
            } else {
                navFakeProduct();
            }
        }
    }, [qrData]);

    const navRole = () => {
        navigate('/update-product', { state: { qrData } });
    };

    const navUser = () => {
        navigate('/authentic-product', { state: { qrData } });
    };

    const navFakeProduct = () => {
        navigate('/fake-product');
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <Box
            sx={{
                backgroundImage: `url(${bgImg})`,
                minHeight: '80vh',
                backgroundRepeat: 'no-repeat',
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                zIndex: -2,
                overflowY: 'scroll',
            }}
        >
            <Paper
                elevation={3}
                sx={{ width: '400px', margin: 'auto', marginTop: '10%', marginBottom: '10%', padding: '3%', backgroundColor: '#e3eefc' }}
            >
                <Box
                    sx={{
                        textAlign: 'center', marginBottom: '5%',
                    }}
                >
                    <Typography
                        variant='h2'
                        sx={{
                            textAlign: 'center', marginBottom: '3%',
                            fontFamily: 'Gambetta', fontWeight: 'bold', fontSize: '2.5rem',
                        }}
                    >
                        Scan QR Code
                    </Typography>

                    {/* QR Scanner Component */}
                    <QrScanner passData={passData} />

                    {/* File Input for QR Code Upload */}
                    <Input
                        type='file'
                        onChange={handleFileChange}  // Handle file changes
                        sx={{
                            marginBottom: '5%',
                        }}
                    />

                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Button
                            onClick={handleBack}
                            sx={{
                                marginTop: '5%',
                            }}
                        >
                            Back
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

export default ScannerPage;
