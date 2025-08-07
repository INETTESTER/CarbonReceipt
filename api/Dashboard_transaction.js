import http from 'k6/http';

export function Dashboard_transaction() {
  const url = 'https://carbonreceipt.one.th/api/v1/dashboard/user/transaction';

  const res = http.get(url);

  //console.log('💸 Response Body:', res.body);

  return res;
}
