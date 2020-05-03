const observeProbjects = (probjectsLength) => {
    const sections = document.querySelectorAll('.probject');
    const options = {
        threshold: 1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(element => {
            if (element.isIntersecting) {
                element.target.classList.add('active');
            } else {
                element.target.classList.remove('active');
            }
        });
    }, options);

    sections.forEach(section => observer.observe(section));
}

export default observeProbjects;