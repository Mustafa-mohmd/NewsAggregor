document.addEventListener('DOMContentLoaded', function() {
    const businessData = {
        "topStories": [
            {
                title: "Major Merger Announced in Tech Sector",
                excerpt: "Two leading tech companies announce a groundbreaking merger that will reshape the industry...",
                source: "Wall Street Journal",
                date: "March 19, 2025",
                readTime: "5 min read",
                imgSrc: "/api/placeholder/300/180"
            },
            {
                title: "Central Bank Announces Interest Rate Decision",
                excerpt: "The Federal Reserve has made its highly anticipated decision on interest rates...",
                source: "Financial Times",
                date: "March 18, 2025",
                readTime: "4 min read",
                imgSrc: "/api/placeholder/300/180"
            }
        ],
        "marketNews": [
            {
                title: "Stock Markets Reach New Highs",
                excerpt: "Global markets continue their upward trajectory amid positive economic indicators...",
                source: "Bloomberg",
                date: "March 17, 2025",
                readTime: "6 min read",
                imgSrc: "/api/placeholder/300/180"
            },
            {
                title: "Cryptocurrency Markets Volatile",
                excerpt: "Digital currencies experience significant fluctuations following regulatory news...",
                source: "CoinDesk",
                date: "March 16, 2025",
                readTime: "5 min read",
                imgSrc: "/api/placeholder/300/180"
            }
        ],
        "companyNews": [
            {
                title: "Tech Giant Unveils New Product Line",
                excerpt: "Major technology company announces revolutionary new products at annual conference...",
                source: "Tech Chronicle",
                date: "March 15, 2025",
                readTime: "5 min read",
                imgSrc: "/api/placeholder/300/180"
            },
            {
                title: "Retail Chain Expands Nationwide",
                excerpt: "Popular retail brand announces plans to open 100 new stores across the country...",
                source: "Retail Today",
                date: "March 14, 2025",
                readTime: "4 min read",
                imgSrc: "/api/placeholder/300/180"
            }
        ]
    };

    // Function to populate news
    function populateNews(sectionId, newsArray) {
        const container = document.getElementById(sectionId);
        container.innerHTML = ''; // Clear existing content
        newsArray.forEach(news => {
            const newsCard = document.createElement('div');
            newsCard.classList.add('news-card');
            newsCard.innerHTML = `
                <img src="${news.imgSrc}" alt="News image" class="news-image">
                <div class="news-content">
                    <h3 class="news-title">${news.title}</h3>
                    <p class="news-excerpt">${news.excerpt}</p>
                    <div class="news-meta">
                        <span>${news.date}</span>
                        <span>${news.readTime}</span>
                    </div>
                    <a href="#" class="read-more">Read Full Story</a>
                </div>
            `;
            container.appendChild(newsCard);
        });
    }

    // Initial load - show all business news
    populateNews("business-news", [
        ...businessData.topStories,
        ...businessData.marketNews,
        ...businessData.companyNews
    ]);

    // Add navigation buttons
    const navButtons = `
        <div class="business-nav">
            <button class="nav-btn active" data-section="all">All Business News</button>
            <button class="nav-btn" data-section="top">Top Stories</button>
            <button class="nav-btn" data-section="market">Market News</button>
            <button class="nav-btn" data-section="company">Company News</button>
        </div>
    `;
    document.querySelector('.latest-news').insertAdjacentHTML('afterbegin', navButtons);

    // Add event listeners for section navigation
    document.querySelectorAll('.nav-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Load appropriate section
            const section = this.dataset.section;
            switch(section) {
                case 'top':
                    populateNews("business-news", businessData.topStories);
                    break;
                case 'market':
                    populateNews("business-news", businessData.marketNews);
                    break;
                case 'company':
                    populateNews("business-news", businessData.companyNews);
                    break;
                default:
                    populateNews("business-news", [
                        ...businessData.topStories,
                        ...businessData.marketNews,
                        ...businessData.companyNews
                    ]);
            }
        });
    });

    // Handle all navigation links
    function setupNavigation() {
        // Main nav links
        document.querySelectorAll('header nav a').forEach(link => {
            link.addEventListener('click', function(e) {
                if (this.href && !this.classList.contains('active')) {
                    e.preventDefault();
                    window.location.href = this.getAttribute('href');
                }
            });
        });

        // Category filter buttons
        document.querySelectorAll('.category-btn').forEach(button => {
            button.addEventListener('click', function() {
                const page = this.getAttribute('data-page');
                if (page && !this.classList.contains('active')) {
                    window.location.href = page;
                }
            });
        });

        // Read more links
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('read-more')) {
                e.preventDefault();
                // In a real app, this would open the full article
                alert('Full article would open here in a complete implementation');
            }
        });
    }

    // Initialize navigation
    setupNavigation();

    // Debugging
    console.log('Business page initialized');
    console.log('Available sections:', Object.keys(businessData));
});