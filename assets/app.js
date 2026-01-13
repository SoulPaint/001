/** 
 * 内嵌文本模式 
 * 这里的 docContent 会替换成你文档解析后的 HTML 内容（展开/折叠前）
 */

const docContent = `
<h2>示例章节</h2>
<p>这里是文档内容示例段落。</p>
<h3>小节标题</h3>
<p>这里是详细内容……</p>
<p>更多内容……</p>
`;

/**
 * 折叠逻辑
 */
function renderCollapsible(html) {
  const container = document.getElementById('content');
  container.innerHTML = html;

  const headings = container.querySelectorAll('h1,h2,h3,h4,h5,h6');
  headings.forEach(h => {
    const wrapper = document.createElement('div');
    wrapper.className = "section-content";
    let next = h.nextElementSibling;

    while (next && !/^H[1-6]$/.test(next.tagName)) {
      const temp = next.nextElementSibling;
      wrapper.appendChild(next);
      next = temp;
    }

    if (wrapper.childNodes.length > 0) {
      wrapper.style.display = "none";
      h.after(wrapper);
      h.addEventListener("click", () => {
        wrapper.style.display = wrapper.style.display === "none" ? "block" : "none";
      });
    }
  });
}

// 初始化
renderCollapsible(docContent);
