import QRCode from 'qrcode';



const generateQRCode = async (userData) => {
    try {
      const qrCodeData = await QRCode.toDataURL(userData);
      
  
      return qrCodeData; 
    } catch (error) {
      console.error('Error generating QR code:', error);
      return null;
    }
  };

export default generateQRCode;
  