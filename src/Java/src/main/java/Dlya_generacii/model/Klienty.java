package Dlya_generacii.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Dlya_generacii.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;

/**
 * Entity implementation class for Entity: Клиенты
 */
@Entity(name = "IISDlya_generaciiКлиенты")
@Table(schema = "public", name = "Клиенты")
public class Klienty {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "Телефон")
    private Integer телефон;

    @Column(name = "Почта")
    private String почта;

    @Column(name = "НомерПаспорта")
    private Integer номерпаспорта;

    @Column(name = "КемВыдан")
    private String кемвыдан;

    @Column(name = "ДатаВыдачи")
    private Date датавыдачи;

    @Column(name = "ИноГражданин")
    private Boolean иногражданин;

    @Column(name = "НомерКомнаты")
    private Integer номеркомнаты;

    @Column(name = "ДатаРождения")
    private Date датарождения;


    public Klienty() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public Integer getТелефон() {
      return телефон;
    }

    public void setТелефон(Integer телефон) {
      this.телефон = телефон;
    }

    public String getПочта() {
      return почта;
    }

    public void setПочта(String почта) {
      this.почта = почта;
    }

    public Integer getНомерПаспорта() {
      return номерпаспорта;
    }

    public void setНомерПаспорта(Integer номерпаспорта) {
      this.номерпаспорта = номерпаспорта;
    }

    public String getКемВыдан() {
      return кемвыдан;
    }

    public void setКемВыдан(String кемвыдан) {
      this.кемвыдан = кемвыдан;
    }

    public Date getДатаВыдачи() {
      return датавыдачи;
    }

    public void setДатаВыдачи(Date датавыдачи) {
      this.датавыдачи = датавыдачи;
    }

    public Boolean getИноГражданин() {
      return иногражданин;
    }

    public void setИноГражданин(Boolean иногражданин) {
      this.иногражданин = иногражданин;
    }

    public Integer getНомерКомнаты() {
      return номеркомнаты;
    }

    public void setНомерКомнаты(Integer номеркомнаты) {
      this.номеркомнаты = номеркомнаты;
    }

    public Date getДатаРождения() {
      return датарождения;
    }

    public void setДатаРождения(Date датарождения) {
      this.датарождения = датарождения;
    }


}