import http from 'k6/http';

export function Get_Months() {
  const url = 'https://carbonreceipt.one.th/api/v1/onebox/months/346070288275213';

  const res = http.get(url);

  //console.log('🗓️ Response Body:', res.body);

  return res;
}
