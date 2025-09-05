import { Module } from "@nestjs/common";
import { LoadModuleBase } from "./base/load.module.base";
import { LoadService } from "./load.service";
import { LoadController } from "./load.controller";
import { LoadResolver } from "./load.resolver";

@Module({
  imports: [LoadModuleBase],
  controllers: [LoadController],
  providers: [LoadService, LoadResolver],
  exports: [LoadService],
})
export class LoadModule {}
