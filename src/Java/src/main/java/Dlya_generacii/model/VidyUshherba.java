package Dlya_generacii.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Dlya_generacii.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ВидыУщерба
 */
@Entity(name = "IISDlya_generaciiВидыУщерба")
@Table(schema = "public", name = "ВидыУщерба")
public class VidyUshherba {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ВидУщерба")
    private String видущерба;

    @Column(name = "Стоимость")
    private Double стоимость;


    public VidyUshherba() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getВидУщерба() {
      return видущерба;
    }

    public void setВидУщерба(String видущерба) {
      this.видущерба = видущерба;
    }

    public Double getСтоимость() {
      return стоимость;
    }

    public void setСтоимость(Double стоимость) {
      this.стоимость = стоимость;
    }


}