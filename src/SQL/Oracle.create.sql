



CREATE TABLE "ТЧСоставУщерба"
(

	"primaryKey" RAW(16) NOT NULL,

	"СуммаУщерба" FLOAT(126) NULL,

	"Количество" NUMBER(10) NULL,

	"ВидыУщерба" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ДопУслуги"
(

	"primaryKey" RAW(16) NOT NULL,

	"Услуга" NVARCHAR2(255) NULL,

	"ОписУслуги" NVARCHAR2(255) NULL,

	"Стоимость" FLOAT(126) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Персонал"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"Телефон" NUMBER(10) NULL,

	"Должности" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТЧСоставЖалобы"
(

	"primaryKey" RAW(16) NOT NULL,

	"ОписаниеЖалобы" NVARCHAR2(255) NULL,

	"ПринятыеМеры" NVARCHAR2(255) NULL,

	"Персонал" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Клиенты"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"Телефон" NUMBER(10) NULL,

	"Почта" NVARCHAR2(255) NULL,

	"НомерПаспорта" NUMBER(10) NULL,

	"КемВыдан" NVARCHAR2(255) NULL,

	"ДатаВыдачи" DATE NULL,

	"ИноГражданин" NUMBER(1) NULL,

	"НомерКомнаты" NUMBER(10) NULL,

	"ДатаРождения" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ЖалобаКлиента"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"Номер" NUMBER(10) NULL,

	"Клиенты" RAW(16) NOT NULL,

	"ТЧСоставЖалобы" RAW(16) NOT NULL,

	"Организация" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Должности"
(

	"primaryKey" RAW(16) NOT NULL,

	"IDДолжности" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Организация"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"ЮрАдрес" NVARCHAR2(255) NULL,

	"Телефон" NUMBER(10) NULL,

	"Почта" NVARCHAR2(255) NULL,

	"ИНН" NUMBER(10) NULL,

	"КПП" NUMBER(10) NULL,

	"ОГРН" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТЧПереченьУсл"
(

	"primaryKey" RAW(16) NOT NULL,

	"Количество" NUMBER(10) NULL,

	"Сумма" FLOAT(126) NULL,

	"ДопУслуги" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ВидыУщерба"
(

	"primaryKey" RAW(16) NOT NULL,

	"ВидУщерба" NVARCHAR2(255) NULL,

	"Стоимость" FLOAT(126) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "АктНарушПравил"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"НомерДок" NUMBER(10) NULL,

	"Организация" RAW(16) NOT NULL,

	"Клиенты" RAW(16) NOT NULL,

	"Персонал" RAW(16) NOT NULL,

	"ТЧСоставУщерба" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "КвитДопУслуг"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"НомерКвит" NUMBER(10) NULL,

	"ИтогСтоим" FLOAT(126) NULL,

	"Клиенты" RAW(16) NOT NULL,

	"ТЧПереченьУсл" RAW(16) NOT NULL,

	"Организация" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "ТЧСоставУщерба"
	ADD CONSTRAINT "ТЧСоставУщер_3303" FOREIGN KEY ("ВидыУщерба") REFERENCES "ВидыУщерба" ("primaryKey");

CREATE INDEX "ТЧСоставУщер_5422" on "ТЧСоставУщерба" ("ВидыУщерба");

ALTER TABLE "Персонал"
	ADD CONSTRAINT "Персонал_FДол_5854" FOREIGN KEY ("Должности") REFERENCES "Должности" ("primaryKey");

CREATE INDEX "Персонал_IДол_1959" on "Персонал" ("Должности");

ALTER TABLE "ТЧСоставЖалобы"
	ADD CONSTRAINT "ТЧСоставЖало_9225" FOREIGN KEY ("Персонал") REFERENCES "Персонал" ("primaryKey");

CREATE INDEX "ТЧСоставЖало_2230" on "ТЧСоставЖалобы" ("Персонал");

ALTER TABLE "ЖалобаКлиента"
	ADD CONSTRAINT "ЖалобаКлиент_1890" FOREIGN KEY ("Клиенты") REFERENCES "Клиенты" ("primaryKey");

CREATE INDEX "ЖалобаКлиент_8580" on "ЖалобаКлиента" ("Клиенты");

ALTER TABLE "ЖалобаКлиента"
	ADD CONSTRAINT "ЖалобаКлиента_389" FOREIGN KEY ("ТЧСоставЖалобы") REFERENCES "ТЧСоставЖалобы" ("primaryKey");

CREATE INDEX "ЖалобаКлиент_8505" on "ЖалобаКлиента" ("ТЧСоставЖалобы");

ALTER TABLE "ЖалобаКлиента"
	ADD CONSTRAINT "ЖалобаКлиент_5811" FOREIGN KEY ("Организация") REFERENCES "Организация" ("primaryKey");

CREATE INDEX "ЖалобаКлиент_7512" on "ЖалобаКлиента" ("Организация");

ALTER TABLE "ТЧПереченьУсл"
	ADD CONSTRAINT "ТЧПереченьУс_2521" FOREIGN KEY ("ДопУслуги") REFERENCES "ДопУслуги" ("primaryKey");

CREATE INDEX "ТЧПереченьУс_1253" on "ТЧПереченьУсл" ("ДопУслуги");

ALTER TABLE "АктНарушПравил"
	ADD CONSTRAINT "АктНарушПрав_7134" FOREIGN KEY ("Организация") REFERENCES "Организация" ("primaryKey");

CREATE INDEX "АктНарушПрав_4991" on "АктНарушПравил" ("Организация");

ALTER TABLE "АктНарушПравил"
	ADD CONSTRAINT "АктНарушПрав_6361" FOREIGN KEY ("Клиенты") REFERENCES "Клиенты" ("primaryKey");

CREATE INDEX "АктНарушПрав_3207" on "АктНарушПравил" ("Клиенты");

ALTER TABLE "АктНарушПравил"
	ADD CONSTRAINT "АктНарушПрави_20" FOREIGN KEY ("Персонал") REFERENCES "Персонал" ("primaryKey");

CREATE INDEX "АктНарушПрав_5051" on "АктНарушПравил" ("Персонал");

ALTER TABLE "АктНарушПравил"
	ADD CONSTRAINT "АктНарушПрав_3387" FOREIGN KEY ("ТЧСоставУщерба") REFERENCES "ТЧСоставУщерба" ("primaryKey");

CREATE INDEX "АктНарушПрави_334" on "АктНарушПравил" ("ТЧСоставУщерба");

ALTER TABLE "КвитДопУслуг"
	ADD CONSTRAINT "КвитДопУслуг__7220" FOREIGN KEY ("Клиенты") REFERENCES "Клиенты" ("primaryKey");

CREATE INDEX "КвитДопУслуг__3446" on "КвитДопУслуг" ("Клиенты");

ALTER TABLE "КвитДопУслуг"
	ADD CONSTRAINT "КвитДопУслуг__6324" FOREIGN KEY ("ТЧПереченьУсл") REFERENCES "ТЧПереченьУсл" ("primaryKey");

CREATE INDEX "КвитДопУслуг__1135" on "КвитДопУслуг" ("ТЧПереченьУсл");

ALTER TABLE "КвитДопУслуг"
	ADD CONSTRAINT "КвитДопУслуг__6522" FOREIGN KEY ("Организация") REFERENCES "Организация" ("primaryKey");

CREATE INDEX "КвитДопУслуг__6906" on "КвитДопУслуг" ("Организация");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


