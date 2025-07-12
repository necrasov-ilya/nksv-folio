export const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
};

export const handleSmoothNavigation = (event, targetId) => {
    event.preventDefault();
    smoothScrollTo(targetId);
};



