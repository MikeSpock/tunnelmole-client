import instanceConfig from "./config-instance.js";
import deepmerge from 'deepmerge';

const baseConfig = {
    hostip: {
        endpoint: "service.tunnelmole.com",
        port: "80"
    },
    runtime: {
        enableLogging: true
    }    
}


const config = deepmerge(baseConfig, instanceConfig);
if(process.env.ENDPOINT) config.hostip.endpoint = process.env.ENDPOINT;
if(process.env.HTTP_ENDPOINT) config.hostip.httpEndpoint = process.env.HTTP_ENDPOINT;
if(process.env.PORT) config.hostip.port = process.env.PORT;

export default config;
