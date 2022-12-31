import { InstanceBase } from "@companion-module/base";

export interface InstanceBaseExt<TConfig> extends InstanceBase<TConfig> {
    config: TConfig
}