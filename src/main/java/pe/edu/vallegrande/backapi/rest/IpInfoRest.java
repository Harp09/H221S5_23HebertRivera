package pe.edu.vallegrande.backapi.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import pe.edu.vallegrande.backapi.model.IpInfo;
import pe.edu.vallegrande.backapi.service.IpInfoService;
import reactor.core.publisher.Mono;

@RestController
public class IpInfoRest {

    private static final Logger logger = LoggerFactory.getLogger(IpInfoRest.class);

    @Autowired
    private IpInfoService service;

    @GetMapping("/myip")
    public Mono<String> getMyIP() {
        logger.info("Received request to get my IP");
        return service.getMyIP();
    }

    @GetMapping("/ipinfo/{ip}")
    public Mono<IpInfo> getIpInfo(@PathVariable String ip) {
        logger.info("Received request to get info for IP: {}", ip);
        return service.getIpInfo(ip);
    }
}
