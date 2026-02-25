const SCHOOL_DATA = {
    timings: [
        { day: "Monday", open: 8, close: 16 },
        { day: "Tuesday", open: 8, close: 16 },
        { day: "Wednesday", open: 8, close: 16 },
        { day: "Thursday", open: 8, close: 16 },
        { day: "Friday", open: 8, close: 16 },
        { day: "Saturday", open: 8, close: 14 },
        { day: "Sunday", open: null, close: null }
    ],
    galleryImages: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg"],
    galleryVideos: [
        "https://youtu.be/CBU4HfYsT1o?si=NGH26H_8vNph6kkV",
        "https://youtu.be/si1MOlBPox4?si=CObkoDV9u-IkeVM7",
        "https://youtu.be/XOvtZP4wXaI?si=7i2eN5C10RlgXpoD",
        "https://youtu.be/pWzgrnYlbGg?si=EN-2ODcekoQXyFrA"
    ],
    heroSlides: [
        {
            eyebrow: "Join Now | Learn From Today",
            title: "Education Creates A Better Future",
            subtitle: "A nurturing campus where academics, values, discipline and activities shape confident learners."
        },
        {
            eyebrow: "Admissions Open | Session 2026-27",
            title: "Learning Today, Leading Tomorrow",
            subtitle: "Experienced faculty, modern facilities, and practical guidance for long-term student success."
        },
        {
            eyebrow: "Growth With Discipline",
            title: "Strong Values. Strong Foundation.",
            subtitle: "We guide every child toward excellence in academics, personality and responsible citizenship."
        }
    ]
};

const formatHour = (hour) => {
    const h = hour % 12 || 12;
    const period = hour >= 12 ? "PM" : "AM";
    return `${h}:00 ${period}`;
};

const renderTimings = () => {
    const container = document.getElementById("hoursRows");
    if (!container) return;

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const todayName = dayNames[new Date().getDay()];

    container.innerHTML = SCHOOL_DATA.timings
        .map((entry) => {
            const hoursText = entry.open == null ? "Holiday" : `${formatHour(entry.open)} - ${formatHour(entry.close)}`;
            const activeClass = entry.day === todayName ? "active-day" : "";
            return `
                <div class="day-row ${activeClass}">
                    <span>${entry.day}</span>
                    <span>${hoursText}</span>
                </div>
            `;
        })
        .join("");
};

const updateLiveStatus = () => {
    const now = new Date();
    const timeElement = document.getElementById("liveTime");
    const badge = document.getElementById("openStatus");
    if (!timeElement || !badge) return;

    timeElement.textContent = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    const jsDay = now.getDay();
    const dayIndex = jsDay === 0 ? 6 : jsDay - 1;
    const dayData = SCHOOL_DATA.timings[dayIndex];
    const currentHour = now.getHours();
    const isOpen = dayData.open != null && currentHour >= dayData.open && currentHour < dayData.close;

    badge.textContent = isOpen ? "Campus Open" : "Campus Closed";
    badge.style.color = isOpen ? "#198754" : "#d7383e";
};

const getYouTubeEmbed = (url) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([A-Za-z0-9_-]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
};

const renderGallery = () => {
    const grid = document.getElementById("galleryGrid");
    if (!grid) return;

    const imageElems = SCHOOL_DATA.galleryImages
        .map((file, idx) => `<img src="${file}" alt="Campus photo ${idx + 1}" loading="lazy">`)
        .join("");

    const videoElems = SCHOOL_DATA.galleryVideos
        .map((url) => `<iframe src="${getYouTubeEmbed(url)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
        .join("");

    grid.innerHTML = imageElems + videoElems;
};

const setupHeroSlider = () => {
    const eyebrow = document.getElementById("heroEyebrow");
    const title = document.getElementById("heroTitle");
    const subtitle = document.getElementById("heroSubtitle");
    if (!eyebrow || !title || !subtitle) return;

    let index = 0;
    setInterval(() => {
        index = (index + 1) % SCHOOL_DATA.heroSlides.length;
        const slide = SCHOOL_DATA.heroSlides[index];
        eyebrow.textContent = slide.eyebrow;
        title.textContent = slide.title;
        subtitle.textContent = slide.subtitle;
    }, 4500);
};

const setupNavbar = () => {
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");
    if (!toggle || !links) return;

    toggle.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => links.classList.remove("open"));
    });
};

const setupModal = () => {
    const fab = document.getElementById("fab");
    const modal = document.getElementById("contactModal");
    const form = document.getElementById("enrolForm");
    if (!fab || !modal) return;

    fab.addEventListener("click", () => {
        modal.classList.add("show");
        modal.setAttribute("aria-hidden", "false");
    });

    document.querySelectorAll("[data-close]").forEach((btn) => {
        btn.addEventListener("click", () => {
            modal.classList.remove("show");
            modal.setAttribute("aria-hidden", "true");
        });
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("show");
            modal.setAttribute("aria-hidden", "true");
        }
    });

    if (form) {
        form.addEventListener("submit", () => {
            const submitBtn = form.querySelector("button[type='submit']");
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = "Sending...";
            }
        });
    }
};

const setupYear = () => {
    const year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
};

const init = () => {
    renderTimings();
    updateLiveStatus();
    setInterval(updateLiveStatus, 1000);
    renderGallery();
    setupHeroSlider();
    setupNavbar();
    setupModal();
    setupYear();
};

window.addEventListener("DOMContentLoaded", init);
