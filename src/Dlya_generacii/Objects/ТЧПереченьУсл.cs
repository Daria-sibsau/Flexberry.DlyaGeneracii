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
    /// Т ч перечень усл.
    /// </summary>
    // *** Start programmer edit section *** (ТЧПереченьУсл CustomAttributes)

    // *** End programmer edit section *** (ТЧПереченьУсл CustomAttributes)
    [AutoAltered()]
    [Caption("Т ч перечень усл")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТЧПереченьУслE", new string[] {
            "Количество as \'Количество\'",
            "Сумма as \'Сумма\'",
            "ДопУслуги as \'Доп услуги\'",
            "ДопУслуги.Услуга as \'Услуга\'"}, Hidden=new string[] {
            "ДопУслуги.Услуга"})]
    [MasterViewDefineAttribute("ТЧПереченьУслE", "ДопУслуги", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Услуга")]
    [View("ТЧПереченьУслL", new string[] {
            "Количество as \'Количество\'",
            "Сумма as \'Сумма\'",
            "ДопУслуги.Услуга as \'Услуга\'"})]
    public class ТЧПереченьУсл : ICSSoft.STORMNET.DataObject
    {
        
        private int fКоличество;
        
        private double fСумма;
        
        private IIS.Dlya_generacii.ДопУслуги fДопУслуги;
        
        // *** Start programmer edit section *** (ТЧПереченьУсл CustomMembers)

        // *** End programmer edit section *** (ТЧПереченьУсл CustomMembers)

        
        /// <summary>
        /// Количество.
        /// </summary>
        // *** Start programmer edit section *** (ТЧПереченьУсл.Количество CustomAttributes)

        // *** End programmer edit section *** (ТЧПереченьУсл.Количество CustomAttributes)
        public virtual int Количество
        {
            get
            {
                // *** Start programmer edit section *** (ТЧПереченьУсл.Количество Get start)

                // *** End programmer edit section *** (ТЧПереченьУсл.Количество Get start)
                int result = this.fКоличество;
                // *** Start programmer edit section *** (ТЧПереченьУсл.Количество Get end)

                // *** End programmer edit section *** (ТЧПереченьУсл.Количество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧПереченьУсл.Количество Set start)

                // *** End programmer edit section *** (ТЧПереченьУсл.Количество Set start)
                this.fКоличество = value;
                // *** Start programmer edit section *** (ТЧПереченьУсл.Количество Set end)

                // *** End programmer edit section *** (ТЧПереченьУсл.Количество Set end)
            }
        }
        
        /// <summary>
        /// Сумма.
        /// </summary>
        // *** Start programmer edit section *** (ТЧПереченьУсл.Сумма CustomAttributes)

        // *** End programmer edit section *** (ТЧПереченьУсл.Сумма CustomAttributes)
        public virtual double Сумма
        {
            get
            {
                // *** Start programmer edit section *** (ТЧПереченьУсл.Сумма Get start)

                // *** End programmer edit section *** (ТЧПереченьУсл.Сумма Get start)
                double result = this.fСумма;
                // *** Start programmer edit section *** (ТЧПереченьУсл.Сумма Get end)

                // *** End programmer edit section *** (ТЧПереченьУсл.Сумма Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧПереченьУсл.Сумма Set start)

                // *** End programmer edit section *** (ТЧПереченьУсл.Сумма Set start)
                this.fСумма = value;
                // *** Start programmer edit section *** (ТЧПереченьУсл.Сумма Set end)

                // *** End programmer edit section *** (ТЧПереченьУсл.Сумма Set end)
            }
        }
        
        /// <summary>
        /// Т ч перечень усл.
        /// </summary>
        // *** Start programmer edit section *** (ТЧПереченьУсл.ДопУслуги CustomAttributes)

        // *** End programmer edit section *** (ТЧПереченьУсл.ДопУслуги CustomAttributes)
        [PropertyStorage(new string[] {
                "ДопУслуги"})]
        [NotNull()]
        public virtual IIS.Dlya_generacii.ДопУслуги ДопУслуги
        {
            get
            {
                // *** Start programmer edit section *** (ТЧПереченьУсл.ДопУслуги Get start)

                // *** End programmer edit section *** (ТЧПереченьУсл.ДопУслуги Get start)
                IIS.Dlya_generacii.ДопУслуги result = this.fДопУслуги;
                // *** Start programmer edit section *** (ТЧПереченьУсл.ДопУслуги Get end)

                // *** End programmer edit section *** (ТЧПереченьУсл.ДопУслуги Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧПереченьУсл.ДопУслуги Set start)

                // *** End programmer edit section *** (ТЧПереченьУсл.ДопУслуги Set start)
                this.fДопУслуги = value;
                // *** Start programmer edit section *** (ТЧПереченьУсл.ДопУслуги Set end)

                // *** End programmer edit section *** (ТЧПереченьУсл.ДопУслуги Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТЧПереченьУслE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТЧПереченьУслE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТЧПереченьУслE", typeof(IIS.Dlya_generacii.ТЧПереченьУсл));
                }
            }
            
            /// <summary>
            /// "ТЧПереченьУслL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТЧПереченьУслL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТЧПереченьУслL", typeof(IIS.Dlya_generacii.ТЧПереченьУсл));
                }
            }
        }
    }
}
