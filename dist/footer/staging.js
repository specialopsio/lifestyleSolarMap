if (window.location.href.indexOf("map.lifestylesolar.com") !== -1) {
  const sidebarItems = [{
      label: "Installed",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <path fill="currentColor" d="M20 12H4L2 22h20zm-1.64 2l.4 2H13v-2zM11 14v2H5.24l.4-2zm-6.16 4H11v2H4.44zM13 20v-2h6.16l.4 2zM11 8h2v3h-2zm4.764-.795l1.415-1.414L19.3 7.912l-1.414 1.414zm-11.059.708L6.826 5.79L8.24 7.206L6.12 9.327zM3 2h3v2H3zm15 0h3v2h-3zm-6 5c2.76 0 5-2.24 5-5h-2c0 1.65-1.35 3-3 3S9 3.65 9 2H7c0 2.76 2.24 5 5 5"></path>
               </svg>`,
      count: 785,
      id: "sidebarInstalled",
      selected: true,
      functions: [""]
    },
    {
      label: "All Leads",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <path fill="currentColor" d="M16.5 13c-1.2 0-3.07.34-4.5 1c-1.43-.67-3.3-1-4.5-1C5.33 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.33-3.25-6.5-3.25m-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75zm9 0H14v-1.25c0-.46-.2-.86-.52-1.22c.88-.3 1.96-.53 3.02-.53c2.44 0 5 1.21 5 1.75zM7.5 12c1.93 0 3.5-1.57 3.5-3.5S9.43 5 7.5 5S4 6.57 4 8.5S5.57 12 7.5 12m0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m9 5.5c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5S13 6.57 13 8.5s1.57 3.5 3.5 3.5m0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2"></path>
               </svg>`,
      count: 219,
      id: "sidebarAllLeads",
      selected: false,
      functions: [""]
    },
    {
      label: "Digital Leads",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <path fill="currentColor" d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H1c-.55 0-1 .45-1 1s.45 1 1 1h22c.55 0 1-.45 1-1s-.45-1-1-1zM5 6h14c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1"></path>
               </svg>`,
      count: 102,
      selected: false,
      id: "sidebarDigitalLeads",
      functions: [""]
    },
    {
      label: "Knocked",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H3v2h18v-2zm-2 0H7V5h10z"></path>
                <path fill="currentColor" d="M9 11h2v2H9z"></path>
               </svg>`,
      count: 33,
      id: "sidebarKnocked",
      selected: false,
      functions: [""]
    },
    {
      label: "Cancelled",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m3.59-13L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41z"></path>
               </svg>`,
      count: 102,
      id: "sidebarCancelled",
      selected: false,
      functions: [""]
    }

  ];

  // element creation

  const sidebarList = document.getElementById("sidebarList");

  sidebarItems.forEach(item => {
    // Create link element
    const link = document.createElement("a");
    link.href = "#";
    link.className = "sidebar4_link is-indent is-selected-button count-total w-inline-block";
    link.id = item.id;

    // Create div for content
    const contentDiv = document.createElement("div");
    contentDiv.className = "sidebar4_link-wrapper";

    // Icon and label container
    const iconLabelDiv = document.createElement("div");
    iconLabelDiv.className = "icon-container-with-text";

    // Icon (SVG)
    const iconDiv = document.createElement("div");
    iconDiv.className = "icon-embed-xsmall w-embed";
    iconDiv.innerHTML = item.icon; // Insert SVG HTML

    // Label
    const labelDiv = document.createElement("div");
    labelDiv.innerText = item.label;

    // Append icon and label to their container
    iconLabelDiv.appendChild(iconDiv);
    iconLabelDiv.appendChild(labelDiv);

    // Badge for count
    const badgeDiv = document.createElement("div");
    badgeDiv.className = "sidebar4_badge alt-badge is-selected";
    badgeDiv.innerHTML = `<div class="text-size-small">${item.count}</div>`;

    // Append icon/label and badge to content div
    contentDiv.appendChild(iconLabelDiv);
    contentDiv.appendChild(badgeDiv);

    // Append content to link
    link.appendChild(contentDiv);

    // Append link to sidebar list
    sidebarList.appendChild(link);

    // Attach event handlers for each function
    item.functions.forEach(func => {
      link.addEventListener("click", function(event) {
        eval(func); // Execute function on click
      });
    });
  });

  // interactivity

  // Function to update the total
  function updateSelectedTotal() {
    let total = 0;

    // Find all selected sidebar links with the 'count-total' class
    const selectedLinks = document.querySelectorAll('.sidebar4_link.is-selected-button.count-total');

    // Sum up the numbers in their badges
    selectedLinks.forEach(link => {
      const badge = link.querySelector('.sidebar4_badge');
      if (badge) {
        const number = parseInt(badge.textContent.replace(/,/g, ''), 10);
        if (!isNaN(number)) {
          total += number;
        }
      }
    });

    // Update the total in the selectedTotal element
    const totalElement = document.getElementById('selectedTotal');
    if (totalElement) {
      totalElement.textContent = total.toLocaleString();
    }
  }

  // Initial update of the total on page load
  updateSelectedTotal();

  // Function to toggle the class on the link and the badge, and update the total
  function toggleAndSum() {
    // Check if the clicked link is not the one containing the selectedTotal
    if (!this.querySelector('#selectedTotal')) {
      // Toggle 'is-selected-button' on the link
      this.classList.toggle('is-selected-button');

      // Find the badge within the link
      const badge = this.querySelector('.sidebar4_badge');
      if (badge) {
        // Toggle 'is-selected' on the badge
        badge.classList.toggle('is-selected');
      }

      // Update the total
      updateSelectedTotal();
    }
  }

  // Add click event listeners to sidebar links with 'count-total' class
  document.querySelectorAll('.sidebar4_link.count-total').forEach(link => {
    link.addEventListener('click', toggleAndSum);
  });
  // Store ongoing timeouts to clear them if needed
  const timeouts = new Map();

  // Function to set initial display style for options
  function setInitialDisplayStyleForOptions() {
    document.querySelectorAll('.sidebar4_link.cancellable .options').forEach(options => {
      options.style.display = 'none';
    });
  }

  // Function to revert to the default state without showing options
  function revertToDefaultState(linkElement) {
    const textElement = linkElement.querySelector('.icon-container-with-text div:last-child');
    const originalText = textElement.getAttribute('data-original-text') || textElement.textContent;
    textElement.textContent = originalText;
    linkElement.querySelector('.options').style.display = 'none';

    // Clear any ongoing timeout
    if (timeouts.has(linkElement)) {
      clearTimeout(timeouts.get(linkElement));
      timeouts.delete(linkElement);
    }
  }

  // Function to revert to the default state and show options
  function revertToShowOptions(linkElement) {
    revertToDefaultState(linkElement);
    linkElement.querySelector('.options').style.display = 'flex';
  }

  // Function to toggle the display of options
  function toggleOptionsDisplay(event) {
    const textElement = this.querySelector('.icon-container-with-text div:last-child');
    const originalText = textElement.getAttribute('data-original-text');

    // If text is already in the 'Confirmed!' or 'Cancelled' state, revert and show options immediately
    if (originalText && (textElement.textContent === 'Confirmed!' || textElement.textContent === 'Cancelled')) {
      revertToShowOptions(this);
    } else {
      const options = this.querySelector('.options');
      options.style.display = options.style.display === 'none' ? 'flex' : 'none';
    }
  }

  // Function to handle click on cancel or confirm
  function handleCancelConfirm(event) {
    event.stopPropagation(); // Prevents the click event from bubbling up to the parent element

    const sidebarLink = this.closest('.sidebar4_link');
    const textElement = sidebarLink.querySelector('.icon-container-with-text div:last-child');

    // Store original text if not already stored
    if (!textElement.getAttribute('data-original-text')) {
      textElement.setAttribute('data-original-text', textElement.textContent);
    }

    const newText = this.classList.contains('confirm') ? 'Confirmed!' : 'Cancelled';
    textElement.textContent = newText;

    // Hide options immediately
    sidebarLink.querySelector('.options').style.display = 'none';

    // Clear any ongoing timeout
    if (timeouts.has(sidebarLink)) {
      clearTimeout(timeouts.get(sidebarLink));
    }

    // Revert to original text after 5 seconds and keep options hidden
    const timeoutId = setTimeout(() => {
      revertToDefaultState(sidebarLink);
    }, 5000);
    timeouts.set(sidebarLink, timeoutId);
  }

  // Set initial display style for options
  setInitialDisplayStyleForOptions();

  // Add click event listeners to cancellable links
  document.querySelectorAll('.sidebar4_link.cancellable').forEach(link => {
    link.addEventListener('click', toggleOptionsDisplay);
  });

  // Add click event listeners to cancel and confirm icons
  document.querySelectorAll('.sidebar4_link.cancellable .cancel, .sidebar4_link.cancellable .confirm').forEach(icon => {
    icon.addEventListener('click', handleCancelConfirm);
  });
};