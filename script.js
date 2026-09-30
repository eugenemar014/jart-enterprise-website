const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", mainNav.classList.contains("open"));
  menuToggle.setAttribute("aria-label", mainNav.classList.contains("open") ? "Close navigation" : "Open navigation");
});

document.querySelectorAll("#mainNav a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = new FormData(this);
  const name = data.get("name");
  const company = data.get("company") || "Not specified";
  const email = data.get("email");
  const product = data.get("product");
  const message = data.get("message");

  const recipient = "jartenterprise@yahoo.com";

  const subject = encodeURIComponent(`JART Enterprise Inquiry - ${product}`);
  const body = encodeURIComponent(
`Name: ${name}
Company: ${company}
Email: ${email}
Product Interest: ${product}

Message:
${message}`
  );

  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});
