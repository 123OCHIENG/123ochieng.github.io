/* =========================================================
   VANTYX STUDIOS KENYA
   COMPLETE CLEAN JAVASCRIPT
   ========================================================= */


/* =========================================================
   PROJECT DATA / CASE STUDIES
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
    challenge: "Low user engagement on platform.",
    solution: "Redesigned UI with better UX flow.",
    tools: "Figma, React",
    result: "Boosted conversions by 25%"
  },

  3: {
    title: "Corporate Brand Identity",
    challenge: "Outdated branding.",
    solution: "Modern identity redesign.",
    tools: "Illustrator",
    result: "Improved brand perception"
  },

  4: {
    title: "Restaurant Visual Identity",
    challenge: "Build a strong food brand.",
    solution: "Created a vibrant visual identity.",
    tools: "Photoshop",
    result: "Higher engagement"
  }
};


/* =========================================================
   GLOBAL DOM READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* =======================================================
     LUCIDE ICONS
     ======================================================= */

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }


  /* =======================================================
     VANTYX AI ASSISTANT
     ======================================================= */

  initVantyxAI();


  /* =======================================================
     PORTFOLIO FILTER
     ======================================================= */

  initPortfolioFilter();


  /* =======================================================
     SEARCH
     ======================================================= */

  initSearch();


  /* =======================================================
     FAQ
     ======================================================= */

  initFAQ();


  /* =======================================================
     PRICING TOGGLE
     ======================================================= */

  initPricingToggle();


  /* =======================================================
     NEWSLETTER
     ======================================================= */

  initNewsletter();


  /* =======================================================
     SAVED LANGUAGE
     ======================================================= */

  initLanguage();


  console.log(
    "VANTYX STUDIOS KENYA: JavaScript initialized successfully."
  );

});



/* =========================================================
   VANTYX AI ASSISTANT
   ========================================================= */

function initVantyxAI() {

  const aiSystem = document.getElementById("ai-system");
  const orbButton = document.getElementById("ai-orb-btn");
  const closeButton = document.getElementById("ai-close-btn");
  const chatWindow = document.getElementById("ai-chat");
  const aiBody = document.getElementById("ai-body");
  const aiInput = document.getElementById("ai-user-input");
  const sendButton = document.getElementById("ai-send-btn");
  const thinking = document.getElementById("ai-thinking");

  /* -------------------------------------------------------
     SAFETY CHECK
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
      "VANTYX AI: Required AI HTML element is missing."
    );

    return;
  }


  /* -------------------------------------------------------
     STATE
     ------------------------------------------------------- */

  let isThinking = false;

  let conversationStage = "normal";

  const userData = {
    name: "",
    email: "",
    project: ""
  };


  /* =======================================================
     OPEN CHAT
     ======================================================= */

  function openChat() {

    aiSystem.classList.add("chat-open");

    setTimeout(function () {
      aiInput.focus();
    }, 350);

  }


  /* =======================================================
     CLOSE CHAT
     ======================================================= */

  function closeChat() {

    aiSystem.classList.remove("chat-open");

    aiInput.blur();

  }


  /* -------------------------------------------------------
     MAKE FUNCTIONS AVAILABLE GLOBALLY
     ------------------------------------------------------- */

  window.openAI = openChat;
  window.closeAI = closeChat;


  /* =======================================================
     OPEN BUTTON
     ======================================================= */

  orbButton.addEventListener("click", function (event) {

    event.preventDefault();
    event.stopPropagation();

    openChat();

  });


  /* =======================================================
     CLOSE BUTTON
     ======================================================= */

  closeButton.addEventListener("click", function (event) {

    event.preventDefault();
    event.stopPropagation();

    closeChat();

  });


  /* =======================================================
     DO NOT ALLOW CHAT CLICKS TO PROPAGATE
     ======================================================= */

  chatWindow.addEventListener("click", function (event) {

    event.stopPropagation();

  });


  /* =======================================================
     ESCAPE KEY
     ======================================================= */

  document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

      closeChat();

    }

  });


  /* =======================================================
     SCROLL CHAT TO BOTTOM
     ======================================================= */

  function scrollToBottom() {

    requestAnimationFrame(function () {

      aiBody.scrollTop = aiBody.scrollHeight;

    });

  }


  /* =======================================================
     ADD MESSAGE
     ======================================================= */

  function addMessage(message, type) {

    const messageElement =
      document.createElement("div");

    messageElement.className =
      "ai-message " + type;

    /*
      textContent is deliberately used here.
      It prevents user input from injecting HTML.
    */

    messageElement.textContent = message;

    aiBody.appendChild(messageElement);

    scrollToBottom();

    return messageElement;

  }


  /* =======================================================
     THINKING
     ======================================================= */

  function showThinking() {

    thinking.classList.add("active");

    isThinking = true;

    scrollToBottom();

  }


  function hideThinking() {

    thinking.classList.remove("active");

    isThinking = false;

  }


  /* =======================================================
     NORMALIZE TEXT
     ======================================================= */

  function normalize(text) {

    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ");

  }


  /* =======================================================
     EMAIL VALIDATION
     ======================================================= */

  function validEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  }


  /* =======================================================
     SCROLL TO SECTION
     ======================================================= */

  function scrollToSection(id) {

    const section =
      document.getElementById(id);

    if (!section) {

      return false;

    }

    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    return true;

  }


  /* =======================================================
     GREETING
     ======================================================= */

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

    return greetings.some(function (greeting) {

      return (
        text === greeting ||
        text.startsWith(greeting + " ")
      );

    });

  }


  /* =======================================================
     SERVICES
     ======================================================= */

  function serviceResponse() {

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

Tell me which service you are interested in.`;

  }


  /* =======================================================
     BRANDING
     ======================================================= */

  function brandingResponse() {

    return `Our branding service focuses on creating a complete and professional visual identity.

This can include:

• Logo design
• Brand colors
• Typography
• Visual identity
• Business stationery
• Brand guidelines
• Brand strategy

Tell me what your business does and I can help you determine the right branding approach.`;

  }


  /* =======================================================
     WEBSITE
     ======================================================= */

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


  /* =======================================================
     UI / UX
     ======================================================= */

  function uiuxResponse() {

    return `Our UI/UX service focuses on creating interfaces that are visually strong, intuitive and easy to use.

We can help with:

• Website UI
• Mobile app UI
• User flows
• Wireframes
• Prototypes
• Design systems
• UX improvements

Tell me what type of interface you want to design.`;

  }


  /* =======================================================
     GRAPHIC DESIGN
     ======================================================= */

  function graphicResponse() {

    return `Our graphic design services include:

• Posters
• Flyers
• Social media graphics
• Advertisements
• Business cards
• Brochures
• Marketing materials
• Promotional designs

Tell me what design you need.`;

  }


  /* =======================================================
     SOCIAL MEDIA
     ======================================================= */

  function socialResponse() {

    return `We create professional social media designs for businesses and brands.

This can include:

• Instagram posts
• Facebook graphics
• Promotional campaigns
• Social media advertisements
• Brand templates
• Campaign visuals

Tell me which platform you are designing for.`;

  }


  /* =======================================================
     ACADEMIC
     ======================================================= */

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


  /* =======================================================
     PRICING
     ======================================================= */

  function pricingResponse() {

    if (document.getElementById("pricing")) {

      scrollToSection("pricing");

      return `Our pricing depends on the type, complexity and scope of your project.

I've taken you to the Pricing section so you can review the available plans.

If you need something different from the listed plans, you can request a custom project.`;

    }

    return `Our pricing depends on the type, complexity and scope of your project.

Tell me what you would like us to design or build and I can help you determine the appropriate service.`;

  }


  /* =======================================================
     PORTFOLIO
     ======================================================= */

  function portfolioResponse() {

    if (document.getElementById("portfolio")) {

      scrollToSection("portfolio");

      return `Here you can explore some of our previous work.

I've taken you to the Portfolio section.

You can also ask me about branding, websites, graphic design or UI/UX projects.`;

    }

    return `Our portfolio contains examples of branding, graphic design, UI/UX and web projects.`;

  }


  /* =======================================================
     CONTACT
     ======================================================= */

  function contactResponse() {

    if (document.getElementById("contact")) {

      scrollToSection("contact");

      return `You can contact VANTYX STUDIOS KENYA through the Contact section.

I've taken you there now.

If you would like to start a project, I can also collect your project details here.`;

    }

    return `You can contact VANTYX STUDIOS KENYA through the contact information provided on the website.`;

  }


  /* =======================================================
     START PROJECT
     ======================================================= */

  function startProjectResponse() {

    conversationStage = "name";

    return `Excellent. Let's get your project started.

First, what is your name?`;

  }


  /* =======================================================
     HANDLE NAME
     ======================================================= */

  function handleName(input) {

    userData.name = input.trim();

    conversationStage = "email";

    return `Nice to meet you, ${userData.name}.

What is your email address so our team can follow up with you?`;

  }


  /* =======================================================
     HANDLE EMAIL
     ======================================================= */

  function handleEmail(input) {

    const email = input.trim();

    if (!validEmail(email)) {

      return `That doesn't appear to be a valid email address.

Please enter an email such as:

example@gmail.com`;

    }

    userData.email = email;

    conversationStage = "project";

    return `Great.

Now tell me about your project.

What would you like VANTYX STUDIOS KENYA to design, build or help you with?`;

  }


  /* =======================================================
     HANDLE PROJECT
     ======================================================= */

  function handleProject(input) {

    userData.project = input.trim();

    conversationStage = "complete";

    console.log(
      "VANTYX STUDIOS KENYA — NEW CLIENT LEAD",
      userData
    );

    return `Thank you, ${userData.name}.

I've recorded your basic project details.

Our team can review your requirements and discuss the best way to proceed.

You can also use the Contact section to send the project directly.`;

  }


  /* =======================================================
     MAIN AI ENGINE
     ======================================================= */

  function getAIResponse(input) {

    const text = normalize(input);


    /* -------------------------------------------------------
       PROJECT CONVERSATION
       ------------------------------------------------------- */

    if (conversationStage === "name") {

      return handleName(input);

    }


    if (conversationStage === "email") {

      return handleEmail(input);

    }


    if (conversationStage === "project") {

      return handleProject(input);

    }


    /* -------------------------------------------------------
       GREETINGS
       ------------------------------------------------------- */

    if (isGreeting(text)) {

      return `Hello 👋 Welcome to VANTYX STUDIOS KENYA.

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


    /* -------------------------------------------------------
       THANK YOU
       ------------------------------------------------------- */

    if (
      text.includes("thank you") ||
      text.includes("thanks")
    ) {

      return `You're welcome.

If you need anything else, ask me about our services, pricing, portfolio or starting a project.`;

    }


    /* -------------------------------------------------------
       SERVICES
       ------------------------------------------------------- */

    if (
      text.includes("services") ||
      text.includes("service") ||
      text.includes("what do you offer") ||
      text.includes("what do you do") ||
      text.includes("what can you do")
    ) {

      return serviceResponse();

    }


    /* -------------------------------------------------------
       BRANDING
       ------------------------------------------------------- */

    if (
      text.includes("branding") ||
      text.includes("brand identity") ||
      text.includes("brand design") ||
      text.includes("logo")
    ) {

      return brandingResponse();

    }


    /* -------------------------------------------------------
       WEBSITE
       ------------------------------------------------------- */

    if (
      text.includes("website") ||
      text.includes("web design") ||
      text.includes("web development") ||
      text.includes("web site")
    ) {

      return websiteResponse();

    }


    /* -------------------------------------------------------
       UI / UX
       ------------------------------------------------------- */

    if (
      text.includes("ui") ||
      text.includes("ux") ||
      text.includes("user interface") ||
      text.includes("user experience")
    ) {

      return uiuxResponse();

    }


    /* -------------------------------------------------------
       GRAPHIC DESIGN
       ------------------------------------------------------- */

    if (
      text.includes("graphic design") ||
      text.includes("graphics") ||
      text.includes("poster") ||
      text.includes("flyer")
    ) {

      return graphicResponse();

    }


    /* -------------------------------------------------------
       SOCIAL MEDIA
       ------------------------------------------------------- */

    if (
      text.includes("social media") ||
      text.includes("instagram") ||
      text.includes("facebook post") ||
      text.includes("social post")
    ) {

      return socialResponse();

    }


    /* -------------------------------------------------------
       ACADEMIC
       ------------------------------------------------------- */

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


    /* -------------------------------------------------------
       PRICING
       ------------------------------------------------------- */

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


    /* -------------------------------------------------------
       PORTFOLIO
       ------------------------------------------------------- */

    if (
      text.includes("portfolio") ||
      text.includes("projects") ||
      text.includes("previous work") ||
      text.includes("your work") ||
      text.includes("show me your work")
    ) {

      return portfolioResponse();

    }


    /* -------------------------------------------------------
       CONTACT
       ------------------------------------------------------- */

    if (
      text.includes("contact") ||
      text.includes("phone") ||
      text.includes("reach you") ||
      text.includes("location")
    ) {

      return contactResponse();

    }


    /* -------------------------------------------------------
       START PROJECT
       ------------------------------------------------------- */

    if (
      text.includes("start project") ||
      text.includes("start a project") ||
      text.includes("hire you") ||
      text.includes("hire") ||
      text.includes("work with you") ||
      text.includes("get started") ||
      text.includes("request a project") ||
      text.includes("i need a project")
    ) {

      return startProjectResponse();

    }


    /* -------------------------------------------------------
       ABOUT
       ------------------------------------------------------- */

    if (
      text.includes("who are you") ||
      text.includes("what is vantyx") ||
      text.includes("about vantyx") ||
      text.includes("vantyx studios")
    ) {

      return `VANTYX STUDIOS KENYA is a creative digital studio focused on professional design, branding, web development and academic research support.

Our goal is to help businesses, organizations and individuals present their ideas professionally and build stronger digital experiences.`;

    }


    /* -------------------------------------------------------
       HELP
       ------------------------------------------------------- */

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


    /* -------------------------------------------------------
       DEFAULT
       ------------------------------------------------------- */

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
• Starting a project`;

  }


  /* =======================================================
     SEND MESSAGE
     ======================================================= */

  function sendMessage() {

    if (isThinking) {

      return;

    }


    const text =
      aiInput.value.trim();


    if (!text) {

      return;

    }


    /* USER MESSAGE */

    addMessage(text, "user");


    /* CLEAR INPUT */

    aiInput.value = "";


    /* THINKING */

    showThinking();


    /* GENERATE RESPONSE */

    setTimeout(function () {

      hideThinking();

      const response =
        getAIResponse(text);

      addMessage(response, "bot");

      aiInput.focus();

    }, 650);

  }


  /* =======================================================
     SEND BUTTON
     ======================================================= */

  sendButton.addEventListener("click", function (event) {

    event.preventDefault();
    event.stopPropagation();

    sendMessage();

  });


  /* =======================================================
     ENTER TO SEND
     ======================================================= */

  aiInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

      event.preventDefault();

      sendMessage();

    }

  });


  console.log(
    "VANTYX AI initialized."
  );

}



/* =========================================================
   PORTFOLIO CASE MODAL
   ========================================================= */

function openCase(id) {

  const modal =
    document.getElementById("caseModal");

  const title =
    document.getElementById("caseTitle");

  const details =
    document.getElementById("caseDetails");

  const data =
    projects[id];

  if (!modal || !title || !details || !data) {
    return;
  }

  title.innerText = data.title;

  details.innerHTML = `
    <li><strong>The Challenge:</strong> ${data.challenge}</li>
    <li><strong>The Solution:</strong> ${data.solution}</li>
    <li><strong>Tools Used:</strong> ${data.tools}</li>
    <li><strong>The Result:</strong> ${data.result}</li>
  `;

  modal.style.display = "flex";

}


function closeCase() {

  const modal =
    document.getElementById("caseModal");

  if (modal) {

    modal.style.display = "none";

  }

}



/* =========================================================
   PORTFOLIO FILTER
   ========================================================= */

function initPortfolioFilter() {

  const buttons =
    document.querySelectorAll(
      ".portfolio-filters button"
    );

  const cards =
    document.querySelectorAll(
      ".portfolio-card"
    );

  buttons.forEach(function (button) {

    button.addEventListener("click", function () {

      buttons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      const filter =
        button.getAttribute("data-filter");

      cards.forEach(function (card) {

        const category =
          card.getAttribute("data-category");

        if (
          filter === "all" ||
          filter === category
        ) {

          card.classList.remove("hide");
          card.classList.remove("hidden");

          card.style.display = "";

        } else {

          card.classList.add("hide");

        }

      });

    });

  });

}



/* =========================================================
   CONTACT
   ========================================================= */

function goToContact() {

  const contact =
    document.getElementById("contact");

  if (contact) {

    contact.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }

}


function scrollToContact() {

  goToContact();

}



/* =========================================================
   SHOW ALL PROJECTS
   ========================================================= */

function showAllProjects() {

  const buttons =
    document.querySelectorAll(
      ".portfolio-filters button"
    );

  buttons.forEach(function (button) {

    button.classList.remove("active");

  });


  const allButton =
    document.querySelector(
      '[data-filter="all"]'
    );

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


  const portfolio =
    document.getElementById("portfolio");

  if (portfolio) {

    portfolio.scrollIntoView({
      behavior: "smooth"
    });

  }

}



/* =========================================================
   PRICING TOGGLE
   ========================================================= */

function initPricingToggle() {

  const toggle =
    document.querySelector(".switch input");

  if (!toggle) {
    return;
  }

  /*
     Store original prices so repeated toggling
     never compounds the calculation.
  */

  const prices =
    document.querySelectorAll(
      ".pricing-card h1"
    );

  const originalPrices = [];

  prices.forEach(function (price) {

    const match =
      price.innerText.match(/[\d,.]+/);

    originalPrices.push(
      match
        ? parseFloat(match[0].replace(/,/g, ""))
        : null
    );

  });


  toggle.addEventListener("change", function () {

    prices.forEach(function (price, index) {

      const original =
        originalPrices[index];

      if (original === null) {
        return;
      }

      if (toggle.checked) {

        price.innerText =
          "$" + (original * 10).toFixed(0);

      } else {

        price.innerText =
          "$" + original.toFixed(0);

      }

    });

  });

}



/* =========================================================
   START PROJECT
   ========================================================= */

function startProject(plan) {

  const contact =
    document.getElementById("contact");

  if (contact) {

    contact.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }


  const messageBox =
    document.querySelector(
      "#contact textarea"
    );

  if (messageBox) {

    messageBox.value =
      "I am interested in the " +
      plan +
      " plan.";

  }

}



/* =========================================================
   GET QUOTE
   ========================================================= */

function getQuote() {

  const contact =
    document.getElementById("contact");

  if (contact) {

    contact.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }


  const messageBox =
    document.querySelector(
      "#contact textarea"
    );

  if (messageBox) {

    messageBox.value =
      "I would like a custom enterprise quotation for my project.";

  }

}



/* =========================================================
   FAQ
   ========================================================= */

function initFAQ() {

  document
    .querySelectorAll(".faq-question")
    .forEach(function (button) {

      button.addEventListener("click", function () {

        const item =
          button.parentElement;

        if (item) {

          item.classList.toggle("active");

        }

      });

    });

}



/* =========================================================
   TEAM / CAREERS / PRESS MODALS
   ========================================================= */

function openTeam() {

  const modal =
    document.getElementById("teamModal");

  if (modal) {

    modal.classList.add("show");

  }

}


function openCareers() {

  const modal =
    document.getElementById("careersModal");

  if (modal) {

    modal.classList.add("show");

  }

}


function openPress() {

  const modal =
    document.getElementById("pressModal");

  if (modal) {

    modal.classList.add("show");

  }

}


function closeModal(id) {

  const modal =
    document.getElementById(id);

  if (modal) {

    modal.classList.remove("show");

  }

}



/* =========================================================
   SEARCH
   ========================================================= */

function initSearch() {

  const input =
    document.getElementById("searchInput");

  const suggestionsBox =
    document.getElementById("suggestions");

  if (!input) {
    return;
  }


  const data = [
    "branding",
    "portfolio",
    "pricing",
    "blog",
    "faq",
    "ui ux",
    "design",
    "logo",
    "identity",
    "Luxury Hotel Branding",
    "E-Commerce UI Design",
    "Design Trends 2026",
    "How to Build a Brand"
  ];


  /* -------------------------------------------------------
     LIVE SUGGESTIONS
     ------------------------------------------------------- */

  if (suggestionsBox) {

    input.addEventListener("input", function () {

      const value =
        input.value
          .toLowerCase()
          .trim();

      suggestionsBox.innerHTML = "";

      if (!value) {
        return;
      }


      const filtered =
        data.filter(function (item) {

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

          div.addEventListener(
            "click",
            function () {

              input.value = item;

              suggestionsBox.innerHTML = "";

              runFullSearch(item);

            }
          );

          suggestionsBox.appendChild(div);

        });

    });

  }


  /* -------------------------------------------------------
     ENTER
     ------------------------------------------------------- */

  input.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "Enter") {

        event.preventDefault();

        runFullSearch(input.value);

        if (suggestionsBox) {

          suggestionsBox.innerHTML = "";

        }

      }

    }
  );

}



/* =========================================================
   SEARCH ENGINE
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
          card.dataset.title || ""
        ).toLowerCase();

      const category =
        (
          card.dataset.category || ""
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
          card.dataset.title || ""
        ).toLowerCase();

      if (title.includes(query)) {

        card.classList.remove("hidden");

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
          section.getAttribute("data-search") || ""
        ).toLowerCase();

      if (
        keywords &&
        keywords.includes(query)
      ) {

        section.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

        section.style.boxShadow =
          "0 0 0 3px #1ABC9C";

        setTimeout(function () {

          section.style.boxShadow = "none";

        }, 2000);

        found = true;

      }

    });


  /* -------------------------------------------------------
     AI SEARCH FEEDBACK
     ------------------------------------------------------- */

  triggerAI(query);


  if (!found) {

    alert(
      "No results found. Try something like 'branding', 'portfolio', or 'pricing'."
    );

  }

}



/* =========================================================
   AI SEARCH HOOK
   ========================================================= */

function triggerAI(query) {

  const aiBody =
    document.getElementById("ai-body");

  if (!aiBody) {
    return;
  }


  /*
     Do NOT automatically open the AI.
     Just add a message if the AI chat is already open.
  */

  const aiSystem =
    document.getElementById("ai-system");

  if (
    !aiSystem ||
    !aiSystem.classList.contains("chat-open")
  ) {

    return;

  }


  const msg =
    document.createElement("div");

  msg.className =
    "ai-message bot";

  msg.textContent =
    `Searching for "${query}"... I found relevant sections and content for you.`;

  aiBody.appendChild(msg);

  aiBody.scrollTop =
    aiBody.scrollHeight;

}



/* =========================================================
   CART
   ========================================================= */

let cart = [];


function openCart() {

  const modal =
    document.getElementById("cartModal");

  if (modal) {

    modal.classList.add("show");

  }

}


function closeCart() {

  const modal =
    document.getElementById("cartModal");

  if (modal) {

    modal.classList.remove("show");

  }

}


function addToCart(item) {

  cart.push(item);

  updateCart();

}


function updateCart() {

  const count =
    document.getElementById("cartCount");

  const container =
    document.getElementById("cartItems");


  if (count) {

    count.innerText =
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
    cart.map(function (item, index) {

      return `
        <div>
          ${item}
          <button onclick="removeItem(${index})">
            Remove
          </button>
        </div>
      `;

    }).join("");

}


function removeItem(index) {

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
    document.getElementById("accountModal");

  if (modal) {

    modal.classList.add("show");

  }

}


function closeAccount() {

  const modal =
    document.getElementById("accountModal");

  if (modal) {

    modal.classList.remove("show");

  }

}


function switchToLogin() {

  const signup =
    document.getElementById("signupForm");

  const login =
    document.getElementById("loginForm");

  const title =
    document.getElementById("formTitle");


  if (signup) {
    signup.style.display = "none";
  }

  if (login) {
    login.style.display = "block";
  }

  if (title) {
    title.innerText = "Welcome Back";
  }

}


function switchToSignup() {

  const signup =
    document.getElementById("signupForm");

  const login =
    document.getElementById("loginForm");

  const title =
    document.getElementById("formTitle");


  if (signup) {
    signup.style.display = "block";
  }

  if (login) {
    login.style.display = "none";
  }

  if (title) {
    title.innerText = "Create Account";
  }

}


function loginWithGoogle() {

  alert(
    "Google login will be connected via Firebase or Google Auth API."
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
    document.getElementById("langBtn");

  if (button) {

    button.innerText =
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


function initLanguage() {

  const button =
    document.getElementById("langBtn");

  const savedName =
    localStorage.getItem(
      "siteLanguageName"
    );

  if (
    button &&
    savedName
  ) {

    button.innerText =
      "🌐 Language: " + savedName;

  }

}



/* =========================================================
   SERVICE MODAL
   ========================================================= */

function openServiceModal(service) {

  const modal =
    document.getElementById("serviceModal");

  const title =
    document.getElementById("modalTitle");

  const text =
    document.getElementById("modalText");


  if (!modal || !title || !text) {
    return;
  }


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
      text: "We provide academic support including topic selection, proposal development, literature review, methodology, data analysis, and final thesis support for Masters and PhD students."
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


  if (!content[service]) {
    return;
  }


  title.innerText =
    content[service].title;

  text.innerText =
    content[service].text;

  modal.classList.add("show");

}


function closeServiceModal() {

  const modal =
    document.getElementById("serviceModal");

  if (modal) {

    modal.classList.remove("show");

  }

}



/* =========================================================
   NEWSLETTER
   ========================================================= */

function initNewsletter() {

  const form =
    document.getElementById("newsletterForm");

  if (!form) {
    return;
  }


  form.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();


      const emailInput =
        document.getElementById(
          "newsletterEmail"
        );

      const message =
        document.getElementById(
          "subscribeMsg"
        );


      if (!emailInput || !message) {
        return;
      }


      const email =
        emailInput.value.trim();


      if (
        !email ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      ) {

        message.innerText =
          "Enter a valid email.";

        return;

      }


      /*
         IMPORTANT:
         Replace YOUR_FORM_ID with your real Formspree ID.
      */

      fetch(
        "https://formspree.io/f/YOUR_FORM_ID",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            email: email
          })
        }
      )
      .catch(function (error) {

        console.error(
          "Newsletter submission error:",
          error
        );

      });


      const phone =
        "254759015631";


      const whatsappText =
        `Hello VANTYX STUDIOS KENYA, I just subscribed with this email: ${email}`;


      window.open(
        `https://wa.me/${phone}?text=${encodeURIComponent(whatsappText)}`,
        "_blank"
      );


      message.innerText =
        "You're in! Redirecting...";


      emailInput.value = "";

    }
  );

}



/* =========================================================
   BLOG
   ========================================================= */

function openBlog(id) {

  const modal =
    document.getElementById("blogModal");

  const content =
    document.getElementById("blogContent");


  if (!modal || !content) {
    return;
  }


  const blogData = {

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


  content.innerHTML =
    blogData[id] ||
    "<p>Blog post not found.</p>";


  modal.style.display =
    "flex";

}


function closeBlog() {

  const modal =
    document.getElementById("blogModal");

  if (modal) {

    modal.style.display =
      "none";

  }

}



/* =========================================================
   PRIVACY POLICY
   ========================================================= */

function openPolicy() {

  const modal =
    document.getElementById("privacy-modal");

  if (modal) {

    modal.classList.add("active");

  }

}


function closePolicy() {

  const modal =
    document.getElementById("privacy-modal");

  if (modal) {

    modal.classList.remove("active");

  }

}



/* =========================================================
   TERMS
   ========================================================= */

function openTerms() {

  const modal =
    document.getElementById("terms-modal");

  if (modal) {

    modal.classList.add("active");

    document.body.classList.add(
      "modal-open"
    );

  }

}


function closeTerms() {

  const modal =
    document.getElementById("terms-modal");

  if (modal) {

    modal.classList.remove("active");

  }

  document.body.classList.remove(
    "modal-open"
  );

}



/* =========================================================
   GENERIC MODAL
   ========================================================= */

function openModal(id) {

  const modal =
    document.getElementById(id);

  if (modal) {

    modal.classList.add("show");

  }

}


function closeGenericModal(id) {

  const modal =
    document.getElementById(id);

  if (modal) {

    modal.classList.remove("show");

  }

}



/* =========================================================
   PROCESS MODAL
   ========================================================= */

function openProcessModal(event) {

  if (event) {

    event.preventDefault();

  }


  const modal =
    document.getElementById("processModal");

  if (modal) {

    modal.classList.add("show");

    document.body.style.overflow =
      "hidden";

  }

}


function closeProcessModal() {

  const modal =
    document.getElementById("processModal");

  if (modal) {

    modal.classList.remove("show");

  }

  document.body.style.overflow =
    "auto";

}



/* =========================================================
   GLOBAL OUTSIDE-CLICK MODAL HANDLER
   ========================================================= */

window.addEventListener(
  "click",
  function (event) {

    /* Case modal */

    const caseModal =
      document.getElementById("caseModal");

    if (
      caseModal &&
      event.target === caseModal
    ) {

      closeCase();

    }


    /* Blog modal */

    const blogModal =
      document.getElementById("blogModal");

    if (
      blogModal &&
      event.target === blogModal
    ) {

      closeBlog();

    }


    /* Terms */

    const termsModal =
      document.getElementById("terms-modal");

    if (
      termsModal &&
      event.target === termsModal
    ) {

      closeTerms();

    }


    /* Service */

    const serviceModal =
      document.getElementById("serviceModal");

    if (
      serviceModal &&
      event.target === serviceModal
    ) {

      closeServiceModal();

    }


    /* Process */

    const processModal =
      document.getElementById("processModal");

    if (
      processModal &&
      event.target === processModal
    ) {

      closeProcessModal();

    }


    /* Account */

    const accountModal =
      document.getElementById("accountModal");

    if (
      accountModal &&
      event.target === accountModal
    ) {

      closeAccount();

    }


    /* Cart */

    const cartModal =
      document.getElementById("cartModal");

    if (
      cartModal &&
      event.target === cartModal
    ) {

      closeCart();

    }


    /* Team / Careers / Press */

    [
      "teamModal",
      "careersModal",
      "pressModal"
    ].forEach(function (id) {

      const modal =
        document.getElementById(id);

      if (
        modal &&
        event.target === modal
      ) {

        modal.classList.remove("show");

      }

    });


    /* Generic custom modals */

    document
      .querySelectorAll(".custom-modal")
      .forEach(function (modal) {

        if (event.target === modal) {

          modal.classList.remove("show");

        }

      });

  }
);
