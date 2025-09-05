import * as graphql from "@nestjs/graphql";
import { NegotiationResolverBase } from "./base/negotiation.resolver.base";
import { Negotiation } from "./base/Negotiation";
import { NegotiationService } from "./negotiation.service";

@graphql.Resolver(() => Negotiation)
export class NegotiationResolver extends NegotiationResolverBase {
  constructor(protected readonly service: NegotiationService) {
    super(service);
  }
}
