import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NegotiationService } from "./negotiation.service";
import { NegotiationControllerBase } from "./base/negotiation.controller.base";

@swagger.ApiTags("negotiations")
@common.Controller("negotiations")
export class NegotiationController extends NegotiationControllerBase {
  constructor(protected readonly service: NegotiationService) {
    super(service);
  }
}
