# Server File Upload Setup - Complete Instructions

## Step 1: Install Multer on Your Server

On your server, run:
```bash
npm install multer
```

## Step 2: Update Your Server Package.json

Make sure your server's `package.json` includes:
```json
{
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^8.0.3",
    "joi": "^17.11.0",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "multer": "^1.4.5-lts.1"
  }
}
```

## Step 3: Replace Your Courts Route File

Copy the code from `server-example/routes/courts-UPDATED.js` and replace your current `routes/courts.js` file with it.

The key changes:
- Uses `multer` to handle file uploads
- Converts uploaded images to base64 data URLs
- Stores base64 string in MongoDB
- Handles both POST and PUT with file uploads

## Step 4: Update Your Validation Schema

Make sure your validation schema includes `picture` as optional:

```javascript
picture: Joi.string().allow('').optional()
```

## Step 5: Update Your Server.js (if needed)

Make sure your main server file has:
```javascript
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

## Step 6: Test

1. Start your server
2. Try uploading an image from the React app
3. Check MongoDB - the `picture` field should contain a base64 data URL

## How It Works

1. User selects image file in React app
2. React sends file as FormData to server
3. Server receives file using multer
4. Server converts file to base64 data URL
5. Server stores base64 string in MongoDB
6. React displays image from base64 string

## Benefits

- ✅ Works with free Render plan (no file storage needed)
- ✅ Images persist in MongoDB database
- ✅ Works for the whole session and beyond
- ✅ Simple and reliable

