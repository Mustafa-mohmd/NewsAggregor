document.addEventListener('DOMContentLoaded', function() {
    const newsData = {
        "topStories": [
            {
                title: "Election Results Announced",
                excerpt: "Recent elections have led to a significant political shift...",
                source: "BBC News",
                date: "March 19, 2025",
                readTime: "5 min read",
                imgSrc: "/api/placeholder/300/180"
            },
            {
                title: "Major Policy Change Expected",
                excerpt: "Government officials hint at a policy overhaul...",
                source: "CNN",
                date: "March 18, 2025",
                readTime: "4 min read",
                imgSrc: "/api/placeholder/300/180"
            }
        ],
        "recentElections": [
            {
                title: "State Election Results Declared",
                excerpt: "Surprising results emerge in the latest state elections...",
                source: "Reuters",
                date: "March 17, 2025",
                readTime: "6 min read",
                imgSrc: "/api/placeholder/300/180"
            },
            {
                title: "New Candidates Rising",
                excerpt: "Young leaders are gaining traction in local elections...",
                source: "The Guardian",
                date: "March 16, 2025",
                readTime: "5 min read",
                imgSrc: "/api/placeholder/300/180"
            }
        ],
        "governmentPolicies": [
            {
                title: "New Budget Announcement",
                excerpt: "Finance ministry releases new economic policies...",
                source: "NY Times",
                date: "March 15, 2025",
                readTime: "4 min read",
                imgSrc: "/api/placeholder/300/180"
            },
            {
                title: "Education Reform Bill Passed",
                excerpt: "The government passed a new bill for education...",
                source: "CNN",
                date: "March 14, 2025",
                readTime: "5 min read",
                imgSrc: "/api/placeholder/300/180"
            }
        ],
        "internationalPolitics": [
            {
                title: "Global Summit on Climate Change",
                excerpt: "Leaders discuss the future of climate policies...",
                source: "BBC News",
                date: "March 13, 2025",
                readTime: "7 min read",
                imgSrc: "/api/placeholder/300/180"
            },
            {
                title: "Trade War Tensions Rise",
                excerpt: "Tensions escalate between major economic powers...",
                source: "CNBC",
                date: "March 12, 2025",
                readTime: "6 min read",
                imgSrc: "/api/placeholder/300/180"
            }
        ]
    };

    function populateNews(sectionId, newsArray) {
        const container = document.getElementById(sectionId);
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

    populateNews("top-stories", newsData.topStories);
    populateNews("recent-elections", newsData.recentElections);
    populateNews("government-policies", newsData.governmentPolicies);
    populateNews("international-politics", newsData.internationalPolitics);
});
