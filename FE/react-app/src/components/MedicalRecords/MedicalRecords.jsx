import { useState, useEffect } from 'react';
import { FaFileMedical, FaCalendarAlt, FaUser, FaDownload, FaEye, FaSearch } from 'react-icons/fa';
import './MedicalRecords.css';

const MedicalRecords = () => {
  const [records, setRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock medical records data
    const mockRecords = [
      {
        id: 1,
        date: '2025-05-15',
        type: 'Khám tổng quát',
        doctor: 'BS. Nguyễn Văn A',
        department: 'Nội tổng quát',
        diagnosis: 'Khỏe mạnh bình thường',
        prescription: [
          'Vitamin C 500mg - Ngày 1 viên',
          'Vitamin D3 1000IU - Ngày 1 viên'
        ],
        notes: 'Bệnh nhân khỏe mạnh, khuyến nghị tập thể dục thường xuyên',
        status: 'Hoàn thành',
        attachments: ['KetQuaXetNghiem_20250515.pdf', 'HinhAnhSieuAm_20250515.jpg']
      },
      {
        id: 2,
        date: '2025-04-20',
        type: 'Xét nghiệm máu',
        doctor: 'BS. Trần Thị B',
        department: 'Xét nghiệm',
        diagnosis: 'Chỉ số cholesterol cao nhẹ',
        prescription: [
          'Atorvastatin 20mg - Tối 1 viên',
          'Omega-3 1000mg - Ngày 1 viên'
        ],
        notes: 'Khuyến nghị ăn ít chất béo, tăng cường rau xanh',
        status: 'Hoàn thành',
        attachments: ['KetQuaXetNghiemMau_20250420.pdf']
      },
      {
        id: 3,
        date: '2025-03-10',
        type: 'Khám tim mạch',
        doctor: 'TS.BS Lê Văn C',
        department: 'Tim mạch',
        diagnosis: 'Rối loạn nhịp tim nhẹ',
        prescription: [
          'Metoprolol 50mg - Sáng 1 viên',
          'Aspirin 75mg - Tối 1 viên'
        ],
        notes: 'Tái khám sau 3 tháng, hạn chế caffeine',
        status: 'Đang theo dõi',
        attachments: ['DiendoTim_20250310.pdf', 'SieuAmTim_20250310.pdf']
      },
      {
        id: 4,
        date: '2025-02-05',
        type: 'Khám da liễu',
        doctor: 'BS. Phạm Thị D',
        department: 'Da liễu',
        diagnosis: 'Viêm da dị ứng',
        prescription: [
          'Cetirizine 10mg - Tối 1 viên',
          'Kem bôi Hydrocortisone 1% - Ngày 2 lần'
        ],
        notes: 'Tránh tiếp xúc với chất gây dị ứng, giữ da sạch khô',
        status: 'Hoàn thành',
        attachments: []
      }
    ];

    setTimeout(() => {
      setRecords(mockRecords);
      setFilteredRecords(mockRecords);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = records;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(record =>
        record.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.diagnosis.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by type
    if (filterType !== 'all') {
      filtered = filtered.filter(record => {
        switch (filterType) {
          case 'examination':
            return record.type.includes('Khám');
          case 'test':
            return record.type.includes('Xét nghiệm');
          case 'ongoing':
            return record.status === 'Đang theo dõi';
          default:
            return true;
        }
      });
    }

    setFilteredRecords(filtered);
  }, [searchTerm, filterType, records]);

  const handleViewRecord = (record) => {
    setSelectedRecord(record);
  };

  const handleDownloadAttachment = (filename) => {
    // Mock download functionality
    alert(`Đang tải xuống: ${filename}`);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('vi-VN');
  };

  if (isLoading) {
    return (
      <div className="medical-records">
        <div className="loading-container">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Đang tải hồ sơ y tế...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="medical-records">
      <div className="records-header">
        <h2>
          <FaFileMedical className="header-icon" />
          Hồ Sơ Y Tế
        </h2>
        <p>Xem và quản lý lịch sử khám bệnh của bạn</p>
      </div>

      <div className="records-controls">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Tìm kiếm theo loại khám, bác sĩ, chẩn đoán..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-tabs">
          <button
            className={filterType === 'all' ? 'active' : ''}
            onClick={() => setFilterType('all')}
          >
            Tất cả
          </button>
          <button
            className={filterType === 'examination' ? 'active' : ''}
            onClick={() => setFilterType('examination')}
          >
            Khám bệnh
          </button>
          <button
            className={filterType === 'test' ? 'active' : ''}
            onClick={() => setFilterType('test')}
          >
            Xét nghiệm
          </button>
          <button
            className={filterType === 'ongoing' ? 'active' : ''}
            onClick={() => setFilterType('ongoing')}
          >
            Đang theo dõi
          </button>
        </div>
      </div>

      <div className="records-list">
        {filteredRecords.length === 0 ? (
          <div className="no-records">
            <FaFileMedical className="no-records-icon" />
            <h3>Không tìm thấy hồ sơ</h3>
            <p>Không có hồ sơ y tế nào phù hợp với tìm kiếm của bạn.</p>
          </div>
        ) : (
          filteredRecords.map((record) => (
            <div key={record.id} className="record-card">
              <div className="record-header">
                <div className="record-date">
                  <FaCalendarAlt className="date-icon" />
                  {formatDate(record.date)}
                </div>
                <div className={`record-status ${record.status === 'Hoàn thành' ? 'completed' : 'ongoing'}`}>
                  {record.status}
                </div>
              </div>

              <div className="record-content">
                <h3>{record.type}</h3>
                <div className="record-details">
                  <div className="detail-item">
                    <FaUser className="detail-icon" />
                    <span>{record.doctor} - {record.department}</span>
                  </div>
                  <div className="diagnosis">
                    <strong>Chẩn đoán:</strong> {record.diagnosis}
                  </div>
                </div>

                <div className="record-actions">
                  <button
                    className="action-btn view-btn"
                    onClick={() => handleViewRecord(record)}
                  >
                    <FaEye /> Xem chi tiết
                  </button>
                  {record.attachments.length > 0 && (
                    <div className="attachments">
                      {record.attachments.map((filename, index) => (
                        <button
                          key={index}
                          className="action-btn download-btn"
                          onClick={() => handleDownloadAttachment(filename)}
                        >
                          <FaDownload /> {filename}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Record Detail Modal */}
      {selectedRecord && (
        <div className="modal-overlay" onClick={() => setSelectedRecord(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Chi tiết hồ sơ khám bệnh</h3>
              <button className="close-btn" onClick={() => setSelectedRecord(null)}>×</button>
            </div>

            <div className="modal-body">
              <div className="detail-section">
                <h4>Thông tin chung</h4>
                <div className="detail-grid">
                  <div className="detail-item">
                    <span className="label">Ngày khám:</span>
                    <span className="value">{formatDate(selectedRecord.date)}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Loại khám:</span>
                    <span className="value">{selectedRecord.type}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Bác sĩ:</span>
                    <span className="value">{selectedRecord.doctor}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Khoa:</span>
                    <span className="value">{selectedRecord.department}</span>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h4>Chẩn đoán</h4>
                <p>{selectedRecord.diagnosis}</p>
              </div>

              <div className="detail-section">
                <h4>Đơn thuốc</h4>
                <ul className="prescription-list">
                  {selectedRecord.prescription.map((medicine, index) => (
                    <li key={index}>{medicine}</li>
                  ))}
                </ul>
              </div>

              <div className="detail-section">
                <h4>Ghi chú</h4>
                <p>{selectedRecord.notes}</p>
              </div>

              {selectedRecord.attachments.length > 0 && (
                <div className="detail-section">
                  <h4>Tài liệu đính kèm</h4>
                  <div className="attachments-list">
                    {selectedRecord.attachments.map((filename, index) => (
                      <button
                        key={index}
                        className="attachment-item"
                        onClick={() => handleDownloadAttachment(filename)}
                      >
                        <FaDownload className="attachment-icon" />
                        {filename}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicalRecords;
