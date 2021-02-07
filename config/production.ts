import { defaultEnv } from "./default";
import { EnviormentConfig, NodeEnvEnum } from "./utils";

export const productionConfig: EnviormentConfig = {
    ...defaultEnv,
    nodeEnv: NodeEnvEnum.production,
    allowedOrigins: `https://my-domain:${defaultEnv.port}`,
    mongoDBName:'deploy-prod',
    mongoPass:'or_1234',
    mongoUser:'or_1234'
}