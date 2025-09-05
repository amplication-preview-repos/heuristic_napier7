import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LoadService } from "./load.service";
import { LoadControllerBase } from "./base/load.controller.base";

@swagger.ApiTags("loads")
@common.Controller("loads")
export class LoadController extends LoadControllerBase {
  constructor(protected readonly service: LoadService) {
    super(service);
  }
}
