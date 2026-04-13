// ==UserScript==
// @name         Agentation Injection
// @namespace    https://github.com/dramalife-maker/agentation-injection
// @version      1.1.0
// @description  在本地開發頁面注入 Agentation
// @match        http://localhost/*
// @match        http://127.0.0.1/*
// @match        http://[::1]/*
// @run-at       document-end
// @grant        none
// @author       dramalife-maker
// @homepage     https://github.com/dramalife-maker/agentation-injection
// ==/UserScript==

(function () {
  "use strict";

  const el = document.createElement("script");
  el.type = "module";
  el.textContent = `
  const copyFallback = (text) => {
    const ta = document.createElement("textarea");
    Object.assign(ta.style, { position: "fixed", left: "-99in", top: "0" });
    ta.value = text ?? "";
    ta.readOnly = true;
    document.body.append(ta);
    ta.select();
    const ok = document.execCommand("copy");
    ta.remove();
    return ok || window.prompt("請手動複製：", ta.value);
  };

  // 劫持並統一 Clipboard API
  const clip = navigator.clipboard || (navigator.clipboard = {});
  const originalWrite = clip.writeText?.bind(clip);

  clip.writeText = async (text) => {
    try {
      if (originalWrite) return await originalWrite(text);
    } catch (e) {}
    if (!copyFallback(text)) throw new Error("Copy failed");
  };

  // 動態載入組件
  import React from "https://esm.sh/react@18.3.1";
  import { createRoot } from "https://esm.sh/react-dom@18.3.1/client?deps=react@18.3.1";
  import { Agentation } from "https://esm.sh/agentation@3.0.2?deps=react@18.3.1,react-dom@18.3.1";

  const rootId = "agentation-root";
  if (!document.getElementById(rootId)) {
    const mount = document.createElement("div");
    mount.id = rootId;
    document.body.append(mount);
    createRoot(mount).render(React.createElement(Agentation));
  }
  `;
    document.body.append(el);
})();
