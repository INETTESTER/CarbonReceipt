import http from 'k6/http';

export function GETmonthetaxesbyMonthID() {
    const url = 'https://carbonreceipt.one.th/api/v1/onebox/etaxes/d3a459d5-9f71-4dcb-87c0-5d9b86bf2bf2';

    const res = http.get(url);

    // log response body
    //console.log(res.body);

    // return response
    return res;
}
