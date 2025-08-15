import http from 'k6/http';
import { token } from './token.js';

export function SearchDocumentOneboxMOCKonebox_search() {
    const url = 'https://carbonreceipt.one.th/api/v1/onebox/search';

    const payload = JSON.stringify({
        token_oneid: ""+token,
        biz_id: "346070288275213",
        periods: [
            {
                document_month: "1",
                document_year: "2024"
            }
        ]
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
