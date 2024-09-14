
// This ensures the sidebar covers the page from header to footer,
// while staying at the top despite scrolling and resizing
// by accounting for header/footer size

// I'm going to be honest, the pride in getting this to work
// isn't worth the multiple hours I spent on it.

function updateSidebarHeight() {
    const header = document.getElementById('main-header');
    const footer = document.getElementById('main-footer');
    const sidebar = document.getElementById('sidebar');

    const headerRect = header.getBoundingClientRect();
    const footerRect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calculate total heights of header and footer
    const totalHeaderHeight = header.offsetHeight;
    const totalFooterHeight = footer.offsetHeight;

    // Calculate the height that is covered by the header and footer
    let coveredHeight = 0;

    // If the header is showing
    if (headerRect.bottom > 0) {
        coveredHeight += headerRect.top;
    }
    // If the footer is showing
    if (footerRect.top < windowHeight) {
        // I don't know why, but it's off by about 15 pixles
        // probably a margin I missed
        coveredHeight += windowHeight - footerRect.top + 15;
    }
    
    // Sidebar fills all space between header and footer
    let availableHeight = windowHeight - coveredHeight;
    console.log("availableHeight",availableHeight);

    // Update sidebar height
    sidebar.style.height = availableHeight + 'px';
}


// Recalculate on resize
window.addEventListener('resize', updateSidebarHeight);
// Recalculates when scrolling
document.addEventListener("scroll", updateSidebarHeight);









// Runs once html is loaded, but not necessarilt once stylesheets or images are loaded
document.addEventListener("DOMContentLoaded", function() {

    // Get each order-button
    document.querySelectorAll(".order-button").forEach(function(button) {
        // When clicked, append their value to the posts-ordered-header
        button.addEventListener("click", function() {
            var appendText = this.value;
            document.getElementById("posts-ordered-header").textContent = "Ordered by " + appendText;
        });
    });
    // I considered actually making it reorder the posts by some arbitrary values I could add, but
    // I'd like to preserve what little sanity and will to live I have left.


    
    // Select all like and dislike buttons
    const counts = document.querySelectorAll('.like-count, .dislike-count');
    counts.forEach(count => {
        count.textContent = Math.floor(Math.random() * 10001);
    });

    // Select all like and dislike buttons
    const likeButtons = document.querySelectorAll('.like-button');
    const dislikeButtons = document.querySelectorAll('.dislike-button');

    // For each button, when clicked find their parent (container)
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const container = this.parentElement;
            // This container has a like-count, update it by 1
            const likeCount = container.querySelector('.like-count');
            // Interpret as integer so addition can be done
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
        });
    });

    // Same for dislikes
    dislikeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const container = this.parentElement;
            const dislikeCount = container.querySelector('.dislike-count');
            dislikeCount.textContent = parseInt(dislikeCount.textContent) + 1;
        });
    });
});


