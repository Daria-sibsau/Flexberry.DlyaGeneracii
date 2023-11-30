package Dlya_generacii.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Dlya_generacii.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Организация
 */
@Entity(name = "IISDlya_generaciiОрганизация")
@Table(schema = "public", name = "Организация")
public class Organizaciya {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "ЮрАдрес")
    private String юрадрес;

    @Column(name = "Телефон")
    private Integer телефон;

    @Column(name = "Почта")
    private String почта;

    @Column(name = "ИНН")
    private Integer инн;

    @Column(name = "КПП")
    private Integer кпп;

    @Column(name = "ОГРН")
    private Integer огрн;


    public Organizaciya() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public String getЮрАдрес() {
      return юрадрес;
    }

    public void setЮрАдрес(String юрадрес) {
      this.юрадрес = юрадрес;
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

    public Integer getИНН() {
      return инн;
    }

    public void setИНН(Integer инн) {
      this.инн = инн;
    }

    public Integer getКПП() {
      return кпп;
    }

    public void setКПП(Integer кпп) {
      this.кпп = кпп;
    }

    public Integer getОГРН() {
      return огрн;
    }

    public void setОГРН(Integer огрн) {
      this.огрн = огрн;
    }


}