import http from 'k6/http';
import { FormData } from 'https://jslib.k6.io/formdata/0.0.2/index.js';
const filePath = '../file/application (10).pdf';
const fileData = open(filePath, 'b'); // 'b' = binary mode

export function Upload_File() {
  const url = 'https://carbonreceipt.one.th/api/v1/temp-files/upload';


  const formData = new FormData();
  formData.append('files', http.file(fileData, 'application (10).pdf', 'application/pdf'));
  formData.append('company_id', '0ab46478-35c4-4a26-945d-e2811a892670');
  formData.append('biz_id', '346070288275213');

  const headers = {
    'Content-Type': `multipart/form-data; boundary=${formData.boundary}`,
  };

  const res = http.post(url, formData.body(), { headers });

  //console.log('📤 Upload Response Body:', res.body);


  return res;
}
