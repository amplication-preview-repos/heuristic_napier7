import { Module } from "@nestjs/common";
import { NegotiationModuleBase } from "./base/negotiation.module.base";
import { NegotiationService } from "./negotiation.service";
import { NegotiationController } from "./negotiation.controller";
import { NegotiationResolver } from "./negotiation.resolver";

@Module({
  imports: [NegotiationModuleBase],
  controllers: [NegotiationController],
  providers: [NegotiationService, NegotiationResolver],
  exports: [NegotiationService],
})
export class NegotiationModule {}
