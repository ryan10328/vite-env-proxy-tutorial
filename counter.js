export async function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
  // 這個網址在 localhost debug 會是 /api (因為我們在 .env.localhost 有設定 VITE_API_BASE_URL=/api)
  // 然後這個網址在 production 環境會被取代成 https://baconipsum.com/api (因為我們在 .env.production 有設定 VITE_API_BASE_URL=https://baconipsum.com/api)
  // npm run dev 的時候 => 有指定 --mode localhost => 表示在這個 dev server debug 的環境下，會使用 .env.localhost 的設定
  // npm run build 的時候 => 有指定 --mode production => 表示在 production 環境下，會使用 .env.production 的設定
  // 至於 package.json 裡面的 --base=/xy/z 這個設定是因為你 deploy 到 IIS 上面有可能是放底下的 virtual application (那麼你的網址就有可能會多個幾層，這個 base 的設定只是讓你可以指定你到底有幾層，他在 build 的時候會自動幫你加上去)
  const url = import.meta.env.VITE_API_BASE_URL;
  const result = await fetch(`${url}/?type=all-meat&paras=2&start-with-lorem=1`).then(response => response.json());
  console.log(result);
}
