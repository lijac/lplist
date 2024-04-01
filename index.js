const contract = "0x400F9ce4E9baD12501De831970C13e4aE99AC442"; // NFTManager
const API = `https://lineaapi.nftscan.com/api/v2/asset/collection/amount?contract_address=${contract}`;

const HEADERX = process.env.XKEY;

function logSetElements(value1, value2, set) {
    console.log(value1);
}

function parseList(result) {
    if (result.code !== 200) {
        console.log(result.code, result.msg);
        return;
    }

    console.log(`NFTs: ${result.data.total}, Next Cursor: ${result.data.next}`);

    const addressSet = new Set();

    for (const item of result.data.content) {
        addressSet.add(item.owner);
    }

    console.log("Unique Holders: ", addressSet.size);
    addressSet.forEach(logSetElements);
}

async function callAPI() {
    try {
        const response = await fetch(API, {
            headers: {
                "X-API-KEY": HEADERX,
            },
        });

        const result = await response.json();
        console.log("Success:", result);

        parseList(result);
    } catch (error) {
        console.error("Error:", error);
    }
}

callAPI();
