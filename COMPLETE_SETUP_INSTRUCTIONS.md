# Complete File Upload Setup - Follow These Steps

## ✅ React App - DONE
The React app is already updated and ready. No changes needed on your end.

## 🔧 Server Setup - DO THIS NOW

### Step 1: Install Multer
On your server, run:
```bash
npm install multer
```

### Step 2: Update Your Courts Route
Copy the entire contents of `server-example/routes/courts-UPDATED.js` and replace your current `routes/courts.js` file with it.

### Step 3: Update Your Validation Schema
In your validation file, make sure the court schema has:
```javascript
picture: Joi.string().allow('').optional()
```
(Not `image`, it must be `picture`)

### Step 4: Make Sure Your Server.js Has
```javascript
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

### Step 5: Deploy
1. Push your server changes to GitHub
2. Render will auto-deploy
3. Test the file upload

## How It Works

1. User clicks "Upload Image" and selects a file from their computer
2. React sends the file to server using FormData
3. Server receives file with multer
4. Server converts file to base64 data URL
5. Server stores base64 string in MongoDB
6. Image displays in the app from the base64 string

## What's Different

- ✅ Users can upload files from their computer
- ✅ Files are converted to base64 on the server (not client)
- ✅ Base64 is stored in MongoDB (persists forever)
- ✅ Works with free Render plan
- ✅ No file storage needed

## Testing

1. Start your React app: `npm start`
2. Go to "Near You" page
3. Click "Add a Court"
4. Fill out the form
5. Click "Upload Image" and select an image file
6. Submit the form
7. Image should appear in the court list

## If Something Doesn't Work

1. Check server logs on Render
2. Make sure multer is installed: `npm list multer`
3. Verify the route file was updated correctly
4. Check that validation schema has `picture` field
5. Make sure server is restarted after changes

