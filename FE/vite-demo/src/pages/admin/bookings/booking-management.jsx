import React, { useState, useEffect } from 'react';
import './booking-management.css';

const BookingManagement = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterDate, setFilterDate] = useState('');
  const [selectedBookings, setSelectedBookings] = useState([]);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [currentBooking, setCurrentBooking] = useState(null);

  // Mock data - replace with actual API calls
  useEffect(() => {
    const mockBookings = [
      {
        id: 1,
        bookingDate: '2024-06-15',
        timeSlot: '09:00-10:00',
        customer: {
          name: 'Nguyễn Văn A',
          email: 'nguyen.a@example.com',
          phone: '0901234567'
        },
        consultant: {
          name: 'BS. Trần Thị B',
          specialization: 'Sức khỏe sinh sản'
        },
        service: 'Tư vấn sức khỏe giới tính',
        status: 'confirmed',
        notes: 'Khách hàng cần tư vấn về vấn đề hormone',
        createdAt: '2024-06-10T14:30:00',
        price: 500000,
        paymentStatus: 'paid'
      },
      {
        id: 2,
        bookingDate: '2024-06-16',
        timeSlot: '10:30-11:30',
        customer: {
          name: 'Trần Thị C',
          email: 'tran.c@example.com',
          phone: '0912345678'
        },
        consultant: {
          name: 'BS. Lê Văn D',
          specialization: 'Nội tiết'
        },
        service: 'Khám tổng quát',
        status: 'pending',
        notes: 'Lần đầu khám, cần tư vấn chi tiết',
        createdAt: '2024-06-11T09:15:00',
        price: 750000,
        paymentStatus: 'pending'
      },
      {
        id: 3,
        bookingDate: '2024-06-17',
        timeSlot: '14:00-15:00',
        customer: {
          name: 'Phạm Minh E',
          email: 'pham.e@example.com',
          phone: '0923456789'
        },
        consultant: {
          name: 'BS. Nguyễn Thị F',
          specialization: 'Tâm lý học'
        },
        service: 'Tư vấn tâm lý',
        status: 'completed',
        notes: 'Đã hoàn thành buổi tư vấn',
        createdAt: '2024-06-05T16:45:00',
        price: 600000,
        paymentStatus: 'paid'
      },
      {
        id: 4,
        bookingDate: '2024-06-18',
        timeSlot: '08:30-09:30',
        customer: {
          name: 'Lý Thị G',
          email: 'ly.g@example.com',
          phone: '0934567890'
        },
        consultant: {
          name: 'BS. Hoàng Văn H',
          specialization: 'Sản phụ khoa'
        },
        service: 'Khám sức khỏe sinh sản',
        status: 'cancelled',
        notes: 'Khách hàng hủy do bận việc đột xuất',
        createdAt: '2024-06-12T11:20:00',
        price: 800000,
        paymentStatus: 'refunded'
      }
    ];
    
    setBookings(mockBookings);
    setFilteredBookings(mockBookings);
  }, []);

  // Filter and search logic
  useEffect(() => {
    let filtered = bookings;

    if (searchTerm) {
      filtered = filtered.filter(booking =>
        booking.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.consultant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.service.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterStatus !== 'all') {
      filtered = filtered.filter(booking => booking.status === filterStatus);
    }

    if (filterDate) {
      filtered = filtered.filter(booking => booking.bookingDate === filterDate);
    }

    setFilteredBookings(filtered);
  }, [bookings, searchTerm, filterStatus, filterDate]);

  const handleSelectBooking = (bookingId) => {
    setSelectedBookings(prev => 
      prev.includes(bookingId) 
        ? prev.filter(id => id !== bookingId)
        : [...prev, bookingId]
    );
  };

  const handleSelectAll = () => {
    if (selectedBookings.length === filteredBookings.length) {
      setSelectedBookings([]);
    } else {
      setSelectedBookings(filteredBookings.map(booking => booking.id));
    }
  };

  const handleStatusChange = (bookingId, newStatus) => {
    setBookings(prev => prev.map(booking => 
      booking.id === bookingId 
        ? { ...booking, status: newStatus }
        : booking
    ));
  };

  const handleViewDetail = (booking) => {
    setCurrentBooking(booking);
    setShowDetailModal(true);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'confirmed';
      case 'pending': return 'pending';
      case 'completed': return 'completed';
      case 'cancelled': return 'cancelled';
      default: return 'default';
    }
  };

  const getStatusName = (status) => {
    switch (status) {
      case 'confirmed': return 'Đã xác nhận';
      case 'pending': return 'Chờ xác nhận';
      case 'completed': return 'Hoàn thành';
      case 'cancelled': return 'Đã hủy';
      default: return status;
    }
  };

  const getPaymentStatusColor = (status) => {
    switch (status) {
      case 'paid': return 'paid';
      case 'pending': return 'pending';
      case 'refunded': return 'refunded';
      default: return 'default';
    }
  };

  const getPaymentStatusName = (status) => {
    switch (status) {
      case 'paid': return 'Đã thanh toán';
      case 'pending': return 'Chờ thanh toán';
      case 'refunded': return 'Đã hoàn tiền';
      default: return status;
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  return (
    <div className="booking-management">
      <div className="page-header">
        <h1>📅 Quản lý đặt lịch</h1>
        <div className="header-actions">
          <button className="btn btn-primary">
            <span className="btn-icon">➕</span>
            Tạo lịch hẹn
          </button>
          <button className="btn btn-secondary">
            <span className="btn-icon">📊</span>
            Báo cáo
          </button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="booking-stats">
        <div className="stat-card pending">
          <div className="stat-icon">⏳</div>
          <div className="stat-content">
            <h3>Chờ xác nhận</h3>
            <div className="stat-number">
              {bookings.filter(b => b.status === 'pending').length}
            </div>
          </div>
        </div>
        <div className="stat-card confirmed">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <h3>Đã xác nhận</h3>
            <div className="stat-number">
              {bookings.filter(b => b.status === 'confirmed').length}
            </div>
          </div>
        </div>
        <div className="stat-card completed">
          <div className="stat-icon">🎉</div>
          <div className="stat-content">
            <h3>Hoàn thành</h3>
            <div className="stat-number">
              {bookings.filter(b => b.status === 'completed').length}
            </div>
          </div>
        </div>
        <div className="stat-card cancelled">
          <div className="stat-icon">❌</div>
          <div className="stat-content">
            <h3>Đã hủy</h3>
            <div className="stat-number">
              {bookings.filter(b => b.status === 'cancelled').length}
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="filters-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="🔍 Tìm kiếm theo tên khách hàng, bác sĩ, dịch vụ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="filter-controls">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="filter-select"
          >
            <option value="all">Tất cả trạng thái</option>
            <option value="pending">Chờ xác nhận</option>
            <option value="confirmed">Đã xác nhận</option>
            <option value="completed">Hoàn thành</option>
            <option value="cancelled">Đã hủy</option>
          </select>

          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="filter-date"
          />

          {selectedBookings.length > 0 && (
            <button className="btn btn-danger">
              🗑️ Xóa ({selectedBookings.length})
            </button>
          )}
        </div>
      </div>

      {/* Bookings Table */}
      <div className="table-container">
        <table className="bookings-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={selectedBookings.length === filteredBookings.length && filteredBookings.length > 0}
                  onChange={handleSelectAll}
                />
              </th>
              <th>Thông tin lịch hẹn</th>
              <th>Khách hàng</th>
              <th>Bác sĩ & Dịch vụ</th>
              <th>Trạng thái</th>
              <th>Thanh toán</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map(booking => (
              <tr key={booking.id} className={selectedBookings.includes(booking.id) ? 'selected' : ''}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedBookings.includes(booking.id)}
                    onChange={() => handleSelectBooking(booking.id)}
                  />
                </td>
                <td>
                  <div className="booking-info">
                    <div className="booking-id">#{booking.id}</div>
                    <div className="booking-date">
                      📅 {new Date(booking.bookingDate).toLocaleDateString('vi-VN')}
                    </div>
                    <div className="booking-time">
                      🕐 {booking.timeSlot}
                    </div>
                    <div className="booking-created">
                      Tạo: {new Date(booking.createdAt).toLocaleDateString('vi-VN')}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="customer-info">
                    <div className="customer-name">{booking.customer.name}</div>
                    <div className="customer-email">📧 {booking.customer.email}</div>
                    <div className="customer-phone">📱 {booking.customer.phone}</div>
                  </div>
                </td>
                <td>
                  <div className="service-info">
                    <div className="consultant-name">👨‍⚕️ {booking.consultant.name}</div>
                    <div className="consultant-spec">{booking.consultant.specialization}</div>
                    <div className="service-name">🏥 {booking.service}</div>
                  </div>
                </td>
                <td>
                  <select
                    value={booking.status}
                    onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                    className={`status-select ${getStatusColor(booking.status)}`}
                  >
                    <option value="pending">Chờ xác nhận</option>
                    <option value="confirmed">Đã xác nhận</option>
                    <option value="completed">Hoàn thành</option>
                    <option value="cancelled">Đã hủy</option>
                  </select>
                </td>
                <td>
                  <div className="payment-info">
                    <div className="payment-amount">
                      {formatCurrency(booking.price)}
                    </div>
                    <span className={`payment-status ${getPaymentStatusColor(booking.paymentStatus)}`}>
                      {getPaymentStatusName(booking.paymentStatus)}
                    </span>
                  </div>
                </td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="btn btn-sm btn-info"
                      onClick={() => handleViewDetail(booking)}
                      title="Xem chi tiết"
                    >
                      👁️
                    </button>
                    <button
                      className="btn btn-sm btn-secondary"
                      title="Chỉnh sửa"
                    >
                      ✏️
                    </button>
                    <button
                      className="btn btn-sm btn-success"
                      title="Liên hệ khách hàng"
                    >
                      📞
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredBookings.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">📅</div>
            <h3>Không tìm thấy lịch hẹn</h3>
            <p>Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <span className="pagination-info">
          Hiển thị {filteredBookings.length} trong tổng số {bookings.length} lịch hẹn
        </span>
        <div className="pagination-controls">
          <button className="btn btn-sm">← Trước</button>
          <span className="page-numbers">
            <button className="btn btn-sm active">1</button>
            <button className="btn btn-sm">2</button>
            <button className="btn btn-sm">3</button>
          </span>
          <button className="btn btn-sm">Sau →</button>
        </div>
      </div>

      {/* Detail Modal */}
      {showDetailModal && currentBooking && (
        <div className="modal-overlay" onClick={() => setShowDetailModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Chi tiết lịch hẹn #{currentBooking.id}</h2>
              <button 
                className="modal-close"
                onClick={() => setShowDetailModal(false)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <div className="detail-section">
                <h3>Thông tin lịch hẹn</h3>
                <p><strong>Ngày:</strong> {new Date(currentBooking.bookingDate).toLocaleDateString('vi-VN')}</p>
                <p><strong>Giờ:</strong> {currentBooking.timeSlot}</p>
                <p><strong>Dịch vụ:</strong> {currentBooking.service}</p>
                <p><strong>Giá:</strong> {formatCurrency(currentBooking.price)}</p>
              </div>
              
              <div className="detail-section">
                <h3>Thông tin khách hàng</h3>
                <p><strong>Tên:</strong> {currentBooking.customer.name}</p>
                <p><strong>Email:</strong> {currentBooking.customer.email}</p>
                <p><strong>Điện thoại:</strong> {currentBooking.customer.phone}</p>
              </div>
              
              <div className="detail-section">
                <h3>Thông tin bác sĩ</h3>
                <p><strong>Tên:</strong> {currentBooking.consultant.name}</p>
                <p><strong>Chuyên khoa:</strong> {currentBooking.consultant.specialization}</p>
              </div>
              
              <div className="detail-section">
                <h3>Ghi chú</h3>
                <p>{currentBooking.notes}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingManagement;
