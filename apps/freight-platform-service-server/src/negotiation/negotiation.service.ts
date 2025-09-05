import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NegotiationServiceBase } from "./base/negotiation.service.base";

@Injectable()
export class NegotiationService extends NegotiationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
