import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
    stages: [
        { duration: '10s', target: 200 },
        { duration: '5m', target:  200 },
        { duration: '10s', target: 0 }
    ],
};
export default function(){
    const body = JSON.stringify({
        a: 3,
        b: 5
    });
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    http.post(`http://localhost:8020/add`, body, params);
    sleep(1)
}
