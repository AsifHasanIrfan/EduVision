import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div class = "main-wrapper">
            <nav class = "navbar">
                <div class = "brand-and-icon">
                    <a href ="" class = "navbar-brand">EduVision</a>
                    <button type = "button" class = "navbar-toggler">
                        <i class = "fas fa-bars"></i>
                    </button>
                </div>

                <div class = "navbar-collapse">
                <ul class = "navbar-nav">

                    <li>
                    <a href = "#" class = "menu-link">
                        Product
                        <span class = "drop-icon">
                        <i class = "fas fa-chevron-down"></i>
                        </span>
                    </a>
                    <div class = "sub-menu">
                        {/* <!-- item --> */}
                        <div class = "sub-menu-item">
                        <h4>cloud</h4>
                        <ul>
                            <li><a href = "#">Prototype</a></li>
                            <li><a href = "#">Craft</a></li>
                            <li><a href = "#">Specs</a></li>
                            <li><a href = "#">Freehand</a></li>
                        </ul>
                        </div>
                        {/* <!-- end of item -->
                        <!-- item --> */}
                        <div class = "sub-menu-item">
                        <h4>Studio</h4>
                        <ul>
                            <li><a href = "#">Design and animate</a></li>
                        </ul>
                        <h4>DSM</h4>
                        <ul>
                            <li><a href = "#">Build a design system</a></li>
                        </ul>
                        <h4>Enterprise</h4>
                        <ul>
                            <li><a href = "#">Elevate your business with design</a></li>
                        </ul>
                        </div>
                        {/* <!-- end of item -->
                        <!-- item --> */}
                        <div class = "sub-menu-item">
                        <ul>
                            <li><a href = "#">Plans & pricing</a></li>
                            <li><a href = "#">Product updates</a></li>
                            <li><a href = "#">Customers</a></li>
                            <li><a href = "#">Security</a></li>
                            <li><a href = "#">Support</a></li>
                            <li><a href = "#">Learn</a></li>
                            <li><a href = "#">Integration</a></li>
                        </ul>
                        </div>
                        {/* <!-- end of item --> */}
                    </div>
                    </li>

                    <li>
                    <a href = "#" class = "menu-link">
                        Education
                        <span class = "drop-icon">
                        <i class = "fas fa-chevron-down"></i>
                        </span>
                    </a>
                    <div class = "sub-menu">
                        {/* <!-- item --> */}
                        <div class = "sub-menu-item">
                        <h4>Best Practices</h4>
                        <ul>
                            <li><a href = "#">Overview</a></li>
                            <li><a href = "#">Design Maturity Model</a></li>
                            <li><a href = "#">Books</a></li>
                            <li><a href = "#">Podcasts</a></li>
                            <li><a href = "#">Conversations</a></li>
                        </ul>
                        </div>
                        {/* <!-- end of item -->
                        <!-- item --> */}
                        <div class = "sub-menu-item">
                        <h4>Industry Insights</h4>
                        <ul>
                            <li><a href = "#">Total Economic Impact of EduVision</a></li>
                            <li><a href = "#">Product Design Hiring Report</a></li>
                            <li><a href = "#">Design Trends Report: Talent</a></li>
                            <li><a href = "#">The Outsize Cost of a Broken Design Process</a></li>
                            <li><a href = "#">The Design Genome Project</a></li>
                        </ul>
                        </div>
                        {/* <!-- end of item -->
                        <!-- item --> */}
                        <div class = "sub-menu-item">
                        <h4>Films</h4>
                        <ul>
                            <li><a href = "#">Squads</a></li>
                            <li><a href = "#">Design Disruptors</a></li>
                            <li><a href = "#">The Loop</a></li>
                        </ul>
                        </div>
                         {/* <!-- end of item -->
                        <!-- item --> */}
                        <div class = "sub-menu-item">
                        <h4>Learn</h4>
                        <ul>
                            <li><a href = "#">Explore</a></li>
                            <li><a href = "#">Course Catalog</a></li>
                        </ul>
                        </div>
                    </div>
                    </li>

                    <li>
                    <a href = "#" class = "menu-link">
                        Blog
                        <span class = "drop-icon">
                        <i class = "fas fa-chevron-down"></i>
                        </span>
                    </a>
                    <div class = "sub-menu">
                        {/* <!-- item --> */}
                        <div class = "sub-menu-item">
                        <ul>
                            <li><a href = "#">All Topics</a></li>
                            <li><a href = "#">Teams</a></li>
                            <li><a href = "#">Process</a></li>
                            <li><a href = "#">Remote work</a></li>
                            <li><a href = "#">Design resources videos</a></li>
                            <li><a href = "#">Videos</a></li>
                        </ul>
                        </div>
                    </div>
                    </li>

                    <li>
                    <a href = "#" class = "menu-link">
                        Community & Event
                        <span class = "drop-icon">
                        <i class = "fas fa-chevron-down"></i>
                        </span>
                    </a>
                    <div class = "sub-menu">
                        {/* <!-- item --> */}
                        <div class = "sub-menu-item">
                        <h4>Leadership & Innovation</h4>
                        <ul>
                            <li><a href = "#">Design Leadership Forum</a></li>
                            <small>Learn from our industry's best.</small>
                            <li><a href = "#">Design Forward Fund</a></li>
                            <small>See how we invest in design's future</small>
                        </ul>
                        </div>
                        {/* <!-- end of item -->
                        <!-- item --> */}
                        <div class = "sub-menu-item">
                        <h4>Webinars</h4>
                        <ul>
                            <li><a href = "#">Upcoming talks</a></li>
                            <li><a href = "#">All talks</a></li>
                        </ul>
                        </div>
                        {/* <!-- end of item -->
                        <!-- item --> */}
                        <div class = "sub-menu-item">
                        <h4>Events</h4>
                        <ul>
                            <li><a href = "#">Upcoming events</a></li>
                        </ul>
                        </div>
                        {/* <!-- end of item --> */}
                    </div>
                    </li>

                    <li>
                    <a href = "#">Enterprise</a>
                    </li>
                </ul>
                </div>
                <button class="signin">Sign in</button>
                <button class="signup">Sign up free</button>
            </nav>
        </div>
    );
};

export default Navbar;