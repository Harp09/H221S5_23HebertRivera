package pe.edu.vallegrande.backapi.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import pe.edu.vallegrande.backapi.model.IpInfo;

public interface IpInfoRepository extends ReactiveMongoRepository<IpInfo, String> {
}