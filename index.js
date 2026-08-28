/* =========================================================
   VANTYX STUDIOS KENYA
   COMPLETE CLEAN WEBSITE JAVASCRIPT
   ========================================================= */


/* =========================================================
   PROJECT / CASE STUDY DATA
   ========================================================= */

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
    challenge: "Low user engagement on the platform.",
    solution: "Redesigned the UI with a better UX flow.",
    tools: "Figma, React",
    result: "Boosted conversions by 25%"
  },

  3: {
    title: "Corporate Brand Identity",
    challenge: "The company had an outdated visual identity.",
    solution: "Created a modern corporate identity system.",
    tools: "Illustrator, Photoshop",
    result: "Improved overall brand perception"
  },

  4: {
    title: "Restaurant Visual Identity",
    challenge: "The restaurant lacked a consistent visual identity.",
    solution: "Created a complete restaurant branding system.",
    tools: "Photoshop, Illustrator",
    result: "Improved customer engagement"
  }
};


/* =========================================================
   BLOG DATA
   ========================================================= */

const blogData = {
  1: `
    <h2>How to Build a Strong Brand Identity</h2>

    <p>
      A strong brand identity is more than just a logo.
      It includes your color system, typography, messaging,
      and how your audience perceives your business.
    </p>

    <p>
      At VANTYX Studios, we focus on building cohesive
      visual systems that create trust and recognition
      across all platforms.
    </p>
  `,

  2: `
    <h2>Top Graphic Design Trends in 2026</h2>

    <p>
      Modern design is shifting towards minimalism,
      bold typography, and AI-assisted visuals.
    </p>

    <p>
      Brands are focusing more on clarity, motion,
      and immersive experiences.
    </p>
  `,

  3: `
    <h2>Why Branding Matters for Startups</h2>

    <p>
      Startups that invest in branding early gain
      faster recognition and customer trust.
    </p>

    <p>
      A strong identity makes your business look
      established even in its early stages.
    </p>
  `
};


/* =========================================================
   SERVICE DATA
   ========================================================= */

const serviceData = {

  branding: {
    title: "Logo & Brand Identity",

    text:
      "We create powerful brand identities including logos, " +
      "color systems, typography, and brand guidelines that " +
      "make your business unforgettable."
  },

  social: {
    title: "Social Media Design",

    text:
      "We design high-converting social media posts, ads, " +
      "and campaigns that attract attention and increase engagement."
  },

  print: {
    title: "Print Design",

    text:
      "From posters to brochures, we design professional " +
      "print materials that clearly communicate your message and brand."
  },

  business: {
    title: "Business Branding",

    text:
      "We build complete branding systems including logos, " +
      "stationery, and brand strategy tailored for growth."
  },

  thesis: {
    title: "Thesis & Dissertation Writing",

    text:
      "We provide academic support including topic selection, " +
      "proposal development, literature review, methodology, " +
      "data analysis, and final thesis writing for Masters and PhD students."
  },

  proposal: {
    title: "Research Proposal Development",

    text:
      "Get a professionally structured proposal with a clear " +
      "research problem, objectives, justification, and methodology " +
      "aligned to academic standards."
  },

  analysis: {
    title: "Data Analysis & SPSS",

    text:
      "We handle quantitative and qualitative data analysis using " +
      "SPSS, Excel, and other tools, including interpretation, " +
      "tables, and reports."
  }
};


/* =========================================================
   SAFE DOM HELPER
   ========================================================= */

function getElement(id) {
  return document.getElementById(id);
}


/* =========================================================
   SCROLL TO SECTION
   ========================================================= */

function scrollToSection(id) {

  const section = getElement(id);

  if (!section) {
    console.warn("Section not found:", id);
    return false;
  }

  section.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  return true;
}


/* =========================================================
   CONTACT
   ========================================================= */

function goToContact() {
  scrollToSection("contact");
}


function scrollToContact() {
  scrollToSection("contact");
}


/* =========================================================
   PROJECT / CASE STUDY MODAL
   ========================================================= */

function openCase(id) {

  const modal = getElement("caseModal");
  const title = getElement("caseTitle");
  const details = getElement("caseDetails");

  const data = projects[id];

  if (!modal || !title || !details || !data) {
    console.error("Case study data or modal not found.");
    return;
  }

  title.textContent = data.title;

  details.innerHTML = `
    <li>
      <strong>The Challenge:</strong>
      ${data.challenge}
    </li>

    <li>
      <strong>The Solution:</strong>
      ${data.solution}
    </li>

    <li>
      <strong>Tools Used:</strong>
      ${data.tools}
    </li>

    <li>
      <strong>The Result:</strong>
      ${data.result}
    </li>
  `;

  modal.style.display = "flex";
  modal.classList.add("show");
}


function closeCase() {

  const modal = getElement("caseModal");

  if (!modal) return;

  modal.style.display = "none";
  modal.classList.remove("show");
}


/* =========================================================
   BLOG MODAL
   ========================================================= */

function openBlog(id) {

  const modal = getElement("blogModal");
  const content = getElement("blogContent");

  if (!modal || !content) {
    console.error("Blog modal not found.");
    return;
  }

  if (!blogData[id]) {
    console.error("Blog article not found:", id);
    return;
  }

  content.innerHTML = blogData[id];

  modal.style.display = "flex";
  modal.classList.add("show");
}


function closeBlog() {

  const modal = getElement("blogModal");

  if (!modal) return;

  modal.style.display = "none";
  modal.classList.remove("show");
}


/* =========================================================
   PRIVACY POLICY
   ========================================================= */

function openPolicy() {

  const modal = getElement("privacy-modal");

  if (!modal) return;

  modal.classList.add("active");
  document.body.classList.add("modal-open");
}


function closePolicy() {

  const modal = getElement("privacy-modal");

  if (!modal) return;

  modal.classList.remove("active");
  document.body.classList.remove("modal-open");
}


/* =========================================================
   TERMS
   ========================================================= */

function openTerms() {

  const modal = getElement("terms-modal");

  if (!modal) return;

  modal.classList.add("active");
  document.body.classList.add("modal-open");
}


function closeTerms() {

  const modal = getElement("terms-modal");

  if (!modal) return;

  modal.classList.remove("active");
  document.body.classList.remove("modal-open");
}


/* =========================================================
   GENERIC MODAL
   ========================================================= */

function openModal(id) {

  const modal = getElement(id);

  if (!modal) return;

  modal.classList.add("show");
  modal.style.display = "flex";
}


function closeModal(id) {

  const modal = getElement(id);

  if (!modal) return;

  modal.classList.remove("show");
  modal.style.display = "none";
}


/* =========================================================
   TEAM / CAREERS / PRESS
   ========================================================= */

function openTeam() {
  openModal("teamModal");
}


function openCareers() {
  openModal("careersModal");
}


function openPress() {
  openModal("pressModal");
}


/* =========================================================
   PROCESS MODAL
   ========================================================= */

function openProcessModal(event) {

  if (event) {
    event.preventDefault();
  }

  const modal = getElement("processModal");

  if (!modal) return;

  modal.classList.add("show");
  modal.style.display = "flex";

  document.body.style.overflow = "hidden";
}


function closeProcessModal() {

  const modal = getElement("processModal");

  if (!modal) return;

  modal.classList.remove("show");
  modal.style.display = "none";

  document.body.style.overflow = "";
}


/* =========================================================
   SERVICE MODAL
   ========================================================= */

function openServiceModal(service) {

  const modal = getElement("serviceModal");
  const title = getElement("modalTitle");
  const text = getElement("modalText");

  if (!modal || !title || !text) {
    console.error("Service modal elements not found.");
    return;
  }

  const content = serviceData[service];

  if (!content) {
    console.error("Service not found:", service);
    return;
  }

  title.textContent = content.title;
  text.textContent = content.text;

  modal.classList.add("show");
  modal.style.display = "flex";
}


function closeServiceModal() {

  const modal = getElement("serviceModal");

  if (!modal) return;

  modal.classList.remove("show");
  modal.style.display = "none";
}


/* =========================================================
   PORTFOLIO FILTER
   ========================================================= */

function initializePortfolioFilters() {

  const filterButtons =
    document.querySelectorAll(".portfolio-filters button");

  const cards =
    document.querySelectorAll(".portfolio-card");

  if (!filterButtons.length || !cards.length) {
    return;
  }

  filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      filterButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      const filter =
        button.getAttribute("data-filter");

      cards.forEach(function (card) {

        const category =
          (card.getAttribute("data-category") || "").toLowerCase();

        if (
          filter === "all" ||
          category === filter.toLowerCase()
        ) {

          card.classList.remove("hide");
          card.classList.remove("hidden");

          card.style.display = "";

        } else {

          card.classList.add("hide");
          card.classList.remove("hidden");

        }

      });

    });

  });

}


/* =========================================================
   SHOW ALL PROJECTS
   ========================================================= */

function showAllProjects() {

  const buttons =
    document.querySelectorAll(".portfolio-filters button");

  buttons.forEach(function (button) {
    button.classList.remove("active");
  });

  const allButton =
    document.querySelector('[data-filter="all"]');

  if (allButton) {
    allButton.classList.add("active");
  }

  document
    .querySelectorAll(".portfolio-card")
    .forEach(function (card) {

      card.classList.remove("hide");
      card.classList.remove("hidden");

      card.style.display = "";

    });

  scrollToSection("portfolio");
}


/* =========================================================
   PRICING TOGGLE
   ========================================================= */

function initializePricingToggle() {

  const toggle =
    document.querySelector(".switch input");

  const prices =
    document.querySelectorAll(".pricing-card h1");

  if (!toggle || !prices.length) {
    return;
  }

  prices.forEach(function (price) {

    const raw =
      price.textContent.trim();

    const numeric =
      parseFloat(raw.replace(/[^0-9.]/g, ""));

    if (!isNaN(numeric)) {

      price.dataset.monthlyPrice = numeric;

    }

  });


  toggle.addEventListener("change", function () {

    const annual =
      toggle.checked;

    prices.forEach(function (price) {

      const monthly =
        parseFloat(price.dataset.monthlyPrice);

      if (isNaN(monthly)) {
        return;
      }

      const value =
        annual
          ? monthly * 10
          : monthly;

      price.textContent =
        "$" + Math.round(value);

    });

  });

}


/* =========================================================
   START PROJECT
   ========================================================= */

function startProject(plan) {

  scrollToSection("contact");

  const messageBox =
    document.querySelector("#contact textarea");

  if (!messageBox) {
    return;
  }

  if (plan) {

    messageBox.value =
      "I am interested in the " +
      plan +
      " plan.";

  }

}


/* =========================================================
   ENTERPRISE QUOTE
   ========================================================= */

function getQuote() {

  scrollToSection("contact");

  const messageBox =
    document.querySelector("#contact textarea");

  if (messageBox) {

    messageBox.value =
      "I would like a custom enterprise quotation for my project.";

  }

}


/* =========================================================
   FAQ ACCORDION
   ========================================================= */

function initializeFAQ() {

  const questions =
    document.querySelectorAll(".faq-question");

  if (!questions.length) {
    return;
  }

  questions.forEach(function (button) {

    button.addEventListener("click", function () {

      const item =
        button.parentElement;

      if (!item) {
        return;
      }

      item.classList.toggle("active");

    });

  });

}


/* =========================================================
   WEBSITE SEARCH
   ========================================================= */

const searchData = [
  "branding",
  "portfolio",
  "pricing",
  "blog",
  "faq",
  "ui ux",
  "design",
  "logo",
  "identity",
  "luxury hotel branding",
  "e-commerce ui design",
  "design trends 2026",
  "how to build a brand",
  "website",
  "web development",
  "graphic design",
  "social media",
  "thesis",
  "research",
  "spss"
];


/* =========================================================
   HIGHLIGHT SEARCH RESULT
   ========================================================= */

function highlightSection(section) {

  if (!section) return;

  const previousShadow =
    section.style.boxShadow;

  section.style.boxShadow =
    "0 0 0 3px #1ABC9C";

  setTimeout(function () {

    section.style.boxShadow =
      previousShadow || "";

  }, 2000);
}


/* =========================================================
   FULL SEARCH
   ========================================================= */

function runFullSearch(query) {

  query =
    String(query || "")
      .toLowerCase()
      .trim();

  if (!query) {
    return;
  }


  let found = false;


  /* -------------------------------------------------------
     PORTFOLIO
     ------------------------------------------------------- */

  document
    .querySelectorAll(".portfolio-card")
    .forEach(function (card) {

      const title =
        (
          card.dataset.title ||
          card.textContent ||
          ""
        ).toLowerCase();

      const category =
        (
          card.dataset.category ||
          ""
        ).toLowerCase();

      const matches =
        title.includes(query) ||
        category.includes(query);

      if (matches) {

        card.classList.remove("hidden");
        card.classList.remove("hide");

        card.style.display = "";

        found = true;

      } else {

        card.classList.add("hidden");

      }

    });


  /* -------------------------------------------------------
     BLOG
     ------------------------------------------------------- */

  document
    .querySelectorAll(".blog-card")
    .forEach(function (card) {

      const title =
        (
          card.dataset.title ||
          card.textContent ||
          ""
        ).toLowerCase();

      const matches =
        title.includes(query);

      if (matches) {

        card.classList.remove("hidden");

        card.style.display = "";

        found = true;

      } else {

        card.classList.add("hidden");

      }

    });


  /* -------------------------------------------------------
     SECTIONS
     ------------------------------------------------------- */

  document
    .querySelectorAll("section")
    .forEach(function (section) {

      const keywords =
        (
          section.getAttribute("data-search") ||
          ""
        ).toLowerCase();

      if (keywords.includes(query)) {

        section.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

        highlightSection(section);

        found = true;

      }

    });


  /* -------------------------------------------------------
     AI NOTIFICATION
     ------------------------------------------------------- */

  triggerAI(query);


  /* -------------------------------------------------------
     NO RESULT
     ------------------------------------------------------- */

  if (!found) {

    alert(
      "No results found. Try something like " +
      "'branding', 'portfolio', or 'pricing'."
    );

  }

}


/* =========================================================
   SIMPLE SEARCH
   ========================================================= */

function performSearch() {

  const input =
    getElement("searchInput");

  if (!input) {
    return;
  }

  const query =
    input.value.trim();

  if (!query) {
    return;
  }

  runFullSearch(query);
}


/* =========================================================
   LIVE SEARCH SUGGESTIONS
   ========================================================= */

function initializeSearch() {

  const input =
    getElement("searchInput");

  const suggestionsBox =
    getElement("suggestions");

  if (!input) {
    return;
  }


  input.addEventListener("input", function () {

    if (!suggestionsBox) {
      return;
    }

    const value =
      input.value
        .toLowerCase()
        .trim();

    suggestionsBox.innerHTML = "";

    if (!value) {
      return;
    }


    const filtered =
      searchData.filter(function (item) {

        return item
          .toLowerCase()
          .includes(value);

      });


    filtered
      .slice(0, 6)
      .forEach(function (item) {

        const div =
          document.createElement("div");

        div.textContent = item;

        div.addEventListener("click", function () {

          input.value = item;

          suggestionsBox.innerHTML = "";

          runFullSearch(item);

        });

        suggestionsBox.appendChild(div);

      });

  });


  input.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

      event.preventDefault();

      runFullSearch(input.value);

      if (suggestionsBox) {
        suggestionsBox.innerHTML = "";
      }

    }

  });

}


/* =========================================================
   AI SEARCH HOOK
   ========================================================= */

function triggerAI(query) {

  const aiBody =
    getElement("ai-body");

  if (!aiBody) {
    return;
  }

  const message =
    document.createElement("div");

  message.className =
    "ai-message bot";

  message.textContent =
    `Searching for "${query}"... I found relevant sections and content for you.`;

  aiBody.appendChild(message);

  aiBody.scrollTop =
    aiBody.scrollHeight;

}


/* =========================================================
   CART
   ========================================================= */

let cart = [];


function openCart() {

  const modal =
    getElement("cartModal");

  if (!modal) return;

  modal.classList.add("show");
  modal.style.display = "flex";

}


function closeCart() {

  const modal =
    getElement("cartModal");

  if (!modal) return;

  modal.classList.remove("show");
  modal.style.display = "none";

}


function addToCart(item) {

  if (!item) {
    return;
  }

  cart.push(item);

  updateCart();

}


function updateCart() {

  const count =
    getElement("cartCount");

  const container =
    getElement("cartItems");


  if (count) {

    count.textContent =
      cart.length;

  }


  if (!container) {
    return;
  }


  if (cart.length === 0) {

    container.innerHTML =
      "<p>Your cart is empty</p>";

    return;

  }


  container.innerHTML =
    cart
      .map(function (item, index) {

        return `
          <div class="cart-item">
            <span>${item}</span>

            <button
              type="button"
              onclick="removeItem(${index})"
            >
              Remove
            </button>
          </div>
        `;

      })
      .join("");

}


function removeItem(index) {

  if (
    index < 0 ||
    index >= cart.length
  ) {
    return;
  }

  cart.splice(index, 1);

  updateCart();

}


function checkout() {

  alert(
    "Checkout coming soon."
  );

}


/* =========================================================
   ACCOUNT
   ========================================================= */

function openAccount() {

  const modal =
    getElement("accountModal");

  if (!modal) return;

  modal.classList.add("show");
  modal.style.display = "flex";

}


function closeAccount() {

  const modal =
    getElement("accountModal");

  if (!modal) return;

  modal.classList.remove("show");
  modal.style.display = "none";

}


/* =========================================================
   SWITCH TO LOGIN
   ========================================================= */

function switchToLogin() {

  const signup =
    getElement("signupForm");

  const login =
    getElement("loginForm");

  const title =
    getElement("formTitle");


  if (signup) {
    signup.style.display = "none";
  }

  if (login) {
    login.style.display = "block";
  }

  if (title) {
    title.textContent = "Welcome Back";
  }

}


/* =========================================================
   SWITCH TO SIGNUP
   ========================================================= */

function switchToSignup() {

  const signup =
    getElement("signupForm");

  const login =
    getElement("loginForm");

  const title =
    getElement("formTitle");


  if (signup) {
    signup.style.display = "block";
  }

  if (login) {
    login.style.display = "none";
  }

  if (title) {
    title.textContent = "Create Account";
  }

}


/* =========================================================
   SOCIAL LOGIN PLACEHOLDERS
   ========================================================= */

function loginWithGoogle() {

  alert(
    "Google login will be connected via Firebase or Google Auth."
  );

}


function loginWithGithub() {

  alert(
    "GitHub login will be connected later."
  );

}


/* =========================================================
   LANGUAGE
   ========================================================= */

function setLanguage(code, name) {

  const button =
    getElement("langBtn");

  if (button) {

    button.textContent =
      "🌐 Language: " + name;

  }


  localStorage.setItem(
    "siteLanguage",
    code
  );

  localStorage.setItem(
    "siteLanguageName",
    name
  );


  console.log(
    "Language selected:",
    code
  );

}


/* =========================================================
   NEWSLETTER
   ========================================================= */

function initializeNewsletter() {

  const form =
    getElement("newsletterForm");

  if (!form) {
    return;
  }


  form.addEventListener(
    "submit",
    async function (event) {

      event.preventDefault();


      const emailInput =
        getElement("newsletterEmail");

      const message =
        getElement("subscribeMsg");


      if (!emailInput) {
        return;
      }


      const email =
        emailInput.value.trim();


      /* VALIDATION */

      if (
        !email ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      ) {

        if (message) {

          message.textContent =
            "Enter a valid email address.";

          message.style.color =
            "#ff4d4d";

        }

        return;

      }


      /* ---------------------------------------------------
         FORMSPREE
         --------------------------------------------------- */

      try {

        const response =
          await fetch(
            "https://formspree.io/f/YOUR_FORM_ID",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",

                Accept:
                  "application/json"
              },

              body:
                JSON.stringify({
                  email: email
                })
            }
          );


        if (!response.ok) {

          throw new Error(
            "Newsletter submission failed."
          );

        }


        /* SUCCESS */

        if (message) {

          message.textContent =
            "You're subscribed successfully.";

          message.style.color =
            "#1ABC9C";

        }


        emailInput.value = "";


        /* -------------------------------------------------
           WHATSAPP LEAD
           ------------------------------------------------- */

        const phone =
          "254759015631";

        const whatsappText =
          `Hello VANTYX STUDIOS KENYA, I just subscribed with this email: ${email}`;


        window.open(
          `https://wa.me/${phone}?text=${encodeURIComponent(whatsappText)}`,
          "_blank"
        );


      } catch (error) {

        console.error(
          "Newsletter error:",
          error
        );


        if (message) {

          message.textContent =
            "Something went wrong. Please try again.";

          message.style.color =
            "#ff4d4d";

        }

      }

    }
  );

}


/* =========================================================
   AI ASSISTANT
   =========================================================
   
   IMPORTANT:
   This is the ONLY AI implementation in the entire file.
   ========================================================= */

function initializeAI() {

  const aiSystem =
    getElement("ai-system");

  const orbButton =
    getElement("ai-orb-btn");

  const closeButton =
    getElement("ai-close-btn");

  const chatWindow =
    getElement("ai-chat");

  const aiBody =
    getElement("ai-body");

  const aiInput =
    getElement("ai-user-input");

  const sendButton =
    getElement("ai-send-btn");

  const thinking =
    getElement("ai-thinking");


  /* -------------------------------------------------------
     CHECK
     ------------------------------------------------------- */

  if (
    !aiSystem ||
    !orbButton ||
    !closeButton ||
    !chatWindow ||
    !aiBody ||
    !aiInput ||
    !sendButton ||
    !thinking
  ) {

    console.error(
      "VANTYX AI: Required AI HTML elements are missing."
    );

    return;

  }


  /* -------------------------------------------------------
     AI STATE
     ------------------------------------------------------- */

  let isThinking =
    false;

  let conversationStage =
    "normal";


  const userData = {
    name: "",
    email: "",
    project: ""
  };


  /* -------------------------------------------------------
     OPEN
     ------------------------------------------------------- */

  function openChat() {

    aiSystem.classList.add(
      "chat-open"
    );

    setTimeout(function () {

      aiInput.focus();

    }, 350);

  }


  /* -------------------------------------------------------
     CLOSE
     ------------------------------------------------------- */

  function closeChat() {

    aiSystem.classList.remove(
      "chat-open"
    );

    aiInput.blur();

  }


  /* -------------------------------------------------------
     SCROLL
     ------------------------------------------------------- */

  function scrollBottom() {

    requestAnimationFrame(function () {

      aiBody.scrollTop =
        aiBody.scrollHeight;

    });

  }


  /* -------------------------------------------------------
     MESSAGE
     ------------------------------------------------------- */

  function addAIMessage(
    text,
    type = "bot"
  ) {

    const message =
      document.createElement("div");

    message.className =
      "ai-message " + type;

    message.textContent =
      text;

    aiBody.appendChild(
      message
    );

    scrollBottom();

    return message;

  }


  /* -------------------------------------------------------
     THINKING
     ------------------------------------------------------- */

  function showThinking() {

    thinking.classList.add(
      "active"
    );

    isThinking =
      true;

    scrollBottom();

  }


  function hideThinking() {

    thinking.classList.remove(
      "active"
    );

    isThinking =
      false;

  }


  /* -------------------------------------------------------
     NORMALIZE
     ------------------------------------------------------- */

  function normalize(text) {

    return String(text)
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ");

  }


  /* -------------------------------------------------------
     EMAIL
     ------------------------------------------------------- */

  function validEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      .test(email);

  }


  /* -------------------------------------------------------
     GREETING
     ------------------------------------------------------- */

  function isGreeting(text) {

    const greetings = [
      "hi",
      "hello",
      "hey",
      "hiya",
      "good morning",
      "good afternoon",
      "good evening"
    ];


    return greetings.some(
      function (greeting) {

        return (
          text === greeting ||
          text.startsWith(
            greeting + " "
          )
        );

      }
    );

  }


  /* -------------------------------------------------------
     SERVICES
     ------------------------------------------------------- */

  function servicesResponse() {

    return `VANTYX STUDIOS KENYA provides:

• Branding & Logo Design
• Graphic Design
• UI/UX Design
• Website Design & Development
• Social Media Design
• Print Design
• Business Branding
• Thesis & Dissertation Support
• Research Proposal Development
• Data Analysis & SPSS

Tell me which service you are interested in and I can explain it.`;

  }


  /* -------------------------------------------------------
     BRANDING
     ------------------------------------------------------- */

  function brandingResponse() {

    return `Our branding service focuses on creating a complete and professional visual identity.

This can include:

• Logo Design
• Brand Colors
• Typography
• Visual Identity
• Business Stationery
• Brand Guidelines
• Brand Strategy

If you are starting a new business or redesigning an existing brand, tell me what your business does.`;

  }


  /* -------------------------------------------------------
     WEBSITE
     ------------------------------------------------------- */

  function websiteResponse() {

    return `We design and develop modern, responsive websites for businesses, organizations and personal brands.

Our websites can include:

• Professional UI/UX
• Mobile responsiveness
• Business pages
• Portfolio systems
• Contact forms
• Pricing sections
• Animations
• Interactive features
• Search functionality

Tell me what type of website you want to build.`;

  }


  /* -------------------------------------------------------
     UI / UX
     ------------------------------------------------------- */

  function uiuxResponse() {

    return `Our UI/UX service focuses on creating interfaces that are visually strong, intuitive and easy to use.

We can help with:

• Website UI
• Mobile App UI
• User Flows
• Wireframes
• Prototypes
• Design Systems
• UX Improvements

Tell me what type of interface you want to design.`;

  }


  /* -------------------------------------------------------
     GRAPHIC DESIGN
     ------------------------------------------------------- */

  function graphicResponse() {

    return `Our graphic design services can include:

• Posters
• Flyers
• Social Media Graphics
• Advertisements
• Business Cards
• Brochures
• Marketing Materials
• Promotional Designs

Tell me what design you need.`;

  }


  /* -------------------------------------------------------
     SOCIAL MEDIA
     ------------------------------------------------------- */

  function socialResponse() {

    return `We create professional social media designs for businesses and brands.

This can include:

• Instagram Posts
• Facebook Graphics
• Promotional Campaigns
• Social Media Advertisements
• Brand Templates
• Campaign Visuals

Tell me which platform you are designing for.`;

  }


  /* -------------------------------------------------------
     ACADEMIC
     ------------------------------------------------------- */

  function academicResponse() {

    return `VANTYX STUDIOS KENYA also provides academic and research support.

Services include:

• Thesis & Dissertation Support
• Research Proposal Development
• Literature Review
• Research Methodology
• Data Analysis
• SPSS
• Excel
• Research Reports

Tell me what academic project you are working on.`;

  }


  /* -------------------------------------------------------
     PRICING
     ------------------------------------------------------- */

  function pricingResponse() {

    if (getElement("pricing")) {

      scrollToSection("pricing");

      return `Our pricing depends on the type, complexity and scope of your project.

I've taken you to the Pricing section.

If you need something different from the listed plans, you can request a custom project.`;

    }


    return `Our pricing depends on the type, complexity and scope of your project.

Tell me what you would like us to design or build.`;

  }


  /* -------------------------------------------------------
     PORTFOLIO
     ------------------------------------------------------- */

  function portfolioResponse() {

    if (getElement("portfolio")) {

      scrollToSection("portfolio");

      return `Here you can explore some of our previous work.

I've taken you to the Portfolio section.

You can also ask me about branding, websites, UI/UX or graphic design projects.`;

    }


    return `Our portfolio contains examples of branding, graphic design, UI/UX and web projects.`;

  }


  /* -------------------------------------------------------
     CONTACT
     ------------------------------------------------------- */

  function contactResponse() {

    if (getElement("contact")) {

      scrollToSection("contact");

      return `You can contact VANTYX STUDIOS KENYA through the Contact section.

I've taken you there now.

If you would like to start a project, I can also collect your details here.`;

    }


    return `You can contact VANTYX STUDIOS KENYA through the contact information provided on the website.`;

  }


  /* -------------------------------------------------------
     START PROJECT
     ------------------------------------------------------- */

  function startProjectResponse() {

    conversationStage =
      "name";

    return `Excellent. Let's get your project started.

First, what is your name?`;

  }


  /* -------------------------------------------------------
     NAME
     ------------------------------------------------------- */

  function handleName(input) {

    const name =
      input.trim();

    if (!name) {

      return "Please enter your name.";

    }


    userData.name =
      name;

    conversationStage =
      "email";


    return `Nice to meet you, ${userData.name}.

What is your email address so our team can follow up with you?`;

  }


  /* -------------------------------------------------------
     EMAIL
     ------------------------------------------------------- */

  function handleEmail(input) {

    const email =
      input.trim();


    if (!validEmail(email)) {

      return `That doesn't appear to be a valid email address.

Please enter an email such as:

example@gmail.com`;

    }


    userData.email =
      email;

    conversationStage =
      "project";


    return `Great.

Now tell me about your project.

What would you like VANTYX STUDIOS KENYA to design, build or help you with?`;

  }


  /* -------------------------------------------------------
     PROJECT
     ------------------------------------------------------- */

  function handleProject(input) {

    const project =
      input.trim();


    if (!project) {

      return "Please describe the project you need help with.";

    }


    userData.project =
      project;

    conversationStage =
      "complete";


    console.log(
      "VANTYX STUDIOS KENYA — NEW CLIENT LEAD",
      userData
    );


    return `Thank you, ${userData.name}.

I've recorded your project details:

Name: ${userData.name}
Email: ${userData.email}
Project: ${userData.project}

You can now use the Contact section to send the project to our team.`;

  }


  /* -------------------------------------------------------
     MAIN RESPONSE ENGINE
     ------------------------------------------------------- */

  function getAIResponse(input) {

    const text =
      normalize(input);


    /* LEAD COLLECTION */

    if (
      conversationStage === "name"
    ) {

      return handleName(input);

    }


    if (
      conversationStage === "email"
    ) {

      return handleEmail(input);

    }


    if (
      conversationStage === "project"
    ) {

      return handleProject(input);

    }


    /* GREETING */

    if (isGreeting(text)) {

      return `Hello. Welcome to VANTYX STUDIOS KENYA.

I'm your AI assistant.

I can help you with:

• Services
• Pricing
• Portfolio
• Branding
• Website development
• UI/UX
• Graphic design
• Academic services
• Contact information
• Starting a project

What would you like to know?`;

    }


    /* THANK YOU */

    if (
      text.includes("thank you") ||
      text.includes("thanks")
    ) {

      return `You're welcome.

If you need anything else, ask me about our services, pricing, portfolio or starting a project.`;

    }


    /* SERVICES */

    if (
      text.includes("services") ||
      text === "service" ||
      text.includes("what do you offer") ||
      text.includes("what can you do") ||
      text.includes("what do you do")
    ) {

      return servicesResponse();

    }


    /* BRANDING */

    if (
      text.includes("branding") ||
      text.includes("brand identity") ||
      text.includes("logo") ||
      text.includes("brand design")
    ) {

      return brandingResponse();

    }


    /* WEBSITE */

    if (
      text.includes("website") ||
      text.includes("web design") ||
      text.includes("web development") ||
      text.includes("web developer") ||
      text.includes("web site")
    ) {

      return websiteResponse();

    }


    /* UI / UX */

    if (
      text.includes("ui") ||
      text.includes("ux") ||
      text.includes("user interface") ||
      text.includes("user experience")
    ) {

      return uiuxResponse();

    }


    /* GRAPHIC DESIGN */

    if (
      text.includes("graphic design") ||
      text.includes("graphics") ||
      text.includes("poster") ||
      text.includes("flyer")
    ) {

      return graphicResponse();

    }


    /* SOCIAL MEDIA */

    if (
      text.includes("social media") ||
      text.includes("instagram") ||
      text.includes("facebook post") ||
      text.includes("social post")
    ) {

      return socialResponse();

    }


    /* ACADEMIC */

    if (
      text.includes("thesis") ||
      text.includes("dissertation") ||
      text.includes("research") ||
      text.includes("proposal") ||
      text.includes("spss") ||
      text.includes("academic")
    ) {

      return academicResponse();

    }


    /* PRICING */

    if (
      text.includes("pricing") ||
      text.includes("price") ||
      text.includes("prices") ||
      text.includes("cost") ||
      text.includes("how much") ||
      text.includes("charges") ||
      text.includes("rate")
    ) {

      return pricingResponse();

    }


    /* PORTFOLIO */

    if (
      text.includes("portfolio") ||
      text.includes("projects") ||
      text.includes("previous work") ||
      text.includes("your work") ||
      text.includes("show me your work")
    ) {

      return portfolioResponse();

    }


    /* CONTACT */

    if (
      text.includes("contact") ||
      text.includes("phone") ||
      text.includes("email") ||
      text.includes("reach you") ||
      text.includes("location")
    ) {

      return contactResponse();

    }


    /* START PROJECT */

    if (
      text.includes("start project") ||
      text.includes("start a project") ||
      text.includes("hire you") ||
      text === "hire" ||
      text.includes("work with you") ||
      text.includes("get started") ||
      text.includes("request a project") ||
      text.includes("i need a project") ||
      text.includes("i want a website") ||
      text.includes("i need a website")
    ) {

      return startProjectResponse();

    }


    /* ABOUT */

    if (
      text.includes("who are you") ||
      text.includes("what is vantyx") ||
      text.includes("about vantyx") ||
      text.includes("vantyx studios")
    ) {

      return `VANTYX STUDIOS KENYA is a creative digital studio focused on professional design, branding, web development and academic research support.

Our goal is to help businesses, organizations and individuals present their ideas professionally and build stronger digital experiences.`;

    }


    /* HELP */

    if (
      text === "help" ||
      text.includes("what can i ask") ||
      text.includes("how can you help")
    ) {

      return `I can help you with:

• Services
• Pricing
• Portfolio
• Branding
• Websites
• UI/UX
• Graphic design
• Social media design
• Academic services
• Contact information
• Starting a project

Try asking:

"What services do you offer?"

"How much does a website cost?"

"Show me your portfolio."

"I want to start a project."`;

    }


    /* DEFAULT */

    return `I'm here to help with VANTYX STUDIOS KENYA.

I didn't quite understand that request.

You can ask me about:

• Services
• Pricing
• Portfolio
• Branding
• Websites
• UI/UX
• Graphic design
• Academic services
• Contact
• Starting a project

For example:

"What services do you offer?"`;

  }


  /* -------------------------------------------------------
     SEND
     ------------------------------------------------------- */

  function sendMessage() {

    if (isThinking) {
      return;
    }


    const text =
      aiInput.value.trim();


    if (!text) {
      return;
    }


    addAIMessage(
      text,
      "user"
    );


    aiInput.value =
      "";


    showThinking();


    setTimeout(function () {

      hideThinking();


      const response =
        getAIResponse(text);


      addAIMessage(
        response,
        "bot"
      );


    }, 650);

  }


  /* -------------------------------------------------------
     ORB
     ------------------------------------------------------- */

  orbButton.addEventListener(
    "click",
    function (event) {

      event.preventDefault();
      event.stopPropagation();

      openChat();

    }
  );


  /* -------------------------------------------------------
     CLOSE
     ------------------------------------------------------- */

  closeButton.addEventListener(
    "click",
    function (event) {

      event.preventDefault();
      event.stopPropagation();

      closeChat();

    }
  );


  /* -------------------------------------------------------
     CHAT CLICK
     ------------------------------------------------------- */

  chatWindow.addEventListener(
    "click",
    function (event) {

      event.stopPropagation();

    }
  );


  /* -------------------------------------------------------
     SEND BUTTON
     ------------------------------------------------------- */

  sendButton.addEventListener(
    "click",
    function (event) {

      event.preventDefault();

      sendMessage();

    }
  );


  /* -------------------------------------------------------
     ENTER
     ------------------------------------------------------- */

  aiInput.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "Enter") {

        event.preventDefault();

        sendMessage();

      }

    }
  );


  /* -------------------------------------------------------
     ESC
     ------------------------------------------------------- */

  document.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key === "Escape" &&
        aiSystem.classList.contains("chat-open")
      ) {

        closeChat();

      }

    }
  );


  /* -------------------------------------------------------
     GLOBAL AI FUNCTIONS
     ------------------------------------------------------- */

  window.openAI =
    openChat;

  window.closeAI =
    closeChat;


  /* -------------------------------------------------------
     READY
     ------------------------------------------------------- */

  console.log(
    "VANTYX STUDIOS KENYA AI: READY"
  );

}


/* =========================================================
   GLOBAL MODAL CLICK HANDLER
   ========================================================= */

function initializeModalHandlers() {

  window.addEventListener(
    "click",
    function (event) {

      /* CASE */

      const caseModal =
        getElement("caseModal");

      if (
        caseModal &&
        event.target === caseModal
      ) {

        closeCase();

      }


      /* BLOG */

      const blogModal =
        getElement("blogModal");

      if (
        blogModal &&
        event.target === blogModal
      ) {

        closeBlog();

      }


      /* TERMS */

      const termsModal =
        getElement("terms-modal");

      if (
        termsModal &&
        event.target === termsModal
      ) {

        closeTerms();

      }


      /* PRIVACY */

      const privacyModal =
        getElement("privacy-modal");

      if (
        privacyModal &&
        event.target === privacyModal
      ) {

        closePolicy();

      }


      /* SERVICE */

      const serviceModal =
        getElement("serviceModal");

      if (
        serviceModal &&
        event.target === serviceModal
      ) {

        closeServiceModal();

      }


      /* PROCESS */

      const processModal =
        getElement("processModal");

      if (
        processModal &&
        event.target === processModal
      ) {

        closeProcessModal();

      }


      /* CART */

      const cartModal =
        getElement("cartModal");

      if (
        cartModal &&
        event.target === cartModal
      ) {

        closeCart();

      }


      /* ACCOUNT */

      const accountModal =
        getElement("accountModal");

      if (
        accountModal &&
        event.target === accountModal
      ) {

        closeAccount();

      }


      /* TEAM / CAREERS / PRESS */

      [
        "teamModal",
        "careersModal",
        "pressModal"
      ].forEach(function (id) {

        const modal =
          getElement(id);

        if (
          modal &&
          event.target === modal
        ) {

          closeModal(id);

        }

      });


      /* GENERIC CUSTOM MODALS */

      document
        .querySelectorAll(".custom-modal")
        .forEach(function (modal) {

          if (
            event.target === modal
          ) {

            modal.classList.remove(
              "show"
            );

            modal.style.display =
              "none";

          }

        });

    }
  );

}


/* =========================================================
   LUCIDE ICONS
   ========================================================= */

function initializeLucide() {

  if (
    typeof lucide !== "undefined" &&
    typeof lucide.createIcons === "function"
  ) {

    lucide.createIcons();

  }

}


/* =========================================================
   LOAD SAVED LANGUAGE
   ========================================================= */

function loadSavedLanguage() {

  const saved =
    localStorage.getItem(
      "siteLanguageName"
    );

  const button =
    getElement("langBtn");


  if (
    saved &&
    button
  ) {

    button.textContent =
      "🌐 Language: " + saved;

  }

}


/* =========================================================
   WEBSITE INITIALIZATION
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    console.log(
      "VANTYX STUDIOS KENYA: Initializing website..."
    );


    initializePortfolioFilters();

    initializePricingToggle();

    initializeFAQ();

    initializeSearch();

    initializeNewsletter();

    initializeAI();

    initializeModalHandlers();

    loadSavedLanguage();

    initializeLucide();


    console.log(
      "VANTYX STUDIOS KENYA: Website initialized successfully."
    );

  }
);
