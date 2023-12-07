  document.addEventListener('DOMContentLoaded', function () {
            const timelineItems = document.querySelectorAll('.animate-in');

            function checkPosition() {
                timelineItems.forEach((item) => {
                    const position = item.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;

                    if (position < windowHeight * 0.9) {
                        item.classList.add('show');
                    }
                });
            }

            window.addEventListener('scroll', checkPosition);
            window.addEventListener('resize', checkPosition);
            checkPosition(); // Trigger the check on page load
        });