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
        "https://youtu.be/pWzgrnYlbGg?si=EN-2ODcekoQXyFrA",
        "https://youtu.be/VBSr-znNtCs?si=X6JfKwQAu4tr6dSw",
        "https://youtu.be/DNG-jwG3tDM?si=6kc_c7DOsW1IrLz_",
        "https://youtu.be/89dnJhfWKx8?si=5Lj7Jj67ACOS9jzT",
        "https://youtu.be/NRjQcklI_F8?si=7gTSn6jF3esAzwQ6",
        "https://youtu.be/hZRL5J2L9JQ?si=LnLM4zE2xnR6tGyf",
        "https://youtu.be/IrUWXqnkQo0?si=o1hl7vCGyGVypDG4",
        "https://youtu.be/ZLm2kJDWrwM?si=RGle-QRU58f92lX0",
        "https://youtu.be/3Qhc0_WyGBY?si=brHjkUyj1F7hU9Qt",
        "https://youtu.be/PJYFhBQh-MA?si=Urv2pPZRADlPIP7J",
        "https://youtu.be/yQGzpuGmthc?si=37h2ihzaPpQrBYXA",
        "https://youtu.be/2phNzJOZ8ME?si=_2smi8gbYX81vJcN",
        "https://youtu.be/MpLY82YCqto?si=CyMJNUSwYxds4UTC",
        "https://youtu.be/6uHlJ74J7nQ?si=0WjvAWkPVRFhVcSo",
        "https://youtu.be/2eq2HNPVcp8?si=yKly3GYeK3O5xAT-",
        "https://youtu.be/pj_of3Eq3h0?si=Lt4e3IoEine4D6Qz",
        "https://youtu.be/nqgZnK6Uoug?si=CE47TiH9Z3U-P5pz",
        "https://youtu.be/78QdOCHdSp4?si=MvKy71SQocbj1303"
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
    badge.style.color = isOpen ? "var(--success)" : "var(--danger)";
};

const getYouTubeEmbed = (url) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([A-Za-z0-9_-]+)/);
    if (match) return `https://www.youtube.com/embed/${match[1]}`;
    return url;
};

const renderGallery = () => {
    const grid = document.getElementById("galleryGrid");
    if (!grid) return;

    const imageElems = SCHOOL_DATA.galleryImages
        .map((file, index) => `<img src="${file}" alt="Campus photo ${index + 1}" loading="lazy">`)
        .join("");

    const videoElems = SCHOOL_DATA.galleryVideos
        .map((url) => `<iframe src="${getYouTubeEmbed(url)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
        .join("");

    const content = imageElems + videoElems;
    grid.innerHTML = content || "<p>No gallery items found.</p>";
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
