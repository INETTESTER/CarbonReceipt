import http from 'k6/http';

export function GetCarbonReceiptAndEtaxInvoiceDetailsByMonthID() {
    const url = 'https://carbonreceipt.one.th/api/v1/etax/getpdf/d3a459d5-9f71-4dcb-87c0-5d9b86bf2bf2';

    const res = http.get(url);

    // log response body (ถ้าเป็น PDF จะได้เป็น base64 หรือ binary string)
    //console.log(res.body);

    // return response object
    return res;
}
