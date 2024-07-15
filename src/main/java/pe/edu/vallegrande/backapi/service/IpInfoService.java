package pe.edu.vallegrande.backapi.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import pe.edu.vallegrande.backapi.model.IpInfo;
import pe.edu.vallegrande.backapi.repository.IpInfoRepository;
import reactor.core.publisher.Mono;

@Service
public class IpInfoService {

    private static final Logger logger = LoggerFactory.getLogger(IpInfoService.class);

    @Autowired
    private IpInfoRepository repository;

    @Autowired
    private WebClient.Builder webClientBuilder;

    @Autowired
    private Environment env;

    public Mono<String> getMyIP() {
        logger.info("Getting my IP");
        return webClientBuilder.build()
                .get()
                .uri("https://api.ipify.org?format=json")
                .retrieve()
                .bodyToMono(String.class)
                .doOnError(error -> logger.error("Error getting IP: {}", error.getMessage()));
    }

    public Mono<IpInfo> getIpInfo(String ip) {
        String token = env.getProperty("ipinfo.token");
        logger.info("Getting info for IP: {}", ip);
        return webClientBuilder.build()
                .get()
                .uri(uriBuilder -> uriBuilder
                        .scheme("https")
                        .host("ipinfo.io")
                        .path("/{ip}/json")
                        .queryParam("token", token)
                        .build(ip))
                .retrieve()
                .bodyToMono(IpInfo.class)
                .doOnNext(info -> logger.info("Received info: {}", info))
                .doOnError(error -> logger.error("Error getting info for IP: {}", error.getMessage()))
                .flatMap(info -> {
                    logger.info("Saving info: {}", info);
                    return repository.save(info)
                            .doOnError(saveError -> logger.error("Error saving info: {}", saveError.getMessage()));
                });
    }
}
