(() => {
  for (const link of document.querySelectorAll(".email-link")) {
    const user = link.dataset.user || "";
    const domain = link.dataset.domain || "";
    if (!user || !domain) continue;

    const address = `${user}@${domain}`;
    link.textContent = address;
    link.href = `mailto:${address}`;
  }
})();
