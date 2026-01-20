// console.log("JS LOADED");
// // // Optional JS (smooth scroll)
// // document.querySelectorAll('a[href^="#"]').forEach(link => {
// //     link.addEventListener("click", function (e) {
// //         e.preventDefault();
// //         document.querySelector(this.getAttribute("href")).scrollIntoView({
// //             behavior: "smooth"
// //         });
// //     });
// // });

// // <script>
// //   const skillsSection = document.querySelector('.skills-section');
// //   const skillItems = document.querySelectorAll('.skills-section .animate');

// //   const observer = new IntersectionObserver(
// //     (entries) => {
// //       entries.forEach(entry => {
// //         if (entry.isIntersecting) {
// //           skillItems.forEach(item => {
// //             item.classList.add('animate-active');
// //           });
// //           observer.unobserve(skillsSection); // run once only
// //         }
// //       });
// //     },
// //     {
// //       threshold: 0.3
// //     }
// //   );

// //   observer.observe(skillsSection);
// // </script>
// // document.addEventListener("DOMContentLoaded", () => {

// //   const skillsSection = document.querySelector(".skills-section");
// //   const skillItems = document.querySelectorAll(".skills-section .animate");

// //   console.log("Skills section found:", skillsSection);
// //   console.log("Skill items found:", skillItems.length);

// //   if (!skillsSection || skillItems.length === 0) {
// //     console.error("❌ Skills animation setup failed");
// //     return;
// //   }

// //   const observer = new IntersectionObserver(
// //     (entries, obs) => {
// //       entries.forEach(entry => {
// //         if (entry.isIntersecting) {
// //           skillItems.forEach(item => {
// //             item.classList.add("animate-active");
// //           });
// //           obs.unobserve(entry.target);
// //         }
// //       });
// //     },
// //     { threshold: 0.3 }
// //   );

// //   observer.observe(skillsSection);

// // });
document.addEventListener("DOMContentLoaded", () => {

  const sections = document.querySelectorAll(
    ".hero, .about-section, .skills-section, .education-section, .project-section, .contact-section"
  );

  const observer = new IntersectionObserver(
    (entries, obs) => {

      entries.forEach(entry => {
        if (entry.isIntersecting) {

          const items = entry.target.querySelectorAll(".animate");

          items.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add("animate-active");
            }, index * 130); // 300ms gap between lines
          });

          obs.unobserve(entry.target);
        }
      });

    },
    { threshold: 0.3 }
  );

  sections.forEach(section => observer.observe(section));

});


// document.addEventListener("DOMContentLoaded", () => {

//   const sections = document.querySelectorAll(".about-section");

//   const observer = new IntersectionObserver(
//     (entries, obs) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           const animatedItems = entry.target.querySelectorAll(".animate");
//           animatedItems.forEach(el => el.classList.add("animate-active"));
//           obs.unobserve(entry.target); // run once
//         }
//       });
//     },
//     { threshold: 0.3 }
//   );

//   sections.forEach(section => observer.observe(section));

// });

