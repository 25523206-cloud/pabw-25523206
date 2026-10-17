
const URL = 'https://jsonplaceholder.typicode.com/posts';

async function load() {
    try {
        const response = await fetch(URL);

        console.log(
            'status', response.status,
            'ok', response.ok
        );

        if (!response.ok) {
            throw new Error('status ' + response.status);
        }

        const data = await response.json();

        console.log('Data API:', data);
        return data;
    } catch (error) {
        console.error('Gagal mengambil data:', error.message);
    }
}

load();
