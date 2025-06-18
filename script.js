$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [
      "Senior Flutter Developer",
      "Cross-Platform Mobile Expert",
      "API & Firebase Integration Specialist",
      "Freelance App Developer",
      "UI/UX Design to Code Specialist",
      "Clean Architecture Expert",
      "Scalable & Maintainable App Architect",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Senior Flutter Developer",
      "Cross-Platform Mobile Expert",
      "API & Firebase Integration Specialist",
      "Freelance App Developer",
      "UI/UX Design to Code Specialist",
      "Clean Architecture Expert",
      "Scalable & Maintainable App Architect",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

// Project section functionality
$(document).ready(function () {
  // When a project card is clicked
  $(".proj-content .card").click(function () {
    // Create modal
    var modal = $('<div class="proj-modal">');
    var modalContent = $('<div class="proj-modal-content">');
    var closeBtn = $('<span class="close">&times;</span>');
    var gallery = $('<div class="image-gallery">');

    // Get the project details images
    var images = $(this).find(".proj-details img");

    // Add images to gallery
    images.each(function () {
      gallery.append($(this).clone());
    });

    // Add gallery to modal content
    modalContent.append(gallery);

    // Add close button and content to modal
    modal.append(closeBtn);
    modal.append(modalContent);

    // Add modal to body
    $("body").append(modal);

    // Show modal
    modal.css("display", "block");

    // Close modal when X is clicked
    closeBtn.click(function () {
      modal.css("display", "none");
      modal.remove();
    });

    // Close modal when clicking outside
    modal.click(function (e) {
      if (e.target === modal[0]) {
        modal.css("display", "none");
        modal.remove();
      }
    });
  });
});

// Contact form submission
$(document).ready(function () {
  $("#contactForm").submit(function (e) {
    e.preventDefault();

    var formData = {
      name: $('input[name="name"]').val(),
      email: $('input[name="email"]').val(),
      subject: $('input[name="subject"]').val(),
      message: $('textarea[name="message"]').val(),
      _subject: "📩 Someone contacted you from your portfolio"
    };

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    $.ajax({
      url: "https://formsubmit.co/ajax/moeen.abdulmajeed786@gmail.com",  
      method: "POST",
      data: formData,
      dataType: "json",
      success: function (response) {
        alert("Message sent successfully!");
        $("#contactForm")[0].reset();
      },
      error: function (xhr, status, error) {
        alert("An error occurred. Please try again later or contact me directly.");
      }
    });
  });
});
