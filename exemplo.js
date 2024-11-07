import http from 'k6/http'
import { check, sle } from 'k6'
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options ={
    stages: [{duration: '5m', target: 500}],
    thresholds:{
        checks: ['rate > 0.99'], // range maior que 99%
        http_req_failed: ['rate < 0.01'],
        http_req_duration: ['p(95) < 600']

    }
}

export default function(){
    
    const BASE_URL = 'https://test-api.k6.io'

    const USER = `${Math.random()}@mail.com`
    const PASS = 'user123'

    const res = http.post(`${BASE_URL}/user/register/`, {
        username: USER,
        first_name: 'crocrodilo',
        last_name: 'dino',
        email: USER,
        password: PASS
    })
    
    check(res, {
        'sucesso ao registrar': (r) => r.status === 201,
    })
}

export function handleSummary(data) {
    return {
      "relatorioK6.html": htmlReport(data),
    };
  }