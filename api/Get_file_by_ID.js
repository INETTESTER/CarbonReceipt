import http from 'k6/http';

export function Get_file_by_ID() {
    const url = 'https://carbonreceipt.one.th/api/v1/temp-files/d3a6ca36-99e2-4bab-ad71-5ae4cad339e1/download';

    const res = http.get(url);

    // log response body
    //console.log(res.body);

    // return response object
    return res;
}
