document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
  var eicebergTl = gsap.timeline({
    defaults: { duration: 0.25, ease: Back.easeOut.config(2), opacity: 0 },
  });

  var tcoPotentialData = gsap.timeline({
    defaults: { duration: 0.7, ease: "sine.out", opacity: 0 },
  });

  // var tcoRunningCosts = gsap.timeline({
  //   defaults: { duration: 0.5, ease: "sine.out", opacity: 0 },
  // });
  var tcoRunningCosts = new TimelineMax({defaults: { duration: 0.2, ease: "sine.out", opacity: 0 }});



  gsap.from(".tco-running-costs", {

    scrollTrigger: {
      trigger: "#tco-running-costs",
      start: "center 70%",
      end: "center 30%",
      // scrub: 2,
      toggleActions: 'play none none none',
      markers: true,
      onEnter: () => {
                
        // Step 1
        tcoRunningCosts
        .fromTo( ".tco__load-distribution-1 img", { opacity: 0.15 }, { opacity: 1, ease: "sine.out" } )
        .fromTo( ".tco__load-distribution-1 .tco__load-distribution-percentages", { opacity: 0, scale: 0 }, { opacity: 0.7, scale: 1, ease: "sine.out"}, "tco-lbl-1")
        .fromTo( ".riding-steps__list .riding-steps__list-1 img", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1, ease: "back.out"},  "tco-lbl-1")
        .fromTo( ".riding-steps__list .riding-steps__list-1 p", { opacity: 0, y:20 }, { y:0, opacity: 1, ease: "sine.out"} )
        

        .fromTo( ".riding-steps__list .riding-steps__list-2 .tco-arrow-container .arr-right", { opacity: 0, x:-20 }, { x:0, opacity: 1, ease: "sine.out"} )
          

        //  Step 2
        .fromTo( ".tco__load-distribution-2 img", { opacity: 0.15 }, { opacity: 1, ease: "sine.out" } )
        .fromTo( ".tco__load-distribution-2 .tco__load-distribution-percentages", { opacity: 0, scale: 0 }, { opacity: 0.7, scale: 1, ease: "sine.out"}, "tco-lbl-2")
        .fromTo( ".riding-steps__list .riding-steps__list-2 img", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1, ease: "back.out"},  "tco-lbl-2")
        .fromTo( ".riding-steps__list .riding-steps__list-2 p", { opacity: 0, y:20 }, { y:0, opacity: 1, ease: "sine.out"} )
          

        .fromTo( ".riding-steps__list .riding-steps__list-3 .tco-arrow-container .arr-right", { opacity: 0, x:-20 }, { x:0, opacity: 1, ease: "sine.out"} )


          //  Step 3
          .fromTo( ".tco__load-distribution-3 img", { opacity: 0.15 }, { opacity: 1, ease: "sine.out" } )
          .fromTo( ".tco__load-distribution-3 .tco__load-distribution-percentages", { opacity: 0, scale: 0 }, { opacity: 0.7, scale: 1, ease: "sine.out"}, "tco-lbl-3")
          .fromTo( ".riding-steps__list .riding-steps__list-3 img", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1, ease: "back.out"},  "tco-lbl-3")
          .fromTo( ".riding-steps__list .riding-steps__list-3 p", { opacity: 0, y:20 }, { y:0, opacity: 1, ease: "sine.out"} )
          

          .fromTo( ".riding-steps__list .riding-steps__list-4 .tco-arrow-container .arr-right", { opacity: 0, x:-20 }, { x:0, opacity: 1, ease: "sine.out"} )

        //  Step 4
          .fromTo( ".tco__load-distribution-4 img", { opacity: 0.15 }, { opacity: 1, ease: "sine.out" } )
          .fromTo( ".tco__load-distribution-4 .tco__load-distribution-percentages", { opacity: 0, scale: 0 }, { opacity: 0.7, scale: 1, ease: "sine.out"}, "tco-lbl-4")
          .fromTo( ".riding-steps__list .riding-steps__list-4 img", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1, ease: "back.out"},  "tco-lbl-4")
          .fromTo( ".riding-steps__list .riding-steps__list-4 p", { opacity: 0, y:20 }, { y:0, opacity: 1, ease: "sine.out"} )
          

          .fromTo( ".riding-steps__list .riding-steps__list-5 .tco-arrow-container .arr-right", { opacity: 0, x:-20 }, { x:0, opacity: 1, ease: "sine.out"} )

          //  Step 5
          .fromTo( ".tco__load-distribution-5 img", { opacity: 0.15 }, { opacity: 1, ease: "sine.out" } )
          .fromTo( ".tco__load-distribution-5 .tco__load-distribution-percentages", { opacity: 0, scale: 0 }, { opacity: 0.7, scale: 1, ease: "sine.out"}, "tco-lbl-5")
          .fromTo( ".riding-steps__list .riding-steps__list-5 img", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1, ease: "back.out"},  "tco-lbl-5")
          .fromTo( ".riding-steps__list .riding-steps__list-5 p", { opacity: 0, y:20 }, { y:0, opacity: 1, ease: "sine.out"} )
            

          .fromTo( ".riding-steps__list .riding-steps__list-6 .tco-arrow-container .arr-right", { opacity: 0, x:-20 }, { x:0, opacity: 1, ease: "sine.out"} )

          //  Step 6
          .fromTo( ".tco__load-distribution-6 img", { opacity: 0.15 }, { opacity: 1, ease: "sine.out" } )
          .fromTo( ".tco__load-distribution-6 .tco__load-distribution-percentages", { opacity: 0, scale: 0 }, { opacity: 0.7, scale: 1, ease: "sine.out"}, "tco-lbl-6")
          .fromTo( ".riding-steps__list .riding-steps__list-6 img", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1, ease: "back.out"},  "tco-lbl-6")
          .fromTo( ".riding-steps__list .riding-steps__list-6 p", { opacity: 0, y:20 }, { y:0, opacity: 1, ease: "sine.out"} )
            

          .fromTo( ".riding-steps__list .riding-steps__list-7 .tco-arrow-container.tco-arrow-container--1 .arr-right", { opacity: 0, x:-20 }, { x:0, opacity: 1, ease: "sine.out"} )

          //  Step 7
          .fromTo( ".tco__load-distribution-7 img", { opacity: 0.15 }, { opacity: 1, ease: "sine.out" } )
          .fromTo( ".tco__load-distribution-7 .tco__load-distribution-percentages", { opacity: 0, scale: 0 }, { opacity: 0.7, scale: 1, ease: "sine.out"}, "tco-lbl-7")
          .fromTo( ".riding-steps__list .riding-steps__list-7 img", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1, ease: "back.out"},  "tco-lbl-7")
          .fromTo( ".riding-steps__list .riding-steps__list-7 p", { opacity: 0, y:20 }, { y:0, opacity: 1, ease: "sine.out"} )
            

          .fromTo( ".riding-steps__list .riding-steps__list-7 .tco-arrow-container.tco-arrow-container--2 .arr-right", { opacity: 0, x:-20 }, { x:0, opacity: 1, ease: "sine.out"} )

            //  Step 8
            .fromTo( ".tco__load-distribution-8 img", { opacity: 0.15 }, { opacity: 1, ease: "sine.out" } )
            .fromTo( ".tco__load-distribution-8 .tco__load-distribution-percentages", { opacity: 0, scale: 0 }, { opacity: 0.7, scale: 1, ease: "sine.out"}, "tco-lbl-8")
            .fromTo( ".riding-steps__list .riding-steps__list-8 img", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1, ease: "back.out"},  "tco-lbl-8")
            .fromTo( ".riding-steps__list .riding-steps__list-8 p", { opacity: 0, y:20 }, { y:0, opacity: 1, ease: "sine.out"} )
      },
      
    },
  });

  gsap.from(".tca-counter-list li", {
    duration: 0.5,
    opacity: 0,
    y: -10,
    stagger: 0.3,
    ease: "sine.out",

    scrollTrigger: {
      trigger: "#tca-steps-sales-success",
      start: "center 90%",
      end: "center 10%",
      // scrub: 2,
      toggleActions: "play play none none",
      // markers: true,
      toggleClass: "item-visible",
    },
  });

  gsap.from(".tca-general-block__convincing-offer", {
    // duration: 0.5,
    // opacity: 0,
    // y: -10,
    // stagger: 0.3,
    // ease: "sine.out",

    scrollTrigger: {
      trigger: "#convincing-offer",
      start: "center 90%",
      end: "center 10%",
      // scrub: 2,
      toggleActions: "restart play none none",
      // markers: true,
      toggleClass: "item-visible",
      onEnter: () => {
        gsap.to(".tca-general-block__convincing-offer-item--large", {
          alpha: 1,
          ease: "sine.out",
        });
        gsap.to(
          ".tca-general-block__convincing-offer-item--mid",
          {
            duration: 0.5,
            alpha: 1,
            ease: "sine.out",
          },
          "0.5"
        );
        gsap.to(
          ".tca-general-block__convincing-offer-item--end",
          {
            duration: 0.5,
            alpha: 1,
            ease: "sine.out",
          },
          "1"
        );
      },
    },
  });

  // Eiceberg animation
  // ========================================================================
  gsap.from(".tco__cost-analysis", {
    scrollTrigger: {
      trigger: "#tco-eiceberg",
      start: "center 80%",
      end: "center 10%",
      // scrub: 2,
      toggleActions: "play play play none",
      // markers: true,
      onEnter: () => {
        eicebergTl.fromTo( ".tco__cost-analysis--direct-costs", { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "sine.out" } );
        eicebergTl.fromTo( ".tco__cost-analysis-percentage", { y: 30, opacity: 0 }, { y: 0, duration: 1, opacity: 1, ease: "back.out" }, "=0.05" );
        eicebergTl.fromTo( ".tco__cost-analysis--indirect-costs", { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "sine.out" }, "=0.01" );

        eicebergTl.fromTo( ".tco__cost-analysis-item-1 .tco__cost-analysis-item-icon", { alpha: 0, scale: 0.5 }, { alpha: 1, scale: 1, ease: "sine.out" }, "=0.05" );
        eicebergTl.fromTo( ".tco__cost-analysis-item-1 .tco__cost-analysis-item-line", { alpha: 0, scaleX: 0 }, { alpha: 1, scaleX: 1, ease: "sine.out" }, "=0.05" );
        eicebergTl.fromTo( ".tco__cost-analysis-item-1 .tco__cost-analysis-item-text", { alpha: 0 }, { alpha: 1, ease: "sine.out" }, "=0.05" );

        eicebergTl.fromTo( ".tco__cost-analysis-item-2 .tco__cost-analysis-item-icon", { alpha: 0, scale: 0.5 }, { alpha: 1, scale: 1, ease: "sine.out" }, "=0.05" );
        eicebergTl.fromTo( ".tco__cost-analysis-item-2 .tco__cost-analysis-item-line", { alpha: 0, scaleX: 0 }, { alpha: 1, scaleX: 1, ease: "sine.out" }, "=0.05" );
        eicebergTl.fromTo( ".tco__cost-analysis-item-2 .tco__cost-analysis-item-text", { alpha: 0 }, { alpha: 1, ease: "sine.out" }, "=0.05" );

        eicebergTl.fromTo( ".tco__cost-analysis-item-3 .tco__cost-analysis-item-icon", { alpha: 0, scale: 0.5 }, { alpha: 1, scale: 1, ease: "sine.out" }, "=0.05" );
        eicebergTl.fromTo( ".tco__cost-analysis-item-3 .tco__cost-analysis-item-line", { alpha: 0, scaleX: 0 }, { alpha: 1, scaleX: 1, ease: "sine.out" }, "=0.05" );
        eicebergTl.fromTo( ".tco__cost-analysis-item-3 .tco__cost-analysis-item-text", { alpha: 0 }, { alpha: 1, ease: "sine.out" }, "=0.05" );

        eicebergTl.fromTo( ".tco__cost-analysis-item-4 .tco__cost-analysis-item-icon", { alpha: 0, scale: 0.5 }, { alpha: 1, scale: 1, ease: "sine.out" }, "=0.05" );
        eicebergTl.fromTo( ".tco__cost-analysis-item-4 .tco__cost-analysis-item-line", { alpha: 0, scaleX: 0 }, { alpha: 1, scaleX: 1, ease: "sine.out" }, "=0.05" );
        eicebergTl.fromTo( ".tco__cost-analysis-item-4 .tco__cost-analysis-item-text", { alpha: 0 }, { alpha: 1, ease: "sine.out" }, "=0.05" );

        eicebergTl.fromTo( ".tco__cost-analysis-item-5 .tco__cost-analysis-item-icon", { alpha: 0, scale: 0.5 }, { alpha: 1, scale: 1, ease: "sine.out" }, "=0.05" );
        eicebergTl.fromTo( ".tco__cost-analysis-item-5 .tco__cost-analysis-item-line", { alpha: 0, scaleX: 0 }, { alpha: 1, scaleX: 1, ease: "sine.out" }, "=0.05" );
        eicebergTl.fromTo( ".tco__cost-analysis-item-5 .tco__cost-analysis-item-text", { alpha: 0 }, { alpha: 1, ease: "sine.out" }, "=0.05" );

        eicebergTl.fromTo( ".tco__cost-analysis-item-6 .tco__cost-analysis-item-icon", { alpha: 0, scale: 0.5 }, { alpha: 1, scale: 1, ease: "sine.out" }, "=0.05" );
        eicebergTl.fromTo( ".tco__cost-analysis-item-6 .tco__cost-analysis-item-line", { alpha: 0, scaleX: 0 }, { alpha: 1, scaleX: 1, ease: "sine.out" }, "=0.05" );
        eicebergTl.fromTo( ".tco__cost-analysis-item-6 .tco__cost-analysis-item-text", { alpha: 0 }, { alpha: 1, ease: "sine.out" }, "=0.05" );

        // Motion Path
        // ============================================
        // gsap.set(".m-btn", {
        //   xPercent: -50,
        //   yPercent: -50,
        //   transformOrigin: "50% 50%",
        // });
        // gsap.to(".m-btn", {
        //   duration: 10,
        //   repeat: -1,
        //   yoyo: true,
        //   motionPath: {
        //     path: "#motion-path",
        //     align: "#rect",
        //     autoRotate: true,
        //     // start: 0.25,
        //     // end: 0.75,
        //   },
        // });
      },
    },
  });

  // Number count
  //   let counterHandle = () => {
  //     const counters = document.querySelectorAll(".tco-feature__details-number");
  //     console.log("🚀 ~ counters:", counters);
  //     const speed = 200;
  //     counters.forEach((counter) => {
  //       const animate = () => {
  //         const value = +counter.getAttribute("akhi");
  //         const data = +counter.innerText;
  //         const time = value / speed;
  //         if (data < value) {
  //           counter.innerText = Math.ceil(data + time);
  //           setTimeout(animate, 1);
  //         } else {
  //           counter.innerText = value;
  //         }
  //       };

  //       animate();
  //     });
  //   };
  //   counterHandle();

  const tcoCounters = document.querySelectorAll( ".tco-potential-percentage__number-value--counter" );

  gsap.from(".tco-feature--potential", {
    scrollTrigger: {
      trigger: "#tco-potential-feature",
      start: "center 80%",
      end: "center 10%",
      // scrub: 2,
      toggleActions: "restart play none none",
      // markers: true,
      onEnter: () => {

        tcoCounters.forEach((counter) => {
          
          let parent = counter.closest(".tco-potential-percentage")
          let progressStatus = parent.querySelector(".tco-potential-percentage__progress-status")

          counter.innerText = 0;

          let count = 0;

          function counterScrollReveal() {
            const target = parseInt(counter.dataset.count);
            const time = parseInt(counter.dataset.time);

            if (count < target) {
              count++;
              counter.innerText = count;

              progressStatus.style.width = count + "%";
              setTimeout(counterScrollReveal, time);


            } else {
              counter.innerText = target;
            }
          }

          counterScrollReveal();
        });


        tcoPotentialData.fromTo( ".tco-potential-data--a .tco-potential-data__total-price", { alpha: 0, duration: 1, ease: "sign.out" }, { alpha: 1, delay: 1, ease: "none"});
        tcoPotentialData.fromTo( ".tco-potential-data--a .tco-potential-data__total-km", { alpha: 0, duration: 1, ease: "sign.out" }, { alpha: 1, ease: "none"}, "=0.05");

        tcoPotentialData.fromTo( ".tco-potential-data--b .tco-potential-data__total-price", { alpha: 0,  ease: "sign.out" }, { alpha: 1, ease: "none"});
        tcoPotentialData.fromTo( ".tco-potential-data--b .tco-potential-data__total-km", { alpha: 0, ease: "sign.out" }, { alpha: 1, ease: "none"}, "=0.05");


      },

      onLeave: () => {

        tcoCounters.forEach((counter) => {
          counter.innerText = 0;
        })
      },
    },
  });
});
