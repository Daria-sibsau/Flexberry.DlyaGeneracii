﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Dlya_generacii
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Клиенты.
    /// </summary>
    // *** Start programmer edit section *** (Клиенты CustomAttributes)

    // *** End programmer edit section *** (Клиенты CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КлиентыE", new string[] {
            "ФИО as \'ФИО\'",
            "Телефон as \'Телефон\'",
            "Почта as \'Почта\'",
            "НомерПаспорта as \'Номер паспорта\'",
            "КемВыдан as \'Кем выдан\'",
            "ДатаВыдачи as \'Дата выдачи\'",
            "ИноГражданин as \'Ино гражданин\'",
            "НомерКомнаты as \'Номер комнаты\'",
            "ДатаРождения as \'Дата рождения\'"})]
    [View("КлиентыL", new string[] {
            "ФИО as \'ФИО\'",
            "Телефон as \'Телефон\'",
            "Почта as \'Почта\'",
            "НомерПаспорта as \'Номер паспорта\'",
            "КемВыдан as \'Кем выдан\'",
            "ДатаВыдачи as \'Дата выдачи\'",
            "ИноГражданин as \'Ино гражданин\'",
            "НомерКомнаты as \'Номер комнаты\'",
            "ДатаРождения as \'Дата рождения\'"})]
    public class Клиенты : ICSSoft.STORMNET.DataObject
    {
        
        private string fФИО;
        
        private int fТелефон;
        
        private string fПочта;
        
        private int fНомерПаспорта;
        
        private string fКемВыдан;
        
        private System.DateTime fДатаВыдачи;
        
        private bool fИноГражданин;
        
        private int fНомерКомнаты;
        
        private System.DateTime fДатаРождения;
        
        // *** Start programmer edit section *** (Клиенты CustomMembers)

        // *** End programmer edit section *** (Клиенты CustomMembers)

        
        /// <summary>
        /// ДатаВыдачи.
        /// </summary>
        // *** Start programmer edit section *** (Клиенты.ДатаВыдачи CustomAttributes)

        // *** End programmer edit section *** (Клиенты.ДатаВыдачи CustomAttributes)
        public virtual System.DateTime ДатаВыдачи
        {
            get
            {
                // *** Start programmer edit section *** (Клиенты.ДатаВыдачи Get start)

                // *** End programmer edit section *** (Клиенты.ДатаВыдачи Get start)
                System.DateTime result = this.fДатаВыдачи;
                // *** Start programmer edit section *** (Клиенты.ДатаВыдачи Get end)

                // *** End programmer edit section *** (Клиенты.ДатаВыдачи Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиенты.ДатаВыдачи Set start)

                // *** End programmer edit section *** (Клиенты.ДатаВыдачи Set start)
                this.fДатаВыдачи = value;
                // *** Start programmer edit section *** (Клиенты.ДатаВыдачи Set end)

                // *** End programmer edit section *** (Клиенты.ДатаВыдачи Set end)
            }
        }
        
        /// <summary>
        /// ДатаРождения.
        /// </summary>
        // *** Start programmer edit section *** (Клиенты.ДатаРождения CustomAttributes)

        // *** End programmer edit section *** (Клиенты.ДатаРождения CustomAttributes)
        public virtual System.DateTime ДатаРождения
        {
            get
            {
                // *** Start programmer edit section *** (Клиенты.ДатаРождения Get start)

                // *** End programmer edit section *** (Клиенты.ДатаРождения Get start)
                System.DateTime result = this.fДатаРождения;
                // *** Start programmer edit section *** (Клиенты.ДатаРождения Get end)

                // *** End programmer edit section *** (Клиенты.ДатаРождения Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиенты.ДатаРождения Set start)

                // *** End programmer edit section *** (Клиенты.ДатаРождения Set start)
                this.fДатаРождения = value;
                // *** Start programmer edit section *** (Клиенты.ДатаРождения Set end)

                // *** End programmer edit section *** (Клиенты.ДатаРождения Set end)
            }
        }
        
        /// <summary>
        /// ИноГражданин.
        /// </summary>
        // *** Start programmer edit section *** (Клиенты.ИноГражданин CustomAttributes)

        // *** End programmer edit section *** (Клиенты.ИноГражданин CustomAttributes)
        public virtual bool ИноГражданин
        {
            get
            {
                // *** Start programmer edit section *** (Клиенты.ИноГражданин Get start)

                // *** End programmer edit section *** (Клиенты.ИноГражданин Get start)
                bool result = this.fИноГражданин;
                // *** Start programmer edit section *** (Клиенты.ИноГражданин Get end)

                // *** End programmer edit section *** (Клиенты.ИноГражданин Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиенты.ИноГражданин Set start)

                // *** End programmer edit section *** (Клиенты.ИноГражданин Set start)
                this.fИноГражданин = value;
                // *** Start programmer edit section *** (Клиенты.ИноГражданин Set end)

                // *** End programmer edit section *** (Клиенты.ИноГражданин Set end)
            }
        }
        
        /// <summary>
        /// КемВыдан.
        /// </summary>
        // *** Start programmer edit section *** (Клиенты.КемВыдан CustomAttributes)

        // *** End programmer edit section *** (Клиенты.КемВыдан CustomAttributes)
        [StrLen(255)]
        public virtual string КемВыдан
        {
            get
            {
                // *** Start programmer edit section *** (Клиенты.КемВыдан Get start)

                // *** End programmer edit section *** (Клиенты.КемВыдан Get start)
                string result = this.fКемВыдан;
                // *** Start programmer edit section *** (Клиенты.КемВыдан Get end)

                // *** End programmer edit section *** (Клиенты.КемВыдан Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиенты.КемВыдан Set start)

                // *** End programmer edit section *** (Клиенты.КемВыдан Set start)
                this.fКемВыдан = value;
                // *** Start programmer edit section *** (Клиенты.КемВыдан Set end)

                // *** End programmer edit section *** (Клиенты.КемВыдан Set end)
            }
        }
        
        /// <summary>
        /// НомерКомнаты.
        /// </summary>
        // *** Start programmer edit section *** (Клиенты.НомерКомнаты CustomAttributes)

        // *** End programmer edit section *** (Клиенты.НомерКомнаты CustomAttributes)
        public virtual int НомерКомнаты
        {
            get
            {
                // *** Start programmer edit section *** (Клиенты.НомерКомнаты Get start)

                // *** End programmer edit section *** (Клиенты.НомерКомнаты Get start)
                int result = this.fНомерКомнаты;
                // *** Start programmer edit section *** (Клиенты.НомерКомнаты Get end)

                // *** End programmer edit section *** (Клиенты.НомерКомнаты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиенты.НомерКомнаты Set start)

                // *** End programmer edit section *** (Клиенты.НомерКомнаты Set start)
                this.fНомерКомнаты = value;
                // *** Start programmer edit section *** (Клиенты.НомерКомнаты Set end)

                // *** End programmer edit section *** (Клиенты.НомерКомнаты Set end)
            }
        }
        
        /// <summary>
        /// НомерПаспорта.
        /// </summary>
        // *** Start programmer edit section *** (Клиенты.НомерПаспорта CustomAttributes)

        // *** End programmer edit section *** (Клиенты.НомерПаспорта CustomAttributes)
        public virtual int НомерПаспорта
        {
            get
            {
                // *** Start programmer edit section *** (Клиенты.НомерПаспорта Get start)

                // *** End programmer edit section *** (Клиенты.НомерПаспорта Get start)
                int result = this.fНомерПаспорта;
                // *** Start programmer edit section *** (Клиенты.НомерПаспорта Get end)

                // *** End programmer edit section *** (Клиенты.НомерПаспорта Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиенты.НомерПаспорта Set start)

                // *** End programmer edit section *** (Клиенты.НомерПаспорта Set start)
                this.fНомерПаспорта = value;
                // *** Start programmer edit section *** (Клиенты.НомерПаспорта Set end)

                // *** End programmer edit section *** (Клиенты.НомерПаспорта Set end)
            }
        }
        
        /// <summary>
        /// Почта.
        /// </summary>
        // *** Start programmer edit section *** (Клиенты.Почта CustomAttributes)

        // *** End programmer edit section *** (Клиенты.Почта CustomAttributes)
        [StrLen(255)]
        public virtual string Почта
        {
            get
            {
                // *** Start programmer edit section *** (Клиенты.Почта Get start)

                // *** End programmer edit section *** (Клиенты.Почта Get start)
                string result = this.fПочта;
                // *** Start programmer edit section *** (Клиенты.Почта Get end)

                // *** End programmer edit section *** (Клиенты.Почта Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиенты.Почта Set start)

                // *** End programmer edit section *** (Клиенты.Почта Set start)
                this.fПочта = value;
                // *** Start programmer edit section *** (Клиенты.Почта Set end)

                // *** End programmer edit section *** (Клиенты.Почта Set end)
            }
        }
        
        /// <summary>
        /// Телефон.
        /// </summary>
        // *** Start programmer edit section *** (Клиенты.Телефон CustomAttributes)

        // *** End programmer edit section *** (Клиенты.Телефон CustomAttributes)
        public virtual int Телефон
        {
            get
            {
                // *** Start programmer edit section *** (Клиенты.Телефон Get start)

                // *** End programmer edit section *** (Клиенты.Телефон Get start)
                int result = this.fТелефон;
                // *** Start programmer edit section *** (Клиенты.Телефон Get end)

                // *** End programmer edit section *** (Клиенты.Телефон Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиенты.Телефон Set start)

                // *** End programmer edit section *** (Клиенты.Телефон Set start)
                this.fТелефон = value;
                // *** Start programmer edit section *** (Клиенты.Телефон Set end)

                // *** End programmer edit section *** (Клиенты.Телефон Set end)
            }
        }
        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (Клиенты.ФИО CustomAttributes)

        // *** End programmer edit section *** (Клиенты.ФИО CustomAttributes)
        [StrLen(255)]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (Клиенты.ФИО Get start)

                // *** End programmer edit section *** (Клиенты.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (Клиенты.ФИО Get end)

                // *** End programmer edit section *** (Клиенты.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиенты.ФИО Set start)

                // *** End programmer edit section *** (Клиенты.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (Клиенты.ФИО Set end)

                // *** End programmer edit section *** (Клиенты.ФИО Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КлиентыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлиентыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлиентыE", typeof(IIS.Dlya_generacii.Клиенты));
                }
            }
            
            /// <summary>
            /// "КлиентыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлиентыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлиентыL", typeof(IIS.Dlya_generacii.Клиенты));
                }
            }
        }
    }
}
