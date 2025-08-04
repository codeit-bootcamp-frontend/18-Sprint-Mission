const BASE_URL = 'https://panda-market-api.vercel.app';

export async function getPanda() {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const body = await response.json(); 
    console.log(body);
    return body;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

