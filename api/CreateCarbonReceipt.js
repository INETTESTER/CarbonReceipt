import http from 'k6/http';

export function CreateCarbonReceipt() {
    const url = 'https://carbonreceipt.one.th/api/v1/carbon-receipt';

    const payload = JSON.stringify({
        month_ids: ["d3a459d5-9f71-4dcb-87c0-5d9b86bf2bf2"]
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.post(url, payload, params);

    // log response body
    //console.log(res.body);

    // return response object
    return res;
}
