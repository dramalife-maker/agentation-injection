# Agentation Injection

本機開發時用 [Tampermonkey](https://www.tampermonkey.net/)（或相容的 userscript 管理器）把 [Agentation](https://www.agentation.com/) 注入到網頁，省去在每個專案裡重複安裝、接線 React 的時間，方便快速導入開發與視覺標註流程。

Agentation 會把 UI 標註轉成給 AI 編碼助理用的結構化脈絡；產品說明、安裝與功能請見官方網站：**[https://www.agentation.com/](https://www.agentation.com/)**。

## 安裝

1. 安裝 Tampermonkey（或 Violentmonkey 等）。
2. 從網址安裝腳本（Tampermonkey 選單 →「新增腳本」旁的加號 →「從網址安裝」）：

   [https://github.com/Li-AnLin/agentation-injection/raw/main/script.js](https://github.com/Li-AnLin/agentation-injection/raw/main/script.js)

   亦可先開啟該連結再依瀏覽器提示安裝。

## 預設會作用的頁面

腳本目前僅在下列 **HTTP** 本機來源執行（見 `script.js` 的 `@match`）：

- `http://localhost/*`
- `http://127.0.0.1/*`
- `http://[::1]/*`

若本機使用 **HTTPS**（例如 `https://localhost:3000`），請在腳本標頭中自行加上對應的 `@match` 規則。

## 授權

專案以 [MIT License](LICENSE) 授權。
