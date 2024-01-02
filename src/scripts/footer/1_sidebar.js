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

