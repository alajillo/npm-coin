const wait = (second: number) =>
    new Promise((resolve) => {
        setTimeout(resolve, second);
    });

async function get() {
    await wait(500);
    return true;
}

const axios = { get };

export default axios;
