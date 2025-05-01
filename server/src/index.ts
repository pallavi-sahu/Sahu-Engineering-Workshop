import express from 'express';
import cors from 'cors';
import admin from 'firebase-admin'
import path from 'path'
import { config } from 'dotenv';
import multer from 'multer';

config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY || '{}');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET_URL
});

const db = admin.database();
const imagesRef = db.ref('images');
const storage = admin.storage().bucket();

const upload = multer({storage: multer.memoryStorage() });

app.get('/api/test', (req, res:any)=> {
    res.json({message: "Hello from backend"})
})

app.post('/upload_photo', upload.single('image'), async (req, res)=>
{
    if(!req.file){
        return res.status(400).json({error: 'No image file uploaded'})
    }
    const { description, location } = req.body;
    const filename = `images/${Date.now()}-${req.file.originalname}`;
    const file = storage.file(filename);

    try {
        await file.save(req.file.buffer, {
          metadata: {
            contentType: req.file.mimetype,
          },
        });
    
        const [url] = await file.getSignedUrl({
          action: 'read',
          expires: '03-01-2500', // TO be changed to some other date currently it's random
        });
    
        const imageData = {
          imageUrl: url,
          description: description,
          location: location,
          originalName: req.file.originalname,
          mimeType: req.file.mimetype,
          size: req.file.size,
          uploadDate: admin.database.ServerValue.TIMESTAMP,
        };
    
        const newImageRef = imagesRef.push();
        await newImageRef.set(imageData);
    
        console.log(
          'Image uploaded to Firebase Storage and details stored in Realtime Database:',
          imageData
        );
        res
          .status(200)
          .json({ message: 'Image uploaded and details stored successfully!', data: imageData });
      } catch (error) {
        console.error('Error uploading to Firebase Storage or storing details:', error);
        res.status(500).json({ error: 'Failed to upload image or store details.' });
      }
})
app.listen('5000', ()=>{
    console.log("backend running on port 5000");
})