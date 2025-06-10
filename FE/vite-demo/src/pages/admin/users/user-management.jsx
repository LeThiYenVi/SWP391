import React, { useState, useEffect } from 'react';
import './user-management.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Mock data - replace with actual API calls
  useEffect(() => {
    const mockUsers = [
      {
        id: 1,
        username: 'admin01',
        fullName: 'Nguyễn Văn Admin',
        email: 'admin@gendercare.com',
        phoneNumber: '0901234567',
        roleName: 'ADMIN',
        gender: 'Nam',
        dateOfBirth: '1985-05-15',
        address: 'Hà Nội',
        createdAt: '2024-01-15',
        isDeleted: false,
        status: 'active'
      },
      {
        id: 2,
        username: 'doctor01',
        fullName: 'Trần Thị Bác Sĩ',
        email: 'doctor@gendercare.com',
        phoneNumber: '0912345678',
        roleName: 'CONSULTANT',
        gender: 'Nữ',
        dateOfBirth: '1980-08-20',
        address: 'TP.HCM',
        createdAt: '2024-01-10',
        isDeleted: false,
        status: 'active'
      },
      {
        id: 3,
        username: 'user001',
        fullName: 'Lê Văn Khách',
        email: 'user@example.com',
        phoneNumber: '0923456789',
        roleName: 'CUSTOMER',
        gender: 'Nam',
        dateOfBirth: '1992-12-10',
        address: 'Đà Nẵng',
        createdAt: '2024-02-01',
        isDeleted: false,
        status: 'active'
      },
      {
        id: 4,
        username: 'user002',
        fullName: 'Phạm Thị Khách Hàng',
        email: 'customer@example.com',
        phoneNumber: '0934567890',
        roleName: 'CUSTOMER',
        gender: 'Nữ',
        dateOfBirth: '1988-03-25',
        address: 'Cần Thơ',
        createdAt: '2024-02-05',
        isDeleted: false,
        status: 'inactive'
      }
    ];
    
    setUsers(mockUsers);
    setFilteredUsers(mockUsers);
  }, []);

  // Filter and search logic
  useEffect(() => {
    let filtered = users;

    if (searchTerm) {
      filtered = filtered.filter(user =>
        user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterRole !== 'all') {
      filtered = filtered.filter(user => user.roleName === filterRole);
    }

    setFilteredUsers(filtered);
  }, [users, searchTerm, filterRole]);

  const handleSelectUser = (userId) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const handleSelectAll = () => {
    if (selectedUsers.length === filteredUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(filteredUsers.map(user => user.id));
    }
  };

  const handleDeleteUsers = () => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa ${selectedUsers.length} người dùng?`)) {
      setUsers(prev => prev.filter(user => !selectedUsers.includes(user.id)));
      setSelectedUsers([]);
    }
  };

  const handleEditUser = (user) => {
    setCurrentUser(user);
    setShowEditModal(true);
  };

  const handleToggleStatus = (userId) => {
    setUsers(prev => prev.map(user => 
      user.id === userId 
        ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' }
        : user
    ));
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'ADMIN': return 'admin';
      case 'CONSULTANT': return 'consultant';
      case 'CUSTOMER': return 'customer';
      default: return 'default';
    }
  };

  const getRoleName = (role) => {
    switch (role) {
      case 'ADMIN': return 'Quản trị viên';
      case 'CONSULTANT': return 'Bác sĩ tư vấn';
      case 'CUSTOMER': return 'Khách hàng';
      default: return role;
    }
  };

  return (
    <div className="user-management">
      <div className="page-header">
        <h1>👥 Quản lý người dùng</h1>
        <button 
          className="btn btn-primary"
          onClick={() => setShowAddModal(true)}
        >
          <span className="btn-icon">➕</span>
          Thêm người dùng
        </button>
      </div>

      {/* Filters and Search */}
      <div className="filters-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="🔍 Tìm kiếm theo tên, email, username..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="filter-controls">
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="filter-select"
          >
            <option value="all">Tất cả vai trò</option>
            <option value="ADMIN">Quản trị viên</option>
            <option value="CONSULTANT">Bác sĩ tư vấn</option>
            <option value="CUSTOMER">Khách hàng</option>
          </select>

          {selectedUsers.length > 0 && (
            <button 
              className="btn btn-danger"
              onClick={handleDeleteUsers}
            >
              🗑️ Xóa ({selectedUsers.length})
            </button>
          )}
        </div>
      </div>

      {/* Users Table */}
      <div className="table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                  onChange={handleSelectAll}
                />
              </th>
              <th>Thông tin cá nhân</th>
              <th>Liên hệ</th>
              <th>Vai trò</th>
              <th>Trạng thái</th>
              <th>Ngày tạo</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id} className={selectedUsers.includes(user.id) ? 'selected' : ''}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => handleSelectUser(user.id)}
                  />
                </td>
                <td>
                  <div className="user-info">
                    <div className="user-avatar">
                      {user.fullName.charAt(0)}
                    </div>
                    <div className="user-details">
                      <div className="user-name">{user.fullName}</div>
                      <div className="user-username">@{user.username}</div>
                      <div className="user-meta">{user.gender} • {user.dateOfBirth}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="contact-info">
                    <div className="contact-email">📧 {user.email}</div>
                    <div className="contact-phone">📱 {user.phoneNumber}</div>
                    <div className="contact-address">📍 {user.address}</div>
                  </div>
                </td>
                <td>
                  <span className={`role-badge ${getRoleColor(user.roleName)}`}>
                    {getRoleName(user.roleName)}
                  </span>
                </td>
                <td>
                  <button
                    className={`status-toggle ${user.status}`}
                    onClick={() => handleToggleStatus(user.id)}
                  >
                    {user.status === 'active' ? '🟢 Hoạt động' : '🔴 Ngưng hoạt động'}
                  </button>
                </td>
                <td>
                  <div className="date-info">
                    {new Date(user.createdAt).toLocaleDateString('vi-VN')}
                  </div>
                </td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={() => handleEditUser(user)}
                      title="Chỉnh sửa"
                    >
                      ✏️
                    </button>
                    <button
                      className="btn btn-sm btn-info"
                      title="Xem chi tiết"
                    >
                      👁️
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      title="Xóa"
                      onClick={() => {
                        if (window.confirm('Bạn có chắc chắn muốn xóa người dùng này?')) {
                          setUsers(prev => prev.filter(u => u.id !== user.id));
                        }
                      }}
                    >
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredUsers.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">👤</div>
            <h3>Không tìm thấy người dùng</h3>
            <p>Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <span className="pagination-info">
          Hiển thị {filteredUsers.length} trong tổng số {users.length} người dùng
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
    </div>
  );
};

export default UserManagement;
