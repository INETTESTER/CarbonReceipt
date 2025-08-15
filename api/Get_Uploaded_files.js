import http from 'k6/http';

export function Get_Uploaded_files() {
    const url = 'https://carbonreceipt.one.th/api/v1/temp-files/biz/346070288275213';

    const res = http.get(url);

    // log response body
    //console.log(res.body);

    // return response object
    return res;
}
