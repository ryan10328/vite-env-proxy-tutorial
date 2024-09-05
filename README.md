# proxy setup & environment variable replacement

- `.env.xxxx`
    - 不同環境的環境變數設定 (localhost 是給本機用的設定、production 是要給打包用的設定)
- `counter.js` 
    - 裡面有提到如何透過 `import.meta.env.VITE_API_BASE_URL` 取得環境變數
- `package.json` 裡面的 scripts 區塊裡面有
    - `npm run dev` 開啟本機的 dev server
    - `build run build` 打包成能夠 deploy 的檔案