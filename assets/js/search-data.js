// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "dropdown-cv",
              title: "cv",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/assets/pdf/cv_maki.pdf";
              },
            },{id: "dropdown-life",
              title: "life",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/life";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog";
              },
            },{id: "post-psychology-features-of-the-safe-attachment",
        
          title: "Psychology, features of the Safe Attachment",
        
        description: "translation from a video on Blibli",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/psychology-1/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-resigned-from-airwallex-where-i-really-learned-a-lot-and-had-a-great-time-i-felt-grateful-moved-to-the-us-for-my-master-s-degree-of-computer-science-in-the-ohio-state-university-sparkles-seedling",
          title: 'Resigned from Airwallex where I really learned a lot, and had a great...',
          description: "",
          section: "News",},{id: "news-currently-working-actively-on-implementing-the-raft-protocal-and-a-database-from-scratch-as-my-first-attempt-for-system-engineering",
          title: 'Currently working actively on implementing the Raft protocal and a database from scratch...',
          description: "",
          section: "News",},{id: "news-maki-passed-the-road-testing-today-ready-to-receive-my-us-driving-license-got-a-lot-of-help-from-friends-in-the-urgent-3-days-practice-in-renting-a-car-practicing-maneuverability-and-road-driving-really-appreciate-these-nice-people-s-help-oh-s-new-state-law-will-stop-foreigners-having-the-test-which-will-be-effective-the-day-after-tomorrow-the-examiner-was-a-very-very-nice-girl-and-i-felt-relaxed-and-supported-instead-of-being-judged-and-checked-out-sitting-by-her-side-and-i-got-full-score-for-maneuverability-thanks-to-heng-s-guidance-and-help",
          title: 'Maki passed the road testing today! Ready to receive my US driving license!...',
          description: "",
          section: "News",},{id: "news-maki-got-her-first-car-a-white-subaru-forrester",
          title: 'Maki got her first car - a white Subaru Forrester !',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
