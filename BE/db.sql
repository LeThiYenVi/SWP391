CREATE TABLE [Users] (
  [UserID] INT IDENTITY(1,1) PRIMARY KEY,
  [Username] NVARCHAR(50) UNIQUE NOT NULL,
  [PasswordHash] NVARCHAR(256) NOT NULL,
  [Email] NVARCHAR(100) UNIQUE NOT NULL,
  [FullName] NVARCHAR(100) NOT NULL,
  [PhoneNumber] NVARCHAR(20),
  [RoleName] nvarchar(255) NOT NULL CHECK ([RoleName] IN ('Guest', 'Customer', 'Consultant', 'Staff', 'Manager', 'Admin')) NOT NULL,
  [Description] NVARCHAR(200),
  [DateOfBirth] DATE,
  [Address] NVARCHAR(200),
  [Gender] NVARCHAR(20),
  [MedicalHistory] NVARCHAR(1000),
  [CreatedAt] DATETIME DEFAULT (GETDATE()),
  [UpdatedAt] DATETIME DEFAULT (GETDATE()),
  [IsDeleted] BIT DEFAULT (0)
)
GO

CREATE TABLE [MenstrualCycles] (
  [CycleID] INT IDENTITY(1,1) PRIMARY KEY,
  [UserID] INT NOT NULL,
  [StartDate] DATE NOT NULL,
  [CycleLength] INT,
  [Notes] NVARCHAR(500),
  [CreatedAt] DATETIME DEFAULT (GETDATE()),
  [IsDeleted] BIT DEFAULT (0)
)
GO

CREATE TABLE [Reminders] (
  [ReminderID] INT IDENTITY(1,1) PRIMARY KEY,
  [UserID] INT NOT NULL,
  [ReminderType] nvarchar(255) NOT NULL CHECK ([ReminderType] IN ('Ovulation', 'Pill', 'Fertility')) NOT NULL,
  [ReminderDate] DATETIME NOT NULL,
  [Message] NVARCHAR(200),
  [IsSent] BIT DEFAULT (0),
  [CreatedAt] DATETIME DEFAULT (GETDATE()),
  [IsDeleted] BIT DEFAULT (0)
)
GO

CREATE TABLE [Consultants] (
  [ConsultantID] INT PRIMARY KEY,
  [Biography] NVARCHAR(1000),
  [Qualifications] NVARCHAR(500),
  [ExperienceYears] INT,
  [Specialization] NVARCHAR(100),
  [IsDeleted] BIT DEFAULT (0)
)
GO

CREATE TABLE [Consultations] (
  [ConsultationID] INT IDENTITY(1,1) PRIMARY KEY,
  [CustomerID] INT NOT NULL,
  [ConsultantID] INT NOT NULL,
  [ConsultationDate] DATETIME NOT NULL,
  [Status] nvarchar(255) NOT NULL CHECK ([Status] IN ('Scheduled', 'Completed', 'Cancelled')) NOT NULL,
  [MeetingLink] NVARCHAR(200),
  [Notes] NVARCHAR(500),
  [CreatedAt] DATETIME DEFAULT (GETDATE()),
  [IsDeleted] BIT DEFAULT (0)
)
GO

CREATE TABLE [Chat] (
  [QuestionID] INT IDENTITY(1,1) PRIMARY KEY,
  [CustomerID] INT NOT NULL,
  [ConsultantID] INT,
  [QuestionText] NVARCHAR(1000) NOT NULL,
  [AnswerText] NVARCHAR(2000),
  [Status] nvarchar(255) NOT NULL CHECK ([Status] IN ('Pending', 'Answered', 'Closed')) NOT NULL,
  [CreatedAt] DATETIME DEFAULT (GETDATE()),
  [AnsweredAt] DATETIME,
  [IsDeleted] BIT DEFAULT (0)
)
GO

CREATE TABLE [TestingServices] (
  [ServiceID] INT IDENTITY(1,1) PRIMARY KEY,
  [ServiceName] NVARCHAR(100) NOT NULL,
  [Description] NVARCHAR(500),
  [Price] DECIMAL(10,2) NOT NULL,
  [Status] nvarchar(255) NOT NULL CHECK ([Status] IN ('inprogress', 'haveresult')) DEFAULT 'inprogress',
  [CreatedAt] DATETIME DEFAULT (GETDATE()),
  [UpdatedAt] DATETIME DEFAULT (GETDATE()),
  [IsDeleted] BIT DEFAULT (0)
)
GO

CREATE TABLE [TimeSlots] (
  [TimeSlotID] INT IDENTITY(1,1) PRIMARY KEY,
  [SlotNumber] INT NOT NULL,
  [StartTime] TIME NOT NULL,
  [EndTime] TIME NOT NULL,
  [Description] NVARCHAR(100),
  [CreatedAt] DATETIME DEFAULT (GETDATE()),
  [IsDeleted] BIT DEFAULT (0)
)
GO

CREATE TABLE [Bookings] (
  [BookingID] INT IDENTITY(1,1) PRIMARY KEY,
  [CustomerID] INT NOT NULL,
  [ServiceID] INT NOT NULL,
  [BookingDate] DATE NOT NULL,
  [TimeSlotID] INT NOT NULL,
  [Status] nvarchar(255) NOT NULL CHECK ([Status] IN ('Pending', 'Scheduled', 'Completed', 'Cancelled')) NOT NULL,
  [Result] NVARCHAR(500),
  [ResultDate] DATETIME,
  [CreatedAt] DATETIME DEFAULT (GETDATE()),
  [IsDeleted] BIT DEFAULT (0)
)
GO

CREATE TABLE [Payments] (
  [PaymentID] INT IDENTITY(1,1) PRIMARY KEY,
  [CustomerID] INT NOT NULL,
  [BookingID] INT,
  [ConsultationID] INT,
  [Amount] DECIMAL(10,2) NOT NULL,
  [PaymentMethod] nvarchar(255) NOT NULL CHECK ([PaymentMethod] IN ('CreditCard', 'BankTransfer', 'Cash', 'MobilePayment')) NOT NULL,
  [PaymentStatus] nvarchar(255) NOT NULL CHECK ([PaymentStatus] IN ('Pending', 'Completed', 'Failed', 'Refunded')) NOT NULL,
  [TransactionID] NVARCHAR(100),
  [PaymentDate] DATETIME DEFAULT (GETDATE()),
  [CreatedAt] DATETIME DEFAULT (GETDATE()),
  [IsDeleted] BIT DEFAULT (0)
)
GO

CREATE TABLE [Feedback] (
  [FeedbackID] INT IDENTITY(1,1) PRIMARY KEY,
  [CustomerID] INT NOT NULL,
  [ConsultantID] INT,
  [ServiceID] INT,
  [Rating] INT,
  [Comment] NVARCHAR(1000),
  [CreatedAt] DATETIME DEFAULT (GETDATE()),
  [IsDeleted] BIT DEFAULT (0)
)
GO

CREATE TABLE [BlogCategories] (
  [CategoryID] INT IDENTITY(1,1) PRIMARY KEY,
  [CategoryName] NVARCHAR(100) NOT NULL,
  [Description] NVARCHAR(500),
  [CreatedAt] DATETIME DEFAULT (GETDATE()),
  [IsDeleted] BIT DEFAULT (0)
)
GO

CREATE TABLE [BlogPosts] (
  [PostID] INT IDENTITY(1,1) PRIMARY KEY,
  [Title] NVARCHAR(200) NOT NULL,
  [Content] NVARCHAR(MAX) NOT NULL,
  [AuthorID] INT NOT NULL,
  [CategoryID] INT,
  [PublishedAt] DATETIME DEFAULT (GETDATE()),
  [IsPublished] BIT DEFAULT (0),
  [IsDeleted] BIT DEFAULT (0)
)
GO

CREATE TABLE [ReportLogs] (
  [ReportID] INT IDENTITY(1,1) PRIMARY KEY,
  [ReportType] NVARCHAR(50) NOT NULL,
  [GeneratedBy] INT NOT NULL,
  [GeneratedAt] DATETIME DEFAULT (GETDATE()),
  [ReportData] NVARCHAR(MAX),
  [IsDeleted] BIT DEFAULT (0)
)
GO

CREATE TABLE [TransactionHistory] (
  [TransactionID] INT IDENTITY(1,1) PRIMARY KEY,
  [UserID] INT NOT NULL,
  [ServiceID] INT NOT NULL,
  [BookingID] INT NOT NULL,
  [TransactionDate] DATETIME NOT NULL,
  [Status] nvarchar(255) NOT NULL CHECK ([Status] IN ('Scheduled', 'InProgress', 'Completed', 'Cancelled')) NOT NULL,
  [Notes] NVARCHAR(500),
  [CreatedAt] DATETIME DEFAULT (GETDATE()),
  [IsDeleted] BIT DEFAULT (0)
)
GO

CREATE TABLE [ConsultantSchedules] (
  [ScheduleID] INT IDENTITY(1,1) PRIMARY KEY,
  [ConsultantID] INT NOT NULL,
  [ScheduleDate] DATE NOT NULL,
  [TimeSlotID] INT NOT NULL,
  [Status] nvarchar(255) NOT NULL CHECK ([Status] IN ('Available', 'Booked', 'Unavailable')) NOT NULL,
  [Notes] NVARCHAR(500),
  [CreatedAt] DATETIME DEFAULT (GETDATE()),
  [IsDeleted] BIT DEFAULT (0)
)
GO

CREATE INDEX [IX_MenstrualCycles_UserID] ON [MenstrualCycles] ("UserID")
GO

CREATE INDEX [IX_Reminders_UserID] ON [Reminders] ("UserID")
GO

CREATE INDEX [IX_Consultations_CustomerID] ON [Consultations] ("CustomerID")
GO

CREATE INDEX [IX_Consultations_ConsultantID] ON [Consultations] ("ConsultantID")
GO

CREATE INDEX [IX_Questions_CustomerID] ON [Chat] ("CustomerID")
GO

CREATE UNIQUE INDEX [UQ_SlotNumber] ON [TimeSlots] ("SlotNumber")
GO

CREATE INDEX [IX_Bookings_CustomerID] ON [Bookings] ("CustomerID")
GO

CREATE INDEX [IX_Bookings_TimeSlotID] ON [Bookings] ("TimeSlotID")
GO

CREATE INDEX [IX_Payments_CustomerID] ON [Payments] ("CustomerID")
GO

CREATE INDEX [IX_Feedback_CustomerID] ON [Feedback] ("CustomerID")
GO

CREATE INDEX [IX_BlogPosts_AuthorID] ON [BlogPosts] ("AuthorID")
GO

CREATE INDEX [IX_BlogPosts_CategoryID] ON [BlogPosts] ("CategoryID")
GO

CREATE INDEX [IX_TransactionHistory_UserID] ON [TransactionHistory] ("UserID")
GO

CREATE INDEX [IX_TransactionHistory_ServiceID] ON [TransactionHistory] ("ServiceID")
GO

CREATE INDEX [IX_TransactionHistory_BookingID] ON [TransactionHistory] ("BookingID")
GO

CREATE INDEX [IX_ConsultantSchedules_ConsultantID] ON [ConsultantSchedules] ("ConsultantID")
GO

CREATE INDEX [IX_ConsultantSchedules_TimeSlotID] ON [ConsultantSchedules] ("TimeSlotID")
GO

ALTER TABLE [MenstrualCycles] ADD FOREIGN KEY ([UserID]) REFERENCES [Users] ([UserID])
GO

ALTER TABLE [Reminders] ADD FOREIGN KEY ([UserID]) REFERENCES [Users] ([UserID])
GO

ALTER TABLE [Consultants] ADD FOREIGN KEY ([ConsultantID]) REFERENCES [Users] ([UserID])
GO

ALTER TABLE [Consultations] ADD FOREIGN KEY ([CustomerID]) REFERENCES [Users] ([UserID])
GO

ALTER TABLE [Consultations] ADD FOREIGN KEY ([ConsultantID]) REFERENCES [Users] ([UserID])
GO

ALTER TABLE [Chat] ADD FOREIGN KEY ([CustomerID]) REFERENCES [Users] ([UserID])
GO

ALTER TABLE [Chat] ADD FOREIGN KEY ([ConsultantID]) REFERENCES [Users] ([UserID])
GO

ALTER TABLE [Bookings] ADD FOREIGN KEY ([CustomerID]) REFERENCES [Users] ([UserID])
GO

ALTER TABLE [Bookings] ADD FOREIGN KEY ([ServiceID]) REFERENCES [TestingServices] ([ServiceID])
GO

ALTER TABLE [Bookings] ADD FOREIGN KEY ([TimeSlotID]) REFERENCES [TimeSlots] ([TimeSlotID])
GO

ALTER TABLE [Payments] ADD FOREIGN KEY ([CustomerID]) REFERENCES [Users] ([UserID])
GO

ALTER TABLE [Payments] ADD FOREIGN KEY ([BookingID]) REFERENCES [Bookings] ([BookingID])
GO

ALTER TABLE [Payments] ADD FOREIGN KEY ([ConsultationID]) REFERENCES [Consultations] ([ConsultationID])
GO

ALTER TABLE [Feedback] ADD FOREIGN KEY ([CustomerID]) REFERENCES [Users] ([UserID])
GO

ALTER TABLE [Feedback] ADD FOREIGN KEY ([ConsultantID]) REFERENCES [Users] ([UserID])
GO

ALTER TABLE [Feedback] ADD FOREIGN KEY ([ServiceID]) REFERENCES [TestingServices] ([ServiceID])
GO

ALTER TABLE [BlogPosts] ADD FOREIGN KEY ([AuthorID]) REFERENCES [Users] ([UserID])
GO

ALTER TABLE [BlogPosts] ADD FOREIGN KEY ([CategoryID]) REFERENCES [BlogCategories] ([CategoryID])
GO

ALTER TABLE [ReportLogs] ADD FOREIGN KEY ([GeneratedBy]) REFERENCES [Users] ([UserID])
GO

ALTER TABLE [TransactionHistory] ADD FOREIGN KEY ([UserID]) REFERENCES [Users] ([UserID])
GO

ALTER TABLE [TransactionHistory] ADD FOREIGN KEY ([ServiceID]) REFERENCES [TestingServices] ([ServiceID])
GO

ALTER TABLE [TransactionHistory] ADD FOREIGN KEY ([BookingID]) REFERENCES [Bookings] ([BookingID])
GO

ALTER TABLE [ConsultantSchedules] ADD FOREIGN KEY ([ConsultantID]) REFERENCES [Consultants] ([ConsultantID])
GO

ALTER TABLE [ConsultantSchedules] ADD FOREIGN KEY ([TimeSlotID]) REFERENCES [TimeSlots] ([TimeSlotID])
GO
