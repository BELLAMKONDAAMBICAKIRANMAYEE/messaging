// import multer from 'multer';
// import {GridFsStorage} from 'multer-gridfs-storage';

// const storage = new GridFsStorage({
//     url: `mongodb+srv://Ambica:Ambica12@cluster0.xpetb9l.mongodb.net/TESTING?retryWrites=true&w=majority`,
//     options:{useUnifiedTopology:true,useNewUrlParser:true},
//     file:(request,file)=>{
//         const match = ["image/png","image/jpg"];
        
//         if (match.indexOf(file.memeType)=== -1){
//             return `${Date.now()}-blog-${file.originalname}`;
//         }
//         return{
//             bucketName:"photos",
//             fileName:`${Date.now()}-blog-${file.originalname}`
//         }
//     }
// });

// export default multer({storage});


import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

// import dotenv from 'dotenv';

// dotenv.config();

// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
    url: `mongodb+srv://Ambica:Ambica12@cluster0.xpetb9l.mongodb.net/TESTING?retryWrites=true&w=majority`,
    options: { useUnifiedTopology:true,useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.mimeType) === -1) {
            return`${Date.now()}-blog-${file.originalname}`;
        }
        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 