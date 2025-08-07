import http from 'k6/http';

export function Dashboard_Company() {
  const url = 'https://carbonreceipt.one.th/api/v1/admin/dashboard/company';

  const res = http.get(url);

  //console.log('🏢 Response Body:', res.body);


  return res;
}
