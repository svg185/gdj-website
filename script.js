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
    homework: {
        nursery: [
            { subject: "Hindi", task: "Recite basic rhymes; practice simple words." },
            { subject: "English", task: "Practice letters A to D and read the story 'My Family'." },
            { subject: "Math", task: "Count objects in your room and write numbers 1 to 10." }
        ],
        lkg: [
            { subject: "Hindi", task: "Practice simple letters and words." },
            { subject: "English", task: "Trace and color the letters A to E." },
            { subject: "Math", task: "Count objects up to 20." }
        ],
        ukg: [
            { subject: "Hindi", task: "Write the first 10 हिंदी letters and practice pronunciation." },
            { subject: "English", task: "Read 3 simple words and speak them aloud." },
            { subject: "Math", task: "Count and write numbers 1 to 20." }
        ],
        class1: [
            { subject: "Drawing", task: "Draw a tree and color it." },
            { subject: "Hindi", task: "Write five simple words." },
            { subject: "English", task: "Practice five simple words and make a sentence with each." },
            { subject: "Math", task: "Solve addition sums 1-10 from the worksheet." }
        ],
        class2: [
            { subject: "Hindi", task: "Write a short paragraph in Hindi about your family." },
            { subject: "English", task: "Write a short paragraph about your favourite animal." },
            { subject: "Math", task: "Complete the subtraction worksheet on page 12." }
        ],
        class3: [
            { subject: "Hindi", task: "Learn and write 10 new words with meanings." },
            { subject: "English", task: "Learn 8 new spelling words and use them in sentences." },
            { subject: "Math", task: "Solve multiplication questions from your book." },
            { subject: "EVS", task: "Draw local plants and label parts." },
            { subject: "Computer", task: "Practice basic computer parts." }
        ],
        class4: [
            { subject: "Hindi", task: "Read chapter 2 and write five new words with meanings." },
            { subject: "English", task: "Write a paragraph on 'My School'." },
            { subject: "Math", task: "Practice division sums from the workbook." },
            { subject: "Drawing", task: "Sketch a simple landscape." }
        ],
        class5: [
            { subject: "Hindi", task: "Prepare a short speech in Hindi about your hobby." },
            { subject: "English", task: "Write an essay on 'My Neighbourhood'." },
            { subject: "Math", task: "Solve the fraction problems given in the worksheet." },
            { subject: "Science", task: "Draw and label the parts of a plant." }
        ],
        class6: [
            { subject: "Hindi", task: "Write an essay on 'My School' in Hindi." },
            { subject: "English", task: "Read and summarise a short story." },
            { subject: "Math", task: "Solve the exercise from chapter 4: integers." },
            { subject: "Science", task: "Write one page about the food cycle in plants." }
        ],
        class7: [
            { subject: "Hindi", task: "Prepare project notes on a famous Indian personality." },
            { subject: "English", task: "Write a letter to your friend describing school life." },
            { subject: "Math", task: "Practice algebraic expressions from your textbook." },
            { subject: "Science", task: "Complete the worksheet on acids and bases." }
        ],
        class8: [
            { subject: "Hindi", task: "Write about traditional festivals and their importance." },
            { subject: "English", task: "Prepare a book review for a short novel." },
            { subject: "Math", task: "Solve problems on linear equations." },
            { subject: "Science", task: "Prepare a short project on natural resources." }
        ],
        class9: [
            { subject: "Hindi", task: "Write an essay on 'Environment Protection'." },
            { subject: "English", task: "Practice comprehension passages from the workbook." },
            { subject: "Maths", task: "Complete the geometry worksheet given in class." },
            { subject: "Science", task: "Answer the questions from chapter 5: Motion." }
        ],
        class10: [
            { subject: "Hindi", task: "Revise literature chapters and solve questions." },
            { subject: "English", task: "Write an analytical paragraph on a poem." },
            { subject: "Maths", task: "Solve quadratic equation problems from the board review." },
            { subject: "Science", task: "Revise chapter 1 and solve the sample exercise." }
        ],
        class11Science: [
            { subject: "Hindi", task: "Complete chapter notes and exercises." },
            { subject: "English", task: "Prepare answers for chapter comprehension." },
            { subject: "Maths", task: "Solve calculus problems from assigned set." },
            { subject: "Physics", task: "Solve numerical problems from chapter 2: laws of motion." },
            { subject: "Chemistry", task: "Write notes on the periodic table and group properties." },
            { subject: "Biology", task: "Prepare a diagram of the cell and label its parts." }
        ],
        class11Commerce: [
            { subject: "Hindi", task: "Prepare short answers for assigned chapters." },
            { subject: "English", task: "Write business letter practice." },
            { subject: "Accounts", task: "Practice journal entries for given transactions." },
            { subject: "Business Studies", task: "Read chapter 1 and write its key terms." },
            { subject: "Economics", task: "Explain demand and supply with examples." }
        ],
        class12Science: [
            { subject: "Hindi", task: "Revise selected chapters and summarise." },
            { subject: "English", task: "Write critical notes for given texts." },
            { subject: "Maths", task: "Solve advanced problems from calculus." },
            { subject: "Physics", task: "Solve selected problems from electricity chapter." },
            { subject: "Chemistry", task: "Complete the organic chemistry assignment." },
            { subject: "Biology", task: "Prepare notes on human physiology." }
        ],
        class12Commerce: [
            { subject: "Hindi", task: "Revise and write answers for important questions." },
            { subject: "English", task: "Prepare essay prompts and model answers." },
            { subject: "Accounts", task: "Complete the ledger and balance sheet practice." },
            { subject: "Business Studies", task: "Study the case study and answer the questions." },
            { subject: "Economics", task: "Write about consumer rights and duties." }
        ]
    },
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

const setupHomework = () => {
    const select = document.getElementById("classHomeworkSelect");
    const subjectSelect = document.getElementById("subjectHomeworkSelect");
    const list = document.getElementById("homeworkList");
    if (!select || !subjectSelect || !list) return;

    const populateSubjects = (classKey) => {
        subjectSelect.innerHTML = '<option value="">All Subjects</option>';
        if (!classKey) return;
        // collect subjects from homework data for the class
        const items = SCHOOL_DATA.homework[classKey] || [];
        const subjects = Array.from(new Set(items.map(i => i.subject)));
        subjects.forEach((s) => {
            const opt = document.createElement('option');
            opt.value = s;
            opt.textContent = s;
            subjectSelect.appendChild(opt);
        });
    };

    const renderHomework = (classKey, subjectKey) => {
        if (!classKey || !SCHOOL_DATA.homework[classKey]) {
            list.innerHTML = '<p class="homework-empty">Please select your class to view the latest homework.</p>';
            return;
        }

        let items = SCHOOL_DATA.homework[classKey] || [];
        if (subjectKey) {
            items = items.filter(i => String(i.subject).toLowerCase() === String(subjectKey).toLowerCase());
        }

        if (!items.length) {
            list.innerHTML = '<p class="homework-empty">No homework found for the selected subject.</p>';
            return;
        }

        list.innerHTML = items
            .map((item) => `
                <article class="homework-card">
                    <h4>${item.subject}</h4>
                    <p>${item.task}</p>
                </article>
            `)
            .join("");
    };

    select.addEventListener("change", () => {
        const cls = select.value;
        populateSubjects(cls);
        renderHomework(cls, subjectSelect.value);
    });

    subjectSelect.addEventListener('change', () => {
        renderHomework(select.value, subjectSelect.value);
    });

    // initial populate
    populateSubjects(select.value);
    renderHomework(select.value, subjectSelect.value);
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

function openContactModal() {
    const modal = document.getElementById("contactModal");
    if (!modal) return;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
}

function closeContactModal() {
    const modal = document.getElementById("contactModal");
    if (!modal) return;
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
}

const setupModal = () => {
    const fab = document.getElementById("fab");
    const modal = document.getElementById("contactModal");
    const form = document.getElementById("enrolForm");
    if (!modal) return;

    if (fab) {
        fab.addEventListener("click", openContactModal);
    }

    document.querySelectorAll("[data-close]").forEach((btn) => {
        btn.addEventListener("click", closeContactModal);
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeContactModal();
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
    setupHomework();
    setupNavbar();
    setupModal();
    setupYear();
};

window.addEventListener("DOMContentLoaded", init);
