import { useState } from "react";

const puppeteer = require("puppeteer");

const App = () => {
    const [productImgUrls, setProductImgUrls] = useState([]);

    const scrapeProduct = async (url) => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);

        const element = await page.waitForSelector("div > img");

        const src = await element.getProperty("src");
        const srcTxt = await src.jsonValue();

        console.log({ srcTxt });
    };

    scrapeProduct("https://superbalist.com/wishlist/1890d14248803");

    return (
        <div>
            <header>
                <h1>Superbawisht</h1>
            </header>
        </div>
    );
};

export default App;
