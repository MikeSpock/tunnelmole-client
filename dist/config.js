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
};
const config = deepmerge(baseConfig, instanceConfig);
if (process.env.TM_CLIENT_ENDPOINT)
    config.hostip.endpoint = process.env.TM_CLIENT_ENDPOINT;
if (process.env.TM_CLIENT_HTTP_ENDPOINT)
    config.hostip.httpEndpoint = process.env.TM_CLIENT_HTTP_ENDPOINT;
if (process.env.TM_CLIENT_PORT)
    config.hostip.port = process.env.TM_CLIENT_PORT;
export default config;
//# sourceMappingURL=config.js.map