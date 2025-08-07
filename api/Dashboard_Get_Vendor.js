import http from 'k6/http';

export function Dashboard_Get_Vendor() {
  const url = 'https://carbonreceipt.one.th/api/v1/admin/dashboard/vendor?year=2025';

  const res = http.get(url);

  //console.log('📦 Response Body:', res.body);

  return res;
}
