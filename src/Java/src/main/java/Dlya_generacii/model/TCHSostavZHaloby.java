package Dlya_generacii.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Dlya_generacii.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТЧСоставЖалобы
 */
@Entity(name = "IISDlya_generaciiТЧСоставЖалобы")
@Table(schema = "public", name = "ТЧСоставЖалобы")
public class TCHSostavZHaloby {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ОписаниеЖалобы")
    private String описаниежалобы;

    @Column(name = "ПринятыеМеры")
    private String принятыемеры;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Personal")
    @Convert("Personal")
    @Column(name = "Персонал", length = 16, unique = true, nullable = false)
    private UUID _personalid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Personal", insertable = false, updatable = false)
    private Personal personal;


    public TCHSostavZHaloby() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getОписаниеЖалобы() {
      return описаниежалобы;
    }

    public void setОписаниеЖалобы(String описаниежалобы) {
      this.описаниежалобы = описаниежалобы;
    }

    public String getПринятыеМеры() {
      return принятыемеры;
    }

    public void setПринятыеМеры(String принятыемеры) {
      this.принятыемеры = принятыемеры;
    }


}