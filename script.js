import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyB18Atbr8gk5rVIEuYWCkMsw3Ke6Re1OOs",
  authDomain: "taskmate-48642.firebaseapp.com",
  databaseURL: "https://taskmate-48642-default-rtdb.firebaseio.com",
  projectId: "taskmate-48642",
  storageBucket: "taskmate-48642.appspot.com",
  messagingSenderId: "954413614116",
  appId: "1:954413614116:web:a2d489be5edd014b5b44b1",
  measurementId: "G-S2KS2XQ8WD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Data for each section
const heroData = {
  title: "Simplify Work, Boost Productivity",
  subtitle: "The all-in-one workspace for modern teams",
  image:
    "https://static.vecteezy.com/system/resources/thumbnails/050/809/178/small_2x/teamwork-and-collaboration-in-project-planning-business-team-meeting-project-planning-concept-photo.jpeg",
  alt: "TasksMate Dashboard",
};

const collaborationData = {
  title: "Unlock Seamless Collaboration",
  description:
    "Say goodbye to scattered tools and disconnected teams! TasksMate brings everything together with intuitive features designed for smooth teamwork.",
  list: [
    "Plan & Track Tasks with visual boards",
    "Communicate Effectively with built-in messaging",
    "Streamline Payments with invoicing tools",
    "Work in Sync with document sharing and team collaboration",
  ],
  image:
    "https://www.herzing.edu/sites/default/files/styles/fp_900_700/public/2020-09/project-management-skills.jpg.webp?itok=4FdmYPDY",
  alt: "Collaboration Dashboard",
};

const videoData = {
  title: "See TasksMate in Action",
  features: [
    {
      icon: "bi-stopwatch",
      title: "Quick Setup",
      description: "Get up and running in minutes with intuitive onboarding.",
      color: "#7B61FF",
    },
    {
      icon: "bi-bezier",
      title: "Seamless Flow",
      description: "Experience smooth workflows across all your projects.",
      color: "#4ECDC4",
    },
    {
      icon: "bi-lightning",
      title: "Instant Results",
      description: "See productivity improvements from day one.",
      color: "#FF4F4F",
    },
  ],
};

const integrationsData = {
  title: "Integrations & Apps",
  description:
    "Supercharge your workflow with seamless integrations. TasksMate connects with your favorite tools, making it easy to plan, create, and collaborate efficiently.",
  items: [
    {
      icon: "bi-cloud", // Example icon for Firebase
      title: "Firebase",
      description:
        "Build and manage your apps with Firebase's powerful backend services.",
      color: "#FFCA28", // Example color for Firebase
      delay: "0.1s",
    },
    {
      icon: "bi-google", // Example icon for Google
      title: "Google",
      description:
        "Integrate with Google services for enhanced productivity and collaboration.",
      color: "#DB4437", // Example color for Google
      delay: "0.2s",
    },
    {
      icon: "bi-chat-dots", // Example icon for ChatGPT
      title: "ChatGPT",
      description:
        "Leverage AI-powered conversations to enhance your customer support.",
      color: "#00BFFF", // Example color for ChatGPT
      delay: "0.3s",
    },
    {
      icon: "bi-calendar", // Example icon for Google Calendar
      title: "Google Calendar",
      description:
        "Manage your schedule and events seamlessly with Google Calendar integration.",
      color: "#4285F4", // Example color for Google Calendar
      delay: "0.4s",
    },
    {
      icon: "bi-credit-card", // Stripe icon
      title: "Stripe",
      description:
        "Accept payments securely with one of the best online payment solutions.",
      color: "#4ECDC4",
      delay: "0.5s",
    },
    {
      icon: "bi-camera", // Camera icon
      title: "Camera",
      description:
        "Capture and share screenshots quickly for better communication.",
      color: "#FF4F4F",
      delay: "0.6s",
    },
    {
      icon: "bi-people", // Example icon for Google Meet
      title: "Google Meet",
      description:
        "Connect with your team through video calls and meetings with Google Meet.",
      color: "#34A853", // Example color for Google Meet
      delay: "0.7s",
    },
    {
      icon: "bi-grid", // Example icon for Excel
      title: "Excel",
      description:
        "Integrate with Excel for powerful data analysis and management.",
      color: "#F25022", // Example color for Excel
      delay: "0.8s",
    },
    {
      icon: "bi-kanban", // Example icon for Kanban Board
      title: "Kanban Board",
      description:
        "Visualize your workflow and manage tasks effectively with Kanban boards.",
      color: "#007ACC", // Example color for Kanban Board
      delay: "0.9s",
    },
  ],
};

const servicesData = {
  title: "Services",
  description:
    "At TasksMate, we offer a suite of services to help businesses, freelancers, and teams stay organized and productive.",
  items: [
    {
      icon: "bi-kanban",
      title: "Project Management",
      description:
        "Plan, track, and execute projects with ease. Organize tasks visually with intuitive boards.",
      color: "#FF4F4F",
    },
    {
      icon: "bi-lightning",
      title: "Task Automation",
      description:
        "Automate repetitive tasks and focus on what matters. Save time with smart workflows.",
      color: "#4ECDC4",
    },
    {
      icon: "bi-clock",
      title: "Time Tracking",
      description:
        "Monitor work hours, optimize efficiency and track productivity across projects and teams.",
      color: "#7B61FF",
    },
    {
      icon: "bi-people",
      title: "Team Collaboration",
      description:
        "Communicate, share files, and work together seamlessly no matter where you are.",
      color: "#FF4F4F",
    },
    {
      icon: "bi-cash-coin",
      title: "Invoicing & Payments",
      description:
        "Manage billing, track payments, and simplify transactions for clients and projects.",
      color: "#4ECDC4",
    },
    {
      icon: "bi-person-badge",
      title: "Client Portal",
      description:
        "Provide clients with direct access to project progress, files, and updates.",
      color: "#7B61FF",
    },
  ],
};

const featuresData = {
  title: "Powerful Features",
  description:
    "TasksMate combines an elegant UI with high-performance tools to streamline your workflow.",
  items: [
    {
      icon: "bi-kanban",
      title: "Task Boards",
      description:
        "Organize tasks visually with intuitive boards and custom workflows.",
      color: "#FF4F4F",
      delay: "0.1s",
    },
    {
      icon: "bi-chat-dots",
      title: "Messaging",
      description:
        "Keep your team connected with built-in chat and notifications.",
      color: "#4ECDC4",
      delay: "0.2s",
    },
    {
      icon: "bi-clock-history",
      title: "Time Tracking",
      description:
        "Monitor work hours effortlessly across projects and team members.",
      color: "#7B61FF",
      delay: "0.3s",
    },
    {
      icon: "bi-folder",
      title: "File Storage",
      description: "Store and share files securely with your team and clients.",
      color: "#FFE974",
      delay: "0.4s",
    },
    {
      icon: "bi-people-fill",
      title: "Team Collaboration",
      description: "Work together seamlessly from anywhere in the world.",
      color: "#FF4F4F",
      delay: "0.5s",
    },
    {
      icon: "bi-receipt",
      title: "Invoicing & Payments",
      description: "Automate billing and track transactions with clients.",
      color: "#4ECDC4",
      delay: "0.6s",
    },
    {
      icon: "bi-person-badge",
      title: "Client Portal",
      description: "Provide clients with direct access to project updates.",
      color: "#7B61FF",
      delay: "0.7s",
    },
    {
      icon: "bi-plug",
      title: "Integrations",
      description: "Connect with the tools you love for a unified workflow.",
      color: "#FFE974",
      delay: "0.8s",
    },
  ],
};

const teamsData = {
  title: "Teams",
  description:
    "No matter your team's size or industry, TasksMate is built to empower collaboration and efficiency.",
  items: [
    {
      icon: "bi-building",
      title: "Small Businesses & Startups",
      description:
        "Stay agile and manage projects effortlessly while keeping your team aligned.",
      color: "#FF4F4F",
      team: "business",
    },
    {
      icon: "bi-buildings",
      title: "Enterprises",
      description:
        "Organize large-scale projects with advanced tracking and resource allocation.",
      color: "#4ECDC4",
      team: "enterprise",
    },
    {
      icon: "bi-person-workspace",
      title: "Freelancers",
      description:
        "Keep track of tasks, invoices, and client projects in one streamlined place.",
      color: "#7B61FF",
      team: "freelance",
    },
    {
      icon: "bi-graph-up-arrow",
      title: "Marketing & Agencies",
      description:
        "Plan campaigns, manage content, and collaborate with clients seamlessly.",
      color: "#FF4F4F",
      team: "marketing",
    },
    {
      icon: "bi-code-slash",
      title: "IT & Software Teams",
      description:
        "Organize sprints, track bugs, and manage releases efficiently.",
      color: "#4ECDC4",
      team: "it",
    },
    {
      icon: "bi-rocket-takeoff",
      title: "Custom Solutions",
      description:
        "Tailor TasksMate to fit your specific industry needs and workflows.",
      color: "#7B61FF",
      team: "custom",
    },
  ],
};

const pricingData = {
  title: "Pricing Plans",
  description:
    "Choose the perfect plan for your team's needs. All plans include core features with premium options for growing teams.",
  items: [
    {
      title: "Starter",
      description: "Perfect for individuals and small teams",
      price: "$9/month",
      features: [
        { text: "Up to 5 team members", available: true },
        { text: "5GB storage", available: true },
        { text: "Basic task management", available: true },
        { text: "Team messaging", available: true },
        { text: "Time tracking", available: false },
        { text: "Client portal", available: false },
      ],
    },
    {
      title: "Professional",
      description: "Ideal for growing teams and businesses",
      price: "$29/month",
      popular: true,
      features: [
        { text: "Up to 20 team members", available: true },
        { text: "25GB storage", available: true },
        { text: "Advanced task management", available: true },
        { text: "Team messaging", available: true },
        { text: "Time tracking", available: true },
        { text: "Basic client portal", available: true },
      ],
    },
    {
      title: "Enterprise",
      description: "Advanced features for large organizations",
      price: "$79/month",
      features: [
        { text: "Unlimited team members", available: true },
        { text: "100GB storage", available: true },
        { text: "Premium task management", available: true },
        { text: "Advanced team collaboration", available: true },
        { text: "Advanced time tracking", available: true },
        { text: "Custom client portal", available: true },
      ],
    },
  ],
};

const benefitsData = {
  title: "Trusted by Teams You Get:",
  description:
    "Experience complete control with a real-time dashboard, empowering you to make informed decisions quickly.",
  projectOversight: [
    "Unified Project Dashboard – Get a centralized view of all projects and tasks",
    "Milestone & Deadline Tracking – Stay on schedule and meet goals efficiently",
    "Task Prioritization – Focus on what matters most with smart sorting",
    "Custom Task Status – Define workflows that match your unique needs",
  ],
  whyChoose: [
    "Seamless Collaboration – Work together effortlessly with team-focused tools",
    "Total Transparency – Keep track of project progress with real-time updates",
    "Integration & Automation – Connect your favorite apps and automate workflows",
    "Centralized Dashboard – Get real-time tracking of all your projects",
  ],
};

const statsData = {
  title: "Trusted by Teams Everywhere",
  stats: [
    { value: "3.2x", description: "Increase in Client Satisfaction" },
    { value: "28%", description: "Faster Project Delivery" },
    { value: "32%", description: "Less Administrative Work" },
    { value: "42%", description: "Lower Overhead Costs" },
  ],
  testimonials: [
    {
      quote: "TasksMate has revolutionized the way we manage our projects!",
      name: "Piyush Singh",
      title: "Project Manager, Mindcom Group",
      color: "#4ECDC4",
    },
    {
      quote: "A must-have tool for any team.",
      name: "Narun Srinivas",
      title: "CEO, Briclay Technology Pvt. Ltd.",
      color: "#4ECDC4",
    },
    {
      quote: "Efficient and user-friendly.",
      name: "Rajnish",
      title: "Freelancer",
      color: "#FF4F4F",
    },
    {
      quote: "Our productivity has doubled since we started using TasksMate.",
      name: "Anthony",
      title: "CEO",
      color: "#4ECDC4",
    },
    {
      quote: "Highly recommend for any project management needs.",
      name: "Saigias",
      title: "Consultant",
      color: "#4ECDC4",
    },
    {
      quote: "The best tool for managing tasks and projects.",
      name: "Seth",
      title: "Developer",
      color: "#FF4F4F",
    },
  ],
};

/* const partnersData = {
  title: "Our Partners",
  description:
    "We collaborate with industry leaders to deliver the best experience for our users.",
  items: [
    { name: "Mindcom Group", style: "font-weight: bold; color: #4ECDC4;" },
    { name: "Grazr", style: "font-weight: bold; color: #7B61FF;" },
    { name: "Rancho Hydraulic", style: "font-weight: bold; color: #FF4F4F;" },
    { name: "CKC Trucking", style: "font-weight: bold; color: #4ECDC4;" },
    { name: "Briclay", style: "font-weight: bold; color: #FFE974;" },
    { name: "Axenet IT Services", style: "font-weight: bold; color: #7B61FF;" },
    { name: "CableNetPro", style: "font-weight: bold; color: #FF4F4F;" },
    { name: "FireErp", style: "font-weight: bold; color: #4ECDC4;" },
  ],
}; */

const aboutData = {
  title: "About Us",
  description:
    "At TasksMate, we believe that productivity should be simple, intuitive, and powerful.",
  text: "Our mission is to provide teams with the best project management and collaboration platform, merging a stunning UI with high-performance functionality.",
  list: [
    "Crafted with meticulous detail – Every feature is designed to enhance workflow",
    "Built for efficiency – Speed up projects with automation and smart tools",
    "Driven by innovation – Constantly evolving to meet modern work demands",
  ],
  finalText: "Join thousands of professionals using TasksMate to stay ahead!",
  image:
    "https://img.freepik.com/free-photo/document-marketing-strategy-business-concept_53876-124272.jpg",
  alt: "Our Team",
};

const ctaData = {
  title: "Join the Future of Work with TasksMate!",
  description:
    "Thousands of teams trust TasksMate to streamline their projects, reduce manual work, and boost productivity.",
};

// Render functions
function renderHero() {
  const content = `
        <h1 class="text-4xl md:text-5xl font-bold mb-6 bubble-effect" style="line-height: 3rem;">
            <span class="bg-[#FFE974] px-2">Simplify Work,</span> 
            <span class="relative">
                <span class="bg-black text-white bg-[#4ECDC4] px-2">Boost Productivity</span>
            </span>
        </h1>  
        <p class="text-xl mb-8">${heroData.subtitle}</p>
        <div class="flex flex-wrap justify-center gap-4">
         
            <button class="neubrutalism action-btn text-white px-8 py-3 slide-in-left playstore-btn"><i class="bi bi-google-play mr-2"></i>Playstore</button>
            <button class="neubrutalism demo-btn text-white px-8 py-3 slide-in-right appstore-btn"><i class="bi bi-apple mr-2"></i>Appstore</button>
        </div>
        <div class="mt-12 neubrutalism bg-white mx-auto max-w-3xl"  style="padding: .2rem;  border-radius: 20px;">
            <img src="${heroData.image}" alt="${heroData.alt}" class="w-full h-auto object-cover border-2 border-black" style="border-radius: 20px;">
        </div>
    `;
  document.getElementById("hero-content").innerHTML = content;
}

// Function to update visitor count
async function updateVisitorCount() {
  try {
    const visitorDocRef = doc(db, "visitors", "visitorCount");
    const visitorDoc = await getDoc(visitorDocRef);

    if (!visitorDoc.exists()) {
      console.log(
        "Document does not exist. Creating a new document with count 1."
      );
      await setDoc(visitorDocRef, { count: 1 });
      document.getElementById("visitor-count").textContent = 1;
    } else {
      console.log("Document exists. Current count:", visitorDoc.data().count);
      if (!localStorage.getItem("visited")) {
        const currentCount = visitorDoc.data().count;
        const newCount = currentCount + 1;

        console.log("New visitor. Updating count to:", newCount);
        await updateDoc(visitorDocRef, { count: newCount });
        document.getElementById("visitor-count").textContent = newCount;
        localStorage.setItem("visited", "true");
      } else {
        console.log(
          "Returning visitor. Count remains:",
          visitorDoc.data().count
        );
        document.getElementById("visitor-count").textContent =
          visitorDoc.data().count;
      }
    }
  } catch (error) {
    console.error("Error updating visitor count:", error);
  }
}

function renderCollaboration() {
  const content = `
        <div class="slide-in-left">
            <h2 class="text-3xl font-bold mb-6">
                <span class="bg-black text-white px-2">Unlock</span> Seamless Collaboration
            </h2>
            <p class="text-lg mb-6">${collaborationData.description}</p>
            <ul class="space-y-3 mb-8">
                ${collaborationData.list
                  .map(
                    (item) =>
                      `<li class="flex items-start"><span class="mr-3 text-xl">✅</span><span>${item}</span></li>`
                  )
                  .join("")}
            </ul>
            <div class="flex flex-wrap gap-4">
                <button class="neubrutalism action-btn  text-white px-8 py-3 playstore-btn"><i class="bi bi-google-play mr-2"></i>Playstore</button>
                <button class="neubrutalism demo-btn appstore-btn text-white px-8 py-3"><i class="bi bi-apple mr-2"></i>Appstore</button>
            </div>
        </div>
        <div class="neubrutalism bg-white slide-in-right"  style="padding: .2rem; border-radius: 20px;">
            <img src="${collaborationData.image}" alt="${
    collaborationData.alt
  }" class="w-full h-full object-cover border-2 border-black" style="border-radius: 20px;">
        </div>
    `;
  document.getElementById("collaboration-content").innerHTML = content;
}

function renderVideo() {
  const content = `
        <h2 class="text-3xl font-bold text-center mb-6">
            <span class="bg-black text-white px-2">See TasksMate</span> in Action
        </h2>
        <div class="flex flex-wrap justify-center gap-8 mt-12">
            ${videoData.features
              .map(
                (feature) => `
                <div class="feature-card p-6 w-full md:w-auto">
                    <i class="bi ${feature.icon} text-3xl" style="color: ${feature.color}"></i>
                    <h3 class="text-xl font-bold mt-3 mb-2">${feature.title}</h3>
                    <p>${feature.description}</p>
                </div>
            `
              )
              .join("")}
        </div>
    `;
  document.getElementById("video-content").innerHTML = content;
}

function renderIntegrations() {
  const content = `
        <h2 class="text-3xl font-bold text-center mb-4">
            <span class="bg-black text-white px-2">Integrations</span> & Apps
        </h2>
        <p class="text-center max-w-3xl mx-auto mb-12">${
          integrationsData.description
        }</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            ${integrationsData.items
              .map(
                (item) => `
                <div class="integration-card p-6 fade-in" style="animation-delay: ${item.delay}">
                    <i class="bi ${item.icon} text-4xl" style="color: ${item.color}"></i>
                    <h3 class="text-xl font-bold mt-4 mb-2">${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `
              )
              .join("")}
        </div>
    `;
  document.getElementById("integrations-content").innerHTML = content;
}

function renderServices() {
  const content = `
        <h2 class="text-3xl font-bold text-center mb-4">
           Our <span class="bg-black text-white px-2">Services</span>
        </h2>
        <p class="text-center max-w-3xl mx-auto mb-12">${
          servicesData.description
        }</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${servicesData.items
              .map(
                (item) => `
                <div class="feature-card p-6">
                    <i class="bi ${item.icon} text-4xl" style="color: ${item.color}"></i>
                    <h3 class="text-xl font-bold mt-4 mb-2">${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `
              )
              .join("")}
        </div>
    `;
  document.getElementById("services-content").innerHTML = content;
}

function renderFeatures() {
  const content = `
        <h2 class="text-3xl font-bold text-center mb-4">
            <span class="bg-black text-white px-2">Powerful</span> Features
        </h2>
        <p class="text-center max-w-3xl mx-auto mb-12">${
          featuresData.description
        }</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${featuresData.items
              .map(
                (item) => `
                <div class="feature-card p-6 fade-in" style="animation-delay: ${item.delay}">
                    <i class="bi ${item.icon} text-3xl" style="color: ${item.color}"></i>
                    <h3 class="text-xl font-bold mt-4 mb-2">${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `
              )
              .join("")}
        </div>
    `;
  document.getElementById("features-content").innerHTML = content;
}

function renderTeams() {
  const content = `
        <h2 class="text-3xl font-bold text-center mb-4">
            Our <span class="bg-black text-white px-2">Teams</span>
        </h2>
        <p class="text-center max-w-3xl mx-auto mb-12">${
          teamsData.description
        }</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${teamsData.items
              .map(
                (item) => `
                <div class="feature-card p-6 team-btn cursor-pointer" data-team="${item.team}">
                    <i class="bi ${item.icon} text-4xl" style="color: ${item.color}"></i>
                    <h3 class="text-xl font-bold mt-4 mb-2">${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `
              )
              .join("")}
        </div>
    `;
  document.getElementById("teams-content").innerHTML = content;
}

function renderPricing() {
  const content = `
        <h2 class="text-3xl font-bold text-center mb-4">
            <span class="bg-black text-white px-2">Pricing</span> Plans
        </h2>
        <p class="text-center max-w-3xl mx-auto mb-12">${
          pricingData.description
        }</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${pricingData.items
              .map(
                (item) => `
                <div class="pricing-card p-6 ${item.popular ? "featured" : ""}">
                    <div class="flex justify-between items-center mb-2">
                        <h3 class="text-2xl font-bold">${item.title}</h3>
                        ${
                          item.popular
                            ? '<span class="bg-[#FF4F4F] text-white text-xs font-bold px-2 py-1">POPULAR</span>'
                            : ""
                        }
                    </div>
                    <p class="mb-4">${item.description}</p>
                    <div class="text-4xl font-bold mb-4">${
                      item.price.split("/")[0]
                    }<span class="text-xl font-normal">/${
                  item.price.split("/")[1]
                }</span></div>
                    <ul class="space-y-3 mb-8">
                        ${item.features
                          .map(
                            (feature) => `
                            <li class="flex items-start">
                                <span class="mr-3 ${
                                  feature.available
                                    ? "text-green-600"
                                    : "text-gray-400"
                                }">${feature.available ? "✓" : "✗"}</span>
                                <span class="${
                                  feature.available ? "" : "text-gray-500"
                                }">${feature.text}</span>
                            </li>
                        `
                          )
                          .join("")}
                    </ul>
                    <button class="neubrutalism ${
                      item.title === "Enterprise" ? "contact-btn" : "action-btn"
                    } text-white w-full py-3 font-medium">${
                  item.title === "Enterprise" ? "Contact Sales" : "Get Started"
                }</button>
                </div>
            `
              )
              .join("")}
        </div>
    `;
  document.getElementById("pricing-content").innerHTML = content;
}

function renderBenefits() {
  const content = `
        <h2 class="text-3xl font-bold text-center mb-4">
            <span class="bg-black text-white px-2">Trusted by Teams</span> You Get:
        </h2>
        <p class="text-center max-w-3xl mx-auto mb-12">${
          benefitsData.description
        }</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="feature-card p-6 slide-in-left">
                <h3 class="text-xl font-bold mb-4">Project Oversight</h3>
                <ul class="space-y-3">
                    ${benefitsData.projectOversight
                      .map(
                        (item) =>
                          `<li class="flex items-start"><span class="mr-3">📌</span><span>${item}</span></li>`
                      )
                      .join("")}
                </ul>
            </div>
            <div class="feature-card p-6 slide-in-right">
                <h3 class="text-xl font-bold mb-4">Why Choose TasksMate?</h3>
                <ul class="space-y-4">
                    ${benefitsData.whyChoose
                      .map(
                        (item) =>
                          `<li class="flex items-start"><span class="text-green-600 mr-3">✔</span><span>${item}</span></li>`
                      )
                      .join("")}
                </ul>
            </div>
        </div>
    `;
  document.getElementById("benefits-content").innerHTML = content;
}

function renderStats() {
  const content = `
        <h2 class="text-3xl font-bold text-center mb-12">
            <span class="bg-black text-white px-2">Trusted by Teams</span> Everywhere
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            ${statsData.stats
              .map(
                (stat) => `
                <div class="stats-card p-6 text-center">
                    <h3 class="text-4xl font-bold mb-4">${stat.value}</h3>
                    <p class="text-lg">${stat.description}</p>
                </div>
            `
              )
              .join("")}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${statsData.testimonials
              .map(
                (testimonial) => `
                <div class="testimonial-card p-6 ${
                  testimonial === statsData.testimonials[0]
                    ? "slide-in-left"
                    : "slide-in-right"
                }">
                    <p class="text-lg mb-4 italic">"${testimonial.quote}"</p>
                    <div class="flex items-center">
                        <div class="w-12 h-12 rounded-full bg-[${
                          testimonial.color
                        }] mr-4 border-2 border-black flex items-center justify-center">
                            <i class="bi bi-person-fill text-xl ${
                              testimonial.color === "#7B61FF"
                                ? "text-white"
                                : ""
                            }"></i>
                        </div>
                        <div>
                            <h4 class="font-bold">${testimonial.name}</h4>
                            <p>${testimonial.title}</p>
                        </div>
                    </div>
                </div>
            `
              )
              .join("")}
        </div>
    `;
  document.getElementById("stats-content").innerHTML = content;
}
document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".custom-cursor");
  const cursorFollower = document.querySelector(".cursor-follower");
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptCookiesButton = document.getElementById("accept-cookies");
  const playstoreButtons = document.querySelectorAll(".playstore-btn");
  const appstoreButtons = document.querySelectorAll(".appstore-btn");
  const dialog = document.getElementById("neubrutalism-dialog");
  const closeDialogButton = document.getElementById("close-dialog");

  // Function to show the dialog
  function showDialog() {
    dialog.classList.remove("hidden");
  }

  // Function to hide the dialog
  function hideDialog() {
    dialog.classList.add("hidden");
  }

  playstoreButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      showDialog();
    });
  });

  appstoreButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      showDialog();
    });
  });

  // Close the dialog when the close button is clicked
  closeDialogButton.addEventListener("click", hideDialog);

  // Close the dialog when clicking outside the dialog content
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
      hideDialog();
    }
  });
  // Check if cookies have been accepted
  const isAccepted = localStorage.getItem("cookieAccepted");

  // Hide the banner by default
  cookieBanner.style.display = "none";

  // Only show the banner if cookies have not been accepted
  if (isAccepted !== "yes") {
    cookieBanner.style.display = "block";
  }

  // Add event listener for accepting cookies
  if (acceptCookiesButton) {
    acceptCookiesButton.addEventListener("click", () => {
      // Save acceptance to localStorage
      localStorage.setItem("cookieAccepted", "yes");
      // Hide the banner
      cookieBanner.style.display = "none";
    });
  }

  const subscriptionToggles = document.querySelectorAll(".subscription-toggle");
  const priceElements = document.querySelectorAll(".user-price");

  subscriptionToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      // Remove active class and reset styles from all buttons
      subscriptionToggles.forEach((btn) => {
        btn.classList.remove("active");
        btn.style.transform = ""; // Reset transform
        btn.style.boxShadow = ""; // Reset shadow
      });

      // Add active class and highlight styles to clicked button
      toggle.classList.add("active");
      toggle.style.transform = "translate(-2px, -2px)";
      toggle.style.boxShadow = "var(--glossy-shadow), 7px 7px 0px var(--black)";

      const userCount = toggle.dataset.users;

      priceElements.forEach((price) => {
        const newPrice = price.dataset[`${userCount}Users`];
        price.textContent = `${newPrice}/month`;
      });
    });
  });
  function updateCursorVisibility() {
    if (window.innerWidth <= 768) {
      // Adjust the width as needed for mobile
      cursor.classList.add("hidden");
      cursorFollower.classList.add("hidden");
    } else {
      cursor.classList.remove("hidden");
      cursorFollower.classList.remove("hidden");
    }
  }

  // Initial check
  updateCursorVisibility();

  // Check on resize
  window.addEventListener("resize", updateCursorVisibility);

  // Custom cursor movement
  document.addEventListener("mousemove", (e) => {
    if (!cursor.classList.contains("hidden")) {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      setTimeout(() => {
        cursorFollower.style.left = e.clientX + "px";
        cursorFollower.style.top = e.clientY + "px";
      }, 100);
    }
  });

  // Other existing event listeners and code...
});

window.addEventListener("scroll", () => {
  document.querySelectorAll("section, footer").forEach((element) => {
    const rect = element.getBoundingClientRect();
    const scrollPosition = window.scrollY;
    const offset = rect.top + scrollPosition - window.innerHeight;
    const speed = 0.1; // Increase for stronger parallax effect
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.style.backgroundPositionY = `${offset * speed}px`;
    }
  });
});

async function renderPartners() {
  const partnersSection = document.getElementById("partners-content");
  try {
    const partnersCollection = collection(db, "partners");
    const partnersSnapshot = await getDocs(partnersCollection);
    const partners = partnersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (partners.length === 0) {
      partnersSection.innerHTML = "<p>No partners available at the moment.</p>";
      return;
    }

    const content = `
      <h2 class="text-3xl font-bold text-center mb-6">
        <span class="bg-black text-white px-2">Our</span> Partners
      </h2>
      <p class="text-center max-w-3xl mx-auto mb-12">
        We collaborate with industry leaders to deliver the best experience for our users.
      </p>
      <div class="partner-carousel">
        <div class="partner-slide">
          ${partners
            .map(
              (partner) => `
            <div class="partner-logo flex flex-col items-center">
              <div class="w-24 h-24 rounded-full bg-[${partner.color}] flex items-center justify-center">
                <img src="${partner.image}" alt="${partner.name}" class="w-full h-full object-contain p-2">
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
      <div class="text-center mt-12">
        <button class="neubrutalism  text-white px-8 py-3 contact-btn" style="margin-bottom: 20px">🤝 Partner With Us</button>
         
      </div>
    `;
    partnersSection.innerHTML = content;
  } catch (error) {
    console.error("Error fetching partners:", error);
    partnersSection.innerHTML =
      "<p>Error loading partners. Please try again later.</p>";
  }
}
// ... (Previous code remains the same until renderBlog) ...

async function renderBlog() {
  const blogSection = document.getElementById("blog");
  try {
    const blogCollection = collection(db, "blogPosts");
    const blogSnapshot = await getDocs(blogCollection);
    const blogPosts = blogSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (blogPosts.length === 0) {
      blogSection.style.display = "none";
      return;
    }

    blogSection.style.display = "block";
    const content = `
      <h2 class="text-3xl font-bold text-center mb-4">
        <span class="bg-black text-white px-2">Latest</span> from Our Blog
      </h2>
      <p class="text-center max-w-3xl mx-auto mb-12">
        Stay updated with productivity tips, feature releases, and success stories.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        ${blogPosts
          .map(
            (post) => `
          <div class="blog-card cursor-pointer" data-blog-id="${post.id}">
            <div class="h-48 overflow-hidden border-b-2 border-black">
              <img src="${post.image}" alt="${
              post.title
            }" class="w-full h-full object-cover">
            </div>
            <div class="p-6">
              <div class="flex justify-between mb-2 text-sm font-medium">
                <span class="bg-[${post.color}] px-2 py-1 ${
              post.color === "#4ECDC4" || post.color === "#7B61FF"
                ? "#4ECDC4"
                : ""
            }">${post.category}</span>
                <span>${post.date}</span>
              </div>
              <h3 class="text-xl font-bold mb-3">${post.title}</h3>
              <p class="mb-4 line-clamp-3">${post.description}</p>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
       <div class="text-center mt-12">
        <button class="neubrutalism  text-white px-8 py-3 contact-btn" style='background:green,color:white;margin-bottom: 20px' >🤝 Join Our Newsletter</button>
      </div>
    `;

    document.getElementById("blog-content").innerHTML = content;

    // Add click event listeners to blog cards
    document.querySelectorAll(".blog-card").forEach((card) => {
      card.addEventListener("click", () => {
        const blogId = card.getAttribute("data-blog-id");
        const blogPost = blogPosts.find((post) => post.id === blogId);
        showBlogDetailDialog(blogPost);
      });
    });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    blogSection.style.display = "none";
  }
}

// Function to show detailed blog content in a dialog
function showBlogDetailDialog(blogPost) {
  // Split details into paragraphs based on \n\n
  const paragraphs = blogPost.details
    ? blogPost.details.split("\n\n")
    : ["No detailed content available yet."];

  // Process paragraphs to bold numbered points
  const formattedParagraphs = paragraphs
    .map((paragraph) => {
      const match = paragraph.match(/^(\d+\. \s+[^\n]+)/); // Match numbered points like "1. Set Clear, Measurable Goals"
      if (match) {
        const pointTitle = match[1]; // e.g., "1. Set Clear, Measurable Goals"
        const pointContent = paragraph.replace(pointTitle, "").trim(); // Rest of the paragraph
        return `
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-2">${pointTitle}</h3>
          <p>${pointContent}</p>
        </div>
      `;
      }
      return `<p class="mb-6">${paragraph}</p>`; // Non-numbered paragraphs
    })
    .join("");

  // Create dialog content
  const detailedContent = `
    <div class="p-6">
      <h2 class="text-2xl font-bold mb-4">${blogPost.title}</h2>
      <div class="flex justify-between mb-4 text-sm font-medium">
        <span class="bg-[${blogPost.color}] px-2 py-1">${blogPost.category}</span>
        <span>${blogPost.date}</span>
      </div>
      <p class="mb-6">${blogPost.description}</p>
      <div class="h-64 overflow-hidden border-b-2 border-black mb-6">
        <img src="${blogPost.image}" alt="${blogPost.title}" class="w-full h-full object-cover">
      </div>
      <div class="space-y-6">
        ${formattedParagraphs}
      </div>
    </div>
  `;

  // Create or update dialog
  let dialog = document.getElementById("blog-detail-dialog");
  if (!dialog) {
    dialog = document.createElement("div");
    dialog.id = "blog-detail-dialog";
    dialog.className =
      "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden";
    document.body.appendChild(dialog);
  }

  dialog.innerHTML = `
    <div class="blog-card bg-white max-w-3xl w-full max-h-[80vh] overflow-y-auto border-2 border-black neubrutalism">
      ${detailedContent}
      <button class="close-blog-dialog neubrutalism bg-[#FF4F4F] text-white px-6 py-2 mt-4 mx-6 mb-6">Close</button>
    </div>
  `;

  // Show dialog
  dialog.classList.remove("hidden");

  // Add close event
  dialog.querySelector(".close-blog-dialog").addEventListener("click", () => {
    dialog.classList.add("hidden");
  });

  // Close on outside click
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
      dialog.classList.add("hidden");
    }
  });
}

// ... (Rest of the code remains the same, including attachEventListeners) ...
// ... (Rest of the code remains the same, including attachEventListeners) ...
function renderAbout() {
  const content = `
        <h2 class="text-3xl font-bold text-center mb-4">
            <span class="bg-black text-white px-2">About</span> Us
        </h2>
        <p class="text-center max-w-3xl mx-auto mb-12">${
          aboutData.description
        }</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div class="slide-in-left">
                <p class="mb-6 text-lg">${aboutData.text}</p>
                <ul class="space-y-4 mb-6">
                    ${aboutData.list
                      .map(
                        (item) =>
                          `<li class="flex items-start"><span class="mr-3 text-[#FF4F4F]">🔹</span><span>${item}</span></li>`
                      )
                      .join("")}
                </ul>
                <p class="text-lg font-medium">${aboutData.finalText}</p>
            </div>
            <div class="neubrutalism bg-white slide-in-right" style="padding: .2rem;  border-radius: 20px;">
                <img src="${aboutData.image}" alt="${
    aboutData.alt
  }" class="w-full h-full object-cover border-2 border-black" style="border-radius: 20px;">
            </div>
        </div>
    `;
  document.getElementById("about-content").innerHTML = content;
}

// Updated data with names explicitly included
const replacesSoftwareData = {
  title: "Replaces Software",
  description:
    "TasksMate consolidates your workflow, potentially replacing multiple tools with one powerful platform.",
  items: [
    { icon: "bi-whatsapp", color: "#25D366", name: "WhatsApp" },
    { icon: "bi-kanban", color: "#0052CC", name: "ClickUp" },
    { icon: "bi-list-task", color: "#F44336", name: "Asana" },
    { icon: "bi-grid-3x3-gap", color: "#4262FF", name: "Monday.com" },
    { icon: "bi-journal-text", color: "#000000", name: "Notion" },
    { icon: "bi-bug", color: "#0052CC", name: "Jira" },
  ],
};

// Updated render function to show logos with names
function renderReplacesSoftware() {
  const content = `
        <h2 class="text-3xl font-bold text-center mb-6">
            <span class="bg-black text-white px-2">Replaces</span> Software
        </h2>
        <p class="text-center max-w-3xl mx-auto mb-12">${
          replacesSoftwareData.description
        }</p>
        <div class="partner-carousel">
            <div class="partner-slide">
                ${replacesSoftwareData.items
                  .map(
                    (item) => `
                    <div class="partner-logo flex flex-col items-center">
                        <i class="bi ${item.icon} text-5xl mb-2" style="color: ${item.color}"></i>
                        <span class="text-sm font-medium" style="color: ${item.color}">${item.name}</span>
                    </div>
                `
                  )
                  .join("")}
                ${replacesSoftwareData.items
                  .map(
                    (item) => `
                    <div class="partner-logo flex flex-col items-center">
                        <i class="bi ${item.icon} text-5xl mb-2" style="color: ${item.color}"></i>
                        <span class="text-sm font-medium" style="color: ${item.color}">${item.name}</span>
                    </div>
                `
                  )
                  .join("")}
            </div>
        </div>
    `;
  document.getElementById("replaces-software-content").innerHTML = content;
}

function renderCTA() {
  const content = `
        <h2 class="text-3xl font-bold mb-6">
            <span class="bg-black text-white px-2">Join the Future</span> of Work with TasksMate!
        </h2>
        <p class="text-xl mb-8">${ctaData.description}</p>
        <div class="flex flex-wrap justify-center gap-4">
            <button class="neubrutalism bg-[#FF4F4F] text-white px-8 py-3 bounce contact-btn">🚀 Get Started Free</button>
            <button class="neubrutalism bg-white px-8 py-3 video-play-btn">🎥 Watch Demo</button>
        </div>
    `;
  document.getElementById("cta-content").innerHTML = content;
}

// Select all buttons that should open the contact modal
const contactButtons = document.querySelectorAll(".contact-btn");
const contactModal = document.getElementById("contact-modal");
const closeContactModal = document.querySelector(".close-contact-modal");

// Show the contact modal when any contact button is clicked
contactButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    contactModal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  });
});

// Close the contact modal when the close button is clicked
closeContactModal.addEventListener("click", () => {
  contactModal.style.display = "none";
  document.body.style.overflow = "auto"; // Restore background scrolling
});

// Close the modal when clicking outside of the modal content
window.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    contactModal.style.display = "none";
    document.body.style.overflow = "auto"; // Restore background scrolling
  }
});

// Update the window load event listener to include the new render function
window.addEventListener("load", () => {
  renderHero();
  renderCollaboration();
  renderVideo();
  renderIntegrations();
  renderServices();
  renderFeatures();
  renderTeams();
  renderPricing();
  renderBenefits();
  renderStats();
  renderReplacesSoftware(); // Add this line
  renderPartners();
  renderBlog();
  renderAbout();
  renderCTA();
  // Call the function to update the visitor count
  updateVisitorCount();
  attachEventListeners();
});

function attachEventListeners() {
  // Page loader (unchanged)
  setTimeout(() => {
    document.getElementById("loader").style.opacity = "0";
    setTimeout(
      () => (document.getElementById("loader").style.display = "none"),
      500
    );
  }, 1500);

  // Custom cursor (unchanged)
  const cursor = document.querySelector(".custom-cursor");
  const cursorFollower = document.querySelector(".cursor-follower");
  const videoCursorText = document.createElement("div");
  videoCursorText.className = "video-cursor-text";
  videoCursorText.textContent = "";
  document.body.appendChild(videoCursorText);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    setTimeout(() => {
      cursorFollower.style.left = e.clientX + "px";
      cursorFollower.style.top = e.clientY + "px";
    }, 100);
  });

  document.addEventListener("mousedown", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(0.8)";
    cursorFollower.style.transform = "translate(-50%, -50%) scale(0.8)";
  });

  document.addEventListener("mouseup", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    cursorFollower.style.transform = "translate(-50%, -50%) scale(1)";
  });

  const buttons = document.querySelectorAll("button, a");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      cursor.classList.add("grow");
      cursorFollower.classList.add("grow");
    });
    button.addEventListener("mouseleave", () => {
      cursor.classList.remove("grow");
      cursorFollower.classList.remove("grow");
    });
  });

  const videoTriggers = document.querySelectorAll(
    ".video-trigger, .video-play-btn"
  );
  videoTriggers.forEach((trigger) => {
    trigger.addEventListener("mouseenter", () => {
      cursor.classList.add("video-cursor");
      videoCursorText.style.left = cursor.style.left;
      videoCursorText.style.top = cursor.style.top;
      videoCursorText.style.opacity = "1";
    });
    trigger.addEventListener("mousemove", (e) => {
      videoCursorText.style.left = e.clientX + "px";
      videoCursorText.style.top = e.clientY + "px";
    });
    trigger.addEventListener("mouseleave", () => {
      cursor.classList.remove("video-cursor");
      videoCursorText.style.opacity = "0";
    });
  });

  // Scroll buttons
  const scrollToTop = document.getElementById("scroll-to-top");
  const scrollToBottom = document.getElementById("scroll-to-bottom");

  scrollToTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
  scrollToBottom.addEventListener("click", () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
  );

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollToTop.style.display = "flex";
      scrollToBottom.style.display = "none";
    } else {
      scrollToTop.style.display = "none";
      scrollToBottom.style.display = "flex";
    }
  });

  // Navbar logo scroll
  document
    .getElementById("navbar-logo")
    .addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    );

  // Mobile menu
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const closeMenuButton = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuButton.addEventListener("click", () =>
    mobileMenu.classList.add("active")
  );
  closeMenuButton.addEventListener("click", () =>
    mobileMenu.classList.remove("active")
  );

  document.querySelectorAll("#mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => mobileMenu.classList.remove("active"));
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute("href");
      if (targetId === "#") return;
      const target = document.querySelector(targetId);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Team modals
  const teamButtons = document.querySelectorAll(".team-btn");
  const closeModalButtons = document.querySelectorAll(".close-modal");

  teamButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const teamType = btn.getAttribute("data-team");
      const modal = document.getElementById(`team-modal-${teamType}`);
      if (modal) {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
      } else if (document.getElementById("team-modal-business")) {
        document.getElementById("team-modal-business").style.display = "flex";
        document.body.style.overflow = "hidden";
      }
    });
  });

  closeModalButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".team-modal").style.display = "none";
      document.body.style.overflow = "auto";
    });
  });

  // Contact modal
  const contactButtons = document.querySelectorAll(".contact-btn");

  contactButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      contactModal.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  });

  closeContactModal.addEventListener("click", () => {
    contactModal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  // Theme toggle
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  let currentTheme = "light";

  themeToggle.addEventListener("click", () => {
    if (currentTheme === "light") {
      document.documentElement.setAttribute("data-theme", "dark");
      themeIcon.classList.remove("bi-sun-fill");
      themeIcon.classList.add("bi-moon-fill");
      currentTheme = "dark";
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      themeIcon.classList.remove("bi-moon-fill");
      themeIcon.classList.add("bi-sun-fill");
      currentTheme = "light";
    }
  });

  // Animation on scroll
  const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  };
  const fadeObserver = new IntersectionObserver(
    observerCallback,
    observerOptions
  );

  document
    .querySelectorAll(
      ".feature-card, .integration-card, .stats-card, .testimonial-card, .pricing-card, .blog-card"
    )
    .forEach((card) => {
      if (
        !card.classList.contains("fade-in") &&
        !card.classList.contains("slide-in-left") &&
        !card.classList.contains("slide-in-right")
      ) {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        fadeObserver.observe(card);
      }
    });

  const animateShapesCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "0.5";
        entry.target.style.animationDelay = Math.random() * 2 + "s";
      }
    });
  };
  const shapeObserver = new IntersectionObserver(animateShapesCallback, {
    threshold: 0.1,
  });

  document
    .querySelectorAll(".shape")
    .forEach((shape) => shapeObserver.observe(shape));
}

// Contact Form Submission Handler
document
  .getElementById("contactForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    // Get the submit button and show loading state
    const submitButton = this.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML = `
        <div class="flex items-center justify-center">
            <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Submitting...
        </div>
    `;
    submitButton.disabled = true;

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      companyName: document.getElementById("companyName").value,
      teamSize: document.getElementById("teamSize").value,
      message: document.getElementById("message").value,
    };

    try {
      const response = await fetch(
        "https://us-central1-taskmate-48642.cloudfunctions.net/submitContactForm",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Create success message container
        const successDiv = document.createElement("div");
        successDiv.id = "success-message";
        successDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0.8);
            background: #FFE974;
            padding: 2rem;
            border: 4px solid #000;
            box-shadow: 8px 8px 0 #000;
            z-index: 9999;
            min-width: 300px;
            text-align: center;
            opacity: 0;
            animation: popIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        `;

        // Add animation keyframes
        const style = document.createElement("style");
        style.textContent = `
            @keyframes popIn {
                0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
                100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            }
            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
            .checkmark-icon {
                animation: bounce 1s infinite;
            }
        `;
        document.head.appendChild(style);

        successDiv.innerHTML = `
            <div class="checkmark-icon" style="width: 80px; height: 80px; background: #FF4F4F; border: 4px solid #000; border-radius: 50%; margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center;">
                <i class="bi bi-check-lg text-4xl text-white"></i>
            </div>
            <h3 style="font-family: 'Space Grotesk', sans-serif; font-weight: bold; font-size: 1.5rem; margin-bottom: 1rem;">Request Submitted! 🎉</h3>
            <p style="font-family: 'Poppins', sans-serif; margin-bottom: 1.5rem;">We'll get back to you soon!</p>
            <button onclick="document.getElementById('success-message').remove();" 
                    style="background: #4ECDC4; border: 3px solid #000; padding: 0.75rem 2rem; font-weight: bold; cursor: pointer; width: 100%; transition: transform 0.2s, box-shadow 0.2s;"
                    onmouseover="this.style.transform='translate(-4px, -4px)'; this.style.boxShadow='4px 4px 0 #000';"
                    onmouseout="this.style.transform='translate(0, 0)'; this.style.boxShadow='none';">
                Awesome!
            </button>
        `;

        // Append the success dialog to the document body
        document.body.appendChild(successDiv);

        document.getElementById("contactForm").reset();
        document.getElementById("contact-modal").style.display = "none";
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      // Show error in a neubrutalism style
      const errorDiv = document.createElement("div");
      errorDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #FF4F4F;
            padding: 2rem;
            border: 4px solid #000;
            box-shadow: 8px 8px 0 #000;
            z-index: 9999;
            min-width: 300px;
            text-align: center;
            color: white;
        `;
      errorDiv.innerHTML = `
            <h3 style="font-family: 'Space Grotesk', sans-serif; font-weight: bold; font-size: 1.5rem; margin-bottom: 1rem;">Oops! Something went wrong</h3>
            <p style="font-family: 'Poppins', sans-serif; margin-bottom: 1.5rem;">Error: ${error.message}</p>
            <button onclick="this.parentElement.remove();" 
                    style="background: white; border: 3px solid #000; padding: 0.75rem 2rem; font-weight: bold; cursor: pointer; width: 100%; color: #FF4F4F;">
                Try Again
            </button>
        `;
      
      // Append the error dialog to the document body
      document.body.appendChild(errorDiv);
      
      console.error("Error:", error);
    } finally {
      // Reset the submit button state
      submitButton.innerHTML = originalButtonText;
      submitButton.disabled = false;
    }
  });
