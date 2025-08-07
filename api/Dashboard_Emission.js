import http from 'k6/http';

export function Dashboard_Emission() {
  const url = 'https://carbonreceipt.one.th/api/v1/admin/dashboard/emission?bizID=all&year=2025';

  const res = http.get(url);

  //console.log('🌱 Response Body:', res.body);


  return res;
}
