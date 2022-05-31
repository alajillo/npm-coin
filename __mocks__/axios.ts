const wait = (second: number) =>
    new Promise((resolve) => {
        setTimeout(resolve, second);
    });

const API_END_POINT = 'http://localhost:3000/api/search';
async function get(
    url: string,
    { params: { keyword } }: { params: { keyword: string } }
) {
    if (url === API_END_POINT) {
        await wait(500);
        const data = keyword
            ? [{ name: 'react' }, { name: 'react-dom' }, { name: 'react-test' }]
            : [];
        return { data };
    }
}

const axios = { get };

export default axios;
