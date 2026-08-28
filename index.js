
// PROJECT DATA
const projects = {
  1: {
    title: "Luxury Hotel Branding",
    challenge: "The client lacked a premium visual identity.",
    solution: "We created a luxury branding system with elegant typography.",
    tools: "Figma, Photoshop",
    result: "Increased brand recognition by 40%"
  },
  2: {
    title: "E-Commerce UI Design",
    challenge: "Low user engagement on platform.",
    solution: "Redesigned UI with better UX flow.",
    tools: "Figma, React",
    result: "Boosted conversions by 25%"
  }
};

// OPEN MODAL
function openCase(id) {
  const modal = document.getElementById("caseModal");
  const data = projects[id];

  document.getElementById("caseTitle").innerText = data.title;

  document.getElementById("caseDetails").innerHTML = `
    <li><strong>The Challenge:</strong> ${data.challenge}</li>
    <li><strong>The Solution:</strong> ${data.solution}</li>
    <li><strong>Tools Used:</strong> ${data.tools}</li>
    <li><strong>The Result:</strong> ${data.result}</li>
  `;

  modal.style.display = "flex";
}

// CLOSE MODAL
document.querySelector(".case-close").onclick = function () {
  document.getElementById("caseModal").style.display = "none";
};

// CLOSE ON OUTSIDE CLICK
window.onclick = function (e) {
  const modal = document.getElementById("caseModal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
/* =========================================================
   VANTYX AI ASSISTANT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const chat = document.getElementById("ai-chat");
  const orb = document.getElementById("ai-orb-btn");
  const closeBtn = document.getElementById("ai-close-btn");
  const aiInput = document.querySelector(".ai-user-input");
  const sendBtn = document.querySelector(".ai-send-btn");
  const body = document.getElementById("ai-body");

  /* SAFETY CHECK */
  if (!chat || !orb || !closeBtn || !aiInput || !sendBtn || !body) {
    console.error("VANTYX AI: Required elements are missing.");
    return;
  }

  /* USER DATA */
  let userData = {
    name: "",
    email: "",
    project: "",
    stage: "normal"
  };

  /* ================= OPEN CHAT ================= */

  function openChat() {
    chat.classList.add("show");

    setTimeout(() => {
      aiInput.focus();
    }, 100);
  }

  /* ================= CLOSE CHAT ================= */

  function closeChat() {
    chat.classList.remove("show");
  }

  /* ================= ORB ================= */

  orb.addEventListener("click", function (e) {
    e.stopPropagation();
    openChat();
  });

  /* ================= CLOSE BUTTON ================= */

  closeBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    closeChat();
  });

  /* ================= OUTSIDE CLICK ================= */

  document.addEventListener("click", function (e) {

    if (
      !chat.contains(e.target) &&
      !orb.contains(e.target)
    ) {
      closeChat();
    }

  });

  /* ================= SCROLL ================= */

  function scrollToBottom() {
    body.scrollTop = body.scrollHeight;
  }

  /* ================= SEND MESSAGE ================= */

  function sendMessage() {

    const text = aiInput.value.trim();

    if (!text) return;

    /* USER MESSAGE */

    const userMsg = document.createElement("div");

    userMsg.className = "ai-message user";
    userMsg.innerText = text;

    body.appendChild(userMsg);

    /* CLEAR INPUT */

    aiInput.value = "";

    scrollToBottom();

    /* THINKING */

    const thinking = document.createElement("div");

    thinking.className = "ai-message bot ai-thinking-message";
    thinking.innerText = "Thinking...";

    body.appendChild(thinking);

    scrollToBottom();

    /* RESPONSE */

    setTimeout(() => {

      const response = getAIResponse(text);

      thinking.remove();

      const botMsg = document.createElement("div");

      botMsg.className = "ai-message bot";
      botMsg.innerText = response;

      body.appendChild(botMsg);

      scrollToBottom();

    }, 600);
  }

  /* ================= SEND BUTTON ================= */

  sendBtn.addEventListener("click", sendMessage);

  /* ================= ENTER KEY ================= */

  aiInput.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

      e.preventDefault();

      sendMessage();

    }

  });

  /* =========================================================
     AI RESPONSE ENGINE
     ========================================================= */

  function getAIResponse(inputText) {

    const text = inputText.toLowerCase().trim();

    /* ================= LEAD CAPTURE ================= */

    if (userData.stage === "ask_name") {

      userData.name = inputText;

      userData.stage = "ask_email";

      return `Nice to meet you, ${userData.name}.

What's your email so we can follow up with you?`;
    }

    if (userData.stage === "ask_email") {

      userData.email = inputText;

      userData.stage = "ask_project";

      return `Great.

Tell me about your project. What would you like us to design or build?`;
    }

    if (userData.stage === "ask_project") {

      userData.project = inputText;

      userData.stage = "done";

      console.log(
        "NEW VANTYX CLIENT LEAD:",
        userData
      );

      setTimeout(() => {

        const cta = document.createElement("div");

        cta.className = "ai-message bot";

        cta.innerHTML = `
          <strong>Ready to start?</strong><br><br>

          <button
            id="ai-start-project"
            style="
              padding:10px 15px;
              border:none;
              border-radius:8px;
              background:#1ABC9C;
              color:white;
              cursor:pointer;
            "
          >
            Start Your Project
          </button>
        `;

        body.appendChild(cta);

        document
          .getElementById("ai-start-project")
          ?.addEventListener("click", function () {

            document
              .getElementById("pricing")
              ?.scrollIntoView({
                behavior: "smooth"
              });

          });

        scrollToBottom();

      }, 400);

      return `That sounds like a great project, ${userData.name}.

We can definitely help you achieve it professionally.`;
    }

    /* ================= GREETINGS ================= */

    if (
      text === "hi" ||
      text === "hello" ||
      text === "hey" ||
      text.includes("good morning") ||
      text.includes("good afternoon") ||
      text.includes("good evening")
    ) {

      return `Hello 👋 Welcome to VANTYX STUDIOS KENYA.

How can I help you today?

You can ask about our services, pricing, portfolio, websites, branding, or starting a project.`;
    }

    /* ================= SERVICES ================= */

    if (
      text.includes("services") ||
      text.includes("what do you offer") ||
      text.includes("what can you do")
    ) {

      return `We offer:

• Branding & Logo Design
• Graphic Design
• UI/UX Design
• Web Design & Development
• Social Media Design
• Print Design
• Business Branding
• Thesis & Dissertation Support
• Research Proposal Development
• Data Analysis & SPSS

What service are you interested in?`;
    }

    /* ================= PRICING ================= */

    if (
      text.includes("pricing") ||
      text.includes("price") ||
      text.includes("cost") ||
      text.includes("how much")
    ) {

      document
        .getElementById("pricing")
        ?.scrollIntoView({
          behavior: "smooth"
        });

      return `Our pricing depends on the type and scope of your project.

I've taken you to the Pricing section so you can view the available plans.`;
    }

    /* ================= PORTFOLIO ================= */

    if (
      text.includes("portfolio") ||
      text.includes("projects") ||
      text.includes("previous work") ||
      text.includes("your work")
    ) {

      document
        .getElementById("portfolio")
        ?.scrollIntoView({
          behavior: "smooth"
        });

      return `Here are some of our previous projects.

I've taken you to the Portfolio section.`;
    }

    /* ================= CONTACT ================= */

    if (
      text.includes("contact") ||
      text.includes("phone") ||
      text.includes("email") ||
      text.includes("reach you")
    ) {

      document
        .getElementById("contact")
        ?.scrollIntoView({
          behavior: "smooth"
        });

      return `You can contact VANTYX STUDIOS KENYA through the Contact section.

I've taken you there now.`;
    }

    /* ================= BRANDING ================= */

    if (
      text.includes("branding") ||
      text.includes("logo") ||
      text.includes("brand identity")
    ) {

      return `Our branding service can include:

• Logo Design
• Visual Identity
• Typography
• Color Systems
• Brand Guidelines
• Stationery
• Brand Strategy

Tell me what type of brand you want to create.`;
    }

    /* ================= WEBSITE ================= */

    if (
      text.includes("website") ||
      text.includes("web development") ||
      text.includes("web design")
    ) {

      return `We create modern, responsive websites focused on strong visual design, usability and performance.

Tell me what kind of website you need.`;
    }

    /* ================= ACADEMIC ================= */

    if (
      text.includes("thesis") ||
      text.includes("dissertation") ||
      text.includes("academic") ||
      text.includes("research") ||
      text.includes("spss")
    ) {

      return `Our academic services include:

• Thesis & Dissertation Support
• Research Proposal Development
• Literature Review
• Methodology
• Data Analysis
• SPSS
• Research Reports

Tell me what academic project you are working on.`;
    }

    /* ================= START PROJECT ================= */

    if (
      text.includes("start project") ||
      text.includes("hire you") ||
      text.includes("hire") ||
      text.includes("work with you") ||
      text.includes("get started") ||
      text.includes("request a project")
    ) {

      userData.stage = "ask_name";

      return `Excellent. Let's get your project started.

First, what's your name?`;
    }

    /* ================= HELP ================= */

    if (
      text.includes("help") ||
      text.includes("what can i ask")
    ) {

      return `I can help you with:

• Services
• Pricing
• Portfolio
• Branding
• Websites
• Academic services
• Contact information
• Starting a project

What would you like to know?`;
    }

    /* ================= DEFAULT ================= */

    return `I'm here to help you with VANTYX STUDIOS KENYA.

You can ask me about our services, pricing, portfolio, branding, websites, academic services, or starting a project.`;
  }

  /* ================= GLOBAL OPEN AI FUNCTION ================= */

  window.openAI = function () {
    openChat();
  };

});

    /* =====================================================
       PORTFOLIO
       ===================================================== */

    if (
      text.includes("portfolio") ||
      text.includes("projects") ||
      text.includes("previous work") ||
      text.includes("your work")
    ) {

      document
        .getElementById("portfolio")
        ?.scrollIntoView({
          behavior: "smooth"
        });

      return `
Here are some of our previous projects.

I've taken you to the Portfolio section.
      `.trim();

    }

    /* =====================================================
       CONTACT
       ===================================================== */

    if (
      text.includes("contact") ||
      text.includes("phone") ||
      text.includes("email") ||
      text.includes("reach you")
    ) {

      document
        .getElementById("contact")
        ?.scrollIntoView({
          behavior: "smooth"
        });

      return `
You can contact VANTYX STUDIOS KENYA through the Contact section.

I've taken you there now.
      `.trim();

    }

    /* =====================================================
       BRANDING
       ===================================================== */

    if (
      text.includes("branding") ||
      text.includes("logo") ||
      text.includes("brand identity")
    ) {

      return `
Our branding service can include:

• Logo Design
• Visual Identity
• Typography
• Color Systems
• Brand Guidelines
• Stationery
• Brand Strategy

Tell me what type of brand you want to create.
      `.trim();

    }

    /* =====================================================
       WEBSITE
       ===================================================== */

    if (
      text.includes("website") ||
      text.includes("web development") ||
      text.includes("web design")
    ) {

      return `
We create modern, responsive websites focused on strong visual design, usability and performance.

Tell me what kind of website you need.
      `.trim();

    }

    /* =====================================================
       ACADEMIC
       ===================================================== */

    if (
      text.includes("thesis") ||
      text.includes("dissertation") ||
      text.includes("academic")
    ) {

      return `
Our academic services include:

• Thesis & Dissertation Support
• Research Proposal Development
• Literature Review
• Methodology
• Data Analysis
• SPSS
• Research Reports

Tell me what academic project you are working on.
      `.trim();

    }

    /* =====================================================
       START PROJECT
       ===================================================== */

    if (
      text.includes("start project") ||
      text.includes("hire you") ||
      text.includes("hire") ||
      text.includes("work with you") ||
      text.includes("get started") ||
      text.includes("request a project")
    ) {

      userData.stage = "ask_name";

      return `
Excellent. Let's get your project started.

First, what's your name?
      `.trim();

    }

    /* =====================================================
       FAQ
       ===================================================== */

    if (
      text.includes("help") ||
      text.includes("what can i ask")
    ) {

      return `
I can help you with:

• Services
• Pricing
• Portfolio
• Branding
• Websites
• Academic services
• Contact information
• Starting a project

What would you like to know?
      `.trim();

    }

    /* =====================================================
       DEFAULT
       ===================================================== */

    return `
I'm here to help you with VANTYX STUDIOS KENYA.

You can ask me about our services, pricing, portfolio, branding, websites, academic services, or starting a project.
    `.trim();

  }

  /* =========================================================
     GLOBAL OPEN AI FUNCTION
     ========================================================= */

  window.openAI = function () {
    openChat();
  };

});

    /* ================= CONTACT ================= */

    if (
      text.includes("contact") ||
      text.includes("email") ||
      text.includes("phone")
    ) {

      document
        .getElementById("contact")
        ?.scrollIntoView({
          behavior: "smooth"
        });


      return `
You can contact VANTYX STUDIOS KENYA through the Contact section.

I've taken you there now.
      `.trim();

    }


    /* ================= START PROJECT ================= */

    if (
      text.includes("start") ||
      text.includes("project") ||
      text.includes("hire")
    ) {

      document
        .getElementById("pricing")
        ?.scrollIntoView({
          behavior: "smooth"
        });


      return `
Let's get started.

Choose a plan from the Pricing section or request a custom project.
      `.trim();

    }


    /* ================= BRANDING ================= */

    if (
      text.includes("branding") ||
      text.includes("logo")
    ) {

      return `
Our branding services can include logo design, visual identity, typography, colors, stationery and brand guidelines.

Tell me what type of brand you want to create.
      `.trim();

    }


    /* ================= WEB DESIGN ================= */

    if (
      text.includes("website") ||
      text.includes("web development") ||
      text.includes("web design")
    ) {

      return `
We provide professional web design and development focused on modern visuals, responsive layouts and strong user experience.

Tell me what kind of website you need.
      `.trim();

    }


    /* ================= DEFAULT ================= */

    return `
I'm here to help you move forward.

You can ask me about our services, pricing, portfolio, branding, websites, academic services, or starting a project.
    `.trim();

  }

});

function openPolicy() {
  document.getElementById("privacy-modal").classList.add("active");
}

function closePolicy() {
  document.getElementById("privacy-modal").classList.remove("active");
}
function openTerms() {
  document.getElementById("terms-modal").classList.add("active");
  document.body.classList.add("modal-open");
}

function closeTerms() {
  document.getElementById("terms-modal").classList.remove("active");
  document.body.classList.remove("modal-open");
}
window.addEventListener("click", function(e) {
  const terms = document.getElementById("terms-modal");
  if (e.target === terms) {
    closeTerms();
  }
});
function openBlog(id) {

  const modal = document.getElementById("blogModal");
  const content = document.getElementById("blogContent");

  let blogData = {
    1: `
      <h2>How to Build a Strong Brand Identity</h2>
      <p>
        A strong brand identity is more than just a logo. It includes your color system,
        typography, messaging, and how your audience perceives your business.
      </p>
      <p>
        At VANTYX Studios, we focus on building cohesive visual systems that create
        trust and recognition across all platforms.
      </p>
    `,
    2: `
      <h2>Top Graphic Design Trends in 2026</h2>
      <p>
        Modern design is shifting towards minimalism, bold typography, and AI-assisted visuals.
      </p>
      <p>
        Brands are focusing more on clarity, motion, and immersive experiences.
      </p>
    `,
    3: `
      <h2>Why Branding Matters for Startups</h2>
      <p>
        Startups that invest in branding early gain faster recognition and customer trust.
      </p>
      <p>
        A strong identity makes your business look established even in early stages.
      </p>
    `
  };

  content.innerHTML = blogData[id];
  modal.style.display = "flex";
}

function closeBlog() {
  document.getElementById("blogModal").style.display = "none";
}

/* CLICK OUTSIDE TO CLOSE */
window.onclick = function(e) {
  const modal = document.getElementById("blogModal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
}
function openCase(id) {
  const modal = document.getElementById("caseModal");
  const title = document.getElementById("caseTitle");
  const details = document.getElementById("caseDetails");

  const data = {
    1: {
      title: "Luxury Hotel Branding",
      content: `
        <li><strong>The Challenge:</strong> Create a premium identity for a luxury hotel.</li>
        <li><strong>The Solution:</strong> Elegant gold-accent branding system.</li>
        <li><strong>Tools Used:</strong> Illustrator, Photoshop</li>
        <li><strong>The Result:</strong> Increased bookings by 40%</li>
      `
    },
    2: {
      title: "E-Commerce UI Design",
      content: `
        <li><strong>The Challenge:</strong> Improve user experience.</li>
        <li><strong>The Solution:</strong> Clean conversion-focused UI.</li>
        <li><strong>Tools Used:</strong> Figma, React</li>
        <li><strong>The Result:</strong> +30% conversions</li>
      `
    },
    3: {
      title: "Corporate Brand Identity",
      content: `
        <li><strong>The Challenge:</strong> Outdated branding.</li>
        <li><strong>The Solution:</strong> Modern identity redesign.</li>
        <li><strong>Tools Used:</strong> Illustrator</li>
        <li><strong>The Result:</strong> Improved brand perception</li>
      `
    },
    4: {
      title: "Restaurant Visual Identity",
      content: `
        <li><strong>The Challenge:</strong> Build a strong food brand.</li>
        <li><strong>The Solution:</strong> Vibrant visual identity.</li>
        <li><strong>Tools Used:</strong> Photoshop</li>
        <li><strong>The Result:</strong> Higher engagement</li>
      `
    }
  };

  title.innerText = data[id].title;
  details.innerHTML = data[id].content;

  modal.style.display = "flex";
}

function closeCase() {
  document.getElementById("caseModal").style.display = "none";
}

/* CLICK OUTSIDE TO CLOSE */
window.addEventListener("click", function(e) {
  const modal = document.getElementById("caseModal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

const filterButtons = document.querySelectorAll(".portfolio-filters button");
const cards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    // ACTIVE BUTTON STYLE
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    cards.forEach(card => {
  const category = card.getAttribute("data-category");

  if (filter === "all" || filter === category) {
    card.classList.remove("hide");
  } else {
    card.classList.add("hide");
  }
});
    });

  });

/* ================= SCROLL TO CONTACT ================= */
function goToContact() {
  const contact = document.getElementById("contact");

  if (contact) {
    contact.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

/* ================= VIEW FULL ARCHIVE ================= */
function showAllProjects() {

  // Reset filters
  const buttons = document.querySelectorAll(".portfolio-filters button");
  buttons.forEach(btn => btn.classList.remove("active"));

  const allBtn = document.querySelector('[data-filter="all"]');
  if (allBtn) allBtn.classList.add("active");

  // Show all cards
  document.querySelectorAll(".portfolio-card").forEach(card => {
    card.style.display = "block";
  });

  // Scroll to portfolio section
  document.getElementById("portfolio").scrollIntoView({
    behavior: "smooth"
  });
}
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}
const toggle = document.querySelector(".switch input");
const prices = document.querySelectorAll(".pricing-card h1");

toggle?.addEventListener("change", () => {

  prices.forEach(price => {
    if (toggle.checked) {
      // Annual pricing (example discount)
      if (price.innerText.includes("$")) {
        let value = parseInt(price.innerText.replace("$", ""));
        price.innerText = "$" + (value * 10).toFixed(0);
      }
    } else {
      // Reset back (example logic placeholder)
      if (price.innerText.includes("$")) {
        let value = parseInt(price.innerText.replace("$", ""));
        price.innerText = "$" + (value / 10).toFixed(0);
      }
    }
  });

});


/* ================= START PROJECT (ANY PLAN) ================= */
function startProject(plan) {

  // Smooth scroll to contact
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });

  // Optional: auto-fill message field if exists
  const messageBox = document.querySelector("#contact textarea");
  if (messageBox) {
    messageBox.value = "I am interested in the " + plan + " plan.";
  }
}

/* ================= GET QUOTE (ENTERPRISE) ================= */
function getQuote() {

  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });

  const messageBox = document.querySelector("#contact textarea");
  if (messageBox) {
    messageBox.value = "I would like a custom enterprise quotation for my project.";
  }
}
// FAQ ACCORDION FUNCTION
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {

    const item = btn.parentElement;

    // toggle active class
    item.classList.toggle("active");

  });
});

function openAI() {
  document.querySelector(".ai-orb")?.click();
}


/* OPEN MODALS */
function openTeam() {
  document.getElementById("teamModal").classList.add("show");
}

function openCareers() {
  document.getElementById("careersModal").classList.add("show");
}

function openPress() {
  document.getElementById("pressModal").classList.add("show");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("show");
}
/* CLOSE WHEN CLICK OUTSIDE */
window.onclick = function(event) {
  ["teamModal", "careersModal", "pressModal"].forEach(id => {
    const modal = document.getElementById(id);
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};
function openTeam() {
  document.getElementById("teamModal").classList.add("show");
}

function openCareers() {
  document.getElementById("careersModal").classList.add("show");
}

function openPress() {
  document.getElementById("pressModal").classList.add("show");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("show");
}
function performSearch() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const sections = document.querySelectorAll("section");

  let found = false;

  sections.forEach(section => {
    const keywords = section.getAttribute("data-search");

    if (keywords && keywords.includes(input)) {
      section.scrollIntoView({ behavior: "smooth" });

      // highlight effect
      section.style.boxShadow = "0 0 0 3px #1ABC9C";
      setTimeout(() => {
        section.style.boxShadow = "none";
      }, 2000);

      found = true;
    }
  });

  if (!found) {
    alert("No results found. Try something like 'branding', 'portfolio', or 'pricing'.");
  }
}
document.getElementById("searchInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    performSearch();
  }
});
const input = document.getElementById("searchInput");
const suggestionsBox = document.getElementById("suggestions");

// Collect searchable data
const data = [
  "branding", "portfolio", "pricing", "blog", "faq",
  "ui ux", "design", "logo", "identity",
  "Luxury Hotel Branding",
  "E-Commerce UI Design",
  "Design Trends 2026",
  "How to Build a Brand"
];

// ================= LIVE SUGGESTIONS =================
input.addEventListener("input", () => {
  const value = input.value.toLowerCase();
  suggestionsBox.innerHTML = "";

  if (!value) return;

  const filtered = data.filter(item => item.toLowerCase().includes(value));

  filtered.slice(0, 6).forEach(item => {
    const div = document.createElement("div");
    div.textContent = item;

    div.onclick = () => {
      input.value = item;
      suggestionsBox.innerHTML = "";
      runFullSearch(item);
    };

    suggestionsBox.appendChild(div);
  });
});

// ================= MAIN SEARCH =================
function runFullSearch(query) {
  query = query.toLowerCase();

  // -------- PORTFOLIO FILTER --------
  document.querySelectorAll(".portfolio-card").forEach(card => {
    const title = card.dataset.title.toLowerCase();
    const category = card.dataset.category.toLowerCase();

    if (title.includes(query) || category.includes(query)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });

  // -------- BLOG FILTER --------
  document.querySelectorAll(".blog-card").forEach(card => {
    const title = card.dataset.title.toLowerCase();

    if (title.includes(query)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });

  // -------- SECTION SCROLL --------
  const sections = document.querySelectorAll("section");

  sections.forEach(section => {
    const keywords = section.getAttribute("data-search");

    if (keywords && keywords.includes(query)) {
      section.scrollIntoView({ behavior: "smooth" });

      section.style.boxShadow = "0 0 0 3px #1ABC9C";
      setTimeout(() => section.style.boxShadow = "none", 2000);
    }
  });

  // -------- AI ASSISTANT HOOK --------
  triggerAI(query);
}

// ================= ENTER KEY =================
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    runFullSearch(input.value);
    suggestionsBox.innerHTML = "";
  }
});

// ================= AI ASSISTANT (BASIC) =================
function triggerAI(query) {
  const aiBody = document.getElementById("ai-body");

  if (!aiBody) return;

  const msg = document.createElement("div");
  msg.className = "ai-message bot";

  msg.textContent = `Searching for "${query}"... I found relevant sections and content for you.`;

  aiBody.appendChild(msg);
}


let cart = [];

function openCart() {
  document.getElementById("cartModal").classList.add("show");
}

function closeCart() {
  document.getElementById("cartModal").classList.remove("show");
}

function addToCart(item) {
  cart.push(item);
  updateCart();
}

function updateCart() {
  document.getElementById("cartCount").innerText = cart.length;

  let container = document.getElementById("cartItems");

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty</p>";
    return;
  }

  container.innerHTML = cart.map((item, i) => `
    <div>
      ${item} 
      <button onclick="removeItem(${i})">Remove</button>
    </div>
  `).join("");
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function checkout() {
  alert("Checkout coming soon 🚀");
}
function openAccount() {
  document.getElementById("accountModal").classList.add("show");
}

function closeAccount() {
  document.getElementById("accountModal").classList.remove("show");
}

/* SWITCH TO LOGIN */
function switchToLogin() {
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("formTitle").innerText = "Welcome Back";
}

/* SWITCH TO SIGNUP */
function switchToSignup() {
  document.getElementById("signupForm").style.display = "block";
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("formTitle").innerText = "Create Account";
}

/* CLOSE ON OUTSIDE CLICK */
window.addEventListener("click", function (e) {
  const modal = document.getElementById("accountModal");
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});
function loginWithGoogle() {
  alert("Google login will be connected via Firebase or Google Auth API.");
}

function loginWithGithub() {
  alert("GitHub login will be connected later.");
}
function setLanguage(code, name) {
  
  // Update button text
  document.getElementById("langBtn").innerText = "🌐 Language: " + name;

  // Save selection
  localStorage.setItem("siteLanguage", code);
  localStorage.setItem("siteLanguageName", name);

  // Optional: show feedback
  console.log("Language selected:", code);

  // HERE you will later connect translation system (Google Translate / custom)
}

/* LOAD SAVED LANGUAGE ON PAGE LOAD */
window.addEventListener("load", function () {
  const saved = localStorage.getItem("siteLanguageName");

  if (saved) {
    document.getElementById("langBtn").innerText = "🌐 Language: " + saved;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  lucide.createIcons();
});
function openServiceModal(service) {

  const modal = document.getElementById("serviceModal");
  const title = document.getElementById("modalTitle");
  const text = document.getElementById("modalText");

  const content = {

    branding: {
      title: "Logo & Brand Identity",
      text: "We create powerful brand identities including logos, color systems, typography, and brand guidelines that make your business unforgettable."
    },

    social: {
      title: "Social Media Design",
      text: "We design high-converting social media posts, ads, and campaigns that attract attention and increase engagement."
    },

    print: {
      title: "Print Design",
      text: "From posters to brochures, we design professional print materials that clearly communicate your message and brand."
    },

    business: {
      title: "Business Branding",
      text: "We build complete branding systems including logos, stationery, and brand strategy tailored for growth."
    },
thesis: {
  title: "Thesis & Dissertation Writing",
  text: "We provide full academic support including topic selection, proposal development, literature review, methodology, data analysis, and final thesis writing for Masters and PhD students."
},

proposal: {
  title: "Research Proposal Development",
  text: "Get a professionally structured proposal with clear research problem, objectives, justification, and methodology aligned to academic standards."
},

analysis: {
  title: "Data Analysis & SPSS",
  text: "We handle quantitative and qualitative data analysis using SPSS, Excel, and other tools, including interpretation, tables, and reports."
}
  };

  title.innerText = content[service].title;
  text.innerText = content[service].text;

  modal.classList.add("show");
}

function closeServiceModal() {
  document.getElementById("serviceModal").classList.remove("show");
}
window.addEventListener("click", function(e) {
  const modal = document.getElementById("serviceModal");

  if (e.target === modal) {
    modal.classList.remove("show");
  }
});
const form = document.getElementById("newsletterForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const emailInput = document.getElementById("newsletterEmail");
  const message = document.getElementById("subscribeMsg");
  const email = emailInput.value.trim();

  // VALIDATION
  if (!email || !email.includes("@")) {
    message.innerText = "⚠️ Enter a valid email";
    message.style.color = "#ff4d4d";
    return;
  }

  // ================= SEND TO FORMSPREE =================
  fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email: email })
  });

  // ================= WHATSAPP LEAD =================
  const phone = "254759015631"; // your number
  const text = `Hello VANTYX STUDIOS KENYA, I just subscribed with this email: ${email}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");

  // ================= SUCCESS UI =================
  message.innerText = "✅ You're in! Redirecting...";
  message.style.color = "#1ABC9C";

  emailInput.value = "";
});
function openModal(id) {
  document.getElementById(id).classList.add("show");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("show");
}

/* CLOSE ON OUTSIDE CLICK */
window.addEventListener("click", function(e) {
  document.querySelectorAll(".custom-modal").forEach(modal => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });
});

function openProcessModal(e) {
  e.preventDefault(); // stop link jump
  document.getElementById("processModal").classList.add("show");
  document.body.style.overflow = "hidden"; // lock scroll
}

function closeProcessModal() {
  document.getElementById("processModal").classList.remove("show");
  document.body.style.overflow = "auto";
}

/* CLOSE ON OUTSIDE CLICK */
window.addEventListener("click", function(e) {
  const modal = document.getElementById("processModal");
  if (e.target === modal) {
    closeProcessModal();
  }
});
