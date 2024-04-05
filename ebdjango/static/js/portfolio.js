document.addEventListener('DOMContentLoaded', function () {
    const filters = document.querySelectorAll('.portfolio-filters-title');

    filters.forEach(filter => {
        filter.addEventListener('click', function () {
            filters.forEach(f => f.classList.remove('active-portfolio'));
            this.classList.add('active-portfolio');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let mixerPortfolio = mixitup('.portfolio-container', {
        selectors: {
            target: '.portfolio-item'
        },
        animation: {
            duration: 300
        }
    });
});

document.addEventListener('click', (e) => {
    if (e.target.closest('.portfolio-item')) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.closest('.portfolio-item'));
    }
});

function togglePortfolioPopup() {
    document.querySelector('.portfolio-popup').classList.toggle('open');
}

document.querySelector('.portfolio-popup-close').addEventListener('click', togglePortfolioPopup)

function portfolioItemDetails(portfolioItem) {
    const thumbnailImage = document.querySelector('.portfolio-thumbnail img');
    const portfolioImage = portfolioItem.querySelector('.portfolio-img img');

    const portfolioItemTitle = portfolioItem.querySelector('.portfolio-img p');
    const popupTitle = document.querySelector('.portfolio-popup-info .details-title');

    if (thumbnailImage && portfolioImage) {
        thumbnailImage.src = portfolioImage.src;
    }

    if (portfolioItemTitle && popupTitle) {
        popupTitle.textContent = portfolioItemTitle.textContent;
    }

    document.querySelector('.portfolio-popup-body .details-title').innerHTML = portfolioItem.querySelector('.portfolio-item-details .details-title').innerHTML;
    document.querySelector('.portfolio-popup-body .details-info').innerHTML = portfolioItem.querySelector('.portfolio-item-details .details-info').innerHTML;

}


