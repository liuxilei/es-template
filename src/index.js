import "@babel/polyfill";

const testPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello world");
        });
    })
}

const testAsync = async () => {
    const result = await testPromise();
    console.log(result);
}

testAsync();