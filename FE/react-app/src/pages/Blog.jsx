import { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { FaCalendar, FaUser, FaTags, FaArrowRight } from "react-icons/fa";
import "./Blog.css";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Mock data for medical articles
    const mockArticles = [
      {
        id: 1,
        title: "10 Cách Phòng Ngừa Bệnh Tim Mạch Hiệu Quả",
        excerpt: "Bệnh tim mạch là nguyên nhân hàng đầu gây tử vong trên thế giới. Tìm hiểu các cách phòng ngừa đơn giản nhưng hiệu quả.",
        content: "Chi tiết về cách phòng ngừa bệnh tim mạch...",
        author: "BS. Nguyễn Văn A",
        date: "2025-05-25",
        category: "Tim mạch",
        image: "/api/placeholder/400/250",
        readTime: "5 phút"
      },
      {
        id: 2,
        title: "Dinh Dưỡng Hợp Lý Cho Người Cao Tuổi",
        excerpt: "Hướng dẫn chi tiết về chế độ dinh dưỡng phù hợp cho người cao tuổi để duy trì sức khỏe tốt.",
        content: "Chi tiết về dinh dưỡng cho người cao tuổi...",
        author: "BS. Trần Thị B",
        date: "2025-05-23",
        category: "Dinh dưỡng",
        image: "/api/placeholder/400/250",
        readTime: "7 phút"
      },
      {
        id: 3,
        title: "Tầm Quan Trọng Của Khám Sức Khỏe Định Kỳ",
        excerpt: "Khám sức khỏe định kỳ giúp phát hiện sớm các bệnh lý, từ đó có phương án điều trị kịp thời và hiệu quả.",
        content: "Chi tiết về tầm quan trọng của khám sức khỏe định kỳ...",
        author: "BS. Lê Văn C",
        date: "2025-05-20",
        category: "Tổng quát",
        image: "/api/placeholder/400/250",
        readTime: "4 phút"
      },
      {
        id: 4,
        title: "Cách Chăm Sóc Sức Khỏe Tâm Thần Trong Đại Dịch",
        excerpt: "Đại dịch COVID-19 đã ảnh hưởng không nhỏ đến sức khỏe tâm thần. Học cách bảo vệ tinh thần của bạn.",
        content: "Chi tiết về chăm sóc sức khỏe tâm thần...",
        author: "BS. Phạm Thị D",
        date: "2025-05-18",
        category: "Tâm thần",
        image: "/api/placeholder/400/250",
        readTime: "6 phút"
      },
      {
        id: 5,
        title: "Bí Quyết Tăng Cường Hệ Miễn Dịch Tự Nhiên",
        excerpt: "Khám phá những cách tự nhiên để tăng cường hệ miễn dịch và bảo vệ cơ thể khỏi các bệnh tật.",
        content: "Chi tiết về tăng cường hệ miễn dịch...",
        author: "BS. Hoàng Văn E",
        date: "2025-05-15",
        category: "Miễn dịch",
        image: "/api/placeholder/400/250",
        readTime: "8 phút"
      }
    ];
    setArticles(mockArticles);
  }, []);

  const categories = ["all", "Tim mạch", "Dinh dưỡng", "Tổng quát", "Tâm thần", "Miễn dịch"];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Layout>
      <div className="blog-container">
        <div className="blog-hero">
          <div className="hero-content">
            <h1>Tin Tức Y Khoa</h1>
            <p>Cập nhật những thông tin y khoa mới nhất từ đội ngũ chuyên gia hàng đầu</p>
          </div>
        </div>

        <div className="blog-content">
          <div className="blog-filters">
            <div className="search-box">
              <input
                type="text"
                placeholder="Tìm kiếm bài viết..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === "all" ? "Tất cả" : category}
                </button>
              ))}
            </div>
          </div>

          <div className="articles-grid">
            {filteredArticles.map(article => (
              <article key={article.id} className="article-card">
                <div className="article-image">
                  <img src={article.image} alt={article.title} />
                  <div className="article-category">
                    <FaTags className="category-icon" />
                    {article.category}
                  </div>
                </div>
                
                <div className="article-content">
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-excerpt">{article.excerpt}</p>
                  
                  <div className="article-meta">
                    <div className="meta-item">
                      <FaUser className="meta-icon" />
                      <span>{article.author}</span>
                    </div>
                    <div className="meta-item">
                      <FaCalendar className="meta-icon" />
                      <span>{formatDate(article.date)}</span>
                    </div>
                    <div className="meta-item">
                      <span className="read-time">{article.readTime}</span>
                    </div>
                  </div>
                  
                  <button className="read-more-btn">
                    Đọc thêm
                    <FaArrowRight className="arrow-icon" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="no-articles">
              <p>Không tìm thấy bài viết nào phù hợp với tìm kiếm của bạn.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
