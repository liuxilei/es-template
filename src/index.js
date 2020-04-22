const testPromise = () => {
    return new Promise((resolve) => {
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