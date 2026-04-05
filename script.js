// ==UserScript==
// @name         Agentation Injection
// @namespace    https://github.com/Li-AnLin/agentation-injection
// @version      1.0.0
// @description  在本地開發頁面注入 Agentation
// @match        http://localhost/*
// @match        http://127.0.0.1/*
// @match        http://[::1]/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const el = document.createElement("script");
  el.type = "module";
  el.textContent = `
import React from "https://esm.sh/react@18.3.1";
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client?deps=react@18.3.1";
import { Agentation } from "https://esm.sh/agentation@3.0.2?deps=react@18.3.1,react-dom@18.3.1";

const mount = document.createElement("div");
mount.id = "agentation-root";
document.body.appendChild(mount);
createRoot(mount).render(React.createElement(Agentation));
`;
  document.body.appendChild(el);
})();
