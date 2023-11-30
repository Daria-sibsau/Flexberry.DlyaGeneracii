




CREATE TABLE ТЧСоставУщерба (
 primaryKey UUID NOT NULL,
 СуммаУщерба DOUBLE PRECISION NULL,
 Количество INT NULL,
 ВидыУщерба UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ДопУслуги (
 primaryKey UUID NOT NULL,
 Услуга VARCHAR(255) NULL,
 ОписУслуги VARCHAR(255) NULL,
 Стоимость DOUBLE PRECISION NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Персонал (
 primaryKey UUID NOT NULL,
 ФИО VARCHAR(255) NULL,
 Телефон INT NULL,
 Должности UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТЧСоставЖалобы (
 primaryKey UUID NOT NULL,
 ОписаниеЖалобы VARCHAR(255) NULL,
 ПринятыеМеры VARCHAR(255) NULL,
 Персонал UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Клиенты (
 primaryKey UUID NOT NULL,
 ФИО VARCHAR(255) NULL,
 Телефон INT NULL,
 Почта VARCHAR(255) NULL,
 НомерПаспорта INT NULL,
 КемВыдан VARCHAR(255) NULL,
 ДатаВыдачи TIMESTAMP(3) NULL,
 ИноГражданин BOOLEAN NULL,
 НомерКомнаты INT NULL,
 ДатаРождения TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ЖалобаКлиента (
 primaryKey UUID NOT NULL,
 Дата TIMESTAMP(3) NULL,
 Номер INT NULL,
 Клиенты UUID NOT NULL,
 ТЧСоставЖалобы UUID NOT NULL,
 Организация UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Должности (
 primaryKey UUID NOT NULL,
 IDДолжности INT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Организация (
 primaryKey UUID NOT NULL,
 Наименование VARCHAR(255) NULL,
 ЮрАдрес VARCHAR(255) NULL,
 Телефон INT NULL,
 Почта VARCHAR(255) NULL,
 ИНН INT NULL,
 КПП INT NULL,
 ОГРН INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТЧПереченьУсл (
 primaryKey UUID NOT NULL,
 Количество INT NULL,
 Сумма DOUBLE PRECISION NULL,
 ДопУслуги UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ВидыУщерба (
 primaryKey UUID NOT NULL,
 ВидУщерба VARCHAR(255) NULL,
 Стоимость DOUBLE PRECISION NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE АктНарушПравил (
 primaryKey UUID NOT NULL,
 Дата TIMESTAMP(3) NULL,
 НомерДок INT NULL,
 Организация UUID NOT NULL,
 Клиенты UUID NOT NULL,
 Персонал UUID NOT NULL,
 ТЧСоставУщерба UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE КвитДопУслуг (
 primaryKey UUID NOT NULL,
 Дата TIMESTAMP(3) NULL,
 НомерКвит INT NULL,
 ИтогСтоим DOUBLE PRECISION NULL,
 Клиенты UUID NOT NULL,
 ТЧПереченьУсл UUID NOT NULL,
 Организация UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE ТЧСоставУщерба ADD CONSTRAINT FKa9ab7e7d1a352dcf07a695c3a87d28991ab31612 FOREIGN KEY (ВидыУщерба) REFERENCES ВидыУщерба; 
CREATE INDEX Indexa9ab7e7d1a352dcf07a695c3a87d28991ab31612 on ТЧСоставУщерба (ВидыУщерба); 

 ALTER TABLE Персонал ADD CONSTRAINT FK20483ffaca49581badeade018a121c50ee7c35a1 FOREIGN KEY (Должности) REFERENCES Должности; 
CREATE INDEX Index20483ffaca49581badeade018a121c50ee7c35a1 on Персонал (Должности); 

 ALTER TABLE ТЧСоставЖалобы ADD CONSTRAINT FK1e07f6e586ec535147e8cd03a2cd7fd384f801c6 FOREIGN KEY (Персонал) REFERENCES Персонал; 
CREATE INDEX Index1e07f6e586ec535147e8cd03a2cd7fd384f801c6 on ТЧСоставЖалобы (Персонал); 

 ALTER TABLE ЖалобаКлиента ADD CONSTRAINT FKcafff9d914e702cd3fa6ea82641eba9880c93b9a FOREIGN KEY (Клиенты) REFERENCES Клиенты; 
CREATE INDEX Indexcafff9d914e702cd3fa6ea82641eba9880c93b9a on ЖалобаКлиента (Клиенты); 

 ALTER TABLE ЖалобаКлиента ADD CONSTRAINT FK260e2cd49f4e3dfa0ab14a61cc9f5737f7fb2496 FOREIGN KEY (ТЧСоставЖалобы) REFERENCES ТЧСоставЖалобы; 
CREATE INDEX Index260e2cd49f4e3dfa0ab14a61cc9f5737f7fb2496 on ЖалобаКлиента (ТЧСоставЖалобы); 

 ALTER TABLE ЖалобаКлиента ADD CONSTRAINT FK27a2b8a7b505465bcf5bf46a21e997bb2a85c1ba FOREIGN KEY (Организация) REFERENCES Организация; 
CREATE INDEX Index27a2b8a7b505465bcf5bf46a21e997bb2a85c1ba on ЖалобаКлиента (Организация); 

 ALTER TABLE ТЧПереченьУсл ADD CONSTRAINT FK5b0a27a80c24bb1e4e1f46f56a3728d3b7f254f1 FOREIGN KEY (ДопУслуги) REFERENCES ДопУслуги; 
CREATE INDEX Index5b0a27a80c24bb1e4e1f46f56a3728d3b7f254f1 on ТЧПереченьУсл (ДопУслуги); 

 ALTER TABLE АктНарушПравил ADD CONSTRAINT FK5a4f6ec13835e6cba3e44016bd0dfec556d3ba37 FOREIGN KEY (Организация) REFERENCES Организация; 
CREATE INDEX Index5a4f6ec13835e6cba3e44016bd0dfec556d3ba37 on АктНарушПравил (Организация); 

 ALTER TABLE АктНарушПравил ADD CONSTRAINT FKc182130587c081776dce39c13acc870ce453f3fe FOREIGN KEY (Клиенты) REFERENCES Клиенты; 
CREATE INDEX Indexc182130587c081776dce39c13acc870ce453f3fe on АктНарушПравил (Клиенты); 

 ALTER TABLE АктНарушПравил ADD CONSTRAINT FKf3712d5986446aa2b7ad780f2fdf9d7f1a2237f1 FOREIGN KEY (Персонал) REFERENCES Персонал; 
CREATE INDEX Indexf3712d5986446aa2b7ad780f2fdf9d7f1a2237f1 on АктНарушПравил (Персонал); 

 ALTER TABLE АктНарушПравил ADD CONSTRAINT FKa93646e2bd1cc1085ae242c120f2fa70c5b5c538 FOREIGN KEY (ТЧСоставУщерба) REFERENCES ТЧСоставУщерба; 
CREATE INDEX Indexa93646e2bd1cc1085ae242c120f2fa70c5b5c538 on АктНарушПравил (ТЧСоставУщерба); 

 ALTER TABLE КвитДопУслуг ADD CONSTRAINT FK774b8671ebd8a3c6aa9d0cc42ae787a7ae862ce3 FOREIGN KEY (Клиенты) REFERENCES Клиенты; 
CREATE INDEX Index774b8671ebd8a3c6aa9d0cc42ae787a7ae862ce3 on КвитДопУслуг (Клиенты); 

 ALTER TABLE КвитДопУслуг ADD CONSTRAINT FK08c6ba9b289423dcef6dec575f8fffef84350821 FOREIGN KEY (ТЧПереченьУсл) REFERENCES ТЧПереченьУсл; 
CREATE INDEX Index08c6ba9b289423dcef6dec575f8fffef84350821 on КвитДопУслуг (ТЧПереченьУсл); 

 ALTER TABLE КвитДопУслуг ADD CONSTRAINT FK17a2863624328d1909dff22bc2cbd345c23a759c FOREIGN KEY (Организация) REFERENCES Организация; 
CREATE INDEX Index17a2863624328d1909dff22bc2cbd345c23a759c on КвитДопУслуг (Организация); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

