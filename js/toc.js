document.addEventListener("DOMContentLoaded", function () {
  const headings = document.querySelectorAll(".post-body h2, .post-body h3");
  if (!headings.length) return;

  const tocContainer = document.getElementById("de_toc_container");
  let tocHTML =
    '<h3 id="de_toc_title">Daftar Isi <span>▼</span></h3><ul style="display:block;">';

  let mainCount = 0;
  let subCount = 0;

  headings.forEach((h, index) => {
    const defaultId = h.getAttribute("id");
    const id = defaultId ? defaultId : "de_toc" + index;
    h.setAttribute("id", id);

    if (h.tagName.toLowerCase() === "h2") {
      mainCount++;
      subCount = 0;
      tocHTML += `<li style="list-style-type: none;"><a href="#${id}">${mainCount}.0 ${h.innerText}</a></li>`;
    } else if (h.tagName.toLowerCase() === "h3") {
      subCount++;
      tocHTML += `<li style="margin-left:15px; list-style-type: none"><a href="#${id}">${mainCount}.${subCount} ${h.innerText}</a></li>`;
    }
  });

  tocHTML += "</ul>";
  tocContainer.innerHTML = tocHTML;

  // toggle buka/tutup
  const title = document.getElementById("de_toc_title");
  const ul = tocContainer.querySelector("ul");
  let isOpen = true;
  title.addEventListener("click", function () {
    isOpen = !isOpen;
    ul.style.display = isOpen ? "block" : "none";
    title.querySelector("span").textContent = isOpen ? "▲" : "▼";
  });
});
