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
    /// Виды ущерба.
    /// </summary>
    // *** Start programmer edit section *** (ВидыУщерба CustomAttributes)

    // *** End programmer edit section *** (ВидыУщерба CustomAttributes)
    [AutoAltered()]
    [Caption("Виды ущерба")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ВидыУщербаE", new string[] {
            "ВидУщерба as \'Вид ущерба\'",
            "Стоимость as \'Стоимость\'"})]
    [View("ВидыУщербаL", new string[] {
            "ВидУщерба as \'Вид ущерба\'",
            "Стоимость as \'Стоимость\'"})]
    public class ВидыУщерба : ICSSoft.STORMNET.DataObject
    {
        
        private string fВидУщерба;
        
        private double fСтоимость;
        
        // *** Start programmer edit section *** (ВидыУщерба CustomMembers)

        // *** End programmer edit section *** (ВидыУщерба CustomMembers)

        
        /// <summary>
        /// ВидУщерба.
        /// </summary>
        // *** Start programmer edit section *** (ВидыУщерба.ВидУщерба CustomAttributes)

        // *** End programmer edit section *** (ВидыУщерба.ВидУщерба CustomAttributes)
        [StrLen(255)]
        public virtual string ВидУщерба
        {
            get
            {
                // *** Start programmer edit section *** (ВидыУщерба.ВидУщерба Get start)

                // *** End programmer edit section *** (ВидыУщерба.ВидУщерба Get start)
                string result = this.fВидУщерба;
                // *** Start programmer edit section *** (ВидыУщерба.ВидУщерба Get end)

                // *** End programmer edit section *** (ВидыУщерба.ВидУщерба Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ВидыУщерба.ВидУщерба Set start)

                // *** End programmer edit section *** (ВидыУщерба.ВидУщерба Set start)
                this.fВидУщерба = value;
                // *** Start programmer edit section *** (ВидыУщерба.ВидУщерба Set end)

                // *** End programmer edit section *** (ВидыУщерба.ВидУщерба Set end)
            }
        }
        
        /// <summary>
        /// Стоимость.
        /// </summary>
        // *** Start programmer edit section *** (ВидыУщерба.Стоимость CustomAttributes)

        // *** End programmer edit section *** (ВидыУщерба.Стоимость CustomAttributes)
        public virtual double Стоимость
        {
            get
            {
                // *** Start programmer edit section *** (ВидыУщерба.Стоимость Get start)

                // *** End programmer edit section *** (ВидыУщерба.Стоимость Get start)
                double result = this.fСтоимость;
                // *** Start programmer edit section *** (ВидыУщерба.Стоимость Get end)

                // *** End programmer edit section *** (ВидыУщерба.Стоимость Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ВидыУщерба.Стоимость Set start)

                // *** End programmer edit section *** (ВидыУщерба.Стоимость Set start)
                this.fСтоимость = value;
                // *** Start programmer edit section *** (ВидыУщерба.Стоимость Set end)

                // *** End programmer edit section *** (ВидыУщерба.Стоимость Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ВидыУщербаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ВидыУщербаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ВидыУщербаE", typeof(IIS.Dlya_generacii.ВидыУщерба));
                }
            }
            
            /// <summary>
            /// "ВидыУщербаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ВидыУщербаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ВидыУщербаL", typeof(IIS.Dlya_generacii.ВидыУщерба));
                }
            }
        }
    }
}
