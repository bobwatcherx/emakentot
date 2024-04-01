
import { domain_api, apikey } from '../base/config.js';

export async function load({ fetch }) {
    const url = `${domain_api}/file/list?key=${apikey}`;
    
    const headers = new Headers();
    headers.append('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36');

    const requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };

    try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();

        const totalPages = data.result.pages;
        const randomPage = Math.floor(Math.random() * totalPages) + 1;
        const randomPageData = await fetch(`${url}&page=${randomPage}`, requestOptions);
        const randomPageDataJson = await randomPageData.json();
        return randomPageDataJson;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
