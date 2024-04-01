import { domain_api, apikey } from '../../../base/config.js';

export async function load({params}){
	let params_id = params.id
    const url = `${domain_api}/file/info?key=${apikey}&file_code=${params_id}`;
    const headers = new Headers();
    headers.append('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36');

    // Related Videos
    const related_url = `${domain_api}/file/list?key=${apikey}`;



    const requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };
     try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();

        const related_response = await fetch(related_url, requestOptions);
        const related_data = await related_response.json();

        const totalPages = related_data.result.pages;
        const randomPage = Math.floor(Math.random() * totalPages) + 1;
        const randomPageData = await fetch(`${related_url}&page=${randomPage}`, requestOptions);
        const randomPageDataJson = await randomPageData.json();
        return {
            details:data,
            random:randomPageDataJson
        }

        } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}