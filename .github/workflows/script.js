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
    galleryImages: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg"]
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
    badge.style.color = isOpen ? "var(--success)" : "var(--danger)";
};

const renderGallery = () => {
    const grid = document.getElementById("galleryGrid");
    if (!grid) return;

    const images = SCHOOL_DATA.galleryImages
        .map((file, index) => `<img src="${file}" alt="Campus photo ${index + 1}" loading="lazy">`)
        .join("");

    grid.innerHTML = images || "<p>No gallery images found.</p>";
};

const setupEventListeners = () => {
    const fab = document.getElementById("fab");
    const modal = document.getElementById("contactModal");
    const form = document.getElementById("enrolForm");

    if (fab && modal) {
        fab.addEventListener("click", () => {
            modal.classList.add("show");
            modal.setAttribute("aria-hidden", "false");
        });
    }

    document.querySelectorAll("[data-close]").forEach((btn) => {
        btn.addEventListener("click", () => {
            modal?.classList.remove("show");
            modal?.setAttribute("aria-hidden", "true");
        });
    });

    modal?.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("show");
            modal.setAttribute("aria-hidden", "true");
        }
    });

    form?.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank you! Our admission team will contact you shortly.");
        modal?.classList.remove("show");
        modal?.setAttribute("aria-hidden", "true");
        form.reset();
    });
};

const init = () => {
    renderTimings();
    renderGallery();
    updateLiveStatus();
    setInterval(updateLiveStatus, 1000);
    setupEventListeners();
};

window.addEventListener("DOMContentLoaded", init);