const URL = 'https://jsonplaceholder.typicode.com/posts';

export async function fetchNews() {
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

        console.log('Post pertama:', data[0]);
        console.log('Judul post pertama:', data[0]?.title);

        const payload = JSON.stringify({
            title: 'Advisory',
            level: 2
        });

        console.log('Payload:', payload);
        console.log('Tipe payload:', typeof payload);

        return data;
    } catch (error) {
        console.error('Gagal mengambil data:', error.message);
        throw error;
    }
}