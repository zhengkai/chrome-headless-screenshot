#!/usr/bin/env node
const puppeteer = require('puppeteer');

const url = 'https://www.github.com';
const file = 'github.png';

(async () => {

	console.log('1. Launch the browser')
	const browser = await puppeteer.launch();

	console.log('2. Open a new page')
	const page = await browser.newPage();

	console.log('3. Navigate to URL:', url)
	await page.goto(url);

	console.log('4. Take screenshot:', file)
	await page.screenshot({path: file});

	console.log('5. Close the browser')
	await browser.close();
})();
