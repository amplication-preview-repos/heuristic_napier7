import * as graphql from "@nestjs/graphql";
import { LoadResolverBase } from "./base/load.resolver.base";
import { Load } from "./base/Load";
import { LoadService } from "./load.service";

@graphql.Resolver(() => Load)
export class LoadResolver extends LoadResolverBase {
  constructor(protected readonly service: LoadService) {
    super(service);
  }
}
