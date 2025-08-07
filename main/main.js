//=============================== import API =================================
import { sleep } from 'k6';
import { error_check } from '../check/check.js';
import { scenario } from 'k6/execution';

import { Dashboard_Get_Vendor } from '../api/Dashboard_Get_Vendor.js';
import { Dashboard_Invoice } from '../api/Dashboard_Invoice.js';
import { Dashboard_Company } from '../api/Dashboard_Company.js';
import { Dashboard_Emission } from '../api/Dashboard_Emission.js';
import { Dashboard_Chart } from '../api/Dashboard_Chart.js';
import { Dashboard_transaction } from '../api/Dashboard_transaction.js';
import { Dashboard_User_Info } from '../api/Dashboard_User_Info.js';
import { Get_Months } from '../api/Get_Months.js';
import { Upload_File } from '../api/Upload_File.js';



//============================================================================

export default function () {    //เรียกใช้ API ใน export default function
  //============= Dashboard ================//
  //response = Dashboard_Get_Vendor()
  //response = Dashboard_Invoice()
  //response = Dashboard_Company()
  //response = Dashboard_Emission()
  //response = Dashboard_Chart()
  //response = Dashboard_transaction()
  //response = Dashboard_User_Info()

  //============= Carbon Receipt ================//
  //response = Get_Months()

  //============= Upload ================//
  response = Upload_File()


  
  error_check(response);
  sleep(1)
}











































































const cid = __ENV.cid || "1";
const id = __ENV.id || "1";
const projectname = __ENV.projectname || "1";
const user = __ENV.user || "1";
const durationx = __ENV.durationx || "1";
let response;
const scenariox = __ENV.scenariox || "1";
let options;
const vusx = Math.ceil(user / durationx);
if (scenariox == 1) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
        gracefulStop: '120s',
      },
    },
  };
}
else if (scenariox == 2) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    vus: user,
    duration: durationx + 's',
    gracefulStop: '120s',
  };
}
else if (scenariox == 3) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    scenarios: {
      example_scenario: {
        executor: 'constant-arrival-rate',
        // rate: user,
        // timeUnit: durationx+'s',
        rate: vusx,
        timeUnit: '1s',
        preAllocatedVUs: user,
        duration: durationx + 's', // ระบุระยะเวลาที่ต้องการให้ทดสอบ
        gracefulStop: '120s',
      },
    },
  };
}
else {
  options = {
    insecureSkipTLSVerify: true,
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
      },
    },
  };
}
export { options };