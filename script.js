document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle the mobile menu on button click
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        // Add a class for styling if needed
        navMenu.classList.toggle('active');
    });

    // Hide the menu when a link is clicked (for a smooth single-page experience)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.style.display = 'none';
                navMenu.classList.remove('active');
            }
        });
    });

    // Optional: Close menu if the user resizes the window back to desktop view
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navMenu.style.display = 'flex';
        } else {
            navMenu.style.display = 'none';
        }
    });
});

<<<<<<< HEAD

=======
>>>>>>> a3bfc9db4f5be18deb7926874fc1955bf9d74e96
const city = "Cupertino";
const country = "US";
const method = 2; // ISNA

fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=${method}`)
    .then(res => res.json())
    .then(data => {
        const timings = data.data.timings;

        // Hijri date
        const hijri = data.data.date.hijri;
        document.getElementById('hijri-date').innerText = `${hijri.day} ${hijri.month.en} ${hijri.year} H`;

<<<<<<< HEAD
        // i like to keep the timings the same as MCA's (mcabayarea.org)
        // adhan times (you can also add or remove the amount of minutes)

        document.getElementById('fajr-adhan').innerText = addMinutes(timings.Fajr, 0);
        document.getElementById('dhuhr-adhan').innerText = addMinutes(timings.Dhuhr, 3);
        document.getElementById('asr-adhan').innerText = addMinutes(timings.Asr, 0);
        document.getElementById('maghrib-adhan').innerText = addMinutes(timings.Maghrib, 3);
        document.getElementById('isha-adhan').innerText = addMinutes(timings.Isha, 1);

        // Iqama times (you can also add or remove the amount of minutes)
        document.getElementById('fajr-iqama').innerText = addMinutes(timings.Fajr, 24);
        document.getElementById('dhuhr-iqama').innerText = addMinutes(timings.Dhuhr, 36);
        document.getElementById('asr-iqama').innerText = addMinutes(timings.Asr, 27);
        document.getElementById('maghrib-iqama').innerText = addMinutes(timings.Maghrib, 8);
        document.getElementById('isha-iqama').innerText = addMinutes(timings.Isha, 29);

        // Sunrise time (you can add or remove the amount of minutes)
        document.getElementById('sunrise-time').innerText = addMinutes(timings.Sunrise, 0);
=======
        // Adhan times
        document.getElementById('fajr-adhan').innerText = formatTime(timings.Fajr);
        document.getElementById('dhuhr-adhan').innerText = formatTime(timings.Dhuhr);
        document.getElementById('asr-adhan').innerText = formatTime(timings.Asr);
        document.getElementById('maghrib-adhan').innerText = formatTime(timings.Maghrib);
        document.getElementById('isha-adhan').innerText = formatTime(timings.Isha);

        // Iqama times (example: Adhan + 15 min)
        document.getElementById('fajr-iqama').innerText = addMinutes(timings.Fajr, 24);
        document.getElementById('dhuhr-iqama').innerText = addMinutes(timings.Dhuhr, 26);
        document.getElementById('asr-iqama').innerText = addMinutes(timings.Asr, 8);
        document.getElementById('maghrib-iqama').innerText = addMinutes(timings.Maghrib, 8);
        document.getElementById('isha-iqama').innerText = addMinutes(timings.Isha, 19);

        // Sunrise
        document.getElementById('sunrise-time').innerText = formatTime(timings.Sunrise);
>>>>>>> a3bfc9db4f5be18deb7926874fc1955bf9d74e96
    });

function formatTime(time24) {
    let [h, m] = time24.split(":");
    h = parseInt(h);
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    return `${h}:${m} ${ampm}`;
}

function addMinutes(time24, minsToAdd) {
    let [h, m] = time24.split(":").map(Number);
    m += minsToAdd;
    h += Math.floor(m / 60);
    m = m % 60;
    h = h % 24;
    return formatTime(`${h}:${m.toString().padStart(2,'0')}`);
}
