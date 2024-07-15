package pe.edu.vallegrande.backapi.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "ipinfo")
@Data
@NoArgsConstructor
public class IpInfo {

        @Id
        private String id;

        private String ip;
        private String city;
        private String region;
        private String country;
        private String loc;
        private String org;
        private String postal;
        private String timezone;
}
