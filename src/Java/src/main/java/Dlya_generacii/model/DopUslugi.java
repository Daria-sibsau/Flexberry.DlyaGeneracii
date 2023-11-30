package Dlya_generacii.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Dlya_generacii.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ДопУслуги
 */
@Entity(name = "IISDlya_generaciiДопУслуги")
@Table(schema = "public", name = "ДопУслуги")
public class DopUslugi {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Услуга")
    private String услуга;

    @Column(name = "ОписУслуги")
    private String описуслуги;

    @Column(name = "Стоимость")
    private Double стоимость;


    public DopUslugi() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getУслуга() {
      return услуга;
    }

    public void setУслуга(String услуга) {
      this.услуга = услуга;
    }

    public String getОписУслуги() {
      return описуслуги;
    }

    public void setОписУслуги(String описуслуги) {
      this.описуслуги = описуслуги;
    }

    public Double getСтоимость() {
      return стоимость;
    }

    public void setСтоимость(Double стоимость) {
      this.стоимость = стоимость;
    }


}