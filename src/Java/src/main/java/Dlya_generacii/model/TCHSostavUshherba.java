package Dlya_generacii.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Dlya_generacii.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТЧСоставУщерба
 */
@Entity(name = "IISDlya_generaciiТЧСоставУщерба")
@Table(schema = "public", name = "ТЧСоставУщерба")
public class TCHSostavUshherba {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "СуммаУщерба")
    private Double суммаущерба;

    @Column(name = "Количество")
    private Integer количество;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "VidyUshherba")
    @Convert("VidyUshherba")
    @Column(name = "ВидыУщерба", length = 16, unique = true, nullable = false)
    private UUID _vidyushherbaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "VidyUshherba", insertable = false, updatable = false)
    private VidyUshherba vidyushherba;


    public TCHSostavUshherba() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getСуммаУщерба() {
      return суммаущерба;
    }

    public void setСуммаУщерба(Double суммаущерба) {
      this.суммаущерба = суммаущерба;
    }

    public Integer getКоличество() {
      return количество;
    }

    public void setКоличество(Integer количество) {
      this.количество = количество;
    }


}