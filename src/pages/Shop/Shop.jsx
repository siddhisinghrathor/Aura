import { useState, useMemo, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import CartDrawer from "../../components/CartDrawer/CartDrawer";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";
import useProducts from "../../hooks/useProducts";
import styles from "./Shop.module.scss";

function Shop() {
  const { products, loading, error } = useProducts();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Featured");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleResetFilters = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setMinRating(0);
    setOnlyInStock(false);
    setSearchQuery("");
    setSortBy("Featured");
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    // Categories filter
    if (selectedCategories.length > 0) {
      result = result.filter((p) => {
        return selectedCategories.some((cat) => {
          if (cat === "Wellness Kits") return p.category === "Wellness";
          return p.category === cat;
        });
      });
    }

    // Price ranges
    if (selectedPrices.length > 0) {
      result = result.filter((p) => {
        return selectedPrices.some((range) => {
          if (range === "0-500") return p.price >= 0 && p.price <= 500;
          if (range === "500-1000") return p.price >= 500 && p.price <= 1000;
          if (range === "1000+") return p.price >= 1000;
          return true;
        });
      });
    }

    // Rating
    if (minRating > 0) {
      result = result.filter((p) => (p.rating?.rate || 0) >= minRating);
    }

    // Stock check
    if (onlyInStock) {
      result = result.filter((p) => p.price > 0);
    }

    // Sorting
    if (sortBy === "Most Popular") {
      result.sort((a, b) => (b.rating?.count || 0) - (a.rating?.count || 0));
    } else if (sortBy === "Highest Rated") {
      result.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));
    } else if (sortBy === "Price Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Price High to Low") {
      result.sort((a, b) => b.price - a.price);
    } else {
      // Default (Featured / Order by ID)
      result.sort((a, b) => Number(a.id) - Number(b.id));
    }

    return result;
  }, [products, searchQuery, selectedCategories, selectedPrices, minRating, onlyInStock, sortBy]);

  return (
    <>
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <main className={styles.shopPage}>
        <div className={styles.shopContainer}>
          {/* Breadcrumb */}
          <nav className={styles.breadcrumb} aria-label="breadcrumb">
            <span onClick={() => window.location.href = "/"}>Home</span>
            <span className={styles.separator}>/</span>
            <span className={styles.active}>Shop</span>
          </nav>

          {/* Page Header */}
          <header className={styles.shopHeader}>
            <h1 className={styles.pageTitle}>Women's Wellness Essentials</h1>
            <p className={styles.subheading}>
              Explore safe, comfortable and thoughtfully designed products for everyday care.
            </p>
          </header>

          {/* Top Toolbar */}
          <section className={styles.toolbar}>
            <div className={styles.toolbarLeft}>
              <span className={styles.productCount}>
                Showing <strong>{filteredProducts.length}</strong> of {products.length} products
              </span>
              <button 
                className={styles.mobileFilterToggle} 
                onClick={() => setIsMobileFilterOpen(true)}
              >
                Filters
              </button>
            </div>
            
            <div className={styles.toolbarRight}>
              {/* Search Bar */}
              <div className={styles.searchContainer}>
                <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                  aria-label="Search products"
                />
              </div>

              {/* Sort Dropdown */}
              <div className={styles.sortContainer}>
                <span className={styles.sortLabel}>Sort By:</span>
                <select 
                  id="shop-sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={styles.sortSelect}
                  aria-label="Sort products"
                >
                  <option value="Featured">Featured</option>
                  <option value="Most Popular">Most Popular</option>
                  <option value="Highest Rated">Highest Rated</option>
                  <option value="Price Low to High">Price Low to High</option>
                  <option value="Price High to Low">Price High to Low</option>
                </select>
              </div>
            </div>
          </section>

          {/* Main Layout Area */}
          <div className={styles.mainLayout}>
            {/* Desktop Sticky Filters Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.filterSection}>
                <h3 className={styles.filterSectionTitle}>Categories</h3>
                <div className={styles.filterOptions}>
                  {["Period Care", "Intimate Care", "Self Care", "Wellness Kits"].map((cat) => (
                    <label key={cat} className={styles.checkboxLabel}>
                      <input 
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedCategories(prev => [...prev, cat]);
                          } else {
                            setSelectedCategories(prev => prev.filter(c => c !== cat));
                          }
                        }}
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className={styles.filterSection}>
                <h3 className={styles.filterSectionTitle}>Price Range</h3>
                <div className={styles.filterOptions}>
                  {[
                    { label: "₹0 - ₹500", value: "0-500" },
                    { label: "₹500 - ₹1000", value: "500-1000" },
                    { label: "₹1000+", value: "1000+" }
                  ].map((range) => (
                    <label key={range.value} className={styles.checkboxLabel}>
                      <input 
                        type="checkbox"
                        checked={selectedPrices.includes(range.value)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedPrices(prev => [...prev, range.value]);
                          } else {
                            setSelectedPrices(prev => prev.filter(r => r !== range.value));
                          }
                        }}
                      />
                      <span>{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className={styles.filterSection}>
                <h3 className={styles.filterSectionTitle}>Customer Rating</h3>
                <div className={styles.filterOptions}>
                  {[
                    { label: "4★ & above", value: 4 },
                    { label: "3★ & above", value: 3 }
                  ].map((ratingOption) => (
                    <label key={ratingOption.value} className={styles.radioLabel}>
                      <input 
                        type="radio"
                        name="rating-filter"
                        checked={minRating === ratingOption.value}
                        onChange={() => setMinRating(ratingOption.value)}
                      />
                      <span>{ratingOption.label}</span>
                    </label>
                  ))}
                  {minRating > 0 && (
                    <button className={styles.clearRatingLink} onClick={() => setMinRating(0)}>
                      Clear rating filter
                    </button>
                  )}
                </div>
              </div>

              <div className={styles.filterSection}>
                <h3 className={styles.filterSectionTitle}>Availability</h3>
                <div className={styles.filterOptions}>
                  <label className={styles.checkboxLabel}>
                    <input 
                      type="checkbox"
                      checked={onlyInStock}
                      onChange={(e) => setOnlyInStock(e.target.checked)}
                    />
                    <span>In Stock</span>
                  </label>
                </div>
              </div>

              <button className={styles.resetAllBtn} onClick={handleResetFilters}>
                Reset All Filters
              </button>
            </aside>

            {/* Product Grid Area */}
            <div className={styles.contentArea}>
              {loading ? (
                <div className={styles.loadingSpinner}>Loading wellness essentials...</div>
              ) : filteredProducts.length > 0 ? (
                <div className={styles.productGrid}>
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className={styles.emptyState}>
                  <h3>No Products Found</h3>
                  <p>We couldn't find any products matching your filters.</p>
                  <button className={styles.resetBtn} onClick={handleResetFilters}>
                    Reset All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Filters Drawer Modal */}
      {isMobileFilterOpen && (
        <div className={styles.drawerOverlay} onClick={() => setIsMobileFilterOpen(false)}>
          <aside className={styles.mobileDrawer} onClick={(e) => e.stopPropagation()}>
            <header className={styles.drawerHeader}>
              <h3>Filters</h3>
              <button className={styles.drawerClose} onClick={() => setIsMobileFilterOpen(false)}>✕</button>
            </header>

            <div className={styles.drawerContent}>
              {/* Category Options */}
              <div className={styles.drawerFilterSection}>
                <h4>Categories</h4>
                {["Period Care", "Intimate Care", "Self Care", "Wellness Kits"].map((cat) => (
                  <label key={cat} className={styles.checkboxLabel}>
                    <input 
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedCategories(prev => [...prev, cat]);
                        } else {
                          setSelectedCategories(prev => prev.filter(c => c !== cat));
                        }
                      }}
                    />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>

              {/* Price Options */}
              <div className={styles.drawerFilterSection}>
                <h4>Price Range</h4>
                {[
                  { label: "₹0 - ₹500", value: "0-500" },
                  { label: "₹500 - ₹1000", value: "500-1000" },
                  { label: "₹1000+", value: "1000+" }
                ].map((range) => (
                  <label key={range.value} className={styles.checkboxLabel}>
                    <input 
                      type="checkbox"
                      checked={selectedPrices.includes(range.value)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedPrices(prev => [...prev, range.value]);
                        } else {
                          setSelectedPrices(prev => prev.filter(r => r !== range.value));
                        }
                      }}
                    />
                    <span>{range.label}</span>
                  </label>
                ))}
              </div>

              {/* Rating Options */}
              <div className={styles.drawerFilterSection}>
                <h4>Customer Rating</h4>
                {[
                  { label: "4★ & above", value: 4 },
                  { label: "3★ & above", value: 3 }
                ].map((ratingOption) => (
                  <label key={ratingOption.value} className={styles.radioLabel}>
                    <input 
                      type="radio"
                      name="mobile-rating-filter"
                      checked={minRating === ratingOption.value}
                      onChange={() => setMinRating(ratingOption.value)}
                    />
                    <span>{ratingOption.label}</span>
                  </label>
                ))}
                {minRating > 0 && (
                  <button className={styles.clearRatingLink} onClick={() => setMinRating(0)}>
                    Clear rating filter
                  </button>
                )}
              </div>

              {/* Availability */}
              <div className={styles.drawerFilterSection}>
                <h4>Availability</h4>
                <label className={styles.checkboxLabel}>
                  <input 
                    type="checkbox"
                    checked={onlyInStock}
                    onChange={(e) => setOnlyInStock(e.target.checked)}
                  />
                  <span>In Stock</span>
                </label>
              </div>
            </div>

            <footer className={styles.drawerFooter}>
              <button className={styles.drawerResetBtn} onClick={handleResetFilters}>
                Reset
              </button>
              <button className={styles.drawerApplyBtn} onClick={() => setIsMobileFilterOpen(false)}>
                Apply Filters
              </button>
            </footer>
          </aside>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Shop;
