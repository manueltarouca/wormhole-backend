import fileUpload from 'express-fileupload';
import express from 'express';
import cors from 'cors';

const app = express();

const PORT = 3000;

app.use(fileUpload(), cors());

app.route('/api/upload').post(onFileupload);

export function onFileupload(req: any, res: any) {

  let files = req['files'];

  console.log("File uploaded: ", files);
}

app.listen(PORT, function() {
  console.log('Express server listening on port ', PORT); // eslint-disable-line
});