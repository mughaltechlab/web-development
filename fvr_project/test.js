document.addEventListener("DOMContentLoaded", function () {
  const optionsButton = document.getElementById("options-button");
  const dropdownMenu = document.getElementById("dropdown-menu");

  optionsButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent the click from propagating to the window
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  });

  // Hide dropdown menu when clicking outside
  window.addEventListener("click", function () {
    if (dropdownMenu.style.display === "block") {
      dropdownMenu.style.display = "none";
    }
  });
});


      // ----------------------------------hamburger code
      document.addEventListener("DOMContentLoaded", function () {
        const hamburgerBtn = document.getElementById("hamburger-btn");
        const crossBtn = document.getElementById("cross-btn");
        const sidebar = document.querySelector(".sidebar");

        function toggleSidebar() {
          sidebar.classList.toggle("active");
          crossBtn.classList.toggle("show"); // Use class to manage visibility
          hamburgerBtn.style.display = sidebar.classList.contains("active")
            ? "none"
            : "block";
        }

        hamburgerBtn.addEventListener("click", toggleSidebar);
        crossBtn.addEventListener("click", function () {
          sidebar.classList.remove("active");
          this.classList.remove("show"); // Hide cross button
          hamburgerBtn.style.display = "block"; // Show hamburger button
        });
      });

      //customize toggle


      // -------------------------custom cursor code---------------------------------------//

      // function updateFileName() {
      //   //input feild
      //   let fileInput = document.getElementById("custom-cursor-file");
      //   //span
      //   let filenameDisplay = document.getElementById("filename");
      //   //select p
      //   let pElement = filenameDisplay.querySelector("p");
      //   //select file
      //   let files = fileInput.files;
      //   //upload-icon
      //   let uploadIcon = document.getElementById("upload-icon");
      //   //cross icon
      //   let crossIcon = document.getElementById("delete-icon");
      //   if (files.length > 0) {
      //     pElement.textContent = files[0].name;
      //     filenameDisplay.classList.remove("no-file");
      //     uploadIcon.style.display = "none";
      //     crossIcon.style.display = "block";
      //   } else {
      //     pElement.textContent = "No file chosen";
      //     filenameDisplay.classList.add("no-file");
      //     uploadIcon.style.display = "block";
      //     crossIcon.style.display = "none";
      //   }
      // }

      // Trigger the file input when the filename display is clicked
      // document
      //   .getElementById("filename")
      //   .addEventListener("click", function () {
      //     document.getElementById("custom-cursor-file").click();
      //   });
      //delete button
      // document
      //   .getElementById("delete-icon")
      //   .addEventListener("click", function () {
      //     //input feild
      //     let fileInput = document.getElementById("custom-cursor-file");
      //     //span
      //     let filenameDisplay = document.getElementById("filename");
      //     //select p
      //     let pElement = filenameDisplay.querySelector("p");
      //     //select file
      //     let files = fileInput.files;
      //     //upload-icon
      //     let uploadIcon = document.getElementById("upload-icon");
      //     //cross icon
      //     let crossIcon = document.getElementById("delete-icon");
      //     fileInput.value = "";
      //     pElement.textContent = "No file chosen";
      //     filenameDisplay.classList.add("no-file");
      //     uploadIcon.style.display = "block";
      //     crossIcon.style.display = "none";
      //     event.stopPropagation();
      //   });
      // --------------------------audio file upload----------------------------------/////////
      
      function updateFileName2() {
        var fileInput = document.getElementById("custom-cursor-file2");
        var filenameDisplay = document.getElementById("filename2");
        let pElement = filenameDisplay.querySelector("p");
        var files = fileInput.files;
        let uploadIcon = document.getElementById("upload-icon-audio");
        //cross icon
        let crossIcon = document.getElementById("delete-icon-audio");
        if (files.length > 0) {
          pElement.textContent = files[0].name;
          filenameDisplay.classList.remove("no-file");
          uploadIcon.style.display = "none";
          crossIcon.style.display = "block";
        } else {
          pElement.textContent = "No file chosen";
          filenameDisplay.classList.add("no-file");
          uploadIcon.style.display = "block";
          crossIcon.style.display = "none";
        }
      }

      // Trigger the second file input when the filename display is clicked
      document
        .getElementById("filename2")
        .addEventListener("click", function () {
          document.getElementById("custom-cursor-file2").click();
        });

      //delete button
      document
        .getElementById("delete-icon-audio")
        .addEventListener("click", function () {
          var fileInput = document.getElementById("custom-cursor-file2");
          var filenameDisplay = document.getElementById("filename2");
          let pElement = filenameDisplay.querySelector("p");
          var files = fileInput.files;
          let uploadIcon = document.getElementById("upload-icon-audio");
          //cross icon
          let crossIcon = document.getElementById("delete-icon-audio");
          fileInput.value = "";
          pElement.textContent = "No file chosen";
          filenameDisplay.classList.add("no-file");
          uploadIcon.style.display = "block";
          crossIcon.style.display = "none";
          event.stopPropagation();
        });
      // -------------------------dicord custom input feild --------------------------------------//

      // const dropdownHeader = document.querySelector(".dropdown-header");
      // const dropdown = document.querySelector(".dropdown");
      // const dropdownArrow = document.querySelector(".dropdown-arrow");
      // const dropdownList = document.querySelector(".dropdown-list");
      // const inputEnter = document.getElementById("discord-input");

      // dropdownHeader.addEventListener("click", () => {
      //     const isOpen = dropdown.classList.contains("open");
      //     dropdownList.style.display = isOpen ? "none" : "block";
      //     dropdown.classList.toggle("open", !isOpen); // Toggle the "open" class
      //     dropdownArrow.classList.toggle("rotate", !isOpen); // Toggle the "rotate" class
      // });

      // const dropdownItems = document.querySelectorAll(".dropdown-item");
      // dropdownItems.forEach((item) => {
      //     item.addEventListener("click", (e) => {
      //         const selectedValue = e.target.textContent;
      //         console.log(selectedValue); // You can handle the selected value here
      //         inputEnter.innerHTML = selectedValue;

      //         dropdown.classList.remove("open"); // Remove the "open" class
      //         dropdownArrow.classList.remove("rotate"); // Remove the "rotate" class when selecting a value
      //         dropdownList.style.display = "none";
      //     });
      // });

      // // Clicking outside the dropdown will close it
      // window.addEventListener("click", (e) => {
      //     if (!dropdown.contains(e.target)) {
      //         dropdownList.style.display = "none";
      //         dropdown.classList.remove("open"); // Remove the "open" class when clicking outside
      //         dropdownArrow.classList.remove("rotate"); // Remove the "rotate" class when clicking outside
      //     }
      // });

      // -------------------------volume Slider--------------------------------------//

      // const range = document.querySelector(".range");
      // const rangeVal = document.getElementById("rangeVal");

      // range.addEventListener("mousemove", updateRangeValue);
      // range.addEventListener("touchmove", updateRangeValue);

      // function updateRangeValue() {
      //     let result = range.value;
      //     if (result > 0) {
      //         rangeVal.textContent = result + "%";
      //     } else {
      //         rangeVal.textContent = result;
      //     }
      // }
      const range7 = document.getElementById("range7");
      const rangeVal7 = document.getElementById("rangeVal7");

      range7.addEventListener("mousemove", () =>
        updateRangeValue(range7, rangeVal7)
      );
      range7.addEventListener("touchmove", () =>
        updateRangeValue(range7, rangeVal7)
      );

      function updateRangeValue(rangeElement, displayElement) {
        let result = rangeElement.value;
        displayElement.textContent = result > 0 ? result + "%" : result;
      }

      // Initialize the display for the third slider
      updateRangeValue(range7, rangeVal7);

      // -------------------------profile Slider--------------------------------------//
      const range2 = document.getElementById("range2");
      const rangeVal2 = document.getElementById("rangeVal2");

      range2.addEventListener("mousemove", () =>
        updateRangeValue(range2, rangeVal2)
      );
      range2.addEventListener("touchmove", () =>
        updateRangeValue(range2, rangeVal2)
      );

      function updateRangeValue(rangeElement, displayElement) {
        let result = rangeElement.value;
        displayElement.textContent = result > 0 ? result + "%" : result;
      }

      // Initialize the display for the second slider
      updateRangeValue(range2, rangeVal2);

      // -------------------------profile blur Slider--------------------------------------//
      const range3 = document.getElementById("range3");
      const rangeVal3 = document.getElementById("rangeVal3");

      range3.addEventListener("mousemove", () =>
        updateRangeValue(range3, rangeVal3)
      );
      range3.addEventListener("touchmove", () =>
        updateRangeValue(range3, rangeVal3)
      );

      function updateRangeValue(rangeElement, displayElement) {
        let result = rangeElement.value;
        displayElement.textContent = result > 0 ? result + "%" : result;
      }

      // Initialize the display for the third slider
      updateRangeValue(range3, rangeVal3);

      // -------------------------Background Effect--------------------------------------//
      // const dropdownHeaderEffect = document.querySelector(
      //     ".dropdown-effect-header"
      // );
      // const dropdownEffect = document.querySelector(".dropdown-effect");
      // const dropdownArrowEffect = document.querySelector(
      //     ".dropdown-effect-arrow"
      // );
      // const dropdownListEffect = document.querySelector(
      //     ".dropdown-effect-list"
      // );
      // const inputEffectEnter = document.getElementById("discord-input-effect");

      // dropdownHeaderEffect.addEventListener("click", () => {
      //     const isOpen = dropdownEffect.classList.contains("open");
      //     dropdownListEffect.style.display = isOpen ? "none" : "block";
      //     dropdownEffect.classList.toggle("open", !isOpen); // Toggle the "open" class
      //     dropdownArrowEffect.classList.toggle("rotate", !isOpen); // Toggle the "rotate" class
      // });

      // const dropdownItemsEffect = document.querySelectorAll(
      //     ".dropdown-effect-item"
      // );
      // dropdownItemsEffect.forEach((item) => {
      //     item.addEventListener("click", (e) => {
      //         const selectedValue = e.target.textContent;
      //         console.log(selectedValue); // You can handle the selected value here
      //         inputEffectEnter.innerHTML = selectedValue;

      //         dropdownEffect.classList.remove("open"); // Remove the "open" class
      //         dropdownArrowEffect.classList.remove("rotate"); // Remove the "rotate" class when selecting a value
      //         dropdownListEffect.style.display = "none";
      //     });
      // });

      // // Clicking outside the dropdown will close it
      // window.addEventListener("click", (e) => {
      //     if (!dropdownEffect.contains(e.target)) {
      //         dropdownListEffect.style.display = "none";
      //         dropdownEffect.classList.remove("open"); // Remove the "open" class when clicking outside
      //         dropdownArrowEffect.classList.remove("rotate"); // Remove the "rotate" class when clicking outside
      //     }
      // });

      // -------------------------username effect--------------------------------------//

      // const dropdownHeaderEffect2 = document.querySelector("#dropdown-effect2 .dropdown-effect-header");
      // const dropdownEffect2 = document.getElementById("dropdown-effect2");
      // const dropdownArrowEffect2 = dropdownEffect2.querySelector(".dropdown-effect-arrow");
      // const dropdownListEffect2 = dropdownEffect2.querySelector(".dropdown-effect-list");
      // const inputEffectEnter2 = document.getElementById("discord-input-effect2");

      // dropdownHeaderEffect2.addEventListener("click", () => {
      //     const isOpen = dropdownEffect2.classList.contains("open");
      //     dropdownListEffect2.style.display = isOpen ? "none" : "block";
      //     dropdownEffect2.classList.toggle("open", !isOpen); // Toggle the "open" class
      // });

      // const dropdownItemsEffect2 = dropdownEffect2.querySelectorAll(".dropdown-effect-item");
      // dropdownItemsEffect2.forEach((item) => {
      //     item.addEventListener("click", (e) => {
      //         const selectedValue = e.target.textContent;
      //         console.log(selectedValue); // You can handle the selected value here
      //         inputEffectEnter2.textContent = selectedValue;

      //         dropdownEffect2.classList.remove("open"); // Remove the "open" class
      //         dropdownListEffect2.style.display = "none";
      //     });
      // });

      // // Clicking outside the dropdown will close it
      // window.addEventListener("click", (e) => {
      //     if (!dropdownEffect2.contains(e.target)) {
      //         dropdownListEffect2.style.display = "none";
      //         dropdownEffect2.classList.remove("open"); // Remove the "open" class when clicking outside
      //     }
      // });

      // ----------------- Background effect dropdown ------------------
      const backgroundDropdown = document.getElementById(
        "dropdown-background-effect"
      );
      const backgroundDropdownHeader =
        backgroundDropdown.querySelector(".dropdown-header");
      const backgroundDropdownList =
        backgroundDropdown.querySelector(".dropdown-background-list");
      const backgroundInputEffect = document.getElementById(
        "background-input-effect"
      );

      backgroundDropdownHeader.addEventListener("click", () => {
        backgroundDropdownList.style.display =
          backgroundDropdown.classList.contains("open") ? "none" : "block";
        backgroundDropdown.classList.toggle("open");
      });

      backgroundDropdownList
        .querySelectorAll(".dropdown-background-item")
        .forEach((item) => {
          item.addEventListener("click", (e) => {
            backgroundInputEffect.textContent = e.target.textContent;
            backgroundDropdown.classList.remove("open");
            backgroundDropdownList.style.display = "none";
          });
        });


      //------------ Username effect dropdown -------------------------
      const usernameDropdown = document.getElementById("dropdown-username-effect");
      const usernameDropdownHeader = usernameDropdown.querySelector(".dropdown-header");
      const usernameDropdownList = usernameDropdown.querySelector(".dropdown-list");
      const usernameInputEffect = document.getElementById("username-input-effect");

      usernameDropdownHeader.addEventListener("click", () => {
        usernameDropdownList.style.display =
          usernameDropdown.classList.contains("open") ? "none" : "block";
        usernameDropdown.classList.toggle("open");
      });

      usernameDropdownList
        .querySelectorAll(".dropdown-item")
        .forEach((item) => {
          item.addEventListener("click", (e) => {
            usernameInputEffect.textContent = e.target.textContent;
            usernameDropdown.classList.remove("open");
            usernameDropdownList.style.display = "none";
          });
        });

      // Close dropdowns when clicking outside
      window.addEventListener("click", (e) => {
        if (!backgroundDropdown.contains(e.target)) {
          backgroundDropdownList.style.display = "none";
          backgroundDropdown.classList.remove("open");
        }
        if (!usernameDropdown.contains(e.target)) {
          usernameDropdownList.style.display = "none";
          usernameDropdown.classList.remove("open");
        }
      });
      // -------------------------glow effect--------------------------------------//
      const dropdownHeaderEffect3 = document.querySelector(
        "#dropdown-effect3 .dropdown-effect-header"
      );
      const dropdownEffect3 = document.getElementById("dropdown-effect3");
      const dropdownArrowEffect3 = dropdownEffect3.querySelector(
        ".dropdown-effect-arrow"
      );
      const dropdownListEffect3 = dropdownEffect3.querySelector(
        ".dropdown-effect-list"
      );
      const inputEffectEnter3 = document.getElementById(
        "discord-input-effect3"
      );

      dropdownHeaderEffect3.addEventListener("click", () => {
        const isOpen = dropdownEffect3.classList.contains("open");
        dropdownListEffect3.style.display = isOpen ? "none" : "block";
        dropdownEffect3.classList.toggle("open", !isOpen); // Toggle the "open" class
      });

      const dropdownItemsEffect3 = dropdownEffect3.querySelectorAll(
        ".dropdown-effect-item"
      );
      dropdownItemsEffect3.forEach((item) => {
        item.addEventListener("click", (e) => {
          const selectedValue = e.target.textContent;
          inputEffectEnter3.textContent = selectedValue;

          dropdownEffect3.classList.remove("open"); // Remove the "open" class
          dropdownListEffect3.style.display = "none";
        });
      });

      // Clicking outside the dropdown will close it
      window.addEventListener("click", (e) => {
        if (!dropdownEffect3.contains(e.target)) {
          dropdownListEffect3.style.display = "none";
          dropdownEffect3.classList.remove("open"); // Remove the "open" class when clicking outside
        }
      });

      // -------------------------Premium Username--------------------------------------//
      const dropdownHeaderEffect8 = document.querySelector(
        "#dropdown-user-effect .dropdown-effect-header"
      );
      const dropdownEffect8 = document.getElementById("dropdown-user-effect");
      const dropdownArrowEffect8 = dropdownEffect8.querySelector(
        ".dropdown-effect-arrow"
      );
      const dropdownListEffect8 = dropdownEffect8.querySelector(
        ".dropdown-user-effect-list"
      );
      const inputEffectEnter8 = document.getElementById(
        "user-input-effect"
      );

      dropdownHeaderEffect8.addEventListener("click", () => {
        const isOpen = dropdownEffect8.classList.contains("open");
        dropdownListEffect8.style.display = isOpen ? "none" : "block";
        dropdownEffect8.classList.toggle("open", !isOpen); // Toggle the "open" class
      });

      const dropdownItemsEffect8 = dropdownEffect8.querySelectorAll(
        ".user-effect-item"
      );
      dropdownItemsEffect8.forEach((item) => {
        item.addEventListener("click", (e) => {
          const selectedValue = e.target.textContent;
          inputEffectEnter8.textContent = selectedValue;

          dropdownEffect8.classList.remove("open"); // Remove the "open" class
          dropdownListEffect8.style.display = "none";
        });
      });

      // Clicking outside the dropdown will close it
      window.addEventListener("click", (e) => {
        if (!dropdownEffect8.contains(e.target)) {
          dropdownListEffect8.style.display = "none";
          dropdownEffect8.classList.remove("open"); // Remove the "open" class when clicking outside
        }
      });
      // -------------------------Discord presence--------------------------------------//
      const dropdownHeaderEffect4 = document.querySelector(
        "#dropdown-effect4 .dropdown-effect-header"
      );
      const dropdownEffect4 = document.getElementById("dropdown-effect4");
      const dropdownArrowEffect4 = dropdownEffect4.querySelector(
        ".dropdown-effect-arrow"
      );
      const dropdownListEffect4 = dropdownEffect4.querySelector(
        ".dropdown-effect-list"
      );
      const inputEffectEnter4 = document.getElementById(
        "discord-input-effect4"
      );

      dropdownHeaderEffect4.addEventListener("click", () => {
        const isOpen = dropdownEffect4.classList.contains("open");
        dropdownListEffect4.style.display = isOpen ? "none" : "block";
        dropdownEffect4.classList.toggle("open", !isOpen);
      });

      const dropdownItemsEffect4 = dropdownEffect4.querySelectorAll(
        ".dropdown-discord-item"
      );
      dropdownItemsEffect4.forEach((item) => {
        item.addEventListener("click", (e) => {
          const selectedValue = e.target.textContent;
          inputEffectEnter4.textContent = selectedValue;

          dropdownEffect4.classList.remove("open");
          dropdownListEffect4.style.display = "none";
        });
      });

      window.addEventListener("click", (e) => {
        if (!dropdownEffect4.contains(e.target)) {
          dropdownListEffect4.style.display = "none";
          dropdownEffect4.classList.remove("open");
        }
      });

      // -------------------------server presence--------------------------------------//
      const dropdownHeaderEffect5 = document.querySelector(
        "#dropdown-effect5 .dropdown-effect-header"
      );
      const dropdownEffect5 = document.getElementById("dropdown-effect5");
      const dropdownArrowEffect5 = dropdownEffect5.querySelector(
        ".dropdown-effect-arrow"
      );
      const dropdownListEffect5 = dropdownEffect5.querySelector(
        ".dropdown-effect-list"
      );
      const inputEffectEnter5 = document.getElementById(
        "server-presence-input-effect"
      );

      dropdownHeaderEffect5.addEventListener("click", () => {
        const isOpen = dropdownEffect5.classList.contains("open");
        dropdownListEffect5.style.display = isOpen ? "none" : "block";
        dropdownEffect5.classList.toggle("open", !isOpen);
      });

      const dropdownItemsEffect5 = dropdownEffect5.querySelectorAll(
        ".server-presence-items"
      );
      dropdownItemsEffect5.forEach((item) => {
        item.addEventListener("click", (e) => {
          const selectedValue = e.target.textContent;
          inputEffectEnter5.textContent = selectedValue;

          dropdownEffect5.classList.remove("open");
          dropdownListEffect5.style.display = "none";
        });
      });

      window.addEventListener("click", (e) => {
        if (!dropdownEffect5.contains(e.target)) {
          dropdownListEffect5.style.display = "none";
          dropdownEffect5.classList.remove("open");
        }
      });

      // -------------------------cursor effect--------------------------------------//
      const dropdownHeaderEffect6 = document.querySelector(
        "#dropdown-effect6 .dropdown-effect-header"
      );
      const dropdownEffect6 = document.getElementById("dropdown-effect6");
      const dropdownArrowEffect6 = dropdownEffect6.querySelector(
        ".dropdown-effect-arrow"
      );
      const dropdownListEffect6 = dropdownEffect6.querySelector(
        ".dropdown-effect-list"
      );
      const inputEffectEnter6 = document.getElementById(
        "discord-input-effect6"
      );

      dropdownHeaderEffect6.addEventListener("click", () => {
        const isOpen = dropdownEffect6.classList.contains("open");
        dropdownListEffect6.style.display = isOpen ? "none" : "block";
        dropdownEffect6.classList.toggle("open", !isOpen);
      });

      const dropdownItemsEffect6 = dropdownEffect6.querySelectorAll(
        ".dropdown-effect-item"
      );
      dropdownItemsEffect6.forEach((item) => {
        item.addEventListener("click", (e) => {
          const selectedValue = e.target.textContent;
          inputEffectEnter6.textContent = selectedValue;

          dropdownEffect6.classList.remove("open");
          dropdownListEffect6.style.display = "none";
        });
      });

      window.addEventListener("click", (e) => {
        if (!dropdownEffect6.contains(e.target)) {
          dropdownListEffect6.style.display = "none";
          dropdownEffect6.classList.remove("open");
        }
      });

      // -------------------------custom layout--------------------------------------//
      const dropdownHeaderEffect7 = document.querySelector(
        "#dropdown-effect7 .dropdown-effect-header"
      );
      const dropdownEffect7 = document.getElementById("dropdown-effect7");
      const dropdownArrowEffect7 = dropdownEffect7.querySelector(
        ".dropdown-effect-arrow"
      );
      const dropdownListEffect7 = dropdownEffect7.querySelector(
        ".dropdown-effect-list"
      );
      const inputEffectEnter7 = document.getElementById(
        "custom-input-effect"
      );

      dropdownHeaderEffect7.addEventListener("click", () => {
        const isOpen = dropdownEffect7.classList.contains("open");
        dropdownListEffect7.style.display = isOpen ? "none" : "block";
        dropdownEffect7.classList.toggle("open", !isOpen);
      });

      const dropdownItemsEffect7 = dropdownEffect7.querySelectorAll(
        ".custom-effect-item"
      );
      dropdownItemsEffect7.forEach((item) => {
        item.addEventListener("click", (e) => {
          const selectedValue = e.target.textContent;
          inputEffectEnter7.textContent = selectedValue;

          dropdownEffect7.classList.remove("open");
          dropdownListEffect7.style.display = "none";
        });
      });

      window.addEventListener("click", (e) => {
        if (!dropdownEffect7.contains(e.target)) {
          dropdownListEffect7.style.display = "none";
          dropdownEffect7.classList.remove("open");
        }
      });

      // -------------------------Badges--------------------------------------//
      const dropdownHeaderBadge = document.querySelector(
        ".dropdown-badge-header"
      );
      const dropdownBadge = document.querySelector(".dropdown-badge");
      const dropdownArrowBadge = document.querySelector(
        ".dropdown-badge-arrow"
      );
      const dropdownListBadge = document.querySelector(".dropdown-badge-list");
      const inputBadgeEnter = document.getElementById("discord-input-badge");

      dropdownHeaderBadge.addEventListener("click", () => {
        const isOpen = dropdownBadge.classList.contains("open");
        dropdownListBadge.style.display = isOpen ? "none" : "block";
        dropdownBadge.classList.toggle("open", !isOpen);
        dropdownArrowBadge.classList.toggle("rotate", !isOpen);
      });

      const dropdownItemsBadge = document.querySelectorAll(
        ".dropdown-badge-item"
      );
      dropdownItemsBadge.forEach((item) => {
        item.addEventListener("click", (e) => {
          const selectedValue = e.target.textContent;
          inputBadgeEnter.innerHTML = selectedValue;
          dropdownBadge.classList.remove("open");
          dropdownArrowBadge.classList.remove("rotate");
          dropdownListBadge.style.display = "none";
        });
      });

      window.addEventListener("click", (e) => {
        if (!dropdownBadge.contains(e.target)) {
          dropdownListBadge.style.display = "none";
          dropdownBadge.classList.remove("open");
          dropdownArrowBadge.classList.remove("rotate");
        }
      });

      // -------------------------color picker--------------------------------------//
      function openEyeDropper() {
        const resultElement = document.getElementById("result");

        if (!window.EyeDropper) {
          resultElement.textContent =
            "Your browser does not support the EyeDropper API";
          return;
        }

        const eyeDropper = new EyeDropper();

        eyeDropper
          .open()
          .then((result) => {
            updateColorResult(result.sRGBHex); // Update the span and input color
          })
          .catch((e) => {
            resultElement.textContent = "Error: " + e.toString();
          });
      }

      // Function to update color result
      function updateColorResult(hexColor) {
        const colorInput = document.getElementById("color-picker");
        const resultElement = document.getElementById("result");
        colorInput.value = hexColor;
        resultElement.textContent = hexColor;
      }

      // Event listener for the color input
      document
        .getElementById("color-picker")
        .addEventListener("input", (event) => {
          updateColorResult(event.target.value); // Update the span with the new color
        });

      // --------------------------------text color picker-----------------------------------------
      function openEyeDropper2() {
        const resultElement2 = document.getElementById("result2");

        if (!window.EyeDropper) {
          resultElement2.textContent =
            "Your browser does not support the EyeDropper API";
          return;
        }

        const eyeDropper2 = new EyeDropper();

        eyeDropper2
          .open()
          .then((result) => {
            updateColorResult2(result.sRGBHex); // Update the span and input color
          })
          .catch((e) => {
            resultElement2.textContent = "Error: " + e.toString();
          });
      }

      // Function to update color result for the second picker
      function updateColorResult2(hexColor) {
        const colorInput2 = document.getElementById("color-picker2");
        const resultElement2 = document.getElementById("result2");
        colorInput2.value = hexColor;
        resultElement2.textContent = hexColor;
      }

      // Event listener for the second color input
      document
        .getElementById("color-picker2")
        .addEventListener("input", (event) => {
          updateColorResult2(event.target.value); // Update the span with the new color
        });
      // ------------------------accent color picker-----------------------------------------
      function openEyeDropper3() {
        const resultElement3 = document.getElementById("result3");

        if (!window.EyeDropper) {
          resultElement3.textContent =
            "Your browser does not support the EyeDropper API";
          return;
        }

        const eyeDropper3 = new EyeDropper();

        eyeDropper3
          .open()
          .then((result) => {
            updateColorResult3(result.sRGBHex); // Update the span and input color
          })
          .catch((e) => {
            resultElement3.textContent = "Error: " + e.toString();
          });
      }

      // Function to update color result for the third picker
      function updateColorResult3(hexColor) {
        const colorInput3 = document.getElementById("color-picker3");
        const resultElement3 = document.getElementById("result3");
        colorInput3.value = hexColor;
        resultElement3.textContent = hexColor;
      }

      // Event listener for the third color input
      document
        .getElementById("color-picker3")
        .addEventListener("input", (event) => {
          updateColorResult3(event.target.value); // Update the span with the new color
        });

      // -------------------------Custom font--------------------------------------//
      const dropdownHeaderFont = document.querySelector(
        ".dropdown-font-header"
      );

      const dropdownFont = document.querySelector(".dropdown-font");
      const dropdownArrowFont = document.querySelector(".dropdown-font-arrow");
      const dropdownListFont = document.querySelector(".dropdown-font-list");
      const inputFontEnter = document.getElementById("font-input-effect");

      dropdownHeaderFont.addEventListener("click", () => {
        const isOpen = dropdownFont.classList.contains("open");
        dropdownListFont.style.display = isOpen ? "none" : "block";
        dropdownFont.classList.toggle("open", !isOpen);
        dropdownArrowFont.classList.toggle("rotate", !isOpen);
      });

      const dropdownItemsFont = document.querySelectorAll(
        ".dropdown-font-item"
      );
      dropdownItemsFont.forEach((item) => {
        item.addEventListener("click", (e) => {
          const selectedValue = e.target.textContent;
          inputFontEnter.innerHTML = selectedValue;
          dropdownFont.classList.remove("open");
          dropdownArrowFont.classList.remove("rotate");
          dropdownListFont.style.display = "none";
        });
      });

      window.addEventListener("click", (e) => {
        if (!dropdownFont.contains(e.target)) {
          dropdownListFont.style.display = "none";
          dropdownFont.classList.remove("open");
          dropdownArrowFont.classList.remove("rotate");
        }
      });
      //--------------------------------- profile size ranger
      const range5 = document.getElementById("range5");
      const rangeVal5 = document.getElementById("rangeVal5");

      range5.addEventListener("mousemove", () =>
        updateRangeValue(range5, rangeVal5)
      );
      range5.addEventListener("touchmove", () =>
        updateRangeValue(range5, rangeVal5)
      );

      function updateRangeValue(rangeElement, displayElement) {
        let result = rangeElement.value;
        displayElement.textContent = result > 0 ? result + "%" : result;
      }

      // Initialize the display for the third slider
      updateRangeValue(range5, rangeVal5);

      // custom cusror uploader
      function updateFileName5() {
        var fileInput = document.getElementById("custom-cursor-file5");
        var filenameDisplay = document.getElementById("filename5");
        let pElement = filenameDisplay.querySelector("p");
        var files = fileInput.files;
        let uploadIcon = document.getElementById("upload-icon-cursor");
        //cross icon
        let crossIcon = document.getElementById("delete-icon-cursor");
        if (files.length > 0) {
          pElement.textContent = files[0].name;
          filenameDisplay.classList.remove("no-file");
          uploadIcon.style.display = "none";
          crossIcon.style.display = "block";
        } else {
          pElement.textContent = "No file chosen";
          filenameDisplay.classList.add("no-file");
          uploadIcon.style.display = "block";
          crossIcon.style.display = "none";
        }
      }

      // Trigger the second file input when the filename display is clicked
      document
        .getElementById("filename5")
        .addEventListener("click", function () {
          document.getElementById("custom-cursor-file5").click();
        });

      //delete button
      document
        .getElementById("delete-icon-cursor")
        .addEventListener("click", function () {
          var fileInput = document.getElementById("custom-cursor-file5");
          var filenameDisplay = document.getElementById("filename5");
          let pElement = filenameDisplay.querySelector("p");
          var files = fileInput.files;
          let uploadIcon = document.getElementById("upload-icon-cursor");
          //cross icon
          let crossIcon = document.getElementById("delete-icon-cursor");
          fileInput.value = "";
          pElement.textContent = "No file chosen";
          filenameDisplay.classList.add("no-file");
          uploadIcon.style.display = "block";
          crossIcon.style.display = "none";
          event.stopPropagation();
        });

      // script for file upload

      // $('input[name="upload-img"]').on('change', function(){
      //   readURL(this, $('.file-wrapper'));  //Change the image
      // });

      // $('.close-btn').on('click', function(){ //Unset the image
      //    let file = $('input[name="upload-img"]');
      //    $('.file-wrapper').css('background-image', 'unset');
      //    $('.file-wrapper').removeClass('file-set');
      //    file.replaceWith( file = file.clone( true ) );
      // });

      // //FILE
      // function readURL(input, obj){
      //   if(input.files && input.files[0]){
      //     var reader = new FileReader();
      //     reader.onload = function(e){
      //       obj.css('background-image', 'url('+e.target.result+')');
      //       obj.addClass('file-set');
      //     }
      //     reader.readAsDataURL(input.files[0]);
      //   }
      // };

      document.addEventListener("DOMContentLoaded", function () {
    const optionsButton = document.getElementById("options-button");
    const dropdownMenu = document.getElementById("dropdown-menu");

    optionsButton.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent the click from propagating to the window
      dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // Hide dropdown menu when clicking outside
    window.addEventListener("click", function () {
      if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
      }
    });
  });




      function displayFileName(input, divId, PlusBtn, RemoveBtn) {
        const fileName = input.value.split("\\").pop(); // Get the file name
        // const closeBtn = document.querySelector(`#${divId} ~ .close-btn`); // Select the close button element
        const fileWrapper = document.querySelector(`#${divId}`).parentElement; // Select the parent of the file name element
        const plusBtn = document.querySelector(`.file-wrapper #${PlusBtn}`); // Select the :after pseudo-element of the file wrapper
        const removeBtn = document.querySelector(`.file-wrapper #${RemoveBtn}`); // Select the :after pseudo-element of the file wrapper
        if (fileName) {
          document.getElementById(divId).textContent = fileName; // Display the file name
          plusBtn.style.display = "none";
          removeBtn.style.display = "block";
        } else {
          document.getElementById(divId).textContent = "No file selected"; // Display if no file selected
          plusBtn.style.display = "block";
          removeBtn.style.display = "none";
        }
      }

      function dismissFile(divId, addBtn, clseBtn) {
        const fileNameElement = document.getElementById(divId);
        const fileInput =
          fileNameElement.previousElementSibling.querySelector(
            'input[type="file"]'
          );
        const plusBtn = document.querySelector(`#${addBtn}`);
        fileNameElement.textContent = ""; // Clear the file name
        fileInput.value = ""; // Clear the file input value
        const clsBtn = document.querySelector(`#${clseBtn}`);
        plusBtn.style.display = "block";
        clsBtn.style.display = "none"; // Hide the close button
      }

      function previewImage(input, divId) {
        const preview = document.querySelector(".upload-list");
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
          const img = document.createElement("img");
          img.src = e.target.result;

          // Create a span element for the close button
          const closeBtn = document.createElement("span");
          closeBtn.className = "close-btn";
          closeBtn.textContent = "X";
          closeBtn.onclick = function () {
            // Remove the image and close button from the preview container
            preview.innerHTML = "";
            // Reset the input field
            input.value = "";
            const uploadLabel = document.querySelector(".upload-label");
            uploadLabel.style.display = "unset";
          };

          // Append the image and close button span to the preview container
          preview.innerHTML = "";
          preview.appendChild(img);
          preview.appendChild(closeBtn);

          input.style.display = "none";
          input.previousElementSibling.style.display = "none";
        };
        reader.readAsDataURL(file);
      }