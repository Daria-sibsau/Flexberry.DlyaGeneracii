



CREATE TABLE [ТЧСоставУщерба] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Количество] INT  NULL,

	 [СуммаУщерба] FLOAT  NULL,

	 [ВидыУщерба] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ДопУслуги] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ОписУслуги] VARCHAR(255)  NULL,

	 [Стоимость] FLOAT  NULL,

	 [Услуга] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Персонал] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Телефон] INT  NULL,

	 [ФИО] VARCHAR(255)  NULL,

	 [Должности] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТЧСоставЖалобы] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ОписаниеЖалобы] VARCHAR(255)  NULL,

	 [ПринятыеМеры] VARCHAR(255)  NULL,

	 [Персонал] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Клиенты] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ДатаВыдачи] DATETIME  NULL,

	 [ДатаРождения] DATETIME  NULL,

	 [ИноГражданин] BIT  NULL,

	 [КемВыдан] VARCHAR(255)  NULL,

	 [НомерКомнаты] INT  NULL,

	 [НомерПаспорта] INT  NULL,

	 [Почта] VARCHAR(255)  NULL,

	 [Телефон] INT  NULL,

	 [ФИО] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ЖалобаКлиента] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Дата] DATETIME  NULL,

	 [Номер] INT  NULL,

	 [Клиенты] UNIQUEIDENTIFIER  NOT NULL,

	 [Организация] UNIQUEIDENTIFIER  NOT NULL,

	 [ТЧСоставЖалобы] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Должности] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [IDДолжности] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Организация] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ИНН] INT  NULL,

	 [КПП] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 [ОГРН] INT  NULL,

	 [Почта] VARCHAR(255)  NULL,

	 [Телефон] INT  NULL,

	 [ЮрАдрес] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТЧПереченьУсл] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Количество] INT  NULL,

	 [Сумма] FLOAT  NULL,

	 [ДопУслуги] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ВидыУщерба] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ВидУщерба] VARCHAR(255)  NULL,

	 [Стоимость] FLOAT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [АктНарушПравил] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Дата] DATETIME  NULL,

	 [НомерДок] INT  NULL,

	 [Клиенты] UNIQUEIDENTIFIER  NOT NULL,

	 [Организация] UNIQUEIDENTIFIER  NOT NULL,

	 [Персонал] UNIQUEIDENTIFIER  NOT NULL,

	 [ТЧСоставУщерба] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [КвитДопУслуг] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Дата] DATETIME  NULL,

	 [ИтогСтоим] FLOAT  NULL,

	 [НомерКвит] INT  NULL,

	 [Клиенты] UNIQUEIDENTIFIER  NOT NULL,

	 [Организация] UNIQUEIDENTIFIER  NOT NULL,

	 [ТЧПереченьУсл] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMNETLOCKDATA] (

	 [LockKey] VARCHAR(300)  NOT NULL,

	 [UserName] VARCHAR(300)  NOT NULL,

	 [LockDate] DATETIME  NULL,

	 PRIMARY KEY ([LockKey]))


CREATE TABLE [STORMSETTINGS] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Module] varchar(1000)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [User] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAdvLimit] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [User] varchar(255)  NULL,

	 [Published] bit  NULL,

	 [Module] varchar(255)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [HotKeyData] int  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERSETTING] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMWEBSEARCH] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [Order] INT  NOT NULL,

	 [PresentView] varchar(255)  NOT NULL,

	 [DetailedView] varchar(255)  NOT NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERDETAIL] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Caption] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 [ConnectMasterProp] varchar(255)  NOT NULL,

	 [OwnerConnectProp] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERLOOKUP] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [DataObjectType] varchar(255)  NOT NULL,

	 [Container] varchar(255)  NULL,

	 [ContainerTag] varchar(255)  NULL,

	 [FieldsToView] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [UserSetting] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [AppName] varchar(256)  NULL,

	 [UserName] varchar(512)  NULL,

	 [UserGuid] uniqueidentifier  NULL,

	 [ModuleName] varchar(1024)  NULL,

	 [ModuleGuid] uniqueidentifier  NULL,

	 [SettName] varchar(256)  NULL,

	 [SettGuid] uniqueidentifier  NULL,

	 [SettLastAccessTime] DATETIME  NULL,

	 [StrVal] varchar(256)  NULL,

	 [TxtVal] varchar(max)  NULL,

	 [IntVal] int  NULL,

	 [BoolVal] bit  NULL,

	 [GuidVal] uniqueidentifier  NULL,

	 [DecimalVal] decimal(20,10)  NULL,

	 [DateTimeVal] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ApplicationLog] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Category] varchar(64)  NULL,

	 [EventId] INT  NULL,

	 [Priority] INT  NULL,

	 [Severity] varchar(32)  NULL,

	 [Title] varchar(256)  NULL,

	 [Timestamp] DATETIME  NULL,

	 [MachineName] varchar(32)  NULL,

	 [AppDomainName] varchar(512)  NULL,

	 [ProcessId] varchar(256)  NULL,

	 [ProcessName] varchar(512)  NULL,

	 [ThreadName] varchar(512)  NULL,

	 [Win32ThreadId] varchar(128)  NULL,

	 [Message] varchar(2500)  NULL,

	 [FormattedMessage] varchar(max)  NULL,

	 PRIMARY KEY ([primaryKey]))




