import { domain_api, apikey } from '../../base/config.js';

export async function load({fetch}){
    const url = `${domain_api}/file/list?key=${apikey}`;
	  try {
        const response = await fetch(url);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}