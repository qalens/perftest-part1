import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
    stages: [
        { duration: '10s', target: 10 },
        { duration: '2m', target:  10 },
        { duration: '10s', target: 0 }
    ],
};
export default function(){
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    http.get(`http://localhost:8020/add/12/13`, params);
}
