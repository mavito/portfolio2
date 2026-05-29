const skills = [
    "Python",
    "SQL",
    "PyTorch",
    "TensorFlow",
    "XGBoost",
    "CatBoost",
    "LightGBM",
    "RAG",
    "Agent Evals",
    "Fine-Tuning",
    "LangGraph",
    "Google ADK",
    "DuckDB",
    "ChromaDB",
    "OpenCV",
    "Docker",
    "AWS",
    "Tableau",
];

const experiences = [
    {
        period: "Oct 2024 - Present",
        role: "Data Science Researcher",
        company: "University of Illinois Urbana-Champaign",
        summary:
            "10x faster review; 30% shorter timelines; 40% lower cost.",
        stack: ["Python", "LLMs", "Google ADK", "Workflow Automation", "Analytics"],
    },
    {
        period: "Sep 2024 - May 2025",
        role: "Data Scientist",
        company: "CNeutral",
        summary:
            "$3T ESG workflow; 90% cleaner data; 40% faster analysis.",
        stack: ["Python", "RAG", "PyMuPDF", "ChromaDB", "FAISS"],
    },
    {
        period: "Jun 2020 - Jul 2023",
        role: "Machine Learning Engineer",
        company: "Technokart Consultancy Services",
        summary:
            "92% recall; 40% lower latency; 60% less audit work.",
        stack: ["YOLO", "OCR", "Whisper", "DistilBERT", "CI/CD", "AWS"],
    },
];

const education = [
    {
        period: "August 2024 - May 2025",
        school: "University of Illinois Urbana-Champaign",
        degree: "Master of Science in Business Analytics",
        detail: "Data Science, ML, and analytics.",
        tags: ["Business Analytics", "Data Science", "UIUC"],
    },
    {
        period: "July 2017 - August 2021",
        school: "NMIMS University",
        degree: "Bachelor of Technology in Data Science",
        detail: "",
        tags: ["Data Science", "Engineering"],
    },
];

const projects = [
    {
        title: "Lineage",
        category: "Applied AI",
        domain: "Media AI",
        status: "Flagship",
        subtitle: "Narrative AI workspace for grounded character reasoning",
        about:
            "Screenplay-aware RAG with temporal memory.",
        impact:
            "Grounded answers by character and timeline.",
        tags: ["RAG", "FastAPI", "ChromaDB", "Retrieval"],
        thumb: "forum",
        links: [{ label: "Live Demo", url: "https://lineage-sooty.vercel.app" }],
    },
    {
        title: "ToolGen",
        category: "Applied AI",
        domain: "Agent Evaluation",
        status: "SAP OA",
        subtitle: "Synthetic multi-tool conversations for evaluating agentic LLMs",
        about:
            "ToolBench-style schemas to auditable agent traces.",
        impact:
            "8 tools, 21 endpoints, 90 graph edges, 100-sample offline validation.",
        tags: ["Agent Evals", "Gemini", "ToolBench", "React"],
        thumb: "memory",
        links: [{ label: "GitHub", url: "https://github.com/manastokale/sap_multiagent_tool" }],
    },
    {
        title: "LocalPsych",
        category: "Applied AI",
        domain: "Mental Health",
        status: "Research",
        subtitle: "Privacy-first local mental health assistant",
        about:
            "On-device Gemma assistant for private support.",
        impact:
            "Private by default; no cloud dependency.",
        tags: ["QLoRA", "Gemma 4", "PEFT", "Privacy"],
        thumb: "psychology",
        links: [{ label: "GitHub", url: "https://github.com/manastokale/LocalPsych" }],
    },
    {
        title: "MedPrompt",
        category: "Applied AI",
        domain: "Healthcare",
        status: "Shipped POC",
        subtitle: "Zero-shot pathology segmentation POC",
        about:
            "VLM-guided pathology segmentation POC.",
        impact:
            "Zero-shot regions for faster review.",
        tags: ["Medical Imaging", "Segmentation", "VLM", "PyTorch"],
        thumb: "health_and_safety",
        links: [],
    },
    {
        title: "Trash Lyrics",
        category: "Applied AI",
        domain: "Creative AI",
        status: "NLP",
        subtitle: "Artist-style lyric generation with LSTMs",
        about:
            "LSTM lyric generation by artist style.",
        impact:
            "Early proof of model behavior as UX.",
        tags: ["LSTM", "NLP", "Text Generation"],
        thumb: "music_note",
        links: [{ label: "GitHub", url: "https://github.com/manastokale/Trash_Lyrics" }],
    },
    {
        title: "Synchrony Credit Intelligence",
        category: "Forecasting & Risk",
        domain: "FinTech",
        status: "Datathon",
        subtitle: "Forecasting, segmentation, fraud scoring, and credit recommendations",
        about:
            "Credit engine for spend, fraud, segments, limits.",
        impact:
            "R2 0.9906 forecast; +$7.03M upside.",
        tags: ["XGBoost", "DuckDB", "SHAP", "Risk"],
        thumb: "account_balance",
        links: [{ label: "GitHub", url: "https://github.com/manastokale/CreditRiskManagement" }],
    },
    {
        title: "Contact Center Forecasting",
        category: "Forecasting & Risk",
        domain: "Workforce Ops",
        status: "Top-7",
        subtitle: "Hybrid interval-level staffing forecast system",
        about:
            "XGBoost daily totals plus intraday shape.",
        impact:
            "Top-7 finish from cleaner operations data.",
        tags: ["XGBoost", "Forecasting", "Operations"],
        thumb: "trending_up",
        links: [{ label: "GitHub", url: "https://github.com/manastokale/WorkforcePlanning" }],
    },
    {
        title: "Railway Wheel Failure Prediction",
        category: "Forecasting & Risk",
        domain: "Rail",
        status: "Competition",
        subtitle: "30-day-ahead predictive maintenance for rail wheels",
        about:
            "30-day rail-wheel failure prediction.",
        impact:
            "Log-loss improved 0.037 to 0.0299.",
        tags: ["CatBoost", "LightGBM", "XGBoost", "Sensors"],
        thumb: "train",
        links: [{ label: "GitHub", url: "https://github.com/manastokale/RailwayWheelFailurePrediction" }],
    },
    {
        title: "UpNext for Zerve",
        category: "Analytics & Product",
        domain: "SaaS Growth",
        status: "2nd Place",
        subtitle: "Upgrade-readiness scoring and monetization funnel",
        about:
            "3.5M+ events to upgrade scores and funnels.",
        impact:
            "2nd place; 505 high-probability users; 3.43x lift.",
        tags: ["Random Forest", "Leakage Control", "Funnel Analytics", "Growth"],
        thumb: "trending_up",
        links: [{ label: "Live App", url: "https://upnext.hub.zerve.cloud" }],
    },
    {
        title: "Chicago Crime Analytics",
        category: "Analytics & Product",
        domain: "Public Safety",
        status: "Dashboard",
        subtitle: "Serverless crime analytics at city scale",
        about:
            "City-scale crime analytics without a heavy backend.",
        impact:
            "8M+ records under 10 MB.",
        tags: ["Dash", "Plotly", "SoQL", "Visualization"],
        thumb: "location_city",
        links: [{ label: "GitHub", url: "https://github.com/manastokale/Chicago-Crime-Analysis" }],
    },
    {
        title: "CUMTD Live Dashboard",
        category: "Analytics & Product",
        domain: "Transit",
        status: "Transit UX",
        subtitle: "Mini Metro-inspired real-time transit map for Champaign-Urbana MTD",
        about:
            "Live GTFS-Realtime map for CUMTD riders.",
        impact:
            "Clearer boarding, crowding, and route context.",
        tags: ["JavaScript", "MapLibre", "GTFS-Realtime", "Transit"],
        thumb: "directions_bus",
        links: [{ label: "GitHub", url: "https://github.com/manastokale/cumtd_dash" }],
    },
    {
        title: "MCU Actor Causal Impact Analysis",
        category: "Analytics & Product",
        domain: "Media Analytics",
        status: "Causal",
        subtitle: "Difference-in-differences study on MCU career impact",
        about:
            "Difference-in-differences career impact study.",
        impact:
            "+1.91 log-point treatment effect.",
        tags: ["Causal Inference", "DiD", "Panel Data"],
        thumb: "movie",
        links: [{ label: "GitHub", url: "https://github.com/manastokale/Causal-Analysis-Marvel" }],
    },
    {
        title: "State Farm Fellowship Microsites",
        category: "Analytics & Product",
        domain: "Enterprise Comms",
        status: "Product Storytelling",
        subtitle: "Branded speaker pages for UIUC and State Farm collaboration",
        about:
            "Speaker microsites for technical talks.",
        impact:
            "Sharper stories for GenAI and data science.",
        tags: ["HTML", "CSS", "Content Design"],
        thumb: "language",
        links: [{ label: "GitHub", url: "https://github.com/manastokale/StateFarm_Fellowship_2025" }],
    },
    {
        title: "Reddit Redesign",
        category: "Analytics & Product",
        domain: "Consumer UX",
        status: "UX Strategy",
        subtitle: "Course project centered on platform and interface redesign",
        about:
            "Platform redesign from product strategy up.",
        impact:
            "UX judgment alongside ML depth.",
        tags: ["Product Design", "UX", "Strategy"],
        thumb: "palette",
        links: [{ label: "GitHub", url: "https://github.com/manastokale/Reddit_Redesign_BADM390" }],
    },
    {
        title: "OCR Automation for Logistics Invoices",
        category: "Vision & Automation",
        domain: "Logistics",
        status: "Freelance",
        subtitle: "Document AI pipeline for invoice and customs paperwork",
        about:
            "Document AI for invoices and customs forms.",
        impact:
            "Built for messy PDFs, not clean demos.",
        tags: ["Flask", "PyMuPDF", "OCR", "Automation"],
        thumb: "receipt_long",
        links: [{ label: "GitHub", url: "https://github.com/manastokale/ocr_automation_siddhartha" }],
    },
    {
        title: "Finger Anti-Spoof",
        category: "Vision & Automation",
        domain: "Biometrics",
        status: "Capstone",
        subtitle: "Challenge-response liveness verification with gesture recognition",
        about:
            "Gesture-based liveness verification.",
        impact:
            "Challenge-response over static classification.",
        tags: ["Computer Vision", "CNN", "OpenCV", "Biometrics"],
        thumb: "fingerprint",
        links: [{ label: "GitHub", url: "https://github.com/manastokale/finger-anti-spoof" }],
    },
    {
        title: "Transformer-Core",
        category: "Foundations",
        domain: "ML Systems",
        status: "Engineering",
        subtitle: "Attention implementations from pedagogy to production",
        about:
            "Attention rebuilt from first principles.",
        impact:
            "Parity-tested against PyTorch.",
        tags: ["PyTorch", "Transformers", "Attention", "Testing"],
        thumb: "memory",
        links: [{ label: "GitHub", url: "https://github.com/manastokale/transformers" }],
    },
    {
        title: "GitHub Organization Scraper",
        category: "Foundations",
        domain: "Developer Tools",
        status: "Automation",
        subtitle: "Open-source org intelligence via the GitHub API",
        about:
            "Org discovery and repo intelligence.",
        impact:
            "Rejects fake orgs before collection.",
        tags: ["GitHub API", "Python", "Data Collection"],
        thumb: "code",
        links: [{ label: "GitHub", url: "https://github.com/manastokale/GitHub_Innovation" }],
    },
    {
        title: "ML Concepts",
        category: "Foundations",
        domain: "Education",
        status: "Teaching",
        subtitle: "Notebook series on machine learning foundations",
        about:
            "Notebook series for ML foundations.",
        impact:
            "Shows explanation, not just implementation.",
        tags: ["Machine Learning", "Education", "Notebooks"],
        thumb: "school",
        links: [{ label: "GitHub", url: "https://github.com/manastokale/ML_Concepts" }],
    },
];

const categoryOrder = [
    "Applied AI",
    "Forecasting & Risk",
    "Analytics & Product",
    "Vision & Automation",
    "Foundations",
];

function renderPoint(text, className = "") {
    return `<p class="card-point${className ? ` ${className}` : ""}">${text}</p>`;
}

let carouselResizeObserver;
let cinematicScrollFrame;

function updateCarouselAffordance(carousel) {
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    const isScrollable = maxScrollLeft > 4;

    carousel.classList.toggle("is-scrollable", isScrollable);

    if (!isScrollable) {
        carousel.classList.remove("show-left-fade", "show-right-fade");
        return;
    }

    carousel.classList.toggle("show-left-fade", carousel.scrollLeft > 4);
    carousel.classList.toggle("show-right-fade", carousel.scrollLeft < maxScrollLeft - 4);
}

function setupCarouselAffordances() {
    const carousels = document.querySelectorAll(".carousel");

    if (carouselResizeObserver) {
        carouselResizeObserver.disconnect();
    }

    carouselResizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => updateCarouselAffordance(entry.target));
    });

    carousels.forEach((carousel) => {
        updateCarouselAffordance(carousel);
        carousel.addEventListener("scroll", () => updateCarouselAffordance(carousel), { passive: true });
        carouselResizeObserver.observe(carousel);
    });
}

function setupCinematicScroll() {
    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sections = Array.from(document.querySelectorAll(".hero-panel, .rail-section, .contact-section"));

    if (!sections.length) {
        return;
    }

    sections.forEach((section) => section.classList.add("cinematic-section"));

    function clearCinematicStyles() {
        sections.forEach((section) => {
            section.style.removeProperty("--cinematic-opacity");
            section.style.removeProperty("--cinematic-scale");
            section.style.removeProperty("--cinematic-translate");
            section.style.removeProperty("--cinematic-blur");
        });
    }

    function updateCinematicScroll() {
        cinematicScrollFrame = 0;

        if (reduceMotionQuery.matches) {
            clearCinematicStyles();
            return;
        }

        const viewportHeight = Math.max(window.innerHeight, 1);
        const viewportCenter = viewportHeight * 0.52;

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const sectionCenter = rect.top + rect.height / 2;
            const distance = Math.abs(sectionCenter - viewportCenter);
            const range = Math.max(viewportHeight * 0.58, rect.height * 0.72);
            const rawProgress = Math.max(0, 1 - distance / range);
            const progress = rawProgress * rawProgress * (3 - 2 * rawProgress);
            const direction = sectionCenter < viewportCenter ? -1 : 1;

            section.style.setProperty("--cinematic-opacity", (0.92 + progress * 0.08).toFixed(3));
            section.style.setProperty("--cinematic-scale", (0.988 + progress * 0.012).toFixed(4));
            section.style.setProperty("--cinematic-translate", `${((1 - progress) * 12 * direction).toFixed(2)}px`);
            section.style.setProperty("--cinematic-blur", `${((1 - progress) * 0.25).toFixed(2)}px`);
        });
    }

    function requestCinematicUpdate() {
        if (!cinematicScrollFrame) {
            cinematicScrollFrame = window.requestAnimationFrame(updateCinematicScroll);
        }
    }

    requestCinematicUpdate();
    window.addEventListener("scroll", requestCinematicUpdate, { passive: true });
    window.addEventListener("resize", requestCinematicUpdate);

    if (reduceMotionQuery.addEventListener) {
        reduceMotionQuery.addEventListener("change", requestCinematicUpdate);
    }
}

function renderSkills() {
    const primary = document.getElementById("skills-rail-primary");
    const secondary = document.getElementById("skills-rail-secondary");

    if (!primary || !secondary) {
        return;
    }

    const markup = skills.map((skill) => `<span class="pill">${skill}</span>`).join("");

    primary.innerHTML = markup;
    secondary.innerHTML = markup;
}

function renderExperiences() {
    const container = document.getElementById("experience-list");

    if (!container) {
        return;
    }

    container.innerHTML = experiences
        .map(
            (experience) => `
                <article class="experience-card reveal">
                    <div class="experience-top">
                        <div class="experience-meta">
                            <div class="experience-role">${experience.role}</div>
                            <div class="experience-company">${experience.company}</div>
                        </div>
                        <div class="experience-period">${experience.period}</div>
                    </div>
                    ${renderPoint(experience.summary)}
                    <div class="tag-row">
                        ${experience.stack.map((item) => `<span class="tag">${item}</span>`).join("")}
                    </div>
                </article>
            `,
        )
        .join("");
}

function renderEducation() {
    const container = document.getElementById("education-list");

    if (!container) {
        return;
    }

    container.innerHTML = education
        .map(
            (item) => `
                <article class="education-card reveal">
                    <div class="education-top">
                        <div class="education-meta">
                            <div class="education-degree">${item.degree}</div>
                            <div class="education-school">${item.school}</div>
                        </div>
                        <div class="education-period">${item.period}</div>
                    </div>
                    ${item.detail ? renderPoint(item.detail) : '<p class="card-point card-point-empty" aria-hidden="true"></p>'}
                    <div class="tag-row">
                        ${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
                    </div>
                </article>
            `,
        )
        .join("");
}

function getProjectGithubLink(project) {
    return project.links.find(
        (link) => link.label.toLowerCase() === "github" || link.url.includes("github.com"),
    );
}

function renderProjectThumb(project) {
    const githubLink = getProjectGithubLink(project);
    const content = `<span class="material-symbols-outlined project-thumb-icon">${project.thumb}</span>`;

    if (githubLink) {
        return `
            <a class="project-thumb-frame" href="${githubLink.url}" target="_blank" rel="noreferrer"
                aria-label="Open ${project.title} GitHub repository">
                ${content}
            </a>
        `;
    }

    return `
        <div class="project-thumb-frame" aria-hidden="true">
            ${content}
        </div>
    `;
}

function renderProjectSections() {
    const container = document.getElementById("project-sections");

    if (!container) {
        return;
    }

    container.innerHTML = categoryOrder
        .map((category) => {
            const group = projects.filter((project) => project.category === category);
            if (!group.length) {
                return "";
            }

            return `
                <section class="project-group reveal">
                    <div class="project-group-head">
                        <h3>${category}</h3>
                        <span>${group.length} project${group.length > 1 ? "s" : ""}</span>
                    </div>
                    <div class="carousel">
                        ${group
                    .map(
                        (project) => `
                                    <article class="project-card">
                                        <div class="project-top">
                                            <div class="project-title-block">
                                                <h3>${project.title}</h3>
                                                <div class="project-subtitle">${project.subtitle}</div>
                                            </div>
                                            <span class="project-status">${project.status}</span>
                                        </div>
                                        ${renderPoint(project.about)}
                                        ${renderPoint(project.impact, "project-impact")}
                                        <div class="tag-row">
                                            ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
                                        </div>
                                        ${renderProjectThumb(project)}
                                        <div class="project-card-footer">
                                            <div class="project-links${project.links.length ? "" : " project-links-empty"}">
                                                ${project.links
                                .map(
                                    (link) => {
                                        const externalAttrs = link.url.startsWith("http")
                                            ? ' target="_blank" rel="noreferrer"'
                                            : "";
                                        return `<a href="${link.url}"${externalAttrs}>${link.label}</a>`;
                                    },
                                )
                                .join("")}
                                            </div>
                                            <span class="project-domain">${project.domain}</span>
                                        </div>
                                    </article>
                                `,
                    )
                    .join("")}
                    </div>
                </section>
            `;
        })
        .join("");
}

let revealObserver;

function activateRevealObserver() {
    const nodes = document.querySelectorAll(".reveal");

    if (revealObserver) {
        revealObserver.disconnect();
    }

    revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                }
            });
        },
        { threshold: 0.12 },
    );

    nodes.forEach((node) => revealObserver.observe(node));
}

renderSkills();
renderExperiences();
renderEducation();
renderProjectSections();
activateRevealObserver();
setupCarouselAffordances();
setupCinematicScroll();
