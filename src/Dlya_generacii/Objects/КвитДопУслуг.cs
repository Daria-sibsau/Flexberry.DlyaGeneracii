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
    /// Квит доп услуг.
    /// </summary>
    // *** Start programmer edit section *** (КвитДопУслуг CustomAttributes)

    // *** End programmer edit section *** (КвитДопУслуг CustomAttributes)
    [AutoAltered()]
    [Caption("Квит доп услуг")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КвитДопУслугE", new string[] {
            "Дата as \'Дата\'",
            "НомерКвит as \'Номер квит\'",
            "ИтогСтоим as \'Итог стоим\'",
            "Клиенты as \'Клиенты\'",
            "Клиенты.ФИО as \'ФИО\'",
            "ТЧПереченьУсл as \'Т ч перечень усл\'",
            "ТЧПереченьУсл.Количество as \'Количество\'",
            "Организация as \'Организация\'",
            "Организация.Наименование as \'Наименование\'"}, Hidden=new string[] {
            "Клиенты.ФИО",
            "ТЧПереченьУсл.Количество",
            "Организация.Наименование"})]
    [MasterViewDefineAttribute("КвитДопУслугE", "Клиенты", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [MasterViewDefineAttribute("КвитДопУслугE", "ТЧПереченьУсл", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Количество")]
    [MasterViewDefineAttribute("КвитДопУслугE", "Организация", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [View("КвитДопУслугL", new string[] {
            "Дата as \'Дата\'",
            "НомерКвит as \'Номер квит\'",
            "ИтогСтоим as \'Итог стоим\'",
            "Клиенты.ФИО as \'ФИО\'",
            "ТЧПереченьУсл.Количество as \'Количество\'",
            "Организация.Наименование as \'Наименование\'"})]
    public class КвитДопУслуг : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДата;
        
        private int fНомерКвит;
        
        private double fИтогСтоим;
        
        private IIS.Dlya_generacii.Клиенты fКлиенты;
        
        private IIS.Dlya_generacii.ТЧПереченьУсл fТЧПереченьУсл;
        
        private IIS.Dlya_generacii.Организация fОрганизация;
        
        // *** Start programmer edit section *** (КвитДопУслуг CustomMembers)

        // *** End programmer edit section *** (КвитДопУслуг CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (КвитДопУслуг.Дата CustomAttributes)

        // *** End programmer edit section *** (КвитДопУслуг.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (КвитДопУслуг.Дата Get start)

                // *** End programmer edit section *** (КвитДопУслуг.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (КвитДопУслуг.Дата Get end)

                // *** End programmer edit section *** (КвитДопУслуг.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (КвитДопУслуг.Дата Set start)

                // *** End programmer edit section *** (КвитДопУслуг.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (КвитДопУслуг.Дата Set end)

                // *** End programmer edit section *** (КвитДопУслуг.Дата Set end)
            }
        }
        
        /// <summary>
        /// ИтогСтоим.
        /// </summary>
        // *** Start programmer edit section *** (КвитДопУслуг.ИтогСтоим CustomAttributes)

        // *** End programmer edit section *** (КвитДопУслуг.ИтогСтоим CustomAttributes)
        public virtual double ИтогСтоим
        {
            get
            {
                // *** Start programmer edit section *** (КвитДопУслуг.ИтогСтоим Get start)

                // *** End programmer edit section *** (КвитДопУслуг.ИтогСтоим Get start)
                double result = this.fИтогСтоим;
                // *** Start programmer edit section *** (КвитДопУслуг.ИтогСтоим Get end)

                // *** End programmer edit section *** (КвитДопУслуг.ИтогСтоим Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (КвитДопУслуг.ИтогСтоим Set start)

                // *** End programmer edit section *** (КвитДопУслуг.ИтогСтоим Set start)
                this.fИтогСтоим = value;
                // *** Start programmer edit section *** (КвитДопУслуг.ИтогСтоим Set end)

                // *** End programmer edit section *** (КвитДопУслуг.ИтогСтоим Set end)
            }
        }
        
        /// <summary>
        /// НомерКвит.
        /// </summary>
        // *** Start programmer edit section *** (КвитДопУслуг.НомерКвит CustomAttributes)

        // *** End programmer edit section *** (КвитДопУслуг.НомерКвит CustomAttributes)
        public virtual int НомерКвит
        {
            get
            {
                // *** Start programmer edit section *** (КвитДопУслуг.НомерКвит Get start)

                // *** End programmer edit section *** (КвитДопУслуг.НомерКвит Get start)
                int result = this.fНомерКвит;
                // *** Start programmer edit section *** (КвитДопУслуг.НомерКвит Get end)

                // *** End programmer edit section *** (КвитДопУслуг.НомерКвит Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (КвитДопУслуг.НомерКвит Set start)

                // *** End programmer edit section *** (КвитДопУслуг.НомерКвит Set start)
                this.fНомерКвит = value;
                // *** Start programmer edit section *** (КвитДопУслуг.НомерКвит Set end)

                // *** End programmer edit section *** (КвитДопУслуг.НомерКвит Set end)
            }
        }
        
        /// <summary>
        /// Квит доп услуг.
        /// </summary>
        // *** Start programmer edit section *** (КвитДопУслуг.Клиенты CustomAttributes)

        // *** End programmer edit section *** (КвитДопУслуг.Клиенты CustomAttributes)
        [PropertyStorage(new string[] {
                "Клиенты"})]
        [NotNull()]
        public virtual IIS.Dlya_generacii.Клиенты Клиенты
        {
            get
            {
                // *** Start programmer edit section *** (КвитДопУслуг.Клиенты Get start)

                // *** End programmer edit section *** (КвитДопУслуг.Клиенты Get start)
                IIS.Dlya_generacii.Клиенты result = this.fКлиенты;
                // *** Start programmer edit section *** (КвитДопУслуг.Клиенты Get end)

                // *** End programmer edit section *** (КвитДопУслуг.Клиенты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (КвитДопУслуг.Клиенты Set start)

                // *** End programmer edit section *** (КвитДопУслуг.Клиенты Set start)
                this.fКлиенты = value;
                // *** Start programmer edit section *** (КвитДопУслуг.Клиенты Set end)

                // *** End programmer edit section *** (КвитДопУслуг.Клиенты Set end)
            }
        }
        
        /// <summary>
        /// Квит доп услуг.
        /// </summary>
        // *** Start programmer edit section *** (КвитДопУслуг.Организация CustomAttributes)

        // *** End programmer edit section *** (КвитДопУслуг.Организация CustomAttributes)
        [PropertyStorage(new string[] {
                "Организация"})]
        [NotNull()]
        public virtual IIS.Dlya_generacii.Организация Организация
        {
            get
            {
                // *** Start programmer edit section *** (КвитДопУслуг.Организация Get start)

                // *** End programmer edit section *** (КвитДопУслуг.Организация Get start)
                IIS.Dlya_generacii.Организация result = this.fОрганизация;
                // *** Start programmer edit section *** (КвитДопУслуг.Организация Get end)

                // *** End programmer edit section *** (КвитДопУслуг.Организация Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (КвитДопУслуг.Организация Set start)

                // *** End programmer edit section *** (КвитДопУслуг.Организация Set start)
                this.fОрганизация = value;
                // *** Start programmer edit section *** (КвитДопУслуг.Организация Set end)

                // *** End programmer edit section *** (КвитДопУслуг.Организация Set end)
            }
        }
        
        /// <summary>
        /// Квит доп услуг.
        /// </summary>
        // *** Start programmer edit section *** (КвитДопУслуг.ТЧПереченьУсл CustomAttributes)

        // *** End programmer edit section *** (КвитДопУслуг.ТЧПереченьУсл CustomAttributes)
        [PropertyStorage(new string[] {
                "ТЧПереченьУсл"})]
        [NotNull()]
        public virtual IIS.Dlya_generacii.ТЧПереченьУсл ТЧПереченьУсл
        {
            get
            {
                // *** Start programmer edit section *** (КвитДопУслуг.ТЧПереченьУсл Get start)

                // *** End programmer edit section *** (КвитДопУслуг.ТЧПереченьУсл Get start)
                IIS.Dlya_generacii.ТЧПереченьУсл result = this.fТЧПереченьУсл;
                // *** Start programmer edit section *** (КвитДопУслуг.ТЧПереченьУсл Get end)

                // *** End programmer edit section *** (КвитДопУслуг.ТЧПереченьУсл Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (КвитДопУслуг.ТЧПереченьУсл Set start)

                // *** End programmer edit section *** (КвитДопУслуг.ТЧПереченьУсл Set start)
                this.fТЧПереченьУсл = value;
                // *** Start programmer edit section *** (КвитДопУслуг.ТЧПереченьУсл Set end)

                // *** End programmer edit section *** (КвитДопУслуг.ТЧПереченьУсл Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КвитДопУслугE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КвитДопУслугE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КвитДопУслугE", typeof(IIS.Dlya_generacii.КвитДопУслуг));
                }
            }
            
            /// <summary>
            /// "КвитДопУслугL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КвитДопУслугL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КвитДопУслугL", typeof(IIS.Dlya_generacii.КвитДопУслуг));
                }
            }
        }
    }
}
