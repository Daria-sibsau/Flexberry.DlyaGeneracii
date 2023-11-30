package Dlya_generacii.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Dlya_generacii.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: КвитДопУслуг
 */
@Entity(name = "IISDlya_generaciiКвитДопУслуг")
@Table(schema = "public", name = "КвитДопУслуг")
public class KvitDopUslug {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "НомерКвит")
    private Integer номерквит;

    @Column(name = "ИтогСтоим")
    private Double итогстоим;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klienty")
    @Convert("Klienty")
    @Column(name = "Клиенты", length = 16, unique = true, nullable = false)
    private UUID _klientyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klienty", insertable = false, updatable = false)
    private Klienty klienty;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "TCHPerechenUsl")
    @Convert("TCHPerechenUsl")
    @Column(name = "ТЧПереченьУсл", length = 16, unique = true, nullable = false)
    private UUID _tchperechenuslid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "TCHPerechenUsl", insertable = false, updatable = false)
    private TCHPerechenUsl tchperechenusl;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Organizaciya")
    @Convert("Organizaciya")
    @Column(name = "Организация", length = 16, unique = true, nullable = false)
    private UUID _organizaciyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Organizaciya", insertable = false, updatable = false)
    private Organizaciya organizaciya;


    public KvitDopUslug() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public Integer getНомерКвит() {
      return номерквит;
    }

    public void setНомерКвит(Integer номерквит) {
      this.номерквит = номерквит;
    }

    public Double getИтогСтоим() {
      return итогстоим;
    }

    public void setИтогСтоим(Double итогстоим) {
      this.итогстоим = итогстоим;
    }


}